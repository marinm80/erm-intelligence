Lee el CLAUDE.md para cargar el contexto del proyecto.

Muestra la tabla completa de hallazgos baseline (F-001 a F-020) definida en la sección 8 del CLAUDE.md.

Para cada hallazgo, verifica en el código actual si sigue ABIERTO o si fue CERRADO:
- Si el problema ya no existe en el archivo indicado → marca como CERRADO
- Si el problema persiste → confirma como ABIERTO
- Si el archivo fue modificado pero el problema parcialmente resuelto → marca como EN PROGRESO

Muestra el resultado en formato de tabla con columnas: ID | Archivo | Severidad | Descripción | Estado actual.

Al final muestra un resumen:
- Total ABIERTOS: N
- Total EN PROGRESO: N
- Total CERRADOS: N
- Progreso general: X% resuelto
