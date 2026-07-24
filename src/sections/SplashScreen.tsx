import { useEffect, useRef, useState } from 'react';
import BrandLogo from '../components/BrandLogo';

export default function SplashScreen() {
  const [progress, setProgress] = useState(8);
  const [visible, setVisible] = useState(true);
  const [finishing, setFinishing] = useState(false);
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

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#050606] px-6 text-white transition-opacity duration-500 ${
        finishing ? 'opacity-0' : 'opacity-100'
      }`}
      onPointerDown={() => setProgress(100)}
      role="status"
      aria-live="polite"
      aria-label="Cargando"
    >
      <div className="flex w-full max-w-[150px] flex-col items-center sm:max-w-[180px]">
        <BrandLogo
          className="mb-7 text-[2rem] sm:text-[2.35rem]"
        />

        <div className="h-[3px] w-[120px] overflow-hidden bg-white/10 sm:w-[150px]">
          <div
            className="h-full bg-[#009fe3] transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
