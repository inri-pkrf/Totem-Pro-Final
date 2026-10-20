import React from 'react';
import { Maximize, Minimize } from 'lucide-react';
import { useFullscreen } from '@/hooks/useFullscreen';

export default function FullscreenButton({ className, style, iconSize = 'clamp(1.2rem, 3vh, 2rem)' }) {
  const { isFullscreen, toggle } = useFullscreen();
  const Icon = isFullscreen ? Minimize : Maximize;

  return (
    <button
      type="button"
      data-fullscreen-toggle
      onClick={(e) => {
        e.stopPropagation();
        toggle();
      }}
      className={`flex items-center justify-center rounded-full transition-transform hover:scale-110 ${className || ''}`}
      style={style}
      title={isFullscreen ? 'יציאה ממסך מלא' : 'מסך מלא'}
    >
      <Icon style={{ width: iconSize, height: iconSize }} />
    </button>
  );
}
