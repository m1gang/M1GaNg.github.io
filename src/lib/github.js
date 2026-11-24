// Actividad de GitHub (contribuciones del último año) para el calendario de Home.
// Primero intenta contributions.json, generado en CI con el PAT del repo e
// incluye las contribuciones privadas (solo conteos anónimos, igual que los
// que GitHub publica en tu perfil). Si no existe (dev local o paso omitido),
// cae al endpoint público de jogruber: solo datos públicos, como antes.
export const GITHUB_ACTIVITY_URL =
  "https://github-contributions-api.jogruber.de/v4/";

const fetchGeneratedContributions = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}contributions.json`,
    );
    if (!response.ok) return null;
    const data = await response.json();
    return Array.isArray(data.contributions) ? data.contributions : null;
  } catch {
    return null;
  }
};

export const fetchGithubActivity = async (username) => {
  const generated = await fetchGeneratedContributions();
  if (generated) return generated;

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
