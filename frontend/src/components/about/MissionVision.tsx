import { useTranslation } from 'react-i18next';

export const MissionVision = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-10 rounded-3xl bg-stone-50 border border-stone-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-bold tracking-widest text-(--color-brand-red) uppercase mb-4">{t('about.mission_tag')}</h3>
            <p className="text-2xl text-stone-800 font-light leading-relaxed">
              {t('about.mission_desc')}
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-(--color-brand-dark) border border-stone-800 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-4">{t('about.vision_tag')}</h3>
            <p className="text-2xl text-stone-200 font-light leading-relaxed">
              {t('about.vision_desc')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
