import { useCallback, useEffect, useRef, useState } from "react";

// Preview de audio (MP3 de 30s de Deezer). Para al cambiar de canción.
export const usePreviewAudio = (song) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [song]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !song?.preview) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [song]);

  return { audioRef, isPlaying, togglePlay };
};
