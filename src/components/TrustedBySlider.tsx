import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, MapPin, Package } from 'lucide-react';

interface Partner {
  name: string;
  sub: string;
  city: string;
  packaging: string;
  instagram: string;
  themeColor: string;
  badgeBg: string;
  renderLogo: () => React.ReactNode;
}

export const TrustedBySlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const partners: Partner[] = [
    {
      name: 'Au Vert Brunch',
      sub: 'Brunch & Specialty Coffee',
      city: 'Bruxelles (Rue de la Madeleine)',
      packaging: 'Gobelets kraft & boîtes brunch',
      instagram: '@auvertbrunch',
      themeColor: '#059669',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <circle cx="40" cy="40" r="38" fill="#ECFDF5" stroke="#10B981" strokeWidth="2.5" />
          <path d="M40 22C40 22 48 30 48 38C48 43 44 47 40 47C36 47 32 43 32 38C32 30 40 22 40 22Z" fill="#059669" />
          <path d="M40 38V58" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 46C35 44 28 47 28 53" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 42C45 40 52 43 52 49" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Eatya Food',
      sub: 'Street Food & Smash Burger',
      city: 'Bruxelles',
      packaging: 'Boîtes burgers & papier personnalisé',
      instagram: '@eatya_food',
      themeColor: '#D97706',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <rect width="80" height="80" rx="18" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
          {/* Burger bun top */}
          <path d="M22 36C22 26 30 20 40 20C50 20 58 26 58 36H22Z" fill="#D97706" />
          {/* Patty */}
          <rect x="19" y="40" width="42" height="7" rx="3.5" fill="#78350F" />
          {/* Sauce/Cheese */}
          <path d="M22 40L26 44L30 40L34 44L38 40L42 44L46 40L50 44L54 40L58 44" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
          {/* Bun bottom */}
          <path d="M22 51C22 56 28 58 40 58C52 58 58 56 58 51H22Z" fill="#D97706" />
        </svg>
      )
    },
    {
      name: 'Tea With Fati',
      sub: 'Artisanal Tea & Sweet Boxes',
      city: 'Belgique',
      packaging: 'Boîtes à pâtisseries & sachets kraft',
      instagram: '@teawithfati',
      themeColor: '#BE185D',
      badgeBg: 'bg-pink-50 text-pink-900 border-pink-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <circle cx="40" cy="40" r="38" fill="#FDF2F8" stroke="#F472B6" strokeWidth="2.5" />
          {/* Teacup & floral steam */}
          <path d="M26 38C26 49 32 54 40 54C48 54 54 49 54 38H26Z" fill="#BE185D" />
          <path d="M54 40H58C61 40 63 42 63 45C63 48 61 50 58 50H53" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 57H46" stroke="#BE185D" strokeWidth="3" strokeLinecap="round" />
          {/* Steam */}
          <path d="M35 32C35 27 38 25 38 21" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 32C45 27 42 25 42 21" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Stack & Grill',
      sub: 'Smash Burger Gourmet',
      city: 'Paris',
      packaging: 'Boîtes burgers & étuis frites',
      instagram: '@stackandgrill',
      themeColor: '#2563EB',
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <rect width="80" height="80" rx="18" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5" />
          <path d="M40 18L44 28H54L46 34L49 44L40 38L31 44L34 34L26 28H36L40 18Z" fill="#2563EB" />
          <path d="M24 50H56" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M28 58H52" stroke="#1D4ED8" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Aura Poké',
      sub: 'Hawaiian Bowls & Fresh Salads',
      city: 'Lyon',
      packaging: 'Saladiers kraft 360° & couvercles',
      instagram: '@aurapoke',
      themeColor: '#0D9488',
      badgeBg: 'bg-teal-50 text-teal-900 border-teal-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <circle cx="40" cy="40" r="38" fill="#F0FDFA" stroke="#14B8A6" strokeWidth="2.5" />
          {/* Bowl & wave */}
          <path d="M22 42C22 53 30 60 40 60C50 60 58 53 58 42H22Z" fill="#0D9488" />
          <path d="M20 37C24 35 28 39 32 37C36 35 40 39 44 37C48 35 52 39 56 37C58 36 60 37 60 37" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" />
          {/* Chopsticks */}
          <line x1="28" y1="20" x2="52" y2="44" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Green Bean Café',
      sub: 'Specialty Coffee & Bakery',
      city: 'Bordeaux',
      packaging: 'Gobelets double paroi & sacs SOS',
      instagram: '@greenbeancafe',
      themeColor: '#4338CA',
      badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <rect width="80" height="80" rx="18" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
          <circle cx="40" cy="38" r="16" stroke="#4338CA" strokeWidth="3" />
          <path d="M40 26C45 30 45 42 40 48C35 42 35 30 40 26Z" fill="#4338CA" />
          <path d="M26 60H54" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Holy Crispy Chicken',
      sub: 'Fried Chicken & Tenders',
      city: 'Lille',
      packaging: 'Boîtes tenders & buckets kraft',
      instagram: '@holychicken',
      themeColor: '#EA580C',
      badgeBg: 'bg-orange-50 text-orange-900 border-orange-200',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <circle cx="40" cy="40" r="38" fill="#FFF7ED" stroke="#FB923C" strokeWidth="2.5" />
          <path d="M40 18C44 26 48 30 54 34C58 37 58 44 54 48C50 52 46 54 40 58C34 54 30 52 26 48C22 44 22 37 26 34C32 30 36 26 40 18Z" fill="#EA580C" />
          <path d="M36 36L44 44" stroke="#FFF7ED" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 36L36 44" stroke="#FFF7ED" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Dark Kitchen Hub',
      sub: 'Virtual Brands Collective',
      city: 'Berlin & Bruxelles',
      packaging: 'Sacs SOS livraison Deliveroo/Uber',
      instagram: '@darkkitchenhub',
      themeColor: '#334155',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-300',
      renderLogo: () => (
        <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
          <rect width="80" height="80" rx="18" fill="#F8FAFC" stroke="#64748B" strokeWidth="2.5" />
          <polygon points="40,20 62,32 62,56 40,68 18,56 18,32" fill="#0F172A" />
          <line x1="40" y1="20" x2="40" y2="68" stroke="#38BDF8" strokeWidth="2" />
          <line x1="18" y1="32" x2="40" y2="44" stroke="#38BDF8" strokeWidth="2" />
          <line x1="62" y1="32" x2="40" y2="44" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const total = partners.length;

  // Calmer, slower auto-sliding: advances every 4 seconds (4000ms) with smooth slide-in
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              {t('trusted.title')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Ils emballent avec SHAPACK
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {t('trusted.subtitle')} Retrouvez nos collaborations en photo sur Instagram.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Précédent"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Suivant"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport with Smooth Slide-In Animation */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track container */}
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ 
              transform: `translateX(-${currentIndex * 33.333}%)`
            }}
          >
            {/* Duplicated list so carousel flows naturally */}
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 group rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Logo & City */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform duration-300 shrink-0">
                    {partner.renderLogo()}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{partner.city}</span>
                    </span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-pink-600 hover:underline mt-1"
                    >
                      {partner.instagram}
                    </a>
                  </div>
                </div>

                {/* Middle: Brand Info */}
                <div className="space-y-1 mb-5">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {partner.sub}
                  </p>
                </div>

                {/* Bottom: Packaging Made */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <Package className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{partner.packaging}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar / Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Aller au partenaire ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
