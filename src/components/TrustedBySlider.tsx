import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, MapPin, Package, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      category: 'Poissonnerie & Traiteur depuis 1960',
      royalTitle: 'Fournisseur Breveté de la Cour de Belgique',
      city: 'Bruxelles • Woluwe • Meise • Halles Saint-Géry',
      packaging: 'Papiers ingraissables, sacs traiteur & barquettes',
      instagram: '@claesstroobants',
      instagramUrl: 'https://www.instagram.com/claesstroobants/',
      accentColor: '#C5A059',
      bgColor: 'from-slate-900 to-slate-950',
      textColor: 'text-white',
      renderLogo: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
          <svg viewBox="0 0 260 70" className="w-full h-16 object-contain" fill="none">
            {/* Royal Belgian Crown */}
            <g transform="translate(108, 2) scale(0.9)">
              <path d="M24 6L29 16L39 12L34 24H14L9 12L19 16L24 6Z" fill="#C5A059" stroke="#E5C158" strokeWidth="1" />
              <circle cx="24" cy="5" r="2.5" fill="#E5C158" />
              <circle cx="9" cy="11" r="2" fill="#E5C158" />
              <circle cx="39" cy="11" r="2" fill="#E5C158" />
              <rect x="14" y="23" width="20" height="3" rx="1.5" fill="#C5A059" />
              <circle cx="24" cy="24.5" r="1" fill="#FFFFFF" />
            </g>
            {/* Claes Stroobants Brand Typo */}
            <text x="130" y="44" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold" letterSpacing="2.5">
              CLAES STROOBANTS
            </text>
            {/* Subtitle */}
            <text x="130" y="58" textAnchor="middle" fill="#C5A059" fontFamily="sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="3">
              POISSONNERIE • TRAITEUR • DEPUIS 1960
            </text>
            <text x="130" y="68" textAnchor="middle" fill="#94A3B8" fontFamily="sans-serif" fontSize="6" fontWeight="500" letterSpacing="1.5">
              FOURNISSEUR BREVETÉ DE LA COUR
            </text>
          </svg>
        </div>
      )
    },
    {
      id: 'eatya',
      name: 'EATYA',
      category: 'Organic Essentials & Superfoods',
      royalTitle: 'Meilleur Produit Bio • Vidya & Habebe',
      city: 'Bruxelles (Molenbeek)',
      packaging: 'Pochons kraft scellés, boîtes étanches & sachets',
      instagram: '@eatya.food',
      instagramUrl: 'https://www.instagram.com/eatya.food/',
      accentColor: '#10B981',
      bgColor: 'from-emerald-950 to-slate-900',
      textColor: 'text-white',
      renderLogo: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
          <svg viewBox="0 0 240 70" className="w-full h-16 object-contain" fill="none">
            {/* Minimalist Organic Brand Typo */}
            <g transform="translate(30, 10)">
              <text x="90" y="34" textAnchor="middle" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="32" fontWeight="900" letterSpacing="-1.5">
                eatya<tspan fill="#10B981">.</tspan>
              </text>
              <rect x="30" y="42" width="120" height="1.5" fill="#10B981" rx="0.75" />
              <text x="90" y="52" textAnchor="middle" fill="#A7F3D0" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="3">
                ORGANIC ESSENTIALS • BRUXELLES
              </text>
            </g>
          </svg>
        </div>
      )
    },
    {
      id: 'au-vert',
      name: 'Au Vert Brunch',
      category: 'Brunch & Specialty Coffee',
      royalTitle: 'Coffee House & Food Artisans',
      city: 'Bruxelles (Rue de la Madeleine)',
      packaging: 'Gobelets kraft personnalisés & boîtes repas',
      instagram: '@auvertbrunch',
      instagramUrl: 'https://www.instagram.com/',
      accentColor: '#059669',
      bgColor: 'from-teal-950 to-slate-900',
      textColor: 'text-white',
      renderLogo: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
          <svg viewBox="0 0 240 70" className="w-full h-16 object-contain" fill="none">
            {/* Sprout & Sun Emblem */}
            <circle cx="50" cy="35" r="20" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            <path d="M50 24C50 24 55 29 55 35C55 38 52 41 50 41C48 41 45 38 45 35C45 29 50 24 50 24Z" fill="#34D399" />
            <path d="M50 35V45" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            {/* Brand Typo */}
            <text x="80" y="34" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="900" letterSpacing="1">
              AU VERT
            </text>
            <text x="80" y="48" fill="#6EE7B7" fontFamily="sans-serif" fontSize="8" fontWeight="700" letterSpacing="2.5">
              BRUNCH & SPECIALTY COFFEE
            </text>
            <text x="80" y="58" fill="#94A3B8" fontFamily="sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1">
              BRUXELLES • RUE DE LA MADELEINE
            </text>
          </svg>
        </div>
      )
    },
    {
      id: 'tea-with-fati',
      name: 'Tea With Fati',
      category: 'Pâtisserie Fine & Thés Artisanaux',
      royalTitle: 'Créations Gourmandes',
      city: 'Belgique',
      packaging: 'Boîtes pâtisseries, rubans & sachets kraft',
      instagram: '@teawithfati',
      instagramUrl: 'https://www.instagram.com/',
      accentColor: '#EC4899',
      bgColor: 'from-pink-950 to-slate-900',
      textColor: 'text-white',
      renderLogo: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
          <svg viewBox="0 0 240 70" className="w-full h-16 object-contain" fill="none">
            {/* Teacup & Rose Flourish */}
            <circle cx="50" cy="35" r="20" fill="#831843" stroke="#F472B6" strokeWidth="2" />
            <path d="M42 34C42 41 46 44 50 44C54 44 58 41 58 34H42Z" fill="#F472B6" />
            <path d="M58 35H60C62 35 63 36 63 38C63 40 62 41 60 41H57" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M46 47H54" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
            {/* Brand Typo */}
            <text x="80" y="34" fill="#FFFFFF" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" letterSpacing="1.5">
              TEA WITH FATI
            </text>
            <text x="80" y="48" fill="#FBCFE8" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="2.5">
              ARTISANAL SWEETS & TEAS
            </text>
            <text x="80" y="58" fill="#94A3B8" fontFamily="sans-serif" fontSize="6.5" fontWeight="500" letterSpacing="1">
              BELGIQUE
            </text>
          </svg>
        </div>
      )
    },
    {
      id: 'join-us',
      name: 'Votre Établissement',
      category: 'Rejoignez nos restaurants partenaires',
      royalTitle: 'Dès 2 000 pièces • Impression Haute Définition',
      city: 'Belgique & Europe',
      packaging: 'Gamme complète à vos couleurs sous 3 à 4 semaines',
      instagram: '@shapack.be',
      instagramUrl: 'https://www.instagram.com/shapack.be/',
      accentColor: '#3B82F6',
      bgColor: 'from-blue-950 to-slate-900',
      textColor: 'text-white',
      isCta: true,
      renderLogo: () => (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 select-none">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-blue-400 mb-1">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <span className="text-white font-black text-sm tracking-wide">VOTRE LOGO ICI</span>
          <span className="text-blue-300 text-[10px] font-semibold mt-0.5">Dès 2 000 pièces</span>
        </div>
      )
    }
  ];

  const total = partners.length;

  // Calm, slow automatic slide every 5 seconds
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
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>RÉFÉRENCES CLIENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ils emballent avec SHAPACK
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Découvrez nos collaborations avec des établissements de référence en Belgique et en Europe.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Partenaire précédent"
              className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Partenaire suivant"
              className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider with Smooth Slide-In Animation */}
        <div
          className="relative overflow-hidden -mx-4 px-4 py-2"
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
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-3xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
              >
                {/* Upper Brand Showcase: Big High Quality Logo */}
                <div className={`h-36 bg-gradient-to-br ${partner.bgColor} border-b border-slate-800/80 relative flex items-center justify-center overflow-hidden`}>
                  {/* Subtle Grid / Texture */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* High Quality Logo Vector */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                    {partner.renderLogo()}
                  </div>

                  {/* Certified badge */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Partenaire</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {partner.name}
                      </h3>
                      <a
                        href={partner.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-pink-600/20 text-slate-400 hover:text-pink-400 border border-slate-700 text-xs font-semibold transition-colors"
                      >
                        <InstagramIcon className="w-3 h-3" />
                        <span>{partner.instagram}</span>
                        <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                      </a>
                    </div>

                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {partner.category}
                    </p>

                    <div className="inline-block px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-semibold text-amber-300/90">
                      {partner.royalTitle}
                    </div>
                  </div>

                  {/* City Location */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{partner.city}</span>
                  </div>

                  {/* Packagings Provided */}
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                    <Package className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Packagings fabriqués</span>
                      <span className="font-medium text-slate-200">{partner.packaging}</span>
                    </div>
                  </div>

                  {partner.isCta && (
                    <Link
                      to="/contact"
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
                    >
                      <span>Demander un devis personnalisé</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Aller au partenaire ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === i ? 'w-10 bg-blue-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
