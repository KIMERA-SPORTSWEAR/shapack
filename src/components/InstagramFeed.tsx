import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';

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
      caption: 'Boîtes burger gourmet kraft vergé & papier ingraissable assorti pour @stackandgrill 🔥 #PackagingBurger #StreetFood',
      likes: 412,
      comments: 28,
      tag: 'Smash Burger'
    },
    {
      id: 2,
      image: '/images/poke.jpg',
      caption: 'Impression 360° sur saladiers kraft et noodle boxes avec couvercle anti-fuite pour @aurapoke 🥗 #PokeBowl #Takeaway',
      likes: 358,
      comments: 19,
      tag: 'Healthy Bowls'
    },
    {
      id: 3,
      image: '/images/bakery.jpg',
      caption: 'Gobelets kraft double paroi isolante et boîtes sandwichs à fenêtre végétale pour @greenbeancafe ☕ #CoffeeShop #Bakery',
      likes: 289,
      comments: 14,
      tag: 'Specialty Coffee'
    },
    {
      id: 4,
      image: '/images/hero.jpg',
      caption: 'Gamme complète livrée : sacs cabas kraft fond large, étuis à frites et boîtes repas prêtes au passe ! 📦 #CustomPackaging',
      likes: 534,
      comments: 37,
      tag: 'Gamme Complète'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold text-pink-700 mb-2">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>@SHAPACK.PACKAGING</span>
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-xs shadow-sm transition-all self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{t('social.btn')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
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
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-pink-300 transition-all block"
            >
              {/* Photo */}
              <div className="h-60 overflow-hidden bg-slate-100 relative">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                
                {/* Hover Instagram Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-1.5 text-sm font-bold">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-bold">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-bold text-slate-800 shadow-sm">
                  {post.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[1.5px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <InstagramIcon className="w-2.5 h-2.5 text-pink-600" />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">shapack.packaging</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                  <span className="text-pink-600 font-semibold flex items-center gap-1">
                    <span>Voir sur Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
