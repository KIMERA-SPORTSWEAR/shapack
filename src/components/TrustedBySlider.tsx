import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Flame, Salad, Coffee, ShoppingBag, UtensilsCrossed, Pizza, Sandwich, Star } from 'lucide-react';

export const TrustedBySlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'Stack & Grill', tag: 'Smash Burger Gourmet', icon: Flame, color: 'text-blue-600 bg-blue-50' },
    { name: 'Aura Poke', tag: 'Healthy Bowls & Salads', icon: Salad, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Green Bean Café', tag: 'Specialty Coffee & Bakery', icon: Coffee, color: 'text-amber-600 bg-amber-50' },
    { name: 'Dark Cloud Hub', tag: 'Virtual Kitchens Collective', icon: UtensilsCrossed, color: 'text-purple-600 bg-purple-50' },
    { name: 'Bao & Buns Co.', tag: 'Asian Street Food', icon: ShoppingBag, color: 'text-rose-600 bg-rose-50' },
    { name: 'Wok Station', tag: 'Fresh Noodles & Wok', icon: Flame, color: 'text-blue-600 bg-blue-50' },
    { name: 'Artisan Baguette', tag: 'Sandwicherie & Boulangerie', icon: Sandwich, color: 'text-amber-600 bg-amber-50' },
    { name: 'Holy Crispy Chicken', tag: 'Tenders & Wings House', icon: Flame, color: 'text-orange-600 bg-orange-50' },
    { name: 'Urban Salad Bar', tag: 'Fresh Grab & Go', icon: Salad, color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Slice & Crust Pizza', tag: 'Takeaway Pizza Bar', icon: Pizza, color: 'text-red-600 bg-red-50' },
  ];

  // Slides every 1 second (1000ms) as explicitly requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [partners.length]);

  // Display 5 visible partner logos at a time in sliding window
  const visibleCount = 4;
  const getVisiblePartners = () => {
    const list = [];
    for (let i = 0; i < visibleCount; i++) {
      list.push(partners[(currentIndex + i) % partners.length]);
    }
    return list;
  };

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-1">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>PARTENAIRES RESTAURATION</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {t('trusted.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {t('trusted.subtitle')}
          </p>
        </div>

        {/* 1-Second Auto-Sliding Row */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {getVisiblePartners().map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`${partner.name}-${idx}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className={`w-11 h-11 rounded-lg ${partner.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-black text-sm text-slate-900 truncate">
                      {partner.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      {partner.tag}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {partners.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
