// Calendario de contribuciones de GitHub sobre TanStack Query.
// Sustituye a react-github-calendar con el mismo tema y labels (ver data/home.js).
import { useQuery } from "@tanstack/react-query";
import { ActivityCalendar } from "react-activity-calendar";
import { fetchGithubActivity } from "../lib/github";

export const useGitHubActivity = (username) => {
  const query = useQuery({
    queryKey: ["github", "activity", username],
    queryFn: () => fetchGithubActivity(username),
    staleTime: 60 * 60 * 1000, // 1 h: las contribuciones cambian a diario
    gcTime: 2 * 60 * 60 * 1000, // 2 h en caché
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return {
    data: query.data ?? [],
    isPending: query.isPending,
    isError: query.isError,
  };
};

export { ActivityCalendar };
