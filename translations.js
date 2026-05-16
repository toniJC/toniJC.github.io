// translations.js — ES/EN dictionary for index.html
// Convention:
//   - dot-notation keys grouped by section: nav.*, header.*, about.*, cap.*, tech.*, lang.*, exp.*, edu.*, accordion.*, btn.*, aria.*, meta.*, footer.*
//   - keys ending in `_html` are consumed by data-i18n-html (innerHTML); all others by data-i18n (textContent) or data-i18n-aria (aria-label).
//   - both languages MUST mirror the same key set. A missing key falls back to the HTML's original content (engine guard).
window.TRANSLATIONS = {
  es: {
    // meta
    'meta.title': 'Antonio Junquera Criado · Cloud Architect & Technical Lead',
    'meta.description': 'CV online de Antonio Junquera Criado, Cloud Architect y Technical Lead con más de 10 años de experiencia en ecosistema Microsoft y Azure.',
    'meta.og_description': 'CV online de Antonio Junquera Criado, Cloud Architect y Technical Lead con más de 10 años de experiencia en ecosistema Microsoft y Azure.',

    // aria
    'aria.header': 'Cabecera principal',
    'aria.nav_main': 'Menú principal',
    'aria.nav_sticky': 'Navegación fija',
    'aria.download': 'Descargar CV',

    // nav
    'nav.about': 'Sobre mí',
    'nav.ai': 'IA',
    'nav.experience': 'Experiencia',

    // header
    'header.eyebrow': 'Cloud Architect & Technical Lead',
    'header.name_html': 'Antonio<br>Junquera<br>Criado',

    // buttons
    'btn.download': 'Descargar CV',

    // section titles
    'section.about': 'Sobre mí',
    'section.capabilities': 'Capacidades',
    'section.skills': 'Habilidades y Tecnologías',
    'section.languages': 'Idiomas',
    'section.experience': 'Experiencia & Formación',

    // about
    'about.p1': 'Ingeniero informático con más de 10 años de experiencia en desarrollo de software y arquitectura Cloud, con un fuerte componente de liderazgo técnico. He trabajado en entornos de alta exigencia (desde aerolíneas hasta tecnología deportiva) coordinando equipos, tomando decisiones de arquitectura y siendo el nexo entre negocio y técnica.',
    'about.p2': 'Mi especialización principal gira en torno al ecosistema Microsoft: .NET, Azure y la integración de sistemas complejos. Me muevo con igual comodidad en la pizarra diseñando una solución que en el código implementándola.',
    'about.p3': 'He coordinado equipos de hasta 15 personas en entornos donde el error tiene coste real. Para mí, la arquitectura no es un documento: es una decisión que alguien tiene que defender en producción.',
    'about.quote': '"Hacer la mitad de algo es esencialmente, no hacer nada" · Jeff Sutherland',

    // ai passion section
    'ai.title': 'IA: ingeniería antes que tendencia',
    'ai.intro': 'Mi relación con la inteligencia artificial no empezó con ChatGPT. Empezó en 2015, en la universidad, por curiosidad técnica pura. Y la forma en que la abordo hoy es la misma que aplico a cualquier sistema complejo: con arquitectura, con criterio y con la convicción de que el humano siempre dirige.',
    'ai.card1.title': 'Criterio antes que herramienta',
    'ai.card1.desc': 'La IA no resuelve problemas de diseño mal pensados. Saber cuándo aplicarla, cuándo no, y qué parte del sistema no puede ser probabilística es parte del trabajo de arquitectura.',
    'ai.card2.title': 'Arquitectura sobre prompts',
    'ai.card2.desc': 'La diferencia entre un proyecto de IA que escala y uno que se desarma está en la arquitectura: contratos claros, capas bien definidas y decisiones explícitas, no en el prompt perfecto.',
    'ai.card3.title': 'IA agentica como campo de juego',
    'ai.card3.desc': 'Hoy diseño workflows con agentes, orquesto modelos y construyo sistemas donde la IA ejecuta tareas con autonomía acotada. Es ingeniería de sistemas distribuidos, con un componente nuevo: razonamiento probabilístico.',
    'ai.card4.title': 'El humano dirige, la IA ejecuta',
    'ai.card4.desc': 'La IA es una herramienta poderosa, no un reemplazo. El criterio, la dirección y la responsabilidad siguen siendo humanos. Eso no es una limitación: es lo que hace que el sistema funcione.',

    // capabilities
    'cap.cloud.title': 'Arquitectura Cloud',
    'cap.cloud.desc': 'Diseño de soluciones en Azure: integraciones, microservicios, pipelines de datos y arquitecturas event-driven. Con criterio de coste y escalabilidad.',
    'cap.lead.title': 'Liderazgo Técnico',
    'cap.lead.desc': 'De los requisitos a producción: decisiones de arquitectura, coordinación de equipo y punto de contacto directo entre negocio y desarrollo.',
    'cap.integration.title': 'Integración de Sistemas',
    'cap.integration.desc': 'Diseño e implementación de flujos entre sistemas heterogéneos. APIs REST/SOAP, Service Bus, Logic Apps, Workato y Azure Functions.',
    'cap.methodology.title': 'Gestión y Metodología',
    'cap.methodology.desc': 'Scrum Master y Product Owner certificado. Estimación, planificación y seguimiento en proyectos de hasta 15 personas.',

    // tech section labels
    'tech.languages': 'Lenguajes',
    'tech.frameworks': 'Frameworks',
    'tech.data': 'Datos',
    'tech.azure': 'Azure Cloud',
    'tech.integrations': 'Integraciones y Herramientas',
    'tech.project_mgmt': 'Gestión de Proyectos',

    // languages section
    'lang.spanish': 'Español',
    'lang.spanish_level': 'Nativo',
    'lang.english': 'Inglés',
    'lang.english_level': 'B2 - Intermedio',

    // tabs
    'tabs.experience': 'Experiencia Profesional',
    'tabs.education': 'Formación',

    // experience timeline
    'exp.bip.period': '2024 - Actualidad',
    'exp.bip.title': 'XTech Expert',
    'exp.bip.desc': 'Arquitectura y consultoría Cloud para clientes de distintos sectores, con foco en Azure y soluciones de integración a medida.',

    'exp.sportian.period': '2023 - 2024',
    'exp.sportian.title': 'Technical Lead',
    'exp.sportian.desc_html': 'Technical Lead en proyectos de alta visibilidad para La Liga Tech. Punto de contacto entre negocio y desarrollo, con responsabilidad directa sobre decisiones de arquitectura.<br><strong>*Más información en CV descargable.</strong>',

    'exp.avanade.period': '2023',
    'exp.avanade.title': 'Consultor Senior',
    'exp.avanade.desc_html': 'Consultoría senior en proyectos Microsoft para grandes cuentas. Decisiones de arquitectura, liderazgo técnico y coordinación de equipo bajo demanda.<br><strong>*Más información en CV descargable.</strong>',

    'exp.kabel.period': '2021 - 2022',
    'exp.kabel.title': 'Consultor Senior de Datos e Integración',
    'exp.kabel.desc': 'Definición y desarrollo de arquitecturas Cloud para integración, transformación y enriquecimiento de datos. Gestión técnica de proyectos.',

    'exp.viseo1.period': '2020 - 2021',
    'exp.viseo1.title': 'Senior Teamlead',
    'exp.viseo1.desc': 'Responsabilidades técnicas ampliadas: arquitectura, previsiones de escalabilidad, control de gasto cloud y cuadros de mando.',

    'exp.viseo2.period': '2019 - 2020',
    'exp.viseo2.title': 'Teamlead y Consultor',
    'exp.viseo2.desc': 'Primer rol de liderazgo técnico: coordinación del equipo, planificación de sprints y captura directa de requisitos con cliente.',

    'exp.birchman.period': '2017 - 2019',
    'exp.birchman.title': 'Consultor Junior',
    'exp.birchman.desc': 'Análisis y desarrollo de funcionalidades en proyectos para Iberia Express y Bergé-Gefco Logistics. Resolución de bugs y soporte.',

    'exp.independent.period': '2015 - 2017',
    'exp.independent.company': 'Independiente',
    'exp.independent.title': 'Desarrollador Web a Medida',
    'exp.independent.desc': 'Desarrollo de páginas web a medida del cliente y asesoramiento para mostrar la mejor versión de su negocio.',

    'exp.efika.period': '2015 - 2016',
    'exp.efika.title': 'Becario Desarrollador',
    'exp.efika.desc': 'Desarrollo web: aplicaciones de captación de datos, mantenimiento de sistemas y páginas web corporativas.',

    // education timeline
    'edu.workato.period': '2022',
    'edu.workato.company': 'Certificación oficial',
    'edu.workato.title': 'Workato Automation PRO I, II y III',

    'edu.master.period': '2020',
    'edu.master.title': 'Máster en Gestión y Dirección de Proyectos',

    'edu.microservices.period': '2019',
    'edu.microservices.title': 'Curso de Arquitectura de Microservicios',

    'edu.scrum.period': '2018',
    'edu.scrum.title': 'Scrum Master',

    'edu.po.period': '2018',
    'edu.po.title': 'Product Owner',

    'edu.degree.period': '2012 - 2017',
    'edu.degree.title': 'Grado en Ingeniería Informática',

    'edu.robotics.period': '2012 - 2016',
    'edu.robotics.title': 'Título de Experto en Robótica',

    'edu.forensics.period': '2016',
    'edu.forensics.title': 'Curso de Informática Forense',

    'edu.android.period': '2012',
    'edu.android.title': 'Desarrollo de Aplicaciones Android',

    // accordion
    'accordion.unaccredited.title': 'Formación No Acreditada',
    'accordion.unaccredited.item1': 'Reparación de sistemas informáticos',
    'accordion.unaccredited.item2': 'Profesor particular en Universidad Francisco de Vitoria, Madrid',
    'accordion.unaccredited.item3': 'Desarrollo de aplicaciones para iOS con Swift 3 (Udemy)',
    'accordion.unaccredited.item4': 'Desarrollo en Angular 2 y Node.js (Udemy)',
    'accordion.unaccredited.item5': 'Desarrollo ASP.NET MVC completo (Udemy)',
    'accordion.unaccredited.item6': 'Hacking ético (Udemy)',
    'accordion.unaccredited.item7': 'Animador y organizador de eventos',

    'accordion.other.title': 'Otros datos',
    'accordion.other.item1': 'Carnet de conducir y vehículo propio',
    'accordion.other.item2': 'Disponibilidad para viajar',
    'accordion.other.item3': 'Voluntario en la fundación Hontanar de ayuda a la drogadicción (8 meses)',
    'accordion.other.item4': 'Practicante de artes marciales desde los 6 años',

    // footer
    'footer.copyright': '© 2025 Antonio Junquera Criado. Todos los derechos reservados.'
  },
  en: {
    // meta
    'meta.title': 'Antonio Junquera Criado · Cloud Architect & Technical Lead',
    'meta.description': 'Online CV of Antonio Junquera Criado, Cloud Architect and Technical Lead with over 10 years of experience in the Microsoft and Azure ecosystem.',
    'meta.og_description': 'Online CV of Antonio Junquera Criado, Cloud Architect and Technical Lead with over 10 years of experience in the Microsoft and Azure ecosystem.',

    // aria
    'aria.header': 'Main header',
    'aria.nav_main': 'Main menu',
    'aria.nav_sticky': 'Fixed navigation',
    'aria.download': 'Download CV',

    // nav
    'nav.about': 'About',
    'nav.ai': 'AI',
    'nav.experience': 'Experience',

    // header
    'header.eyebrow': 'Cloud Architect & Technical Lead',
    'header.name_html': 'Antonio<br>Junquera<br>Criado',

    // buttons
    'btn.download': 'Download CV',

    // section titles
    'section.about': 'About me',
    'section.capabilities': 'Capabilities',
    'section.skills': 'Skills & Technologies',
    'section.languages': 'Languages',
    'section.experience': 'Experience & Education',

    // about
    'about.p1': 'Software engineer with over 10 years of experience in software development and Cloud architecture, with a strong technical leadership component. I have worked in high-demand environments (from airlines to sports technology) coordinating teams, making architecture decisions, and acting as the bridge between business and engineering.',
    'about.p2': 'My main specialisation revolves around the Microsoft ecosystem: .NET, Azure, and complex systems integration. I am equally comfortable at the whiteboard designing a solution as I am in the code implementing it.',
    'about.p3': 'I have coordinated teams of up to 15 people in environments where mistakes have real costs. For me, architecture is not a document: it is a decision someone has to defend in production.',
    'about.quote': '"Doing half of something is essentially doing nothing" · Jeff Sutherland',

    // ai passion section
    'ai.title': "AI: engineering before the trend",
    'ai.intro': "My relationship with artificial intelligence didn't start with ChatGPT. It started in 2015, at university, out of pure technical curiosity. And the way I approach it today is the same I apply to any complex system: with architecture, with judgment, and with the conviction that the human always leads.",
    'ai.card1.title': 'Judgment before tooling',
    'ai.card1.desc': "AI doesn't fix poorly designed systems. Knowing when to apply it, when not to, and which parts of a system can't be probabilistic is part of the architecture work.",
    'ai.card2.title': 'Architecture over prompts',
    'ai.card2.desc': 'The difference between an AI project that scales and one that falls apart lies in its architecture: clear contracts, well-defined layers and explicit decisions, not in the perfect prompt.',
    'ai.card3.title': 'Agentic AI as the playing field',
    'ai.card3.desc': "Today I design agent workflows, orchestrate models and build systems where AI executes tasks with bounded autonomy. It's distributed-systems engineering with a new ingredient: probabilistic reasoning.",
    'ai.card4.title': 'The human directs, AI executes',
    'ai.card4.desc': "AI is a powerful tool, not a replacement. Judgment, direction and accountability remain human. That's not a limitation: it's what makes the whole system work.",

    // capabilities
    'cap.cloud.title': 'Cloud Architecture',
    'cap.cloud.desc': 'Solution design on Azure: integrations, microservices, data pipelines, and event-driven architectures. With cost and scalability criteria.',
    'cap.lead.title': 'Technical Leadership',
    'cap.lead.desc': 'From requirements to production: architecture decisions, team coordination, and direct point of contact between business and development.',
    'cap.integration.title': 'Systems Integration',
    'cap.integration.desc': 'Design and implementation of flows between heterogeneous systems. REST/SOAP APIs, Service Bus, Logic Apps, Workato, and Azure Functions.',
    'cap.methodology.title': 'Management & Methodology',
    'cap.methodology.desc': 'Certified Scrum Master and Product Owner. Estimation, planning, and tracking on projects of up to 15 people.',

    // tech section labels
    'tech.languages': 'Languages',
    'tech.frameworks': 'Frameworks',
    'tech.data': 'Data',
    'tech.azure': 'Azure Cloud',
    'tech.integrations': 'Integrations & Tools',
    'tech.project_mgmt': 'Project Management',

    // languages section
    'lang.spanish': 'Spanish',
    'lang.spanish_level': 'Native',
    'lang.english': 'English',
    'lang.english_level': 'B2 - Intermediate',

    // tabs
    'tabs.experience': 'Professional Experience',
    'tabs.education': 'Education',

    // experience timeline
    'exp.bip.period': '2024 - Present',
    'exp.bip.title': 'XTech Expert',
    'exp.bip.desc': 'Cloud architecture and consultancy for clients across different sectors, with a focus on Azure and custom integration solutions.',

    'exp.sportian.period': '2023 - 2024',
    'exp.sportian.title': 'Technical Lead',
    'exp.sportian.desc_html': 'Technical Lead on high-visibility projects for La Liga Tech. Point of contact between business and development, with direct responsibility for architecture decisions.<br><strong>*More information in the downloadable CV.</strong>',

    'exp.avanade.period': '2023',
    'exp.avanade.title': 'Senior Consultant',
    'exp.avanade.desc_html': 'Senior consultancy on Microsoft projects for large accounts. Architecture decisions, technical leadership, and on-demand team coordination.<br><strong>*More information in the downloadable CV.</strong>',

    'exp.kabel.period': '2021 - 2022',
    'exp.kabel.title': 'Senior Data & Integration Consultant',
    'exp.kabel.desc': 'Definition and development of Cloud architectures for data integration, transformation, and enrichment. Technical project management.',

    'exp.viseo1.period': '2020 - 2021',
    'exp.viseo1.title': 'Senior Teamlead',
    'exp.viseo1.desc': 'Expanded technical responsibilities: architecture, scalability forecasting, cloud cost control, and dashboards.',

    'exp.viseo2.period': '2019 - 2020',
    'exp.viseo2.title': 'Teamlead & Consultant',
    'exp.viseo2.desc': 'First technical leadership role: team coordination, sprint planning, and direct requirements capture with the client.',

    'exp.birchman.period': '2017 - 2019',
    'exp.birchman.title': 'Junior Consultant',
    'exp.birchman.desc': 'Analysis and feature development on projects for Iberia Express and Bergé-Gefco Logistics. Bug fixing and support.',

    'exp.independent.period': '2015 - 2017',
    'exp.independent.company': 'Independent',
    'exp.independent.title': 'Custom Web Developer',
    'exp.independent.desc': 'Development of custom websites tailored to the client and advisory to showcase the best version of their business.',

    'exp.efika.period': '2015 - 2016',
    'exp.efika.title': 'Developer Intern',
    'exp.efika.desc': 'Web development: data capture applications, system maintenance, and corporate websites.',

    // education timeline
    'edu.workato.period': '2022',
    'edu.workato.company': 'Official certification',
    'edu.workato.title': 'Workato Automation PRO I, II & III',

    'edu.master.period': '2020',
    'edu.master.title': 'MSc in Project Management & Leadership',

    'edu.microservices.period': '2019',
    'edu.microservices.title': 'Microservices Architecture Course',

    'edu.scrum.period': '2018',
    'edu.scrum.title': 'Scrum Master',

    'edu.po.period': '2018',
    'edu.po.title': 'Product Owner',

    'edu.degree.period': '2012 - 2017',
    'edu.degree.title': 'BSc in Computer Engineering',

    'edu.robotics.period': '2012 - 2016',
    'edu.robotics.title': 'Expert Certificate in Robotics',

    'edu.forensics.period': '2016',
    'edu.forensics.title': 'Computer Forensics Course',

    'edu.android.period': '2012',
    'edu.android.title': 'Android App Development',

    // accordion
    'accordion.unaccredited.title': 'Non-accredited Training',
    'accordion.unaccredited.item1': 'Computer systems repair',
    'accordion.unaccredited.item2': 'Private tutor at Universidad Francisco de Vitoria, Madrid',
    'accordion.unaccredited.item3': 'iOS app development with Swift 3 (Udemy)',
    'accordion.unaccredited.item4': 'Angular 2 & Node.js development (Udemy)',
    'accordion.unaccredited.item5': 'Full ASP.NET MVC development (Udemy)',
    'accordion.unaccredited.item6': 'Ethical hacking (Udemy)',
    'accordion.unaccredited.item7': 'Event host & organizer',

    'accordion.other.title': 'Other info',
    'accordion.other.item1': "Driver's license and own vehicle",
    'accordion.other.item2': 'Available to travel',
    'accordion.other.item3': 'Volunteer at Fundación Hontanar (drug addiction support, 8 months)',
    'accordion.other.item4': 'Martial arts practitioner since age 6',

    // footer
    'footer.copyright': '© 2025 Antonio Junquera Criado. All rights reserved.'
  }
};
