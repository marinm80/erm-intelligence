import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="py-24 bg-[#FAFAFA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 px-6 md:px-12">
           <div className="flex-1 space-y-8">
              <div className="space-y-4">
                 <span className="text-[#E42313] font-display text-sm font-semibold tracking-wider uppercase">{t('contact.badge')}</span>
                 <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0D0D0D] tracking-tight">
                    {t('contact.title')}
                 </h2>
                 <p className="text-[#7A7A7A] text-lg leading-relaxed">
                    {t('contact.description')}
                 </p>
              </div>
              <div className="space-y-6 pt-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#E8E8E8]">
                       <ShieldCheck className="w-6 h-6 text-[#E42313]" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-[#0D0D0D]">{t('contact.info_title')}</h4>
                       <p className="text-sm text-[#7A7A7A]">{t('contact.info_desc')}</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="flex-1">
              <form className="bg-white p-8 md:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-[#7A7A7A]">{t('contact.form.name_label')}</label>
                       <input type="text" className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors" placeholder={t('contact.form.name_placeholder')} />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-[#7A7A7A]">{t('contact.form.email_label')}</label>
                       <input type="email" className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors" placeholder={t('contact.form.email_placeholder')} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#7A7A7A]">{t('contact.form.service_label')}</label>
                    <select className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors appearance-none">
                       <option>{t('contact.form.services.1')}</option>
                       <option>{t('contact.form.services.2')}</option>
                       <option>{t('contact.form.services.3')}</option>
                       <option>{t('contact.form.services.4')}</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#7A7A7A]">{t('contact.form.message_label')}</label>
                    <textarea className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors h-32" placeholder={t('contact.form.message_placeholder')}></textarea>
                 </div>
                 <button className="w-full py-4 bg-[#E42313] text-white font-display font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
                    {t('contact.form.submit')}
                 </button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};
