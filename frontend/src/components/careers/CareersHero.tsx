export const CareersHero = () => {
  return (
    <section className="bg-[var(--color-stone-800)] text-white pt-32 pb-20 rounded-b-[3rem] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-[var(--color-brand-red)] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse"></span>
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white">We're Hiring</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold max-w-4xl mx-auto leading-[1.1]">
          Tu carrera en la era de la <span className="text-[var(--color-brand-red)]">inteligencia artificial</span>
        </h1>
        
        <p className="text-xl text-[var(--color-stone-400)] max-w-2xl mx-auto">
          Únete al equipo que está redefiniendo cómo las empresas más grandes del mundo gestionan la incertidumbre.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm font-mono uppercase tracking-wider text-[var(--color-stone-400)]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--color-brand-red)] rounded-full"></div>
            <span>100% Remoto</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--color-brand-red)] rounded-full"></div>
            <span>Global Team</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[var(--color-brand-red)] rounded-full"></div>
            <span>Formación Continua</span>
          </div>
        </div>
      </div>
    </section>
  );
};
