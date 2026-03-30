import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-stone-100)] border border-[var(--color-stone-200)] animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--color-stone-800)]">Nueva Era de IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl leading-[1.1] text-[var(--color-stone-800)] font-display font-bold">
            IA Estratégica para la Gestión de <span className="text-[var(--color-brand-red)]">Riesgos</span> Empresariales
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-stone-500)] max-w-2xl leading-relaxed">
            Anticipe, evalúe y mitigue riesgos con la potencia de la Inteligencia Artificial. ERM Intelligence transforma la incertidumbre en ventaja competitiva.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[var(--color-brand-red)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all hover:scale-[1.02] shadow-xl shadow-red-500/20 group">
              Comenzar Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-[var(--color-stone-200)] text-[var(--color-stone-800)] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-all">
              <Play className="w-4 h-4 fill-current" />
              Ver Soluciones
            </button>
          </div>
          
          <div className="relative mt-16 w-full max-w-5xl group">
             <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/10 to-transparent blur-2xl rounded-[32px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative bg-[var(--color-stone-100)] border border-[var(--color-stone-200)] rounded-[24px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bb6c9b438a50?auto=format&fit=crop&q=80&w=2070" 
                  alt="ERM Platform Overview" 
                  className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
