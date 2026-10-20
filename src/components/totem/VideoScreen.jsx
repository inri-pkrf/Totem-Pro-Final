import React, { useRef, useEffect } from 'react';
import { video } from '@/assets';
export default function VideoScreen({ onEnded, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isActive]);

  const videoUrl = video('4k.mp4');

  return (
    <div
      className={`absolute inset-0 z-50 transition-opacity duration-200 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        muted
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}