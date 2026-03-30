import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Placeholder para futuras secciones de Pencil */}
        <section className="py-20 bg-[var(--color-stone-50)] border-t border-[var(--color-stone-200)]">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold text-[var(--color-stone-400)] uppercase tracking-widest">
              Próximamente: Soluciones & Academy
            </h2>
          </div>
        </section>
      </main>
      
      <footer className="py-12 bg-[var(--color-brand-dark)] text-white">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight uppercase">
              ERM <span className="text-[var(--color-brand-red)]">Intelligence</span>
            </span>
          </div>
          <p className="text-[var(--color-stone-400)] text-sm">
            © 2026 ERM Intelligence - Soluciones Avanzadas en Gestión de Riesgos.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[var(--color-brand-red)] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[var(--color-brand-red)] transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
