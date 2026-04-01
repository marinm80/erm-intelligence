import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Spanish and English Translations
const resources = {
  es: {
    translation: {
      "nav": {
        "solutions": "Soluciones",
        "careers": "Careers",
        "about": "Sobre Nosotros",
        "contact": "Contáctenos",
        "quote": "Solicitar Cotización",
        "hiring": "CONTRATANDO"
      },
      "landing": {
        "cta_ready": "¿Listo para transformar su arquitectura?"
      },
      "footer": {
        "tagline": "Arquitectura inteligente para un crecimiento seguro.",
        "company": "Compañía",
        "resources": "Recursos",
        "legal": "Legal",
        "privacy": "Privacidad",
        "terms": "Términos",
        "docs": "Documentación",
        "blog": "Blog"
      },
      "careers": {
        "badge": "We're Hiring",
        "hero_title1": "Tu carrera en la era de la",
        "hero_title2": "inteligencia artificial",
        "hero_desc": "Únete al equipo que está redefiniendo cómo las empresas más grandes del mundo gestionan la incertidumbre.",
        "remote": "100% Remoto",
        "global": "Global Team",
        "training": "Formación Continua",
        "open_positions": "Posiciones Abiertas",
        "all": "Todos",
        "empty": "No hay posiciones abiertas en este momento para este filtro.",
        "apply": "Aplicar Ahora",
        "apply_desc": "Completa el formulario y cuéntanos por qué eres el fit ideal para ERM Intelligence.",
        "form": {
          "position": "Cargo al que aplicas *",
          "position_placeholder": "Selecciona una posición",
          "name": "Nombre Completo *",
          "email": "Email Comercial *",
          "linkedin": "LinkedIn / Portfolio URL",
          "pitch": "Carta de Motivación / Pitch *",
          "pitch_placeholder": "¿Por qué eres el candidato ideal para ERM Intelligence?",
          "cv": "Sube tu CV (PDF o Word) *",
          "drag": "Arrastra tu CV aquí o",
          "explore": "explorar",
          "supported": "Soporta PDF, DOC, DOCX. Max 5MB.",
          "sending": "Enviando postulación...",
          "submit": "Enviar Postulación",
          "success_title": "¡Postulación Enviada!",
          "success_desc": "Gracias por tu interés en ERM Intelligence. Nuestro equipo revisará tu perfil y nos pondremos en contacto contigo pronto.",
          "another": "Enviar otra postulación"
        },
        "view_offer": "Ver oferta completa",
        "detail": {
          "back": "Volver a ofertas",
          "requirements": "Requisitos",
          "apply_title": "Aplicar a esta posición",
          "not_found": "Oferta no encontrada"
        }
      },
      "hero": {
        "badge": "Nueva Era de IA",
        "title1": "IA Estratégica para la Gestión de",
        "title2": "Riesgos Empresariales",
        "subtitle": "Anticipe, evalúe y mitigue riesgos con la potencia de la Inteligencia Artificial. ERM Intelligence transforma la incertidumbre en ventaja competitiva.",
        "cta": "Comenzar Ahora",
        "secondaryCta": "Ver Soluciones"
      },
      "about": {
        "hero_title1": "Más que software, construimos",
        "hero_title2": "arquitecturas inteligentes",
        "hero_subtitle": "Nacemos con el propósito de fusionar la potencia de la Inteligencia Artificial escalable con la seguridad de datos más rigurosa, todo sin perder el factor más decisivo: el acompañamiento humano.",
        "mission_tag": "NUESTRA MISIÓN",
        "mission_desc": "\"Democratizar el acceso a la Inteligencia Artificial desarrollando sistemas robustos, auditados y ágilmente escalables que conviertan datos en decisiones estratégicas excepcionales.\"",
        "vision_tag": "NUESTRA VISIÓN",
        "vision_desc": "\"Ser el estándar global más confiable en arquitectura de software y plataformas IA, donde la seguridad absoluta de los datos y el trato cercano y cálido sigan siendo primordiales.\"",
        "focus_title": "Soluciones para Cada Escala",
        "focus_desc": "Nuestra labor es crear software y sistemas de Inteligencia Artificial que realmente atiendan las necesidades del cliente. Desde individuos hasta corporaciones globales, el objetivo es potenciar tus capacidades manteniendo una atención excepcional y el indispensable toque humano.",
        "focus_part": "Particulares",
        "focus_part_desc": "Herramientas precisas, a la medida y con un soporte directo que acelera el crecimiento de profesionales independientes.",
        "focus_peq": "Pequeñas Empresas",
        "focus_peq_desc": "Sistemas ágiles que automatizan tareas repetitivas y equilibran la balanza frente a competidores más grandes.",
        "focus_med": "Medianas Empresas",
        "focus_med_desc": "Escalabilidad arquitectónica robusta y auditoría estructural para sostener fases intensivas de crecimiento.",
        "focus_gr": "Grandes Empresas",
        "focus_gr_desc": "Soluciones complejas de IA, integraciones corporativas, máxima seguridad y auditorías estrictas de cumplimiento.",
        "values_title": "Principios que Rigen Nuestro Trabajo",
        "val_sec": "Seguridad Inquebrantable",
        "val_sec_desc": "Cada arquitectura considera la privacidad, la protección de información y la auditoría como el pilar fundamental que rige todo el diseño.",
        "val_int": "Inteligencia Práctica",
        "val_int_desc": "Implementamos IA centrada en obtener resultados en el mundo real, no como conceptos abstractos, sino como herramientas precisas.",
        "val_acomp": "Acompañamiento Cercano",
        "val_acomp_desc": "El código es simplemente nuestro medio, las personas son el fin. Mantenemos comunicación directa y vocación de servicio absoluto.",
        "val_esc": "Escalabilidad Auditable",
        "val_esc_desc": "Preparamos las bases estructurales desde el día uno para que tus sistemas puedan crecer exponencialmente sin fricción técnica."
      },
      "features": {
        "title1": "Los 3 Pilares de ERM",
        "title2": "Intelligence",
        "subtitle": "Nuestra plataforma se sustenta en tres ejes estratégicos diseñados para ofrecer seguridad y visión a largo plazo.",
        "pilares": {
          "1_title": "Identificación Proactiva",
          "1_desc": "Detección temprana de riesgos mediante algoritmos avanzados de IA y análisis predictivo de datos corporativos.",
          "2_title": "Mitigación Estratégica",
          "2_desc": "Soluciones personalizadas para minimizar impactos negativos y optimizar la toma de decisiones en escenarios críticos.",
          "3_title": "Gobernanza & Cumplimiento",
          "3_desc": "Automatización de procesos de auditoría y marcos normativos para asegurar la resiliencia y el cumplimiento total."
        }
      },
      "solutions": {
        "badge": "Soluciones a Medida",
        "title": "Sistemas Inteligentes B2B & B2C",
        "description": "Desde automatización de procesos hasta asistentes personalizados, creamos la herramienta que su empresa necesita para liderar.",
        "explore": "Explorar Soluciones"
      },
      "contact": {
        "badge": "Hablemos",
        "title": "¿Cómo podemos ayudarle?",
        "description": "Nuestro equipo de expertos en IA y Gestión de Riesgos está listo para diseñar la solución perfecta para su organización.",
        "info_title": "Consultoría Especializada",
        "info_desc": "Análisis profundo de su arquitectura de riesgos.",
        "form": {
          "name_label": "Nombre",
          "name_placeholder": "Su nombre",
          "email_label": "Email",
          "email_placeholder": "email@empresa.com",
          "service_label": "Servicio de Interés",
          "services": {
            "1": "Gestión de Riesgos con IA",
            "2": "Auditoría de Sistemas",
            "3": "Implementación B2B",
            "4": "Otro servicio"
          },
          "message_label": "Mensaje",
          "message_placeholder": "Cuéntenos sobre su proyecto...",
          "submit": "Enviar Solicitud"
        }
      },
      "join_us": {
        "badge": "We're Hiring",
        "title1": "Diseña el futuro de la",
        "title2": "Inteligencia Empresarial",
        "description": "En ERM Intelligence no solo prevenimos riesgos, creamos certidumbre. Estamos buscando mentes brillantes que quieran desafiar el status quo usando IA aplicada. Trabaja con un equipo de élite, 100% remoto, y construye plataformas que impactan la economía global.",
        "button": "JOIN US",
        "benefits": {
          "1_title": "Cultura de Innovación",
          "1_desc": "Libertad para proponer, probar e iterar con las últimas tecnologías en LLMs e infraestructuras cloud.",
          "2_title": "Flexibilidad Total",
          "2_desc": "Organización 100% orientada a objetivos con modalidad remota first para casi todas las posiciones.",
          "3_title": "Crecimiento sin techo",
          "3_desc": "Presupuesto anual para formación técnica, certificaciones (AWS, CISSP) y conferencias globales."
        }
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "solutions": "Solutions",
        "careers": "Careers",
        "about": "About Us",
        "contact": "Contact Us",
        "quote": "Request a Quote",
        "hiring": "HIRING"
      },
      "landing": {
        "cta_ready": "Ready to transform your architecture?"
      },
      "footer": {
        "tagline": "Intelligent architecture for secure growth.",
        "company": "Company",
        "resources": "Resources",
        "legal": "Legal",
        "privacy": "Privacy",
        "terms": "Terms",
        "docs": "Documentation",
        "blog": "Blog"
      },
      "careers": {
        "badge": "We're Hiring",
        "hero_title1": "Your career in the age of",
        "hero_title2": "artificial intelligence",
        "hero_desc": "Join the team that is redefining how the world's largest companies manage uncertainty.",
        "remote": "100% Remote",
        "global": "Global Team",
        "training": "Continuous Training",
        "open_positions": "Open Positions",
        "all": "All",
        "empty": "No open positions currently match this filter.",
        "apply": "Apply Now",
        "apply_desc": "Complete the form and tell us why you are the ideal fit for ERM Intelligence.",
        "form": {
          "position": "Position you are applying for *",
          "position_placeholder": "Select a position",
          "name": "Full Name *",
          "email": "Business Email *",
          "linkedin": "LinkedIn / Portfolio URL",
          "pitch": "Cover Letter / Pitch *",
          "pitch_placeholder": "Why are you the ideal candidate for ERM Intelligence?",
          "cv": "Upload your Resume (PDF or Word) *",
          "drag": "Drag your Resume here or",
          "explore": "browse",
          "supported": "Supports PDF, DOC, DOCX. Max 5MB.",
          "sending": "Submitting application...",
          "submit": "Submit Application",
          "success_title": "Application Submitted!",
          "success_desc": "Thank you for your interest in ERM Intelligence. Our team will review your profile and contact you soon.",
          "another": "Submit another application"
        },
        "view_offer": "View full offer",
        "detail": {
          "back": "Back to offers",
          "requirements": "Requirements",
          "apply_title": "Apply for this position",
          "not_found": "Position not found"
        }
      },
      "hero": {
        "badge": "New Era of AI",
        "title1": "Strategic AI for Enterprise Risk",
        "title2": "Management",
        "subtitle": "Anticipate, evaluate, and mitigate risks with the power of Artificial Intelligence. ERM Intelligence transforms uncertainty into a competitive advantage.",
        "cta": "Get Started",
        "secondaryCta": "View Solutions"
      },
      "about": {
        "hero_title1": "More than software, we build",
        "hero_title2": "intelligent architectures",
        "hero_subtitle": "We were founded with the purpose of merging the power of scalable Artificial Intelligence with the most rigorous data security, without losing the most decisive factor: the human touch.",
        "mission_tag": "OUR MISSION",
        "mission_desc": "\"To democratize access to Artificial Intelligence by developing robust, audited, and agilely scalable systems that turn data into exceptional strategic decisions.\"",
        "vision_tag": "OUR VISION",
        "vision_desc": "\"To be the most trusted global standard in software architecture and AI platforms, where absolute data security and a close, warm relationship remain paramount.\"",
        "focus_title": "Solutions for Every Scale",
        "focus_desc": "Our job is to create software and Artificial Intelligence systems that truly meet the client's needs. From individuals to global corporations, the objective is to enhance your capabilities while maintaining exceptional attention and the indispensable human touch.",
        "focus_part": "Individuals",
        "focus_part_desc": "Precise, tailored tools with direct support that accelerate the growth of independent professionals.",
        "focus_peq": "Small Businesses",
        "focus_peq_desc": "Agile systems that automate repetitive tasks and level the playing field against larger competitors.",
        "focus_med": "Medium Businesses",
        "focus_med_desc": "Robust architectural scalability and structural auditing to sustain intensive growth phases.",
        "focus_gr": "Large Enterprises",
        "focus_gr_desc": "Complex AI solutions, corporate integrations, maximum security, and strict compliance audits.",
        "values_title": "Principles That Guide Our Work",
        "val_sec": "Unwavering Security",
        "val_sec_desc": "Every architecture considers privacy, information protection, and auditing as the fundamental pillar that governs all design.",
        "val_int": "Practical Intelligence",
        "val_int_desc": "We implement AI focused on achieving real-world results, not as abstract concepts, but as precise tools.",
        "val_acomp": "Close Accompaniment",
        "val_acomp_desc": "Code is simply our medium; people are the end. We maintain direct communication and absolute service vocation.",
        "val_esc": "Auditable Scalability",
        "val_esc_desc": "We prepare the structural foundations from day one so that your systems can grow exponentially without technical friction."
      },
      "features": {
        "title1": "The 3 Pillars of ERM",
        "title2": "Intelligence",
        "subtitle": "Our platform is built on three strategic axes designed to provide long-term security and vision.",
        "pilares": {
          "1_title": "Proactive Identification",
          "1_desc": "Early risk detection using advanced AI algorithms and predictive parsing of corporate data.",
          "2_title": "Strategic Mitigation",
          "2_desc": "Custom solutions to minimize negative impacts and optimize decision-making in critical scenarios.",
          "3_title": "Governance & Compliance",
          "3_desc": "Automation of audit processes and regulatory frameworks to ensure resilience and total compliance."
        }
      },
      "solutions": {
        "badge": "Custom Solutions",
        "title": "Intelligent B2B & B2C Systems",
        "description": "From process automation to personalized assistants, we build the tools your enterprise needs to lead.",
        "explore": "Explore Solutions"
      },
      "contact": {
        "badge": "Let's Talk",
        "title": "How can we help you?",
        "description": "Our team of AI and Risk Management experts is ready to design the perfect solution for your organization.",
        "info_title": "Specialized Consulting",
        "info_desc": "In-depth analysis of your risk architecture.",
        "form": {
          "name_label": "Name",
          "name_placeholder": "Your name",
          "email_label": "Email",
          "email_placeholder": "email@company.com",
          "service_label": "Service of Interest",
          "services": {
            "1": "AI Risk Management",
            "2": "Systems Auditing",
            "3": "B2B Implementation",
            "4": "Other service"
          },
          "message_label": "Message",
          "message_placeholder": "Tell us about your project...",
          "submit": "Submit Request"
        }
      },
      "join_us": {
        "badge": "We're Hiring",
        "title1": "Design the future of",
        "title2": "Enterprise Intelligence",
        "description": "At ERM Intelligence we don't just prevent risks; we create certainty. We are looking for brilliant minds who want to challenge the status quo using applied AI. Work with an elite team, 100% remote, and build platforms that impact the global economy.",
        "button": "JOIN US",
        "benefits": {
          "1_title": "Innovation Culture",
          "1_desc": "Freedom to propose, test, and iterate with the latest technologies in LLMs and cloud infrastructures.",
          "2_title": "Total Flexibility",
          "2_desc": "A 100% goal-oriented organization with a remote-first modality for almost all positions.",
          "3_title": "Limitless Growth",
          "3_desc": "Annual budget for technical training, certifications (AWS, CISSP), and global conferences."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
