import type { JobPosition } from '../types/careers';

export const jobPositions: JobPosition[] = [
  {
    id: 'eng-01',
    title: {
      es: 'Senior Full-Stack Engineer (PERN)',
      en: 'Senior Full-Stack Engineer (PERN)'
    },
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Buscamos un ingeniero Senior Full-Stack experimentado en el stack PERN (PostgreSQL, Express, React, Node.js) para liderar el desarrollo de nuestra plataforma core.',
      en: 'We are looking for an experienced Senior Full-Stack Engineer working with the PERN stack (PostgreSQL, Express, React, Node.js) to lead the development of our core platform.'
    },
    requirements: {
      es: [
        '+5 años de experiencia en Node.js y React',
        'Sólidos conocimientos en TypeScript y arquitectura de software',
        'Experiencia con PostgreSQL y optimización de consultas',
        'Inglés intermedio/avanzado'
      ],
      en: [
        '5+ years of experience in Node.js and React',
        'Solid knowledge of TypeScript and software architecture',
        'Experience with PostgreSQL and query optimization',
        'Intermediate/advanced English'
      ]
    },
    isActive: true,
  },
  {
    id: 'eng-02',
    title: {
      es: 'AI/ML Engineer',
      en: 'AI/ML Engineer'
    },
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Únete a nuestro equipo de IA para integrar modelos predictivos y LLMs en nuestras soluciones de ERM.',
      en: 'Join our AI team to integrate predictive models and LLMs into our ERM solutions.'
    },
    requirements: {
      es: [
        '+3 años de experiencia en Machine Learning / Data Science',
        'Experiencia práctica con Python, TensorFlow o PyTorch',
        'Conocimientos en integración de APIs de OpenAI o similares',
        'Capacidad de análisis de datos complejos'
      ],
      en: [
        '3+ years of experience in Machine Learning / Data Science',
        'Hands-on experience with Python, TensorFlow or PyTorch',
        'Knowledge of OpenAI APIs integration or similar',
        'Ability to analyze complex data'
      ]
    },
    isActive: true,
  },
  {
    id: 'eng-03',
    title: {
      es: 'Backend Engineer (Node.js)',
      en: 'Backend Engineer (Node.js)'
    },
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Híbrido',
    description: {
      es: 'Desarrollador backend para mantenimiento y creación de nuevos servicios RESTful enfocados en alto rendimiento.',
      en: 'Backend developer for maintenance and creation of new high-performance RESTful services.'
    },
    requirements: {
      es: [
        '+3 años en Node.js / Express',
        'Fuerte experiencia en SQL, diseño de BD',
        'Manejo de Docker, CI/CD'
      ],
      en: [
        '3+ years in Node.js / Express',
        'Strong experience in SQL, DB design',
        'Docker, CI/CD management'
      ]
    },
    isActive: true,
  },
  {
    id: 'eng-04',
    title: {
      es: 'DevOps / Cloud Engineer',
      en: 'DevOps / Cloud Engineer'
    },
    department: 'Engineering',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Responsable de la infraestructura cloud, pipelines de despliegue automatizado y monitoreo de sistemas.',
      en: 'Responsible for cloud infrastructure, automated deployment pipelines, and systems monitoring.'
    },
    requirements: {
      es: [
        'AWS / GCP expertise',
        'Kubernetes, Terraform, Ansible',
        'Experiencia en entornos de alta disponibilidad'
      ],
      en: [
        'AWS / GCP expertise',
        'Kubernetes, Terraform, Ansible',
        'Experience in high availability environments'
      ]
    },
    isActive: true,
  },
  {
    id: 'prod-01',
    title: {
      es: 'Product Manager',
      en: 'Product Manager'
    },
    department: 'Product',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Lidera la visión y el roadmap de ERM Intelligence, alineando las necesidades del cliente con el desarrollo técnico.',
      en: 'Lead the vision and roadmap for ERM Intelligence, aligning client needs with technical development.'
    },
    requirements: {
      es: [
        '+4 años de experiencia como Product Manager en B2B SaaS',
        'Fuerte comprensión de metodologías ágiles',
        'Habilidad para traducir métricas en decisiones de producto'
      ],
      en: [
        '4+ years of B2B SaaS Product Management experience',
        'Strong understanding of agile methodologies',
        'Ability to translate metrics into product decisions'
      ]
    },
    isActive: true,
  },
  {
    id: 'prod-02',
    title: {
      es: 'UX/UI Designer',
      en: 'UX/UI Designer'
    },
    department: 'Product',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Diseñador apasionado por crear interfaces limpias, corporativas y altamente funcionales.',
      en: 'Designer passionate about creating clean, corporate, and highly functional interfaces.'
    },
    requirements: {
      es: [
        'Portafolio destacable en productos digitales / SaaS',
        'Dominio de Figma y design systems',
        'Experiencia en diseño B2B'
      ],
      en: [
        'Outstanding portfolio in digital products / SaaS',
        'Proficiency in Figma and design systems',
        'Experience in B2B design'
      ]
    },
    isActive: true,
  },
  {
    id: 'bus-01',
    title: {
      es: 'Business Development Manager',
      en: 'Business Development Manager'
    },
    department: 'Business',
    contractType: 'Full-time',
    modality: 'Híbrido',
    description: {
      es: 'Buscamos un desarrollador de negocios para abrir nuevos mercados y cerrar acuerdos B2B estratégicos.',
      en: 'We are looking for a business developer to open new markets and close strategic B2B deals.'
    },
    requirements: {
      es: [
        'Experiencia en ventas B2B (software / servicios financieros)',
        'Habilidades comprobadas de negociación',
        'Alta capacidad de comunicación'
      ],
      en: [
        'Experience in B2B sales (software / financial services)',
        'Proven negotiation skills',
        'High communication capabilities'
      ]
    },
    isActive: true,
  },
  {
    id: 'bus-02',
    title: {
      es: 'Risk Consultant (ERM Specialist)',
      en: 'Risk Consultant (ERM Specialist)'
    },
    department: 'Business',
    contractType: 'Freelance',
    modality: 'Remoto',
    description: {
      es: 'Especialista en Enterprise Risk Management para asesorar a clientes clave y adaptar nuestra IA a sus necesidades.',
      en: 'Enterprise Risk Management specialist to advise key clients and adapt our AI to their needs.'
    },
    requirements: {
      es: [
        'Certificaciones en Gestión de Riesgos (CRISC, CERA, etc.)',
        'Experiencia consultiva previa',
        'Disponibilidad por proyectos'
      ],
      en: [
        'Risk Management certifications (CRISC, CERA, etc.)',
        'Previous consulting experience',
        'Project-based availability'
      ]
    },
    isActive: true,
  },
  {
    id: 'bus-03',
    title: {
      es: 'Technical Sales Engineer',
      en: 'Technical Sales Engineer'
    },
    department: 'Business',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'El puente entre tecnología y ventas. Demuestra la capacidad técnica de ERM Intelligence a prospectos.',
      en: 'The bridge between technology and sales. Demonstrate the technical capability of ERM Intelligence to prospects.'
    },
    requirements: {
      es: [
        'Background técnico sólido',
        'Excelentes habilidades de presentación',
        'Inglés avanzado'
      ],
      en: [
        'Solid technical background',
        'Excellent presentation skills',
        'Advanced English'
      ]
    },
    isActive: true,
  },
  {
    id: 'sec-01',
    title: {
      es: 'Information Security Analyst',
      en: 'Information Security Analyst'
    },
    department: 'Security',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Asegura que nuestros sistemas y los datos de nuestros clientes cumplan con los más altos estándares de seguridad.',
      en: "Ensures that our systems and our clients' data comply with the highest security standards."
    },
    requirements: {
      es: [
        'Auditorías de seguridad, ethical hacking',
        'Conocimientos de ISO 27001, SOC2',
        '+3 años en ciberseguridad'
      ],
      en: [
        'Security audits, ethical hacking',
        'Knowledge of ISO 27001, SOC2',
        '3+ years in cybersecurity'
      ]
    },
    isActive: true,
  },
  {
    id: 'sec-02',
    title: {
      es: 'Data Governance Specialist',
      en: 'Data Governance Specialist'
    },
    department: 'Security',
    contractType: 'Full-time',
    modality: 'Remoto',
    description: {
      es: 'Especialista en privacidad y gobernanza de datos para asegurar el cumplimiento normativo (GDPR, etc).',
      en: 'Data privacy and governance specialist to ensure regulatory compliance (GDPR, etc.).'
    },
    requirements: {
      es: [
        'Experiencia en leyes de protección de datos',
        'Implementación de frameworks de gobernanza',
        'Atención al detalle y documentación'
      ],
      en: [
        'Experience with data protection laws',
        'Implementation of governance frameworks',
        'Attention to detail and documentation'
      ]
    },
    isActive: true,
  }
];
