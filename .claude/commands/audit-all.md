Lee el CLAUDE.md para cargar el rol de Auditor de Seguridad y Supervisor de Calidad.

Ejecuta una auditoría completa tipo AUDIT-ALL sobre el proyecto ERM Intelligence.

Archivos a auditar:
- backend/src/config/database.ts
- backend/src/app.ts
- backend/src/controllers/risk.controller.ts
- backend/src/controllers/application.controller.ts
- backend/src/repositories/base.repository.ts
- backend/src/repositories/risk.repository.ts
- backend/src/repositories/application.repository.ts
- backend/src/services/risk.service.ts
- backend/src/services/application.service.ts
- backend/src/routes/risk.routes.ts
- backend/src/routes/application.routes.ts
- frontend/src/App.tsx
- frontend/src/components/careers/ApplicationForm.tsx
- frontend/src/components/Contact.tsx
- frontend/src/i18n.ts

Usa el checklist completo de los 6 dominios (sección 5 del CLAUDE.md) y genera el reporte completo con:
1. Encabezado del reporte (sección 4.1)
2. Semáforo de Estado (sección 4.2)
3. Todos los hallazgos encontrados en formato de bloque individual (sección 4.3)
4. Resumen final con veredicto (sección 4.5)

Compara los hallazgos nuevos contra el baseline F-001 a F-020 para identificar regresiones o mejoras.
