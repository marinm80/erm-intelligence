import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JoinUsPromo = () => {
  return (
    <section id="join-us" className="py-24 bg-[var(--color-stone-800)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-brand-red)] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-red)] animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white">We're Hiring</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              Diseña el futuro de la <span className="text-[var(--color-brand-red)]">Inteligencia Empresarial</span>
            </h2>
            
            <p className="text-lg text-[var(--color-stone-400)] leading-relaxed max-w-xl">
              En ERM Intelligence no solo prevenimos riesgos, creamos certidumbre. Estamos buscando mentes brillantes que quieran desafiar el status quo usando IA aplicada. Trabaja con un equipo de élite, 100% remoto, y construye plataformas que impactan la economía global.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link 
                to="/careers" 
                className="w-full sm:w-auto px-8 py-4 bg-[var(--color-brand-red)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all hover:scale-[1.02] shadow-xl shadow-red-500/20 group"
              >
                JOIN US
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[var(--color-brand-red)] rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <ul className="space-y-6 mt-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-red)] mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Cultura de Innovación</h4>
                    <p className="text-[var(--color-stone-400)] text-sm">Libertad para proponer, probar e iterar con las últimas tecnologías en LLMs e infraestructuras cloud.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-red)] mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Flexibilidad Total</h4>
                    <p className="text-[var(--color-stone-400)] text-sm">Organización 100% orientada a objetivos con modalidad remota first para casi todas las posiciones.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-red)] mt-2"></div>
                  <div>
                    <h4 className="font-display font-bold text-lg">Crecimiento sin techo</h4>
                    <p className="text-[var(--color-stone-400)] text-sm">Presupuesto anual para formación técnica, certificaciones (AWS, CISSP) y conferencias globales.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
