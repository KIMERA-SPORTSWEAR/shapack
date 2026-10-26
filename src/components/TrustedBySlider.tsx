import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface Partner {
  id: string;
  name: string;
  instagram: string;
  instagramUrl: string;
  logoUrl: string;
  logoBg: string;
  logoClassName?: string;
}

export const TrustedBySlider: React.FC = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      id: 'waffelin',
      name: 'Waffelin Brussels',
      instagram: '@waffelin.bxl',
      instagramUrl: 'https://www.instagram.com/waffelin.bxl/',
      logoUrl: '/images/partners/waffelin.png',
      logoBg: 'bg-[#2A1500]',
      logoClassName: 'max-h-24 max-w-[220px]'
    },
    {
      id: 'fishbar',
      name: 'Fish Bar Claes Stroobants',
      instagram: '@fishbar_claesstroobants',
      instagramUrl: 'https://www.instagram.com/fishbar_claesstroobants/',
      logoUrl: '/images/partners/fishbar_logo_hd_clean.png',
      logoBg: 'bg-[#FC6202]',
      logoClassName: 'max-h-24 max-w-[230px]'
    },
    {
      id: 'dolcecoffee',
      name: 'Dolce Coffee',
      instagram: '@dolcecoffee__',
      instagramUrl: 'https://www.instagram.com/dolcecoffee__/',
      logoUrl: '/images/partners/dolcecoffee.png',
      logoBg: 'bg-[#140D07]',
      logoClassName: 'max-w-[220px] scale-105'
    },
    {
      id: 'breakpoint',
      name: 'BreakPoint Colonies',
      instagram: '@breakpointcolonies',
      instagramUrl: 'https://www.instagram.com/breakpointcolonies/',
      logoUrl: '/images/partners/breakpoint_tight.png',
      logoBg: 'bg-white border-b border-slate-100',
      logoClassName: 'max-h-24 max-w-[260px] scale-110'
    },
    {
      id: 'sinamisu',
      name: 'Sinamisu',
      instagram: '@sinamisu.brussels',
      instagramUrl: 'https://www.instagram.com/sinamisu.brussels/',
      logoUrl: '/images/partners/sina_logo.png',
      logoBg: 'bg-[#FFF7ED] border-b border-orange-200/50',
      logoClassName: 'max-h-20 max-w-[230px]'
    },
    {
      id: 'claes-stroobants',
      name: 'Claes Stroobants',
      instagram: '@claesstroobants',
      instagramUrl: 'https://www.instagram.com/claesstroobants/',
      logoUrl: '/images/partners/claes_stroobants_tight.png',
      logoBg: 'bg-white border-b border-slate-100',
      logoClassName: 'max-h-24 max-w-[270px] scale-120'
    },
    {
      id: 'eatya',
      name: 'EATYA',
      instagram: '@eatya.food',
      instagramUrl: 'https://www.instagram.com/eatya.food/',
      logoUrl: '/images/partners/eatya_tight.png',
      logoBg: 'bg-emerald-50/70 border-b border-emerald-100',
      logoClassName: 'max-h-20 max-w-[240px] scale-120'
    },
    {
      id: 'wayta',
      name: 'Wayta',
      instagram: '@wayta.be',
      instagramUrl: 'https://www.instagram.com/wayta.be/',
      logoUrl: '/images/partners/wayta-wordmark.png',
      logoBg: 'bg-[#FFFBEB] border-b border-amber-100',
      logoClassName: 'max-h-20 max-w-[240px] scale-110'
    },
    {
      id: 'bouliburgers',
      name: 'Bouli Burgers',
      instagram: '@bouliburgers',
      instagramUrl: 'https://www.instagram.com/bouliburgers/',
      logoUrl: '/images/partners/bouliburgers_hd_vector.png',
      logoBg: 'bg-white border-b border-slate-100',
      logoClassName: 'max-h-20 max-w-[210px]'
    }
  ];

  // Tripled list ensures a 100% gapless, seamless infinite loop
  const seamlessPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
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

          <div className="text-xs text-slate-400 font-medium hidden sm:flex items-center gap-1.5">
            <span>Défilement continu • Survolez pour mettre en pause</span>
          </div>
        </div>

      </div>

      {/* Infinite Seamless Marquee Slider with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden">
        
        {/* Soft edge fade masks to prevent any harsh cuts */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Unbroken Marquee Track */}
        <div ref={trackRef} className="infinite-slide-track gap-6 px-4">
          {seamlessPartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group select-none"
            >
              {/* Logo Area */}
              <div className={`h-32 sm:h-36 ${partner.logoBg} relative flex items-center justify-center px-4 overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
                
                <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name}
                    className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${partner.logoClassName || 'max-h-20 max-w-[220px]'}`} 
                  />
                </div>
              </div>

              {/* Card Bottom: Name & IG */}
              <div className="px-5 py-4 bg-white flex items-center justify-between gap-3 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm truncate group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <a
                  href={partner.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 text-xs font-semibold transition-colors shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                  <span className="text-[11px] font-bold">{partner.instagram}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
