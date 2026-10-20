import { useState, useEffect, useCallback } from 'react';

// תמיד עובדים על אותו אלמנט (document.documentElement) ועם תמיכה גם ב-webkit
const getFsElement = () =>
  document.fullscreenElement || document.webkitFullscreenElement || null;

export function enterFullscreen() {
  if (getFsElement()) return;
  const el = document.documentElement;
  const request = el.requestFullscreen || el.webkitRequestFullscreen;
  try {
    const result = request?.call(el);
    result?.catch?.((err) => console.warn('Fullscreen failed:', err));
  } catch (err) {
    console.warn('Fullscreen failed:', err);
  }
}

export function exitFullscreen() {
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  try {
    const result = exit?.call(document);
    result?.catch?.(() => {});
  } catch {
    /* ignore */
  }
}

export function toggleFullscreen() {
  if (getFsElement()) exitFullscreen();
  else enterFullscreen();
}

export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(!!getFsElement());

  useEffect(() => {
    const sync = () => setIsFullscreen(!!getFsElement());
    document.addEventListener('fullscreenchange', sync);
    document.addEventListener('webkitfullscreenchange', sync);
    return () => {
      document.removeEventListener('fullscreenchange', sync);
      document.removeEventListener('webkitfullscreenchange', sync);
    };
  }, []);

  const toggle = useCallback(() => toggleFullscreen(), []);
  return { isFullscreen, toggle };
}
