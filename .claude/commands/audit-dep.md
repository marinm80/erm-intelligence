Lee el CLAUDE.md para cargar el rol de Auditor de Seguridad y Supervisor de Calidad.

Ejecuta una auditoría tipo AUDIT-DEP sobre las dependencias del proyecto ERM Intelligence.

Lee los siguientes archivos:
- backend/package.json
- frontend/package.json

Para cada dependencia en `dependencies` y `devDependencies` evalúa:
1. **Uso real**: ¿Se importa en algún archivo del proyecto? (busca imports en src/)
2. **Estado de mantenimiento**: ¿Es una versión LTS, obsoleta o en mantenimiento activo?
3. **Compatibilidad**: ¿Hay conflictos conocidos con el stack (Express v5, React 19, TypeScript 6)?
4. **Seguridad**: Identifica si hay patrones de versiones conocidos por vulnerabilidades (e.g., versiones -lts en fin de vida)

Genera el reporte con:
- Encabezado AUDIT-DEP
- Tabla de backend: Paquete | Versión | Usado | Estado | Recomendación
- Tabla de frontend: Paquete | Versión | Usado | Estado | Recomendación
- Lista de acciones recomendadas para Gemini (ordenadas por prioridad)

Presta especial atención a:
- `zod` — instalado pero sin uso reportado
- `multer` — versión 1.4.5-lts.1 en mantenimiento
- Cualquier dependencia duplicada entre backend y frontend
