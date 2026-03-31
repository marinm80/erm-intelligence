import type { JobPosition } from '../types/careers';

export const jobPositions: JobPosition[] = [
  {
    id: 'eng-01',
    title: 'Senior Full-Stack Engineer (PERN)',
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Buscamos un ingeniero Senior Full-Stack experimentado en el stack PERN (PostgreSQL, Express, React, Node.js) para liderar el desarrollo de nuestra plataforma core.',
    requirements: [
      '+5 años de experiencia en Node.js y React',
      'Sólidos conocimientos en TypeScript y arquitectura de software',
      'Experiencia con PostgreSQL y optimización de consultas',
      'Inglés intermedio/avanzado'
    ],
    isActive: true,
  },
  {
    id: 'eng-02',
    title: 'AI/ML Engineer',
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Únete a nuestro equipo de IA para integrar modelos predictivos y LLMs en nuestras soluciones de ERM.',
    requirements: [
      '+3 años de experiencia en Machine Learning / Data Science',
      'Experiencia práctica con Python, TensorFlow o PyTorch',
      'Conocimientos en integración de APIs de OpenAI o similares',
      'Capacidad de análisis de datos complejos'
    ],
    isActive: true,
  },
  {
    id: 'eng-03',
    title: 'Backend Engineer (Node.js)',
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Híbrido',
    description: 'Desarrollador backend para mantenimiento y creación de nuevos servicios RESTful enfocados en alto rendimiento.',
    requirements: [
      '+3 años en Node.js / Express',
      'Fuerte experiencia en SQL, diseño de BD',
      'Manejo de Docker, CI/CD'
    ],
    isActive: true,
  },
  {
    id: 'eng-04',
    title: 'DevOps / Cloud Engineer',
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Responsable de la infraestructura cloud, pipelines de despliegue automatizado y monitoreo de sistemas.',
    requirements: [
      'AWS / GCP expertise',
      'Kubernetes, Terraform, Ansible',
      'Experiencia en entornos de alta disponibilidad'
    ],
    isActive: true,
  },
  {
    id: 'prod-01',
    title: 'Product Manager',
    department: 'Product',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Lidera la visión y el roadmap de ERM Intelligence, alineando las necesidades del cliente con el desarrollo técnico.',
    requirements: [
      '+4 años de experiencia como Product Manager en B2B SaaS',
      'Fuerte comprensión de metodologías ágiles',
      'Habilidad para traducir métricas en decisiones de producto'
    ],
    isActive: true,
  },
  {
    id: 'prod-02',
    title: 'UX/UI Designer',
    department: 'Product',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Diseñador apasionado por crear interfaces limpias, corporativas y altamente funcionales.',
    requirements: [
      'Portafolio destacable en productos digitales / SaaS',
      'Dominio de Figma y design systems',
      'Experiencia en diseño B2B'
    ],
    isActive: true,
  },
  {
    id: 'bus-01',
    title: 'Business Development Manager',
    department: 'Business',
    contractType: 'Full-time',
    modality: 'Híbrido',
    description: 'Buscamos un desarrollador de negocios para abrir nuevos mercados y cerrar acuerdos B2B estratégicos.',
    requirements: [
      'Experiencia en ventas B2B (software / servicios financieros)',
      'Habilidades comprobadas de negociación',
      'Alta capacidad de comunicación'
    ],
    isActive: true,
  },
  {
    id: 'bus-02',
    title: 'Risk Consultant (ERM Specialist)',
    department: 'Business',
    contractType: 'Freelance',
    modality: 'Remoto',
    description: 'Especialista en Enterprise Risk Management para asesorar a clientes clave y adaptar nuestra IA a sus necesidades.',
    requirements: [
      'Certificaciones en Gestión de Riesgos (CRISC, CERA, etc.)',
      'Experiencia consultiva previa',
      'Disponibilidad por proyectos'
    ],
    isActive: true,
  },
  {
    id: 'bus-03',
    title: 'Technical Sales Engineer',
    department: 'Business',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'El puente entre tecnología y ventas. Demuestra la capacidad técnica de ERM Intelligence a prospectos.',
    requirements: [
      'Background técnico sólido',
      'Excelentes habilidades de presentación',
      'Inglés avanzado'
    ],
    isActive: true,
  },
  {
    id: 'sec-01',
    title: 'Information Security Analyst',
    department: 'Security',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Asegura que nuestros sistemas y los datos de nuestros clientes cumplan con los más altos estándares de seguridad.',
    requirements: [
      'Auditorías de seguridad, ethical hacking',
      'Conocimientos de ISO 27001, SOC2',
      '+3 años en ciberseguridad'
    ],
    isActive: true,
  },
  {
    id: 'sec-02',
    title: 'Data Governance Specialist',
    department: 'Security',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: 'Especialista en privacidad y gobernanza de datos para asegurar el cumplimiento normativo (GDPR, etc).',
    requirements: [
      'Experiencia en leyes de protección de datos',
      'Implementación de frameworks de gobernanza',
      'Atención al detalle y documentación'
    ],
    isActive: true,
  }
];
