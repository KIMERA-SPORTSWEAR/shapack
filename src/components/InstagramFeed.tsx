import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramFeed: React.FC = () => {
  const { t } = useLanguage();

  const posts = [
    {
      id: 1,
      image: '/images/burger.jpg',
      title: 'Boîtes burger kraft & papier ingraissable',
      subtitle: 'Pour enseignes de smash burger et street food',
      tag: 'Burger'
    },
    {
      id: 2,
      image: '/images/poke.jpg',
      title: 'Saladiers ronds & bowls étanches',
      subtitle: 'Impression 360° pour poké bars et saladeries',
      tag: 'Poké Bowls'
    },
    {
      id: 3,
      image: '/images/bakery.jpg',
      title: 'Gobelets double paroi & boîtes sandwichs',
      subtitle: 'Packaging café de spécialité et boulangerie',
      tag: 'Coffee & Bakery'
    },
    {
      id: 4,
      image: '/images/hero.jpg',
      title: 'Sacs cabas kraft & étuis frites',
      subtitle: 'Gamme complète pour livraison et vente à emporter',
      tag: 'Takeaway'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 mb-2">
              <InstagramIcon className="w-3.5 h-3.5 text-slate-800" />
              <span>@shapack.packaging</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t('social.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t('social.subtitle')}
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{t('social.btn')}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:border-slate-400 transition-all block"
            >
              {/* Photo */}
              <div className="h-60 overflow-hidden bg-slate-100 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" 
                />
                
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold text-slate-800 shadow-sm">
                  {post.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1">
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {post.subtitle}
                </p>

                <div className="pt-2 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                  <span>Voir sur Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
