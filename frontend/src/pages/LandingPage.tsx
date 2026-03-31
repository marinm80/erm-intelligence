import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Solutions } from '../components/Solutions';
import { Contact } from '../components/Contact';
import { JoinUsPromo } from '../components/landing/JoinUsPromo';

export const LandingPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />

      {/* LOS 3 PILARES */}
      <Features />

      {/* SOLUCIONES - B2B & B2C */}
      <Solutions />

      {/* FINAL CTA */}
      <section className="py-24 bg-[#E42313]">
         <div className="container-custom text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight">
               ¿Listo para transformar su arquitectura?
            </h2>
            <a href="#contacto" className="inline-block bg-[#0D0D0D] text-white px-10 py-5 rounded-lg font-display font-bold text-lg hover:bg-stone-800 transition-transform hover:scale-105 shadow-xl">
               Solicitar Cotización
            </a>
         </div>
      </section>

      {/* JOIN US PROMO */}
      <JoinUsPromo />

      {/* CONTACT SECTION */}
      <Contact />
    </main>
  );
};
