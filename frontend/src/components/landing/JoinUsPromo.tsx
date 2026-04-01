import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const JoinUsPromo = () => {
  const { t } = useTranslation();
  return (
    <section id="join-us" className="py-24 bg-stone-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-(--color-brand-red) rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-(--color-brand-red) animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white">{t('join_us.badge')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              {t('join_us.title1')} <span className="text-(--color-brand-red)">{t('join_us.title2')}</span>
            </h2>
            
            <p className="text-lg text-stone-400 leading-relaxed max-w-xl">
              {t('join_us.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link 
                to="/careers" 
                className="w-full sm:w-auto px-8 py-4 bg-(--color-brand-red) text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all hover:scale-[1.02] shadow-xl shadow-red-500/20 group"
              >
                {t('join_us.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-(--color-brand-red) rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <ul className="space-y-6 mt-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-brand-red) mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{t('join_us.benefits.1_title')}</h4>
                    <p className="text-stone-400 text-sm">{t('join_us.benefits.1_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-brand-red) mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{t('join_us.benefits.2_title')}</h4>
                    <p className="text-stone-400 text-sm">{t('join_us.benefits.2_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-brand-red) mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{t('join_us.benefits.3_title')}</h4>
                    <p className="text-stone-400 text-sm">{t('join_us.benefits.3_desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
