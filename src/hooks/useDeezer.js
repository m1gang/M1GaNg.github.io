import { useEffect, useState } from "react";
import {
  SONG_QUERIES,
  SONG_FALLBACK,
  ARTIST_QUERIES,
  ARTIST_FALLBACK,
} from "../constants/favoriteSongs";

// ─── JSONP mínimo (Deezer no envía cabeceras CORS) ────────────────────────────
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

const formatDuration = (secs) => {
  if (!secs && secs !== 0) return "--:--";
  const m = Math.floor(secs / 60);
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
};

// ─── Canciones: carátula cuadrada + metadata + preview de 30s ────────────────
export const useDeezerSongs = () => {
  const [songs, setSongs] = useState(SONG_FALLBACK);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      SONG_QUERIES.map((entry) =>
        jsonp(
          `https://api.deezer.com/search?q=${encodeURIComponent(entry.query)}&limit=1`
        )
          .then((data) => {
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
          })
          .catch(() => ({
            ...entry,
            duration: "--:--",
            cover: null,
            preview: null,
            link: null,
          }))
      )
    )
      .then((results) => {
        if (cancelled) return;
        setSongs(results);
        setStatus(results.some((r) => r.cover) ? "ready" : "error");
      })
      .catch(() => {
        if (cancelled) return;
        setSongs(SONG_FALLBACK);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { songs, status };
};

// ─── Artistas: foto cuadrada (500x500) por id fijo ───────────────────────────
export const useDeezerArtists = () => {
  const [artists, setArtists] = useState(ARTIST_FALLBACK);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      ARTIST_QUERIES.map((entry) =>
        jsonp(`https://api.deezer.com/artist/${entry.id}`)
          .then((data) => ({
            name: data?.name || entry.name,
            picture: data?.picture_big || data?.picture_medium || null,
            link: data?.link || null,
          }))
          .catch(() => ({ name: entry.name, picture: null, link: null }))
      )
    )
      .then((results) => {
        if (cancelled) return;
        setArtists(results);
        setStatus(results.some((r) => r.picture) ? "ready" : "error");
      })
      .catch(() => {
        if (cancelled) return;
        setArtists(ARTIST_FALLBACK);
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { artists, status };
};
