import { ArrowRight } from 'lucide-react';

export const Solutions = () => {
  return (
    <section id="soluciones" className="py-24 bg-[#FAFAFA]">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16 md:gap-20 px-6 md:px-12">
        <div className="flex-1 space-y-6">
          <span className="text-[#E42313] font-display text-sm font-semibold tracking-wider uppercase">Soluciones a Medida</span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0D0D0D] tracking-tight leading-none">
            Sistemas Inteligentes B2B & B2C
          </h2>
          <p className="text-[#7A7A7A] text-lg leading-relaxed">
            Desde automatización de procesos hasta asistentes personalizados, creamos la herramienta que su empresa necesita para liderar.
          </p>
          <div className="pt-4">
             <button className="flex items-center gap-2 font-display font-semibold text-[#0D0D0D] hover:text-[#E42313] transition-colors group">
                Explorar Soluciones
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
        <div className="flex-1 h-[400px] w-full bg-stone-200 rounded-lg overflow-hidden border border-[#E8E8E8] shadow-lg">
           <img 
             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
             alt="Business Solutions" 
             className="w-full h-full object-cover"
           />
        </div>
      </div>
    </section>
  );
};
