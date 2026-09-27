// Acceso a la API de Deezer (JSONP, sin CORS) + mapeo a los modelos de UI.
// Funciones puras asíncronas: las consume `useDeezer` a través de TanStack Query.
import {
  SONG_QUERIES,
  SONG_FALLBACK,
  ARTIST_QUERIES,
  ARTIST_FALLBACK,
} from "../constants/favoriteSongs";

let cbCounter = 0;

const jsonp = (url, timeout = 9000) =>
  new Promise((resolve, reject) => {
    const cbName = `__dz_cb_${++cbCounter}`;
    const script = document.createElement("script");

    const cleanup = () => {
      clearTimeout(timer);
      delete window[cbName];
      script.remove();
    };

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error("Deezer: timeout"));
    }, timeout);

    window[cbName] = (data) => {
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Deezer: network error"));
    };

    script.src = `${url}${url.includes("?") ? "&" : "?"}output=jsonp&callback=${cbName}`;
    document.head.appendChild(script);
  });

export const formatDuration = (secs) => {
  if (!secs && secs !== 0) return "--:--";
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
};

// Canciones: carátula cuadrada + metadata + preview de 30s.
export const fetchSongs = async () => {
  const results = await Promise.all(
    SONG_QUERIES.map(async (entry) => {
      try {
        const data = await jsonp(
          `https://api.deezer.com/search?q=${encodeURIComponent(entry.query)}&limit=1`,
        );
        const hit = data?.data?.[0];
        if (!hit) return { ...entry, cover: null, preview: null, link: null };
        return {
          title: hit.title_short || hit.title,
          artist: hit.artist?.name || entry.artist,
          album: hit.album?.title || "",
          duration: formatDuration(hit.duration),
          // cover_big = 500x500 (cuadrada)
          cover: hit.album?.cover_big || hit.album?.cover_medium || null,
          preview: hit.preview || null, // MP3 de 30s
          link: hit.link || null,
        };
      } catch {
        return {
          ...entry,
          duration: "--:--",
          cover: null,
          preview: null,
          link: null,
        };
      }
    }),
  );
  return results;
};

// Artistas: foto cuadrada (500x500) por id fijo.
export const fetchArtists = async () => {
  const results = await Promise.all(
    ARTIST_QUERIES.map(async (entry) => {
      try {
        const data = await jsonp(`https://api.deezer.com/artist/${entry.id}`);
        return {
          name: data?.name || entry.name,
          picture: data?.picture_big || data?.picture_medium || null,
          link: data?.link || null,
        };
      } catch {
        return { name: entry.name, picture: null, link: null };
      }
    }),
  );
  return results;
};

export const DEEZER_FALLBACK = {
  songs: SONG_FALLBACK,
  artists: ARTIST_FALLBACK,
};
