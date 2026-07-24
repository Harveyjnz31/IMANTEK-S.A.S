import { useEffect, useRef, useState } from 'react';
import BrandLogo from '../components/BrandLogo';

export default function SplashScreen() {
  const [progress, setProgress] = useState(8);
  const [visible, setVisible] = useState(true);
  const [finishing, setFinishing] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const loadedRef = useRef(document.readyState === 'complete');

  useEffect(() => {
    const finish = () => {
      loadedRef.current = true;
      setProgress(100);
      setFinishing(true);
      window.setTimeout(() => setVisible(false), 650);
    };

    const handleLoad = () => window.setTimeout(finish, 450);
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (loadedRef.current) return Math.min(current + 18, 100);
        if (current < 55) return current + 5;
        if (current < 82) return current + 3;
        return Math.min(current + 1, 94);
      });
    }, 140);

    if (loadedRef.current) {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && !finishing) {
      setFinishing(true);
      window.setTimeout(() => setVisible(false), 650);
    }
  }, [finishing, progress]);

  if (!visible) return null;

  const complete = Math.round(progress);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#071019] px-6 text-white transition-opacity duration-500 ${
        finishing ? 'opacity-0' : 'opacity-100'
      }`}
      onPointerMove={(event) => {
        setPointer({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      }}
      onPointerDown={() => setProgress(100)}
      role="status"
      aria-live="polite"
      aria-label={`Cargando ${complete}%`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(0,159,227,0.22), transparent 30%), linear-gradient(135deg, #071019 0%, #1a1a1a 52%, #050b16 100%)`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#009fe3] to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative flex w-full max-w-[520px] flex-col items-center text-center">
        <div className="mb-8 flex h-28 w-28 items-center justify-center border border-white/15 bg-white/[0.03] shadow-[0_0_60px_rgba(0,159,227,0.18)]">
          <BrandLogo className="text-3xl" />
        </div>

        <p
          className="mb-4 text-xs uppercase tracking-[2px] text-[#009fe3]"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Cargando plataforma t&eacute;cnica
        </p>

        <div className="mb-3 flex w-full items-end justify-between gap-4">
          <span
            className="text-left text-sm uppercase tracking-[1.5px] text-white/70"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Inicializando sitio
          </span>
          <span
            className="text-right text-2xl font-semibold tabular-nums text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {complete}%
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden border border-white/15 bg-white/10">
          <div
            className="h-full bg-[#009fe3] transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
