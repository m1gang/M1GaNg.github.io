// ─── Datos de la sección "Sobre Mí" (música) ─────────────────────────────────
// Canciones y artistas favoritos. Solo se guardan las *queries* de búsqueda:
// la carátula cuadrada, metadata y preview de audio se obtienen en runtime
// desde la API pública de Deezer (sin API key, vía JSONP).
// Para agregar/quitar una canción: edita `SONG_QUERIES` abajo.

export const SONG_QUERIES = [
  { query: "dreams fleetwood mac", title: "Dreams", artist: "Fleetwood Mac" },
  { query: "vino en mi jeringa cuarteto de nos", title: "Vino en Mi Jeringa", artist: "El Cuarteto de Nos" },
  { query: "like a stone audioslave", title: "Like a Stone", artist: "Audioslave" },
  { query: "the unknowing jfarrari", title: "The Unknowing", artist: "Jfarrari" },
  { query: "loser tame impala", title: "Loser", artist: "Tame Impala" },
  { query: "algo del vacio wos", title: "Algo del Vacío", artist: "Wos" },
];

// Artistas favoritos. `id` fija el perfil exacto de Deezer (evita homónimos).
// Virus = banda argentina de rock (id 15338825).
export const ARTIST_QUERIES = [
  { id: 15376, query: "cuarteto de nos", name: "El Cuarteto de Nos" },
  { id: 15338825, query: "Virus", name: "Virus" },
  { id: 134790, query: "tame impala", name: "Tame Impala" },
  { id: 10010270, query: "wos", name: "Wos" },
];

// Fallback estático (si Deezer no responde, la card sigue viéndose completa).
export const SONG_FALLBACK = [
  { title: "Dreams", artist: "Fleetwood Mac", album: "Rumours", duration: "4:17", cover: null, preview: null, link: null },
  { title: "Vino en Mi Jeringa", artist: "El Cuarteto de Nos", album: "El Cuarteto de Nos", duration: "3:25", cover: null, preview: null, link: null },
  { title: "Like a Stone", artist: "Audioslave", album: "Audioslave", duration: "4:54", cover: null, preview: null, link: null },
  { title: "The Unknowing", artist: "Jfarrari", album: "Jfarrari", duration: "3:30", cover: null, preview: null, link: null },
  { title: "Loser", artist: "Tame Impala", album: "Deadbeat", duration: "3:55", cover: null, preview: null, link: null },
  { title: "Algo del Vacío", artist: "Wos", album: "Algo del Vacío", duration: "3:15", cover: null, preview: null, link: null },
];

export const ARTIST_FALLBACK = [
  { name: "El Cuarteto de Nos", picture: null },
  { name: "Virus", picture: null },
  { name: "Tame Impala", picture: null },
  { name: "Wos", picture: null },
];

