import { ShieldCheck, BrainCircuit, HeartHandshake, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CoreValues = () => {
  const { t } = useTranslation();
  const values = [
    {
      title: t('about.val_sec'),
      description: t('about.val_sec_desc'),
      icon: <ShieldCheck className="w-8 h-8 text-white" />
    },
    {
      title: t('about.val_int'),
      description: t('about.val_int_desc'),
      icon: <BrainCircuit className="w-8 h-8 text-white" />
    },
    {
      title: t('about.val_acomp'),
      description: t('about.val_acomp_desc'),
      icon: <HeartHandshake className="w-8 h-8 text-white" />
    },
    {
      title: t('about.val_esc'),
      description: t('about.val_esc_desc'),
      icon: <LineChart className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900">
            {t('about.values_title')}
          </h2>
          <div className="mt-4 h-1 w-24 bg-(--color-brand-red) mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-(--color-brand-red) w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                {v.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-stone-900 group-hover:text-(--color-brand-red) transition-colors">
                {v.title}
              </h3>
              <p className="mt-3 text-base text-stone-600 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
