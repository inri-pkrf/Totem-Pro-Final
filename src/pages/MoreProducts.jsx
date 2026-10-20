import { img } from '@/assets';
import React from 'react';
import FullscreenButton from '../components/totem/FullscreenButton';
const DIGITAL_PRODUCTS = [
  { title: 'סקר איומים', subtitle: 'שאלת סקר לבחירת האיום המרכזי על הארגון שלי', icon: img('products/threat-survey.png'), url: 'https://threat-survey-58n9.vercel.app/' },
  { title: 'הצגת המכללה', subtitle: 'לומדת היכרות מעמיקה עם המכללה ומרכיביה השונים', icon: img('products/college-intro.png'), url: 'https://inri-pkrf.github.io/taz-michlala/' },
  { title: 'מצפן החלטות', subtitle: 'כלי עזר לקביעת מדיניות התגוננות לאוכלוסייה', icon: img('products/decision-compass.png'), url: 'https://inri-pkrf.github.io/shelter-compass/' },
];

const GAMES = [
  { title: 'גלגל העורף', subtitle: 'גלגל מזלות אינטראקטיבי על החברה הישראלית', icon: img('products/wheel.png'), url: 'https://inri-pkrf.github.io/wheel-game/' },
  { title: 'התאמת לוגואים', subtitle: 'התאמת לוגואים וסמלים אינטראקטיבית', icon: img('products/logos.png'), url: 'https://logo-game-murex.vercel.app' },
  { title: 'מבצע ציוד', subtitle: 'חילוץ והצלה - התאמת הציוד למצב', icon: img('products/equipment.png'), url: 'https://inri-pkrf.github.io/Equipment-Game-/' },
  { title: 'משחק הזיכרון', subtitle: 'אימון זיכרון באמצעות כרטיסי התאמה', icon: img('products/memory.png'), url: 'https://memory-shield-game.vercel.app' },
  { title: 'טריוויה התגוננות', subtitle: 'טריוויה אינטראקטיבית על מדיניות ההתגוננות', icon: img('products/trivia.png'), url: 'https://defend-smart-ready.base44.app' },
  { title: 'לוח המדיניות', subtitle: 'תחרות בין קבוצות בנושא מדיניות ההתגוננות', icon: img('products/fate-board.png'), url: 'https://defend-policy-board-with-firebase.vercel.app/' },
  { title: 'אמת או מיתוס', subtitle: 'בדיקת עובדות על מדיניות ההתגוננות', icon: img('products/myth.png'), url: 'https://fact-myth-game.vercel.app' },
  { title: 'דגים הנחיות', subtitle: 'איסוף הנחיות התגוננות מהים', icon: img('products/fish.png'), url: 'https://fish-game-plum.vercel.app/' },

];


function ProductCard({ product }) {
  return (
    <button
      onClick={() => product.url && window.open(product.url, '_blank')}
      className="product-card relative flex flex-col items-center justify-center text-center rounded-[45px] transition-all duration-200 active:scale-95 overflow-hidden group aspect-square w-full"
      style={{
        padding: '1vh 6%',
        gap: '0.5vh',
        background: 'linear-gradient(160deg, var(--card-grad-from), var(--card-grad-to))',
        boxShadow: '0 8px 22px rgba(0,58,87,0.28), 0 5px 6px rgba(0,0,0,0.18), inset -4px -4px 0 rgba(0, 0, 0, 0.18)'
      }}
    >
      <div className="pointer-events-none absolute" style={{ top: '-30%', right: '-15%', width: '75%', height: '75%', borderRadius: '9999px', background: 'radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)' }} />
      <img
        src={product.icon}
        alt={product.title}
        onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
        className="object-contain transition-transform duration-200 group-active:scale-105"
        style={{ width: 'clamp(60px, 9.75vh, 114px)', height: 'clamp(60px, 9.75vh, 114px)' }}
      />
      <h3 className="font-assistant font-bold text-white leading-tight" style={{ fontSize: 'clamp(1.5rem, 1.8vh, 1.5rem)' }}>
        {product.title}
      </h3>
      <p className="font-assistant text-white/80 leading-tight" style={{ fontSize: 'clamp(1.25rem, 1.5vh, 1.25rem)' }}>
        {product.subtitle}
      </p>
    </button>
  );
}

function ProductSection({ title, products, style }) {
  return (
    <div
      className="rounded-2xl flex flex-col"
      style={{ ...style, padding: '1vh 1.5%' }}
    >
      <h2 className="font-karantina text-[#003A57] font-normal text-center leading-none" style={{ fontSize: 'clamp(2.2rem, 5vh, 4.4rem)', marginBottom: '0.8vh' }}>
        {title}
      </h2>
      <div
        className="grid w-full mx-auto"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1vh 1%',
          maxWidth: '1100px'
        }}
      >
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function MoreProducts({ onBack, onOpenCarousel }) {
  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex flex-col bg-white"
      dir="rtl">

      {/* Decorations */}
      <div className="absolute top-0 left-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src={img('decor/deco-top.png')} alt="" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-[20%] pointer-events-none opacity-40 z-0">
        <img src={img('decor/deco-bottom.png')} alt="" className="w-full" style={{ transform: 'rotate(180deg)' }} />
      </div>

      {/* Header: logo + back */}
      <div className="flex justify-between items-center absolute top-0 inset-x-0 z-30" style={{ padding: '1.2vh 4%' }}>
        <img
          src={img('logo.png')}
          alt="Logo"
          style={{ height: 'clamp(40px, 6vh, 70px)' }}
          className="object-contain" />
        <FullscreenButton
          className="bg-white/40 hover:bg-white/50 shadow-lg"
          style={{ width: 'clamp(45px, 6vh, 65px)', height: 'clamp(45px, 6vh, 65px)', color: '#003A57' }}
        />
      </div>

      {/* Title */}
      <div className="text-center z-20 absolute top-0 inset-x-0 pointer-events-none" style={{ marginTop: '9vh' }}>
        <h1 className="font-karantina text-[#003A57] font-normal leading-none"
          style={{ fontSize: 'clamp(2.7rem, 7.5vh, 7.5rem)' }}>
          עוד מוצרים דיגיטליים
        </h1>
      </div>

      {/* Products - fits screen, no scroll */}
      <div className="flex-1 min-h-0 relative z-10 flex flex-col justify-center overflow-hidden" style={{ padding: '1vh 3% 1.5vh', gap: '1.5vh' }}>
        <ProductSection
          title="מוצרים דיגיטליים"
          products={DIGITAL_PRODUCTS}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 126, 189, 0.03), rgba(0, 58, 87, 0.02))',
            border: '2px dashed rgba(0,58,87,0.12)',
            '--card-grad-from': '#003A57',
            '--card-grad-to': '#007FBD',
          }}
        />
        <ProductSection
          title="משחקים"
          products={GAMES}
          style={{
            background: 'linear-gradient(135deg, rgba(0, 126, 189, 0.03), rgba(0, 58, 87, 0.02))',
            border: '2px dashed rgba(0,58,87,0.12)',
            '--card-grad-from': '#0f9268ff',
            '--card-grad-to': '#38B38C',
          }}
        />
      </div>

    </div>
  );
}