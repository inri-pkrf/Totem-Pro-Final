import { img } from '@/assets';
import React from 'react';

export default function NavButtons({ onNavigateToVideo, onNavigateHome }) {
  return (
    <div className="fixed z-[60] flex items-center gap-3" style={{ bottom: '2%', right: '4%' }}>
      <button
        onClick={onNavigateToVideo}
        style={{ width: 'clamp(55px, 8vw, 85px)', height: 'clamp(55px, 8vw, 85px)', backgroundColor: 'rgba(247, 179, 124, 0.9)' }}
        className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <img src={img('video-btn.png')} alt="וידאו" className="w-[70%] h-[70%] object-cover" />
      </button>
      <button
        onClick={onNavigateHome}
        style={{ width: 'clamp(55px, 8vw, 85px)', height: 'clamp(55px, 8vw, 85px)', backgroundColor: 'rgba(247, 179, 124, 0.9)' }}
        className="rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <img src={img('home-btn.png')} alt="בית" className="w-[70%] h-[70%] object-cover" />
      </button>
    </div>
  );
}