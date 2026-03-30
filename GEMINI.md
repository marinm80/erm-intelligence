# GEMINI.md - ERM Intelligence
## Foundational Mandates
Este documento establece las reglas crÃ­ticas y el progreso del proyecto ERM Intelligence. Estas instrucciones tienen precedencia absoluta sobre cualquier otra directiva general.

### Reglas de Desarrollo
1. **TypeScript Estricto:** Prohibido el uso de `any`. Definir interfaces/tipos para todo.
2. **AsincronÃ­a:** Prohibido el uso de *callbacks*. Usar exclusivamente `async/await`.
3. **Nomenclatura:** ConvenciÃ³n `camelCase` para variables/funciones y `PascalCase` para componentes React/Clases.
4. **PatrÃ³n de DiseÃ±o:** Uso obligatorio de **Repository Pattern** en el backend.
5. **Estilos:** Tailwind CSS v4 exclusivamente.

---

## Detailed Task List & Roadmap

### Phase 1: Estructura & Setup ✅
- [x] Inicializar Repo & Master Config.
- [x] Setup Backend (Express, TS, Helmet, Cors).
- [x] Setup Frontend (React 19, Vite, Tailwind v4).
- [x] Definición de tokens de marca y guía de estilo.

### Phase 2: Diseño Visual (Pencil) ✅
- [x] Crear Sitemap visual (Home, Solutions, Careers, App).
- [x] Diseño Hero Section & Pilares.
- [x] Diseño estratégico para captación de leads (Solicitar Cotización).
- [x] Crear sección de "Contáctenos".

### Phase 3: Frontend Development (MVP) 🏗️
- **Landing Page:**
    - [x] Navbar con badge 'HIRING' y botón de Cotización.
    - [x] Hero Section responsivo.
    - [x] Sección "Los 3 Pilares" (Identificación, Mitigación, Gobernanza).
    - [x] Sección de Soluciones (Refactorizada).
    - [x] Sección de Contacto (Formulario de solicitud de servicios).
    - [x] Footer corporativo sincronizado con Pencil.
- **Client Platform (En Pausa):**
    - [ ] Layout de Dashboard.
    - [ ] Vista de Inventario de Riesgos.

### Phase 4: Backend Development (Core) ⚙️
- **Infraestructura:**
    - [x] Pool de conexión a PostgreSQL (Agnóstico).
    - [x] Base Repository Interface.
- **Risk Module:**
    - [x] Modelo, Repositorio y Servicio de `Risk`.
    - [x] Endpoints CRUD para `/api/risks`.

---

## Historial de Progreso
- **2026-03-30:** Auditoría técnica y Commit Base.
- **2026-03-30:** Integración de sección 'Careers' y simplificación estratégica (eliminación de Academy/Seguridad).
- **2026-03-30:** Implementación de flujo de Cotización y sección de Contacto. Refactoring completo de componentes frontend.
