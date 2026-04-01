import { useTranslation } from 'react-i18next';

export const CareersHero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-stone-800 text-white pt-32 pb-20 rounded-b-[3rem] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-(--color-brand-red) rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-(--color-brand-red) animate-pulse"></span>
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white">{t('careers.badge')}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold max-w-4xl mx-auto leading-[1.1]">
          {t('careers.hero_title1')} <span className="text-(--color-brand-red)">{t('careers.hero_title2')}</span>
        </h1>
        
        <p className="text-xl text-stone-400 max-w-2xl mx-auto">
          {t('careers.hero_desc')}
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm font-mono uppercase tracking-wider text-stone-400">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-(--color-brand-red) rounded-full"></div>
            <span>{t('careers.remote')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-(--color-brand-red) rounded-full"></div>
            <span>{t('careers.global')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-(--color-brand-red) rounded-full"></div>
            <span>{t('careers.training')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
