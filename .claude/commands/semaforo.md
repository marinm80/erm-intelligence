Lee el CLAUDE.md para cargar el contexto del proyecto y luego muestra el Semáforo de Estado actual.

Escanea los siguientes archivos clave del proyecto para determinar el estado real de cada dominio:
- backend/src/config/database.ts
- backend/src/controllers/risk.controller.ts
- backend/src/controllers/application.controller.ts
- backend/src/repositories/risk.repository.ts
- backend/src/repositories/application.repository.ts
- backend/src/services/risk.service.ts
- backend/src/services/application.service.ts
- backend/src/app.ts
- backend/src/routes/risk.routes.ts
- backend/src/routes/application.routes.ts
- frontend/src/components/careers/ApplicationForm.tsx
- frontend/src/components/Contact.tsx

Luego genera el Semáforo de Estado usando el formato definido en CLAUDE.md sección 4.2, evaluando los 6 dominios:
1. TypeScript Quality — busca usos de `any`
2. Async/Await Compliance — busca `.then()/.catch()` o callbacks
3. Input Validation (Zod) — verifica si Zod está siendo usado
4. Seguridad — verifica CORS, auth, error exposure, hardcoded URLs
5. Arquitectura — verifica DI, multer placement, error middleware
6. Convenciones de Código — verifica naming, magic strings

Indica cuántos hallazgos ABIERTOS del baseline (F-001 a F-020) siguen sin resolver.
