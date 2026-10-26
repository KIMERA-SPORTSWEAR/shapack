import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Package, ExternalLink, Sparkles } from 'lucide-react';

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
  specialty: string;
  badge: string;
  city: string;
  packaging: string;
  instagram: string;
  instagramUrl: string;
  logoUrl?: string;
  photoUrl?: string;
  isDeliveryPhoto?: boolean;
  logoBg: string;
  badgeStyle?: string;
}

export const TrustedBySlider: React.FC = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    {
      id: 'waffelin',
      name: 'Waffelin Brussels',
      specialty: 'Gaufres artisanales de Bruxelles & Liège',
      badge: 'Grand-Place 37',
      city: 'Bruxelles (Centre Historique)',
      packaging: 'Pochettes gaufres ingraissables & boîtes',
      instagram: '@waffelin.bxl',
      instagramUrl: 'https://www.instagram.com/waffelin.bxl/',
      logoUrl: '/images/partners/waffelin.png',
      logoBg: 'bg-[#2A1500]',
      badgeStyle: 'bg-black/60 text-amber-200 border-amber-700/40'
    },
    {
      id: 'fishbar',
      name: 'Fish Bar Claes Stroobants',
      specialty: 'Comptoir marin & street seafood',
      badge: 'Halles Saint-Géry',
      city: 'Bruxelles (Centre-Ville)',
      packaging: 'Boîtes street food sur-mesure & papier ingraissable',
      instagram: '@fishbar_claesstroobants',
      instagramUrl: 'https://www.instagram.com/fishbar_claesstroobants/',
      isDeliveryPhoto: true,
      photoUrl: '/images/partners/fishbar_box.jpg',
      logoBg: 'bg-slate-900',
      badgeStyle: 'bg-black/70 text-sky-200 border-sky-400/30'
    },
    {
      id: 'dolcecoffee',
      name: 'Dolce Coffee',
      specialty: 'Specialty coffee, barista & brunch',
      badge: 'Coffee & Brunch',
      city: 'Wallonie & Bruxelles',
      packaging: 'Gobelets café isothermes & boîtes pâtisseries',
      instagram: '@dolcecoffee__',
      instagramUrl: 'https://www.instagram.com/dolcecoffee__/',
      logoUrl: '/images/partners/dolcecoffee.png',
      logoBg: 'bg-[#F7EEDE] border-b border-amber-200/60',
      badgeStyle: 'bg-amber-950/10 text-amber-900 border-amber-900/20'
    },
    {
      id: 'breakpoint',
      name: 'BreakPoint Colonies',
      specialty: 'Sandwichs artisanaux, bagels & salades',
      badge: 'Gare Centrale',
      city: 'Bruxelles (Rue des Colonies)',
      packaging: 'Sachets sandwichs kraft & barquettes repas',
      instagram: '@breakpointcolonies',
      instagramUrl: 'https://www.instagram.com/breakpointcolonies/',
      logoUrl: '/images/partners/breakpoint.jpg',
      logoBg: 'bg-white border-b border-slate-100',
      badgeStyle: 'bg-slate-900/10 text-slate-800 border-slate-300'
    },
    {
      id: 'sinamisu',
      name: 'Sinamisu',
      specialty: 'Bar à tiramisu artisanal & dolce italiano',
      badge: 'Galeries Royales',
      city: 'Bruxelles (Galeries Saint-Hubert)',
      packaging: 'Pots à dessert cristal & boîtes traiteur',
      instagram: '@sinamisu.brussels',
      instagramUrl: 'https://www.instagram.com/sinamisu.brussels/',
      logoUrl: '/images/partners/sina_logo.png',
      logoBg: 'bg-[#FFF7ED] border-b border-orange-200/60',
      badgeStyle: 'bg-orange-950/10 text-orange-900 border-orange-900/20'
    },
    {
      id: 'claes-stroobants',
      name: 'Claes Stroobants',
      specialty: 'Poissonnerie & Traiteur depuis 1960',
      badge: 'Fournisseur Breveté de la Cour',
      city: 'Bruxelles (Woluwe & Meise)',
      packaging: 'Papiers ingraissables & sacs cabas traiteur luxe',
      instagram: '@claesstroobants',
      instagramUrl: 'https://www.instagram.com/claesstroobants/',
      logoUrl: '/images/partners/claes_stroobants.png',
      logoBg: 'bg-white border-b border-slate-100',
      badgeStyle: 'bg-amber-950/10 text-amber-900 border-amber-800/20'
    },
    {
      id: 'eatya',
      name: 'EATYA',
      specialty: 'Organic essentials & superfoods',
      badge: 'Bio & Superfood',
      city: 'Bruxelles (Quai des Charbonnages)',
      packaging: 'Pochons kraft scellés & sachets doypack étanches',
      instagram: '@eatya.food',
      instagramUrl: 'https://www.instagram.com/eatya.food/',
      logoUrl: '/images/partners/eatya.png',
      logoBg: 'bg-emerald-50/70 border-b border-emerald-100',
      badgeStyle: 'bg-emerald-950/10 text-emerald-900 border-emerald-800/20'
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
      logoUrl: '/images/partners/wayta-wordmark.png',
      logoBg: 'bg-[#FFFBEB] border-b border-amber-100',
      badgeStyle: 'bg-amber-950/10 text-amber-900 border-amber-800/20'
    },
    {
      id: 'bouliburgers',
      name: 'Bouli Burgers',
      specialty: 'Smash burgers & street food',
      badge: 'Original Smashburgers',
      city: 'Restaurant & Takeaway',
      packaging: 'Boîtes burgers & étuis à frites',
      instagram: '@bouliburgers',
      instagramUrl: 'https://www.instagram.com/bouliburgers/',
      logoUrl: '/images/partners/bouliburgers_hd.png',
      logoBg: 'bg-gradient-to-br from-rose-950 via-slate-900 to-black',
      badgeStyle: 'bg-rose-950/60 text-rose-200 border-rose-800/40'
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
              className="w-[310px] sm:w-[350px] shrink-0 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group select-none"
            >
              {/* Logo / Photo Area */}
              <div className={`h-28 ${partner.logoBg} relative flex items-center justify-center px-4 overflow-hidden`}>
                {partner.isDeliveryPhoto && partner.photoUrl ? (
                  <>
                    <img 
                      src={partner.photoUrl} 
                      alt={`Emballages livrés ${partner.name}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="text-white font-bold text-xs tracking-wide drop-shadow-sm">
                          Fish Bar Claes Stroobants
                        </span>
                      </div>
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow">
                        Boîte livrée
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
                    
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
                      {partner.logoUrl && (
                        <img 
                          src={partner.logoUrl} 
                          alt={partner.name}
                          className="max-h-16 max-w-[220px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                        />
                      )}
                    </div>
                  </>
                )}

                <div className={`absolute top-2.5 right-2.5 backdrop-blur-sm px-2 py-0.5 rounded-full border text-[10px] font-medium ${partner.badgeStyle || 'bg-black/40 text-slate-300 border-white/10'}`}>
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
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 hover:bg-pink-50 text-slate-500 hover:text-pink-600 border border-slate-200 text-[11px] font-semibold transition-colors shrink-0"
                      onClick={(e) => e.stopPropagation()}
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

                {/* City */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="font-medium text-[11px]">{partner.city}</span>
                </div>

                {/* Packaging Type */}
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
    </section>
  );
};
