import { Eye, Shield, FileCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  const PILARES = [
    {
      icon: <Eye className="w-8 h-8 text-brand-red" />,
      title: t('features.pilares.1_title'),
      description: t('features.pilares.1_desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-red" />,
      title: t('features.pilares.2_title'),
      description: t('features.pilares.2_desc')
    },
    {
      icon: <FileCheck className="w-8 h-8 text-brand-red" />,
      title: t('features.pilares.3_title'),
      description: t('features.pilares.3_desc')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl text-stone-800">{t('features.title1')} <span className="text-brand-red">{t('features.title2')}</span></h2>
          <p className="text-stone-500 max-w-2xl mx-auto">{t('features.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILARES.map((pilar, index) => (
            <div 
              key={index} 
              className="p-10 rounded-[24px] bg-stone-50 border border-stone-200 hover:shadow-2xl hover:shadow-stone-200 transition-all group hover:-translate-y-2 duration-300"
            >
              <div className="mb-8 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:bg-red-50 transition-colors">
                {pilar.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">{pilar.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
