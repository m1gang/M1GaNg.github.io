// Actividad de GitHub (contribuciones del último año) para el calendario de Home.
// Mismo endpoint que usaba react-github-calendar, con caché de TanStack Query.
export const GITHUB_ACTIVITY_URL =
  "https://github-contributions-api.jogruber.de/v4/";

export const fetchGithubActivity = async (username) => {
  const response = await fetch(
    `${GITHUB_ACTIVITY_URL}${username}?y=last&client=opencode-portfolio`,
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error || "No se pudo cargar la actividad de GitHub");
  }
  return data.contributions.map(({ date, count, level }) => ({
    date,
    count,
    level,
  }));
};
