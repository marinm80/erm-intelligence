import { ShieldCheck } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-[#FAFAFA]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 px-6 md:px-12">
           <div className="flex-1 space-y-8">
              <div className="space-y-4">
                 <span className="text-[#E42313] font-display text-sm font-semibold tracking-wider uppercase">Hablemos</span>
                 <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#0D0D0D] tracking-tight">
                    ¿Cómo podemos ayudarle?
                 </h2>
                 <p className="text-[#7A7A7A] text-lg leading-relaxed">
                    Nuestro equipo de expertos en IA y Gestión de Riesgos está listo para diseñar la solución perfecta para su organización.
                 </p>
              </div>
              <div className="space-y-6 pt-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#E8E8E8]">
                       <ShieldCheck className="w-6 h-6 text-[#E42313]" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-[#0D0D0D]">Consultoría Especializada</h4>
                       <p className="text-sm text-[#7A7A7A]">Análisis profundo de su arquitectura de riesgos.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="flex-1">
              <form className="bg-white p-8 md:p-10 rounded-2xl border border-[#E8E8E8] shadow-sm space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-[#7A7A7A]">Nombre</label>
                       <input type="text" className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors" placeholder="Su nombre" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase text-[#7A7A7A]">Email</label>
                       <input type="email" className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors" placeholder="email@empresa.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#7A7A7A]">Servicio de Interés</label>
                    <select className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors appearance-none">
                       <option>Gestión de Riesgos con IA</option>
                       <option>Auditoría de Sistemas</option>
                       <option>Implementación B2B</option>
                       <option>Otro servicio</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#7A7A7A]">Mensaje</label>
                    <textarea className="w-full p-3 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-[#E42313] transition-colors h-32" placeholder="Cuéntenos sobre su proyecto..."></textarea>
                 </div>
                 <button className="w-full py-4 bg-[#E42313] text-white font-display font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
                    Enviar Solicitud
                 </button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};
