import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ShapackLogo } from './ShapackLogo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 text-sm">
      {/* Pre-footer Call to Action */}
      <div className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {t('footer.ctaTitle')}
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              {t('footer.ctaSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm shadow-md transition-colors"
            >
              {t('footer.ctaBtn')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Identity */}
          <div className="space-y-4">
            <ShapackLogo className="w-9 h-9 object-contain" showText={true} textColor="text-white" />

            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer.about')}
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>SHAPACK Packaging • Bruxelles, Belgique</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t('nav.hours')}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/shapack.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram @shapack.be"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.nav')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/produits" className="hover:text-blue-400 transition-colors">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Gammes Produits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.ranges')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/produits?cat=chaud" className="hover:text-blue-400 transition-colors">
                  {t('categories.chaud')}
                </Link>
              </li>
              <li>
                <Link to="/produits?cat=salades" className="hover:text-blue-400 transition-colors">
                  {t('categories.salades')}
                </Link>
              </li>
              <li>
                <Link to="/produits?cat=boulangerie" className="hover:text-blue-400 transition-colors">
                  {t('categories.boulangerie')}
                </Link>
              </li>
              <li>
                <Link to="/produits?cat=sacs" className="hover:text-blue-400 transition-colors">
                  {t('categories.sacs')}
                </Link>
              </li>
              <li>
                <Link to="/produits?cat=gobelets" className="hover:text-blue-400 transition-colors">
                  {t('categories.gobelets')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t('footer.commercialContact')}
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+32498221169"
                className="p-3 rounded-lg bg-slate-800 border border-slate-700 block hover:border-blue-500 transition-colors"
              >
                <span className="text-[10px] text-slate-400 block">Téléphone direct :</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  +32 498 22 11 69
                </span>
              </a>

              <a 
                href="mailto:hello@shapack.be"
                className="p-3 rounded-lg bg-slate-800 border border-slate-700 block hover:border-blue-500 transition-colors"
              >
                <span className="text-[10px] text-slate-400 block">Email :</span>
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  hello@shapack.be
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-10 mt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">{t('footer.legal')}</span>
            <span className="hover:text-slate-400 cursor-pointer">{t('footer.terms')}</span>
            <span className="hover:text-slate-400 cursor-pointer">{t('footer.privacy')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
