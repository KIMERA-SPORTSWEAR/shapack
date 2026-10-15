import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { ShapackLogo } from './ShapackLogo';
import { Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/produits', label: t('nav.products') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              {t('nav.topTag')}
            </span>
            <span className="hidden md:inline text-slate-300">
              / {t('nav.topQuote')}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+32498221169" 
              className="flex items-center gap-1.5 text-white hover:text-blue-400 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+32 498 22 11 69</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 hidden sm:inline">{t('nav.hours')}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with official vector emblem */}
          <Link to="/" className="flex items-center gap-3 group select-none py-1">
            <ShapackLogo className="w-10 h-10 object-contain" showText={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-2 relative ${
                    active 
                      ? 'text-blue-600 font-bold' 
                      : 'hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                title="Changer de langue / Change language"
              >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in duration-150">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        language === l.code
                          ? 'bg-blue-50 text-blue-600 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </div>
                      {language === l.code && <span className="text-blue-600 text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all"
            >
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                const nextLang: Record<Language, Language> = { fr: 'en', en: 'de', de: 'nl', nl: 'fr' };
                setLanguage(nextLang[language]);
              }}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1"
            >
              <span>{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.code}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language selector in mobile menu */}
          <div className="pt-2 pb-1 border-t border-slate-100 flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Langue / Language :</span>
            <div className="flex items-center gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    language === l.code ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
            >
              <span>{t('nav.quoteBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
