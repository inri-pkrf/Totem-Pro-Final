import { img } from '@/assets';
import { useState } from 'react';
import AiPopup from '../components/totem/AiPopup';

const BUTTONS = [
  { label: 'אתר המכללה', icon: img('icon1.png'), url: 'https://inri.orc.org.il/' },
  { label: 'הספרייה הלאומית לחירום', icon: img('icon2.png'), url: 'https://inri.orc.org.il/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%94-%D7%94%D7%9C%D7%90%D7%95%D7%9E%D7%99%D7%AA-%D7%9C%D7%97%D7%99%D7%A8%D7%95%D7%9D/' },
  { label: 'הכשרות למשרדי הממשלה', icon: img('icon3-4.png'), url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%95%D7%9E%D7%A0%D7%94%D7%9C%D7%95%D7%AA-%D7%91%D7%9E%D7%A9%D7%A8%D7%93%D7%99-%D7%9E%D7%9E%D7%A9%D7%9C%D7%94-%D7%95%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%99%D7%99%D7%A2%D7%95%D7%93%D7%99%D7%95%D7%AA/' },
  { label: 'הכשרות לרשויות המקומיות', icon: img('icon3-4.png'), url: 'https://inri.orc.org.il/%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%9E%D7%9B%D7%9C%D7%9C%D7%94/%D7%94%D7%9B%D7%A9%D7%A8%D7%AA-%D7%9E%D7%A0%D7%94%D7%9C%D7%99%D7%9D-%D7%91%D7%A8%D7%A9%D7%95%D7%99%D7%95%D7%AA-%D7%9E%D7%A7%D7%95%D7%9E%D7%99%D7%95%D7%AA/' },
  { label: 'עזר לניהול מצבי חירום', icon: img('icon5.png'), url: 'https://inri-pkrf.github.io/assessment2026/' },
  { label: 'מאגר מצבי חירום', icon: img('icon6.png'), url: 'https://emergency-reserve.vercel.app/' }
];

const CIRCLE_IMG = img('circle-icon.png');

const MORE_PRODUCTS_BTN = { label: 'מוצרים דיגיטליים', icon: img('icon5.png') };

function TotemButton({ btn, onClick }) {
  return (
    <button
      onClick={() => onClick(btn)}
      className="flex items-center rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-150 w-full"
      style={{
        background: 'linear-gradient(to right, #003A57, #007FBD)',
        padding: '0.8vh 3%',
        gap: '2%',
        boxShadow: '0 6px 20px rgba(0, 58, 87, 0.55), 0 2px 8px rgba(0,0,0,0.3)'
      }}>
      <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: '4vh', height: '4vh', minWidth: '28px', minHeight: '28px' }}>
        <img src={CIRCLE_IMG} alt="" className="absolute inset-0 w-full h-full object-contain" />
        <img src={btn.icon} alt="" style={{ width: '55%', height: '55%' }} className="object-contain relative z-10" />
      </div>
      <span className="flex-1 text-white font-assistant font-medium text-center" style={{ fontSize: 'clamp(1.2rem, 5vh, 2rem)', paddingLeft: '8%' }}>
        {btn.label}
      </span>
    </button>
  );
}

export default function Home({ onNavigateToVideo, onNavigateHome, showMoreProducts, setShowMoreProducts }) {
  const [showAiPopup, setShowAiPopup] = useState(false);

  const handleButtonClick = (btn) => {
    if (btn.url) {
      window.open(btn.url, '_blank');
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url(${img('bg-pic.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        
      }}
      dir="rtl">

      {/* Title */}
      <div className="px-[5%] text-center z-10 flex-shrink-0" style={{ marginTop: 'clamp(30px, 10vh, 70px)' }}>
        <h1 className="font-karantina text-white font-normal drop-shadow-lg leading-none"
          style={{ fontSize: 'clamp(2rem, 7vh, 7.5rem)' }}>
          ברוכים הבאים והבאות
        </h1>
        <h2 className="font-karantina text-white font-normal drop-shadow-lg leading-none"
          style={{ fontSize: 'clamp(1.5rem, 5.5vh, 6.5rem)', marginTop: '0.5vh' }}>
          למכללה הלאומית לאיתנות ישראלית
        </h2>
      </div>

      {/* White card */}
      <div
        className="flex-1 z-10 min-h-0 flex justify-center items-center px-[8%]"
        style={{ marginTop: '2vh', marginBottom: 'clamp(50px, 15vh, 160px)' }}>
        <div
          className="bg-white/90 backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden relative w-full pt-[4.5vh] pb-[6vh]"
          style={{ borderRadius: '11vh' }}>

          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[30%] pointer-events-none opacity-70">
            <img src={img('orange.png')} alt="" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[30%] pointer-events-none opacity-70">
            <img src={img('blue.png')} alt="" className="w-full" />
          </div>

          {/* Card header: logo */}
          <div className="flex justify-center items-center flex-shrink-0 relative z-10" style={{ padding: '1vh 10%' }}>
            <img
              src={img('logo.png')}
              alt="Logo"
              style={{ height: 'clamp(70px, 14vh, 110px)' }}
              className="object-contain" />
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col items-center z-10 w-[75%] mx-auto"
            style={{ gap: '1.6vh', padding: '0.5vh 0 2.5vh' }}
            dir="rtl">

            {BUTTONS.slice(0, 4).map((btn, i) => (
              <TotemButton key={i} btn={btn} onClick={handleButtonClick} />
            ))}

            <TotemButton btn={MORE_PRODUCTS_BTN} onClick={() => setShowMoreProducts(true)} />

            <TotemButton btn={BUTTONS[5]} onClick={handleButtonClick} />
          </div>
        </div>
      </div>

      {/* AI character */}
      <div className="absolute z-20" style={{ bottom: '0.5vh', left: '2%' }}>
        <button
          onClick={() => setShowAiPopup(!showAiPopup)}
          style={{ width: 'clamp(55px, 9vh, 100px)', height: 'clamp(55px, 9vh, 100px)' }}>
          <img src={img('ai-btn.png')} alt="AI" className="w-full h-full object-cover" />
        </button>
        {showAiPopup && <AiPopup isOpen={showAiPopup} onClose={() => setShowAiPopup(false)} />}
      </div>

      {/* Bottom center image */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center" style={{ bottom: '6%' }}>
        <img
          src={img('text-pic.png')}
          alt=""
          style={{ height: 'clamp(40px, 12vh, 100px)' }}
          className="object-contain" />
      </div>
    </div>
  );
}