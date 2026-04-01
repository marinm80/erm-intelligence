import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-20 bg-white border-t border-[#E8E8E8]">
      <div className="container-custom px-6 md:px-12">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="space-y-6 max-w-sm">
               <Logo className="scale-125 transform origin-left mb-2" />
               <p className="text-[#7A7A7A] text-sm leading-relaxed">
                  © 2026 ERM Intelligence. {t('footer.tagline')}
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">{t('footer.company')}</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#soluciones" className="hover:text-[#E42313] transition-colors">{t('nav.solutions')}</a></li>
                     <li><Link to="/careers" className="hover:text-[#E42313] transition-colors">{t('nav.careers')}</Link></li>
                     <li><Link to="/about" className="hover:text-[#E42313] transition-colors">{t('nav.about')}</Link></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">{t('footer.resources')}</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#contacto" className="hover:text-[#E42313] transition-colors">{t('nav.contact')}</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">{t('footer.docs')}</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">{t('footer.blog')}</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">{t('footer.legal')}</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">{t('footer.privacy')}</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">{t('footer.terms')}</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </footer>
  );
};
