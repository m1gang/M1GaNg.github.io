// Genera public/contributions.json con el calendario completo de GitHub
// (contribuciones públicas + privadas) usando la API GraphQL.
//
// - Se ejecuta solo en CI (deploy.yml) con el PAT del repo en
//   secrets.CONTRIBUTIONS_TOKEN. El token NUNCA se escribe en archivos
//   publicados: el JSON solo lleva conteos anónimos por día, igual que los
//   que GitHub ya muestra en tu perfil con "Include private contributions".
// - Si falta el token o la consulta falla, sale con código 0 para no romper
//   el deploy: el frontend cae al endpoint público de jogruber.
import { mkdir, writeFile } from "node:fs/promises";

const TOKEN = process.env.CONTRIBUTIONS_TOKEN;
const LOGIN = process.env.CONTRIBUTIONS_LOGIN ?? "M1GaNg";
const OUTPUT = new URL("../public/contributions.json", import.meta.url);

// Paletas de GitHub (tema claro + oscuro) → nivel 0-4 de react-activity-calendar.
const LEVEL_BY_COLOR = new Map([
  ["#ebedf0", 0], ["#9be9a8", 1], ["#40c463", 2], ["#30a14e", 3], ["#216e39", 4],
  ["#161b22", 0], ["#0e4429", 1], ["#006d32", 2], ["#26a641", 3], ["#39d353", 4],
]);

const QUERY = /* GraphQL */ `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

if (!TOKEN) {
  console.warn(
    "CONTRIBUTIONS_TOKEN no está definido: se omite contributions.json.",
  );
  process.exit(0);
}

try {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      authorization: `Bearer ${TOKEN}`,
      "content-type": "application/json",
      accept: "application/vnd.github+json",
      "user-agent": "m1gang-portfolio-actions",
    },
    body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
  });

  const { data, errors } = await response.json();

  if (!response.ok || errors?.length) {
    throw new Error(errors?.[0]?.message ?? `HTTP ${response.status}`);
  }

  const days = data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week) => week.contributionDays)
    .map(({ date, contributionCount, color }) => ({
      date,
      count: contributionCount,
      level: LEVEL_BY_COLOR.get(color) ?? (contributionCount === 0 ? 0 : 1),
    }));

  const total = days.reduce((sum, day) => sum + day.count, 0);
  await mkdir(new URL("../public/", import.meta.url), { recursive: true });
  await writeFile(
    OUTPUT,
    `${JSON.stringify({
      generatedAt: new Date().toISOString(),
      login: LOGIN,
      contributions: days,
    })}\n`,
  );
  console.log(
    `contributions.json OK: ${days.length} días, ${total} contribuciones.`,
  );
} catch (error) {
  console.warn(
    `::warning::contributions.json no se generó (${error.message}); el frontend usará el endpoint público.`,
  );
  process.exit(0);
}
