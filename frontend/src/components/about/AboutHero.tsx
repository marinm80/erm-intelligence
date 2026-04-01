import { useTranslation } from 'react-i18next';

export const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-stone-900 text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-(--color-brand-red) rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-(--color-brand-dark) rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          {t('about.hero_title1')}
          <span className="block text-(--color-brand-red) mt-2">{t('about.hero_title2')}</span>
        </h1>
        <p className="mt-4 text-xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed">
          {t('about.hero_subtitle')}
        </p>
      </div>
    </div>
  );
};
