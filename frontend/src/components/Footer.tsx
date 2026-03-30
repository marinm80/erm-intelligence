import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-[#E8E8E8]">
      <div className="container-custom px-6 md:px-12">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="space-y-6 max-w-sm">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#E42313]" />
                  <span className="font-display text-xl font-bold uppercase tracking-tight text-[#0D0D0D]">
                     ERM <span className="text-[#E42313]">Intelligence</span>
                  </span>
               </div>
               <p className="text-[#7A7A7A] text-sm leading-relaxed">
                  © 2026 ERM Intelligence. Arquitectura inteligente para un crecimiento seguro.
               </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">Compañía</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#soluciones" className="hover:text-[#E42313] transition-colors">Soluciones</a></li>
                     <li><a href="#careers" className="hover:text-[#E42313] transition-colors">Careers</a></li>
                     <li><a href="#sobre-nosotros" className="hover:text-[#E42313] transition-colors">Sobre Nosotros</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">Recursos</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#contacto" className="hover:text-[#E42313] transition-colors">Contáctenos</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">Documentación</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">Blog</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="font-display font-bold text-sm uppercase text-[#0D0D0D]">Legal</h4>
                  <ul className="space-y-2 text-[#7A7A7A] text-sm">
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">Privacidad</a></li>
                     <li><a href="#" className="hover:text-[#E42313] transition-colors">Términos</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </footer>
  );
};
