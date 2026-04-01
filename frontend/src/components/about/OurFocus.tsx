import { Users, Building2, Briefcase, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const OurFocus = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-stone-50 py-24 sm:py-32 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {t('about.focus_title')}
          </h2>
          <p className="mt-6 text-lg text-stone-600" dangerouslySetInnerHTML={{ __html: t('about.focus_desc').replace('atención excepcional y el indispensable toque humano', '<strong>atención excepcional y el indispensable toque humano</strong>') }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-(--color-brand-red)">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t('about.focus_part')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('about.focus_part_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-(--color-brand-red)">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t('about.focus_peq')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('about.focus_peq_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-(--color-brand-red)">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t('about.focus_med')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('about.focus_med_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-(--color-brand-red)">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t('about.focus_gr')}</h3>
            <p className="text-stone-600 leading-relaxed">
              {t('about.focus_gr_desc')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
