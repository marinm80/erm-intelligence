import { ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-stone-200 z-50">
      <div className="container-custom py-3 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
          <a href="/#soluciones" className="hover:text-(--color-brand-red) transition-colors">{t('nav.solutions')}</a>
          <a href="/#join-us" className="relative hover:text-(--color-brand-red) transition-colors group">
            {t('nav.careers')}
            <span className="absolute -top-3 -right-6 px-1.5 py-0.5 rounded-full bg-red-100 text-[8px] text-(--color-brand-red) font-bold animate-bounce">{t('nav.hiring')}</span>
          </a>
          <Link to="/about" className="hover:text-(--color-brand-red) transition-colors">{t('nav.about')}</Link>
          <a href="/#contacto" className="hover:text-(--color-brand-red) transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase text-stone-500 hover:text-stone-900 transition-colors bg-stone-100 px-3 py-1.5 rounded-full"
          >
            <Globe className="w-3.5 h-3.5" />
            {i18n.language.toUpperCase()}
          </button>
          
          <a href="/#contacto" className="hidden sm:flex items-center gap-2 bg-(--color-brand-dark) text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-stone-800 transition-all group">
            {t('nav.quote')}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
};
