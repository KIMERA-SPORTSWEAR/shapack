import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MapPin } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();

  const realisations = [
    {
      id: 1,
      brand: 'Stack & Grill',
      type: 'Smash Burger Gourmet',
      city: 'Paris',
      image: '/images/burger.jpg',
      packagings: ['Boîtes à burger kraft', 'Étuis à frites', 'Papier ingraissable à damier', 'Sacs cabas kraft'],
      finish: 'Offset quadri HD, évents d\'aération vapeur'
    },
    {
      id: 2,
      brand: 'Aura Poke & Healthy',
      type: 'Poké Bar & Healthy Fast Casual',
      city: 'Lyon',
      image: '/images/poke.jpg',
      packagings: ['Saladiers ronds kraft 750ml & 1000ml', 'Couvercles rPET étanches', 'Noodle boxes pliantes'],
      finish: 'Impression circulaire 360°, bord roulé hermétique'
    },
    {
      id: 3,
      brand: 'Green Bean Café & Bakery',
      type: 'Specialty Coffee & Bakery',
      city: 'Bordeaux',
      image: '/images/bakery.jpg',
      packagings: ['Gobelets double paroi kraft', 'Boîtes sandwichs à fenêtre', 'Sacs cabas kraft'],
      finish: 'Double paroi thermo-isolante, fenêtre en cellulose transparente'
    },
    {
      id: 4,
      brand: 'Dark Kitchen Hub',
      type: 'Virtual Brands Kitchen Network',
      city: 'Berlin / Brussels',
      image: '/images/hero.jpg',
      packagings: ['Sacs SOS kraft livraison 15L', 'Boîtes starters wings', 'Boîtes burgers maxi'],
      finish: 'Format sécurisé pour livreurs et coursiers'
    }
  ];

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            {t('portfolio.tag')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('portfolio.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {realisations.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="h-72 sm:h-80 overflow-hidden bg-slate-100 relative">
                <img 
                  src={item.image} 
                  alt={item.brand} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item.city}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    {item.type}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {item.brand}
                  </h3>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-700 block mb-1.5">
                    Packagings :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.packagings.map((pkg, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <strong className="text-slate-700">Finition :</strong> {item.finish}
                </div>

                <div className="pt-2">
                  <Link
                    to={`/contact?projet=${encodeURIComponent(item.brand)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    <span>{t('portfolio.requestSimilar')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            {t('portfolio.ctaTitle')}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t('portfolio.ctaDesc')}
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
