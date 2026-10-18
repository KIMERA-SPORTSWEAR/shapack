import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TrustedBySlider } from '../components/TrustedBySlider';
import { InstagramFeed } from '../components/InstagramFeed';
import { 
  Package, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Salad, 
  Sandwich, 
  ShoppingBag, 
  Coffee,
  Sparkles,
  ShieldCheck,
  Layers,
  Gift,
  HelpCircle,
  MapPin,
  Phone
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const categoryHighlights = [
    {
      titleKey: 'categories.chaud',
      desc: 'Boîtes burgers, étuis à frites, box wraps, boîtes starters.',
      icon: Flame,
      image: '/images/burger.jpg',
      link: '/produits?cat=chaud'
    },
    {
      titleKey: 'categories.salades',
      desc: 'Poke bowls, saladiers ronds, pasta cups & noodle boxes.',
      icon: Salad,
      image: '/images/poke.jpg',
      link: '/produits?cat=salades'
    },
    {
      titleKey: 'categories.boulangerie',
      desc: 'Boîtes sandwichs triangles, étuis paninis, sachets viennoiseries.',
      icon: Sandwich,
      image: '/images/bakery.jpg',
      link: '/produits?cat=boulangerie'
    },
    {
      titleKey: 'categories.sacs',
      desc: 'Sacs cabas kraft fond large traiteur et sacs SOS livraison.',
      icon: ShoppingBag,
      image: '/images/hero.jpg',
      link: '/produits?cat=sacs'
    },
    {
      titleKey: 'categories.gobelets',
      desc: 'Gobelets double paroi, papier burger imprimé et serviettes.',
      icon: Coffee,
      image: '/images/bakery.jpg',
      link: '/produits?cat=gobelets'
    },
    {
      titleKey: 'categories.luxe',
      desc: 'Sacs en papier de luxe avec ruban, boîtes rigides aimantées et emballages cadeaux.',
      icon: Gift,
      image: '/images/luxury_paper_bags.jpg',
      link: '/produits?cat=luxe'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                <img src="/images/shapack_logo_icon.svg" alt="" className="w-4 h-4 object-contain" />
                <span>{t('hero.badge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {t('hero.title1')}{' '}
                <span className="text-blue-600">{t('hero.title2')}</span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {t('hero.subtitle')}
              </p>

              {/* Reassurance pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t('hero.reassurance1')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t('hero.reassurance2')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t('hero.reassurance3')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t('hero.reassurance4')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>{t('hero.btnQuote')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/produits"
                  className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 flex items-center justify-center gap-2 transition-all"
                >
                  <span>{t('hero.btnCatalog')}</span>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img 
                  src="/images/hero.jpg" 
                  alt="SHAPACK Custom packaging lineup" 
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Official Logo Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2">
                  <img src="/images/shapack_logo_icon.svg" alt="SHAPACK" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-slate-900">shapack packaging</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-200 shadow-md flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t('hero.badgeOffset')}</p>
                    <p className="text-[11px] text-slate-500">Carton kraft & blanc haute rigidité</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {t('hero.badgeMoq')}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1-Second Auto-Sliding Trusted By Carousel */}
      <TrustedBySlider />

      {/* 3 Core Services Pillars */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('pillars.title')}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t('pillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t('pillars.p1Title')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('pillars.p1Desc')}
              </p>
            </div>

            <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-200 shadow-sm space-y-3 relative">
              <span className="absolute top-4 right-4 text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded">
                {t('pillars.p2Badge')}
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t('pillars.p2Title')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('pillars.p2Desc')}
              </p>
              <Link to="/produits" className="inline-block text-xs font-bold text-blue-600 hover:underline pt-1">
                {t('pillars.p2Link')}
              </Link>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t('pillars.p3Title')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('pillars.p3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                {t('categories.tag')}
              </span>
              <h2 className="text-3xl font-black text-slate-900">
                {t('categories.title')}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t('categories.subtitle')}
              </p>
            </div>

            <Link
              to="/produits"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline self-start md:self-auto"
            >
              <span>{t('categories.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryHighlights.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={idx}
                  to={cat.link}
                  className="group rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col bg-white"
                >
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img 
                      src={cat.image} 
                      alt={t(cat.titleKey)} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-blue-600" />
                      <span>{t(cat.titleKey)}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {t(cat.titleKey)}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>{t('categories.discover')}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Quick Quote Promo Card */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Package className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {t('hero.btnQuote')}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('conditions.quoteSub')}
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-center font-bold text-xs transition-colors"
              >
                {t('nav.quoteBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Social Media Area */}
      <InstagramFeed />

      {/* Operational Process (3 Simple Steps) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('process.title')}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase">{t('process.s1Tag')}</div>
              <h4 className="font-bold text-slate-900 text-base">{t('process.s1Title')}</h4>
              <p className="text-xs text-slate-600">{t('process.s1Desc')}</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase">{t('process.s2Tag')}</div>
              <h4 className="font-bold text-slate-900 text-base">{t('process.s2Title')}</h4>
              <p className="text-xs text-slate-600">{t('process.s2Desc')}</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-blue-200 bg-blue-50/20 shadow-sm space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase">{t('process.s3Tag')}</div>
              <h4 className="font-bold text-slate-900 text-base">{t('process.s3Title')}</h4>
              <p className="text-xs text-slate-600">{t('process.s3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Conditions Summary */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <span className="text-xs uppercase text-slate-400 font-bold block mb-1">{t('conditions.moqLabel')}</span>
              <p className="text-2xl font-black text-blue-400">{t('conditions.moqVal')}</p>
              <p className="text-xs text-slate-400 mt-1">{t('conditions.moqSub')}</p>
            </div>

            <div>
              <span className="text-xs uppercase text-slate-400 font-bold block mb-1">{t('conditions.timeLabel')}</span>
              <p className="text-2xl font-black text-blue-400">{t('conditions.timeVal')}</p>
              <p className="text-xs text-slate-400 mt-1">{t('conditions.timeSub')}</p>
            </div>

            <div>
              <span className="text-xs uppercase text-slate-400 font-bold block mb-1">{t('conditions.quoteLabel')}</span>
              <p className="text-2xl font-black text-white">{t('conditions.quoteVal')}</p>
              <p className="text-xs text-slate-400 mt-1">{t('conditions.quoteSub')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & AI Search FAQ Section (Local authority Brussels) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions Fréquentes • FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Tout savoir sur vos emballages personnalisés à Bruxelles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Fabricant B2B de confiance pour les professionnels de la restauration et du retail en Belgique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                Pourquoi choisir SHAPACK à Bruxelles et en Belgique ?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">
                Basé à Bruxelles, SHAPACK combine l'expertise industrielle de l'emballage alimentaire haute rigidité (boîtes burgers, saladiers poke, gobelets, sacs kraft) et du packaging de luxe (sacs avec rubans satin, coffrets rigides aimantés). Nous offrons un chiffrage rapide sous 24h et une distribution suivie dans tout le Benelux et la France.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                Quelles sont les options de personnalisation et finitions ?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">
                Nous réalisons l'impression offset quadri 100% de surface, le marquage à chaud (dorure or, argent, or rose), le gaufrage en relief et le pelliculage mat soft-touch. Vos visuels sont vérifiés avec précision sur nos gabarits industriels avant validation du BAT.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                Y a-t-il une quantité minimale de commande (MOQ) ?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">
                Non. Grâce à nos filières de production partenaires, nous proposons des volumes flexibles adaptés aussi bien aux petites séries de lancement qu'aux volumes importants pour réseaux multi-sites. Tous nos tarifs sont calculés sur devis sous 24h.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                Quels sont les délais de devis et de livraison ?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">
                Votre devis chiffré vous parvient sous 24 heures ouvrées. Après approbation du BAT numérique, les délais de fabrication et de livraison directe à votre adresse sont généralement de 2 à 4 semaines.
              </p>
            </div>
          </div>

          {/* Quick Hub Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Prêt à emballer votre restaurant à Bruxelles ?</h4>
                <p className="text-xs text-blue-100">Devis gratuit & réponse garantie sous 24 heures ouvrées.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs shadow transition-all shrink-0"
            >
              Demander mon devis gratuit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
