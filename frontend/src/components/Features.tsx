import { Eye, Shield, FileCheck } from 'lucide-react';

const PILARES = [
  {
    icon: <Eye className="w-8 h-8 text-[var(--color-brand-red)]" />,
    title: "Identificación Proactiva",
    description: "Detección temprana de riesgos mediante algoritmos avanzados de IA y análisis predictivo de datos corporativos."
  },
  {
    icon: <Shield className="w-8 h-8 text-[var(--color-brand-red)]" />,
    title: "Mitigación Estratégica",
    description: "Soluciones personalizadas para minimizar impactos negativos y optimizar la toma de decisiones en escenarios críticos."
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[var(--color-brand-red)]" />,
    title: "Gobernanza & Cumplimiento",
    description: "Automatización de procesos de auditoría y marcos normativos para asegurar la resiliencia y el cumplimiento total."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl text-[var(--color-stone-800)]">Los 3 Pilares de ERM <span className="text-[var(--color-brand-red)]">Intelligence</span></h2>
          <p className="text-[var(--color-stone-500)] max-w-2xl mx-auto">Nuestra plataforma se sustenta en tres ejes estratégicos diseñados para ofrecer seguridad y visión a largo plazo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILARES.map((pilar, index) => (
            <div 
              key={index} 
              className="p-10 rounded-[24px] bg-[var(--color-stone-50)] border border-[var(--color-stone-200)] hover:shadow-2xl hover:shadow-stone-200 transition-all group hover:-translate-y-2 duration-300"
            >
              <div className="mb-8 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:bg-red-50 transition-colors">
                {pilar.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-stone-800)] mb-4">{pilar.title}</h3>
              <p className="text-[var(--color-stone-500)] leading-relaxed text-sm">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
