import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const TrustedBySlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Exact 3 real partners provided by the user
  const partners = [
    {
      id: 'wayta',
      name: 'Wayta',
      specialty: 'Empanadas artisanales',
      city: 'Anvers',
      instagram: '@wayta.be',
      instagramUrl: 'https://www.instagram.com/wayta.be/',
      packaging: 'Sachets kraft & boîtes empanadas',
      renderLogo: () => (
        <svg viewBox="0 0 200 60" className="h-12 w-auto max-w-[170px]" fill="none">
          {/* Sun / Empanada crescent */}
          <path d="M26 38C26 25 36 16 48 16C50 16 52 17 54 18C44 21 37 30 37 42C37 44 37.2 46 37.6 48C31 46 26 42 26 38Z" fill="#F59E0B" />
          <circle cx="48" cy="24" r="3" fill="#D97706" />
          {/* Typo */}
          <text x="64" y="38" fill="#1E293B" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="900" letterSpacing="2">
            WAYTA
          </text>
          <text x="65" y="49" fill="#D97706" fontFamily="sans-serif" fontSize="7" fontWeight="700" letterSpacing="2">
            EMPANADAS • ANTWERPEN
          </text>
        </svg>
      )
    },
    {
      id: 'fishbar',
      name: 'Fish Bar Claes Stroobants',
      specialty: 'Comptoir marin & street seafood',
      city: 'Bruxelles (Halles Saint-Géry)',
      instagram: '@fishbar_claesstroobants',
      instagramUrl: 'https://www.instagram.com/fishbar_claesstroobants/',
      packaging: 'Papiers ingraissables & barquettes traiteur',
      renderLogo: () => (
        <svg viewBox="0 0 240 60" className="h-12 w-auto max-w-[210px]" fill="none">
          {/* Fish & Crown Crest */}
          <g transform="translate(10, 10)">
            <path d="M6 20C14 12 24 16 32 20C24 24 14 28 6 20Z" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" />
            <circle cx="12" cy="19" r="1.5" fill="#C5A059" />
            <path d="M30 18L36 14V26L30 22" fill="#C5A059" />
          </g>
          {/* Typo */}
          <text x="56" y="28" fill="#0A192F" fontFamily="Georgia, serif" fontSize="15" fontWeight="bold" letterSpacing="1.5">
            FISH BAR
          </text>
          <text x="56" y="42" fill="#C5A059" fontFamily="Georgia, serif" fontSize="10.5" fontWeight="600" letterSpacing="2">
            CLAES STROOBANTS
          </text>
          <text x="56" y="52" fill="#64748B" fontFamily="sans-serif" fontSize="6" fontWeight="500" letterSpacing="1.5">
            BRUXELLES • HALLES SAINT-GÉRY
          </text>
        </svg>
      )
    },
    {
      id: 'bouliburgers',
      name: 'Bouli Burgers',
      specialty: 'Burgers & street food',
      city: 'Restaurant & Takeaway',
      instagram: '@bouliburgers',
      instagramUrl: 'https://www.instagram.com/bouliburgers/',
      packaging: 'Boîtes burgers & étuis frites personnalisés',
      renderLogo: () => (
        <svg viewBox="0 0 200 60" className="h-12 w-auto max-w-[180px]" fill="none">
          {/* Burger Stamp */}
          <circle cx="28" cy="30" r="18" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
          <path d="M18 28C18 22 22 19 28 19C34 19 38 22 38 28H18Z" fill="#DC2626" />
          <rect x="17" y="30" width="22" height="3" rx="1.5" fill="#78350F" />
          <path d="M18 35C18 38 22 40 28 40C34 40 38 38 38 35H18Z" fill="#DC2626" />
          {/* Typo */}
          <text x="54" y="29" fill="#0F172A" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="17" fontWeight="900" letterSpacing="1">
            BOULI
          </text>
          <text x="54" y="44" fill="#EF4444" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="800" letterSpacing="2">
            BURGERS
          </text>
        </svg>
      )
    }
  ];

  const total = partners.length;

  // Slow, smooth slide progression every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Clean Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('trusted.title')}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Les établissements qui nous confient leurs emballages personnalisés.
            </p>
          </div>

          {/* Simple Slider Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Précédent"
              className="w-9 h-9 rounded-lg border border-slate-200 hover:border-slate-400 bg-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Suivant"
              className="w-9 h-9 rounded-lg border border-slate-200 hover:border-slate-400 bg-white text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean, Light Cards Grid with Smooth Slide Animation */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => {
              const isHighlighted = currentIndex === idx;
              return (
                <div
                  key={partner.id}
                  className={`rounded-2xl border p-6 transition-all duration-500 flex flex-col justify-between ${
                    isHighlighted
                      ? 'border-blue-500 bg-blue-50/20 shadow-md ring-1 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Big Clean Logo Zone */}
                  <div className="h-20 flex items-center justify-start pb-4 border-b border-slate-100">
                    {partner.renderLogo()}
                  </div>

                  {/* Brand & Specialty Info */}
                  <div className="pt-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-lg">
                        {partner.name}
                      </h3>
                      <a
                        href={partner.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-400 hover:text-pink-600 flex items-center gap-1 transition-colors"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>{partner.instagram}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">
                      {partner.specialty} • {partner.city}
                    </p>

                    <div className="text-xs text-slate-600 pt-1">
                      <span className="text-[11px] text-slate-400 block mb-0.5">Emballages réalisés :</span>
                      <span className="font-medium text-slate-800">{partner.packaging}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Voir partenaire ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
