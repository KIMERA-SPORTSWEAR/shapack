import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, MapPin, Package, ExternalLink } from 'lucide-react';

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

  const partners = [
    {
      id: 'claes-stroobants',
      name: 'Claes Stroobants',
      specialty: 'Poissonnerie & Traiteur depuis 1960',
      badge: 'Fournisseur Breveté de la Cour',
      city: 'Bruxelles (Woluwe & Meise)',
      packaging: 'Papiers ingraissables & sacs cabas traiteur',
      instagram: '@claesstroobants',
      instagramUrl: 'https://www.instagram.com/claesstroobants/',
      accentBorder: 'border-amber-200/80',
      logoBg: 'bg-gradient-to-b from-slate-900 to-slate-950',
      renderLogo: () => (
        <svg viewBox="0 0 240 70" className="h-14 w-auto object-contain" fill="none">
          {/* Royal Crown */}
          <g transform="translate(102, 4) scale(0.75)">
            <path d="M24 6L29 16L39 12L34 24H14L9 12L19 16L24 6Z" fill="#C5A059" stroke="#E5C158" strokeWidth="1" />
            <circle cx="24" cy="5" r="2.5" fill="#E5C158" />
            <circle cx="9" cy="11" r="2" fill="#E5C158" />
            <circle cx="39" cy="11" r="2" fill="#E5C158" />
            <rect x="14" y="23" width="20" height="3" rx="1.5" fill="#C5A059" />
          </g>
          {/* Typo */}
          <text x="120" y="44" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" letterSpacing="2">
            CLAES STROOBANTS
          </text>
          <text x="120" y="58" textAnchor="middle" fill="#C5A059" fontFamily="sans-serif" fontSize="7" fontWeight="600" letterSpacing="2.5">
            POISSONNERIE • TRAITEUR • DEPUIS 1960
          </text>
        </svg>
      )
    },
    {
      id: 'fishbar',
      name: 'Fish Bar Claes Stroobants',
      specialty: 'Comptoir marin & street seafood',
      badge: 'Halles Saint-Géry',
      city: 'Bruxelles (Centre-Ville)',
      packaging: 'Barquettes carton & papiers alimentaires',
      instagram: '@fishbar_claesstroobants',
      instagramUrl: 'https://www.instagram.com/fishbar_claesstroobants/',
      accentBorder: 'border-blue-200/80',
      logoBg: 'bg-gradient-to-b from-slate-900 to-blue-950',
      renderLogo: () => (
        <svg viewBox="0 0 240 70" className="h-14 w-auto object-contain" fill="none">
          {/* Maritime Fish Crest */}
          <g transform="translate(100, 6) scale(0.9)">
            <path d="M6 18C16 10 28 14 36 18C28 22 16 26 6 18Z" fill="#0A192F" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="12" cy="17" r="1.5" fill="#38BDF8" />
            <path d="M34 16L40 12V24L34 20" fill="#38BDF8" />
          </g>
          <text x="120" y="44" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="15" fontWeight="bold" letterSpacing="2">
            FISH BAR
          </text>
          <text x="120" y="58" textAnchor="middle" fill="#38BDF8" fontFamily="sans-serif" fontSize="8" fontWeight="700" letterSpacing="2.5">
            HALLES SAINT-GÉRY • BRUXELLES
          </text>
        </svg>
      )
    },
    {
      id: 'eatya',
      name: 'EATYA',
      specialty: 'Organic Essentials & Superfoods',
      badge: 'Vidya & Habebe Molenbeek',
      city: 'Bruxelles (Quai des Charbonnages)',
      packaging: 'Pochons kraft étanches & sachets scellés',
      instagram: '@eatya.food',
      instagramUrl: 'https://www.instagram.com/eatya.food/',
      accentBorder: 'border-emerald-200/80',
      logoBg: 'bg-gradient-to-b from-emerald-950 to-slate-900',
      renderLogo: () => (
        <svg viewBox="0 0 220 70" className="h-14 w-auto object-contain" fill="none">
          <text x="110" y="42" textAnchor="middle" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="30" fontWeight="900" letterSpacing="-1.5">
            eatya<tspan fill="#34D399">.</tspan>
          </text>
          <rect x="55" y="48" width="110" height="1.5" fill="#34D399" rx="0.75" />
          <text x="110" y="59" textAnchor="middle" fill="#A7F3D0" fontFamily="sans-serif" fontSize="7" fontWeight="700" letterSpacing="2.5">
            ORGANIC ESSENTIALS • BRUXELLES
          </text>
        </svg>
      )
    },
    {
      id: 'wayta',
      name: 'Wayta',
      specialty: 'Empanadas artisanales boliviennes',
      badge: 'Antwerpen Hotspot',
      city: 'Anvers (Everdijstraat)',
      packaging: 'Sachets kraft & boîtes empanadas',
      instagram: '@wayta.be',
      instagramUrl: 'https://www.instagram.com/wayta.be/',
      accentBorder: 'border-amber-200/80',
      logoBg: 'bg-gradient-to-b from-amber-950 to-slate-900',
      renderLogo: () => (
        <svg viewBox="0 0 220 70" className="h-14 w-auto object-contain" fill="none">
          {/* Crescent Empanada Icon */}
          <path d="M40 38C40 25 50 16 62 16C64 16 66 17 68 18C58 21 51 30 51 42C51 44 51.2 46 51.6 48C45 46 40 42 40 38Z" fill="#F59E0B" />
          <circle cx="62" cy="24" r="3" fill="#D97706" />
          <text x="80" y="40" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="24" fontWeight="900" letterSpacing="2">
            WAYTA
          </text>
          <text x="80" y="52" fill="#FBBF24" fontFamily="sans-serif" fontSize="8" fontWeight="700" letterSpacing="2">
            EMPANADAS • ANTWERPEN
          </text>
        </svg>
      )
    },
    {
      id: 'bouliburgers',
      name: 'Bouli Burgers',
      specialty: 'Smash burgers & street food',
      badge: 'Street Food Gourmet',
      city: 'Restaurant & Takeaway',
      packaging: 'Boîtes burgers & étuis à frites',
      instagram: '@bouliburgers',
      instagramUrl: 'https://www.instagram.com/bouliburgers/',
      accentBorder: 'border-rose-200/80',
      logoBg: 'bg-gradient-to-b from-rose-950 to-slate-900',
      renderLogo: () => (
        <svg viewBox="0 0 220 70" className="h-14 w-auto object-contain" fill="none">
          <circle cx="45" cy="35" r="18" fill="#881337" stroke="#F43F5E" strokeWidth="2" />
          <path d="M35 33C35 27 39 24 45 24C51 24 55 27 55 33H35Z" fill="#FB7185" />
          <rect x="34" y="35" width="22" height="3" rx="1.5" fill="#FFF1F2" />
          <path d="M35 40C35 43 39 45 45 45C51 45 55 43 55 40H35Z" fill="#FB7185" />
          <text x="76" y="36" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="18" fontWeight="900" letterSpacing="1.5">
            BOULI
          </text>
          <text x="76" y="50" fill="#FDA4AF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="800" letterSpacing="2.5">
            BURGERS
          </text>
        </svg>
      )
    }
  ];

  const total = partners.length;

  // Calm, smooth automatic sliding every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="py-16 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>BRUXELLES & BELGIQUE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('trusted.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              {t('trusted.subtitle')}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Partenaire précédent"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Partenaire suivant"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport with Smooth Slide-In Animation */}
        <div
          className="relative overflow-hidden -mx-2 px-2 py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.min(total, 3))}%)`
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
              >
                {/* Upper Brand Showcase: Big High Quality Logo on Deep Accent Background */}
                <div className={`h-28 ${partner.logoBg} relative flex items-center justify-center px-4 overflow-hidden`}>
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
                  
                  {/* High Quality Logo Vector */}
                  <div className="relative z-10 w-full flex items-center justify-center">
                    {partner.renderLogo()}
                  </div>

                  {/* Certified badge */}
                  <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10 text-[10px] font-medium text-slate-300">
                    {partner.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h3>
                      <a
                        href={partner.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 hover:bg-pink-50 text-slate-500 hover:text-pink-600 border border-slate-200 text-[11px] font-semibold transition-colors"
                      >
                        <InstagramIcon className="w-3 h-3 text-pink-500" />
                        <span>{partner.instagram}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">
                      {partner.specialty}
                    </p>
                  </div>

                  {/* City Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium text-[11px]">{partner.city}</span>
                  </div>

                  {/* Packaging Details */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 text-xs text-slate-700">
                    <Package className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase block">Emballages réalisés</span>
                      <span className="font-medium text-[11px] text-slate-800">{partner.packaging}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Aller au partenaire ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
