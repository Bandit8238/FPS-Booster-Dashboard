import { useEffect, useRef, useState } from "react";

export function useFpsCpu(optimized) {
  const [fps, setFps] = useState(0);
  const [cpu, setCpu] = useState(0);

  const frames = useRef(0);
  const last = useRef(performance.now());

  useEffect(() => {
    const loop = (t) => {
      frames.current++;

      const delta = t - last.current;

      if (delta >= 1000) {
        setFps(frames.current);
        frames.current = 0;
        last.current = t;

        let base = Math.random() * 40 + 30;
        if (optimized) base -= 15;

        setCpu(Math.max(5, Math.round(base)));
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [optimized]);

  return { fps, cpu };
}
