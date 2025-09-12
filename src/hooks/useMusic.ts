import { useRef, useState, useEffect, useCallback } from "react";

export function useMusic(src: string, { loop = true } = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

useEffect(() => {
  const audio = new Audio(src);
  audio.loop = loop;
 audio.volume = 0;
  audioRef.current = audio;

  // 🔊 Prime audio silently
  audio.muted = true;
  audio.play().catch(() => {});

  return () => {
    audio.pause();
    audioRef.current = null;
  };
}, [src, loop]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => {
          setPlaying(false);
          console.error("Audio play failed:", err);
        });
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, []);

  const unmuteAndPlay = useCallback(() => {
  if (audioRef.current) {
    audioRef.current.muted = false;
    audioRef.current.play();
    setPlaying(true);
  }
}, []);

  const toggle = useCallback(() => {
    playing ? pause() : play();
  }, [playing, play, pause]);

  return { playing, play, pause, toggle ,unmuteAndPlay};
}
