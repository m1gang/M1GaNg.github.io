// Hooks de datos de Deezer sobre TanStack Query.
// Mantienen la misma firma que la versión anterior ({ data, status }) para no
// tocar a los consumidores (SongCarouselCard, ProfileAbout).
import { useQuery } from "@tanstack/react-query";
import { DEEZER_FALLBACK, fetchArtists, fetchSongs } from "../lib/deezer";

const DEEZER_OPTIONS = {
  staleTime: 10 * 60 * 1000, // 10 min: la metadata de canciones no cambia
  gcTime: 30 * 60 * 1000, // 30 min en caché
  retry: 1,
  refetchOnWindowFocus: false,
};

const toStatus = (queryState) => {
  if (queryState.isPending) return "loading";
  if (queryState.isError) return "error";
  return "ready";
};

export const useDeezerSongs = () => {
  const query = useQuery({
    queryKey: ["deezer", "songs"],
    queryFn: fetchSongs,
    ...DEEZER_OPTIONS,
  });

  return {
    songs: query.data ?? DEEZER_FALLBACK.songs,
    status: toStatus(query),
  };
};

export const useDeezerArtists = () => {
  const query = useQuery({
    queryKey: ["deezer", "artists"],
    queryFn: fetchArtists,
    ...DEEZER_OPTIONS,
  });

  return {
    artists: query.data ?? DEEZER_FALLBACK.artists,
    status: toStatus(query),
  };
};
