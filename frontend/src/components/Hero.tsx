import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import platformVideo from '../assets/video.mp4';
export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-(--color-brand-red) animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-stone-800">{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl leading-[1.1] text-stone-800 font-display font-bold">
            {t('hero.title1')} <span className="text-(--color-brand-red)">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-(--color-brand-red) text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all hover:scale-[1.02] shadow-xl shadow-red-500/20 group">
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-800 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-all">
              <Play className="w-4 h-4 fill-current" />
              {t('hero.secondaryCta')}
            </button>
          </div>
          
          <div className="relative mt-16 w-full max-w-5xl group">
             <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-transparent blur-2xl rounded-[32px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative bg-stone-100 border border-stone-200 rounded-[24px] overflow-hidden shadow-2xl">
                <video 
                  src={platformVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
