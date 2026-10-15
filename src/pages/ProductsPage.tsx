import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { ProductCategory } from '../types';
import { 
  Package, 
  Flame, 
  Salad, 
  Sandwich, 
  ShoppingBag, 
  Coffee, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = (searchParams.get('cat') as ProductCategory) || 'tous';
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(catParam);

  useEffect(() => {
    if (searchParams.get('cat')) {
      setActiveCategory(searchParams.get('cat') as ProductCategory);
    }
  }, [searchParams]);

  const categories = [
    { id: 'tous', label: t('categories.all'), icon: Package },
    { id: 'chaud', label: t('categories.chaud'), icon: Flame },
    { id: 'salades', label: t('categories.salades'), icon: Salad },
    { id: 'boulangerie', label: t('categories.boulangerie'), icon: Sandwich },
    { id: 'sacs', label: t('categories.sacs'), icon: ShoppingBag },
    { id: 'gobelets', label: t('categories.gobelets'), icon: Coffee },
  ];

  const handleSelectCategory = (id: ProductCategory) => {
    setActiveCategory(id);
    if (id === 'tous') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: id });
    }
  };

  const filteredProducts = activeCategory === 'tous'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            {t('categories.tag')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('categories.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id as ProductCategory)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-bold text-blue-700 shadow-sm">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Formats / dimensions */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Formats & Dimensions :
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {product.dimensions.map((dim, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          <span>{dim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features list */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs py-2 px-3 bg-blue-50/50 rounded-lg mb-3 text-blue-900 border border-blue-100">
                  <span className="text-slate-500">Tarification :</span>
                  <span className="font-bold text-blue-700">Sur devis sous 24h</span>
                </div>

                <Link
                  to={`/contact?produit=${encodeURIComponent(product.name)}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t('nav.quoteBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              {t('portfolio.ctaTitle')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('portfolio.ctaDesc')}
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs whitespace-nowrap transition-colors"
          >
            {t('nav.quoteBtn')}
          </Link>
        </div>

      </div>
    </div>
  );
};
