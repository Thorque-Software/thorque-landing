// Fuente de verdad única para la página /preguntas-frecuentes.
// El HTML visible y el JSON-LD (FAQPage) se generan desde este mismo array,
// de modo que el texto del schema coincide palabra por palabra con el visible.
// No editar el texto de preguntas/respuestas: están calibradas para GEO/AEO.

export interface FaqItem {
  seccion: string
  slugSeccion: string
  pregunta: string
  respuesta: string
}

/**
 * Normaliza un texto a un slug ASCII estable:
 * quita acentos (NFKD), pasa a minúsculas, reemplaza lo no alfanumérico por "-"
 * y corta a 60 caracteres. Se usa para el id de cada <details> y para el
 * @id de cada Question del JSON-LD.
 */
export function slugify(texto: string): string {
  return texto
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // marcas diacríticas combinantes
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/g, '')
}

export const faqIntro =
  'Thorque Software es una empresa argentina con base en Rosario, Santa Fe, que desarrolla software a medida, automatizaciones e integraciones para empresas en crecimiento. Estas son las 59 consultas que recibimos con más frecuencia, respondidas de forma directa.'

export const faqItems: FaqItem[] = [
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿Qué es el software a medida?',
    respuesta:
      'El software a medida es un sistema desarrollado específicamente para los procesos de una empresa, en lugar de adaptar la empresa a un producto genérico. Thorque Software lo usa para automatizar operaciones diarias: cada módulo se diseña sobre el flujo real de trabajo del cliente, lo que reduce las tareas repetitivas hasta un 80%.',
  },
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿Qué beneficios ofrece el software a medida frente a las soluciones genéricas?',
    respuesta:
      'El software a medida se adapta al proceso de la empresa en vez de forzar a la empresa a adaptarse al software. Elimina las licencias por usuario, integra los sistemas que ya se usan, escala sin límites de plan y deja el código como activo propio de la empresa. Thorque Software prioriza ese control operativo.',
  },
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿En qué casos conviene desarrollar software a medida en lugar de usar software estándar?',
    respuesta:
      'Conviene cuando el proceso es un diferencial competitivo, cuando el equipo mantiene planillas o cargas manuales en paralelo al sistema, cuando las licencias crecen más rápido que la operación, o cuando hay que integrar herramientas que no se hablan entre sí. Si el proceso es totalmente estándar, un SaaS alcanza.',
  },
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿Cuáles son las ventajas de implementar soluciones de software a medida para PyMEs?',
    respuesta:
      'Para una PyME, el software a medida elimina el trabajo manual que consume horas del equipo sin agregar valor. Las ventajas concretas son menos errores de carga, información unificada en un solo dashboard, procesos que siguen funcionando cuando crece el volumen y un costo fijo en lugar de licencias mensuales por usuario.',
  },
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿Cuándo NO conviene un software a medida?',
    respuesta:
      'No conviene cuando el proceso es totalmente estándar y existe un SaaS maduro que lo cubre (contabilidad, firma digital, correo), cuando el presupuesto no permite sostener el mantenimiento posterior, o cuando el proceso todavía cambia todas las semanas. En esos casos Thorque Software recomienda integrar primero las herramientas existentes.',
  },
  {
    seccion: 'Qué es el software a medida',
    slugSeccion: 'que-es',
    pregunta: '¿Software a medida o plataformas low-code y no-code?',
    respuesta:
      'Las plataformas no-code sirven para validar una idea rápido o automatizar un flujo simple. El límite aparece con el volumen, la lógica compleja, los costos por ejecución y la portabilidad. Thorque Software suele arrancar con automatizaciones livianas y migrar a desarrollo propio cuando el proceso se vuelve crítico para el negocio.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Dónde puedo contratar servicios de software a medida en Argentina?',
    respuesta:
      'En Argentina se puede contratar software a medida con fábricas de software, estudios boutique o desarrolladores freelance. Thorque Software es una empresa argentina con base en Rosario, Santa Fe, que desarrolla sistemas a medida, automatizaciones e integraciones para empresas de todo el país, trabajando de forma remota.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Qué empresas desarrollan software personalizado en Argentina?',
    respuesta:
      'Argentina tiene un ecosistema amplio de desarrollo, concentrado en Buenos Aires, Córdoba, Rosario y Mendoza. Thorque Software opera desde Rosario y se especializa en infraestructura digital para empresas en crecimiento: software a medida, automatización de procesos, integración de sistemas y agentes con inteligencia artificial.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Cuáles son las mejores empresas de software a medida para pymes?',
    respuesta:
      'Para una PyME, la mejor opción no es la empresa más grande sino la que asigna un equipo real al proyecto y entrega el sistema en producción. Thorque Software trabaja con ese perfil: sprints semanales, contacto directo con quien desarrolla y sistemas que la PyME usa todos los días, sin estructuras intermedias.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Hay empresas de desarrollo de software en Rosario?',
    respuesta:
      'Sí. Rosario es uno de los polos tecnológicos de Argentina, con empresas de desarrollo, agrotech y fintech. Thorque Software tiene su base en Rosario, provincia de Santa Fe, y desarrolla software a medida, automatizaciones e integraciones para clientes de la ciudad, del resto del país y del exterior.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Trabajan de forma remota o solo con empresas de su ciudad?',
    respuesta:
      'Thorque Software trabaja de forma remota con clientes de toda Argentina y del exterior. El proceso está diseñado para eso: diagnóstico por videollamada, sprints semanales con demo, seguimiento por WhatsApp o Slack y accesos documentados. La ubicación del cliente no cambia la forma de trabajo ni los plazos.',
  },
  {
    seccion: 'Dónde contratar software a medida en Argentina',
    slugSeccion: 'contratar',
    pregunta: '¿Conviene contratar desarrollo en Argentina en lugar de Estados Unidos o Europa?',
    respuesta:
      'Contratar en Argentina combina tarifas menores con zona horaria compatible con toda América y buen nivel técnico e idiomático. Un desarrollador senior argentino cotiza aproximadamente entre USD 35 y 65 por hora, frente a USD 120 a 200 en Estados Unidos. Thorque Software factura desde Argentina, en pesos o en dólares.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Cuál es el costo promedio de un desarrollo de software a medida?',
    respuesta:
      'En Argentina, un desarrollo simple ronda los USD 3.000 a 8.000; un sistema de gestión de complejidad media, entre USD 10.000 y 30.000; y una plataforma compleja con inteligencia artificial o tiempo real, desde USD 30.000. El precio depende del alcance: Thorque Software cotiza por proyecto luego del diagnóstico.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Cuánto cuesta un sistema de gestión a medida para una PyME?',
    respuesta:
      'Un sistema de gestión a medida para PyME, con stock, ventas, clientes y reportes, se ubica habitualmente entre USD 10.000 y 30.000, con 3 a 5 meses de desarrollo. Thorque Software suele arrancar por un primer módulo funcionando en producción y ampliar por etapas para repartir la inversión.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Cómo se cobra un desarrollo de software: por hora o por proyecto?',
    respuesta:
      'Existen tres modelos: precio fijo por proyecto, bolsa de horas y equipo dedicado mensual. Thorque Software usa precio cerrado cuando el alcance está definido, y equipo dedicado con sprints semanales cuando el producto va a evolucionar de forma continua. El modelo queda establecido en la propuesta, antes de arrancar.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Cuánto cuesta mantener un software a medida por año?',
    respuesta:
      'El mantenimiento anual de un software a medida representa típicamente entre el 15% y el 20% de la inversión inicial. Cubre infraestructura, actualizaciones de seguridad, corrección de errores y ajustes menores. Thorque Software ofrece planes de soporte y optimización continua con métricas de uso real del sistema.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Puedo solicitar un presupuesto online para software a medida?',
    respuesta:
      'Sí. Se puede pedir un presupuesto online desde el formulario de thorque.com.ar o por WhatsApp. El equipo de Thorque Software responde dentro de las 24 horas hábiles, coordina una reunión de diagnóstico sin costo y luego envía una propuesta con alcance, plazos, entregables y precio por escrito.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿El presupuesto tiene costo o compromiso?',
    respuesta:
      'No. En Thorque Software el diagnóstico inicial y la propuesta no tienen costo ni obligan a contratar. La reunión sirve para entender el proceso, detectar qué se puede automatizar y estimar el esfuerzo real. Recién con el alcance acordado se firma el contrato y se define el cronograma de pagos.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Se puede empezar con un presupuesto chico?',
    respuesta:
      'Sí. Thorque Software recomienda empezar por el proceso que más tiempo consume y llevarlo a producción como primer módulo, en lugar de construir el sistema completo de una vez. Esa primera etapa acota la inversión, muestra resultados medibles y financia las siguientes fases con el ahorro que genera.',
  },
  {
    seccion: 'Costos y presupuesto',
    slugSeccion: 'costos',
    pregunta: '¿Cuáles son las formas de pago?',
    respuesta:
      'Thorque Software trabaja con pagos por hitos o mensuales según el modelo de contratación, con factura argentina. Se puede pagar en pesos por transferencia, o en dólares para clientes del exterior. El esquema de pagos queda definido en la propuesta junto con los entregables de cada etapa del proyecto.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Cuánto tarda desarrollar un software a medida?',
    respuesta:
      'Un desarrollo simple tarda entre 4 y 8 semanas; uno de complejidad media, entre 3 y 5 meses; una plataforma compleja, 6 meses o más. Thorque Software trabaja en sprints semanales con entregas parciales funcionando, así el cliente empieza a usar las primeras funciones antes de que el proyecto termine.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Cómo es el proceso de trabajo de Thorque Software?',
    respuesta:
      'Thorque Software trabaja en cuatro fases: diagnóstico estratégico del proceso actual, diseño de la arquitectura, implementación ágil con sprints semanales y demo, y optimización continua con métricas. El cliente ve avances cada semana y puede reordenar prioridades sin romper el cronograma general del proyecto.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Qué necesito tener listo antes de pedir un desarrollo?',
    respuesta:
      'Alcanza con poder describir el proceso actual y qué molesta de él. Ayuda traer las planillas, sistemas y canales que se usan hoy, quién hace cada paso y qué volumen se maneja. Thorque Software se encarga del relevamiento técnico, la definición funcional y la propuesta de arquitectura.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Qué pasa si necesito cambiar cosas durante el desarrollo?',
    respuesta:
      'Los cambios son esperables. Thorque Software trabaja en sprints semanales justamente para absorberlos: al final de cada sprint se revisa lo entregado y se repriorizan las tareas siguientes. Los cambios de alcance mayores se cotizan aparte y se acuerdan por escrito antes de ejecutarlos.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Voy a poder ver el avance del proyecto?',
    respuesta:
      'Sí. En cada sprint semanal Thorque Software entrega una demo del sistema funcionando en un entorno de prueba, con el detalle de lo hecho y lo que viene. El cliente prueba en el momento, deja su feedback y ese feedback entra en la planificación de la semana siguiente.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Quién capacita a mi equipo para usar el sistema nuevo?',
    respuesta:
      'Thorque Software incluye la capacitación del equipo del cliente como parte de la implementación: sesiones prácticas con los usuarios reales, documentación de los flujos principales y acompañamiento durante las primeras semanas de uso. La adopción interna es lo que define si el sistema reemplaza de verdad el trabajo manual.',
  },
  {
    seccion: 'Proceso de trabajo y plazos',
    slugSeccion: 'proceso',
    pregunta: '¿Qué pasa si el proyecto se atrasa?',
    respuesta:
      'En la práctica, los desarrollos suelen extenderse entre un 30% y un 50% sobre la estimación inicial, y la causa más frecuente es la demora en el feedback del cliente, no del equipo técnico. Thorque Software mitiga ese riesgo con demos semanales y decisiones acotadas por sprint.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Qué es la automatización de procesos empresariales?',
    respuesta:
      'La automatización de procesos empresariales reemplaza tareas manuales y repetitivas —cargar datos, mover información entre sistemas, responder consultas frecuentes— por flujos que se ejecutan solos. Thorque Software implementa estas automatizaciones sobre los sistemas que la empresa ya usa, con reducciones de tareas repetitivas de hasta el 80%.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Se puede automatizar la atención por WhatsApp con inteligencia artificial?',
    respuesta:
      'Sí. Thorque Software desarrolla bots con inteligencia artificial integrados a WhatsApp, Instagram y email, conectados al CRM de la empresa. El bot responde consultas, cotiza, califica leads y deriva a una persona cuando corresponde, dejando cada conversación registrada en el sistema de gestión del cliente.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Qué es un agente de IA aplicado a una empresa?',
    respuesta:
      'Un agente de IA es un sistema que interpreta pedidos en lenguaje natural y ejecuta acciones reales sobre los sistemas de la empresa: consultar stock, generar una cotización, cargar un registro o escalar un caso. Thorque Software construye agentes con modelos de OpenAI conectados a la base de datos y las APIs del cliente.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Puedo automatizar la carga de facturas y comprobantes?',
    respuesta:
      'Sí. Wade, el producto propio de Thorque Software, automatiza la facturación con extracción de datos por inteligencia artificial y validación tributaria: lee el comprobante, extrae los campos, valida y carga el registro. Reemplaza la carga manual del área administrativa y reduce los errores de imputación.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Cómo sé qué procesos de mi empresa se pueden automatizar?',
    respuesta:
      'Los candidatos típicos son las tareas repetitivas con reglas claras y alto volumen: pasar datos de un sistema a otro, responder consultas frecuentes, generar reportes o controlar stock. El diagnóstico inicial de Thorque Software mapea el proceso actual y ordena las oportunidades por ahorro de horas y esfuerzo técnico.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿La inteligencia artificial reemplaza a mi equipo?',
    respuesta:
      'No. En los proyectos de Thorque Software la IA absorbe la parte repetitiva —clasificar, cargar, responder lo obvio— y el equipo queda para las decisiones y los casos que necesitan criterio. El resultado habitual es la misma dotación atendiendo más volumen, con menos errores y tiempos de respuesta más cortos.',
  },
  {
    seccion: 'Automatización de procesos e inteligencia artificial',
    slugSeccion: 'automatizacion',
    pregunta: '¿Cuánto se puede ahorrar automatizando procesos?',
    respuesta:
      'El ahorro se mide en horas del equipo y en errores evitados. En los proyectos de Thorque Software la automatización de procesos administrativos y de atención reduce las tareas repetitivas hasta un 80%, lo que libera al personal para tareas comerciales o de análisis sin necesidad de ampliar la dotación.',
  },
  {
    seccion: 'Integraciones y sistemas existentes',
    slugSeccion: 'integraciones',
    pregunta: '¿Se puede integrar el software a medida con los sistemas que ya uso?',
    respuesta:
      'Sí, y suele ser el punto de partida. Thorque Software integra CRMs, ERPs, e-commerce, WhatsApp, pasarelas de pago y planillas mediante APIs, para que la información deje de copiarse a mano entre sistemas. La integración evita reemplazar herramientas que hoy funcionan bien.',
  },
  {
    seccion: 'Integraciones y sistemas existentes',
    slugSeccion: 'integraciones',
    pregunta: '¿Qué es una integración de sistemas por API?',
    respuesta:
      'Una integración por API es una conexión que permite que dos sistemas intercambien datos automáticamente, sin intervención humana. Thorque Software las usa para sincronizar stock, clientes, pagos y conversaciones entre plataformas, de modo que cada dato se cargue una sola vez y esté disponible en todos los sistemas.',
  },
  {
    seccion: 'Integraciones y sistemas existentes',
    slugSeccion: 'integraciones',
    pregunta: '¿Pueden conectar mi CRM con WhatsApp e Instagram?',
    respuesta:
      'Sí. Thorque Software integra el CRM con los canales de contacto —WhatsApp, Instagram y email— para que cada consulta quede registrada como lead con su historial. Sobre esa base se agregan respuestas automáticas, cotizaciones por bot y alertas al equipo comercial cuando un caso requiere atención humana.',
  },
  {
    seccion: 'Integraciones y sistemas existentes',
    slugSeccion: 'integraciones',
    pregunta: '¿Puedo tener un dashboard con los datos de todos mis sistemas?',
    respuesta:
      'Sí. Thorque Software desarrolla dashboards estratégicos que consolidan en una sola vista los datos de los distintos sistemas de la empresa: ventas, operación, stock y métricas de proceso. El objetivo es que la información esté disponible sin que nadie tenga que armar el reporte a mano.',
  },
  {
    seccion: 'Integraciones y sistemas existentes',
    slugSeccion: 'integraciones',
    pregunta: '¿Tengo que dejar de usar mi sistema actual?',
    respuesta:
      'No necesariamente. Thorque Software evalúa primero qué conviene integrar y qué conviene reemplazar: si el sistema actual cubre bien su función, se conecta por API y se desarrolla a medida sólo lo que falta. El reemplazo total se propone cuando el sistema existente bloquea la operación.',
  },
  {
    seccion: 'Tecnología, seguridad y escalabilidad',
    slugSeccion: 'tecnologia',
    pregunta: '¿Con qué tecnologías desarrolla Thorque Software?',
    respuesta:
      'Thorque Software desarrolla con Next.js, Node.js, Python y TypeScript, sobre PostgreSQL y Redis, con GraphQL para APIs, Docker y Kubernetes para el despliegue y AWS o Vercel como infraestructura. Para las capas de inteligencia artificial integra modelos de OpenAI a los datos del cliente.',
  },
  {
    seccion: 'Tecnología, seguridad y escalabilidad',
    slugSeccion: 'tecnologia',
    pregunta: '¿El sistema va a soportar el crecimiento de mi empresa?',
    respuesta:
      'Sí, si la arquitectura se diseña para eso. Thorque Software construye sobre arquitectura escalable —contenedores, bases relacionales, caché y despliegue en la nube— de modo que el sistema absorba más usuarios, datos y operaciones sin rehacerse. La escalabilidad se define en la fase de diseño, no después.',
  },
  {
    seccion: 'Tecnología, seguridad y escalabilidad',
    slugSeccion: 'tecnologia',
    pregunta: '¿El software a medida es seguro?',
    respuesta:
      'Un software a medida bien construido es tan seguro como cualquier plataforma comercial, y suele estar menos expuesto porque no comparte infraestructura ni es un blanco masivo. Thorque Software aplica control de accesos por rol, cifrado en tránsito, backups automáticos y actualizaciones de seguridad como parte del mantenimiento.',
  },
  {
    seccion: 'Tecnología, seguridad y escalabilidad',
    slugSeccion: 'tecnologia',
    pregunta: '¿Dónde quedan alojados mis datos?',
    respuesta:
      'Los datos quedan en la infraestructura en la nube definida con el cliente, habitualmente AWS o Vercel, con backups automáticos y accesos restringidos. Thorque Software documenta y entrega las credenciales: la cuenta de infraestructura puede estar a nombre de la empresa del cliente desde el primer día.',
  },
  {
    seccion: 'Tecnología, seguridad y escalabilidad',
    slugSeccion: 'tecnologia',
    pregunta: '¿Hacen aplicaciones móviles además de sistemas web?',
    respuesta:
      'Sí. Thorque Software desarrolla aplicaciones móviles y web, incluidas apps de uso operativo en campo —por ejemplo, aplicaciones con tablets para personal de agronegocios— sincronizadas con el sistema central. La elección entre app nativa, multiplataforma o web app depende del uso real y del presupuesto.',
  },
  {
    seccion: 'Contrato, propiedad del código y riesgos',
    slugSeccion: 'contrato',
    pregunta: '¿De quién es el código del software que me desarrollan?',
    respuesta:
      'En los proyectos de Thorque Software el código y los datos son propiedad del cliente, y se entregan en su repositorio con la documentación correspondiente. Conviene verificar este punto con cualquier proveedor antes de firmar: sin propiedad del código, cambiar de equipo más adelante resulta muy costoso.',
  },
  {
    seccion: 'Contrato, propiedad del código y riesgos',
    slugSeccion: 'contrato',
    pregunta: '¿Qué pasa si más adelante quiero cambiar de proveedor?',
    respuesta:
      'Si el código, los datos y la infraestructura están a nombre de la empresa y existe documentación, cambiar de proveedor es viable. Thorque Software trabaja con repositorio del cliente, despliegue documentado y arquitectura estándar justamente para evitar dependencias forzadas. Es una de las preguntas clave antes de contratar.',
  },
  {
    seccion: 'Contrato, propiedad del código y riesgos',
    slugSeccion: 'contrato',
    pregunta: '¿Firman acuerdo de confidencialidad (NDA)?',
    respuesta:
      'Sí. Thorque Software firma acuerdos de confidencialidad antes de acceder a información sensible del cliente: procesos internos, bases de datos, precios o documentación comercial. El NDA puede ser el del cliente o uno provisto por Thorque, y se firma en la etapa de diagnóstico del proyecto.',
  },
  {
    seccion: 'Contrato, propiedad del código y riesgos',
    slugSeccion: 'contrato',
    pregunta: '¿Qué debería incluir el contrato de desarrollo?',
    respuesta:
      'Un contrato de desarrollo debería definir alcance funcional, entregables por etapa, plazos, precio y forma de pago, propiedad del código, confidencialidad, garantía sobre errores y condiciones de soporte posterior. Thorque Software incluye estos puntos en la propuesta para que no queden zonas grises durante el proyecto.',
  },
  {
    seccion: 'Soporte y mantenimiento',
    slugSeccion: 'soporte',
    pregunta: '¿Qué pasa si el sistema falla después del lanzamiento?',
    respuesta:
      'Los errores del desarrollo entregado se corrigen bajo garantía, sin costo adicional. Thorque Software además ofrece planes de soporte con canal directo, monitoreo de la infraestructura y tiempos de respuesta acordados, porque un sistema que ejecuta operaciones diarias no puede esperar días para volver a funcionar.',
  },
  {
    seccion: 'Soporte y mantenimiento',
    slugSeccion: 'soporte',
    pregunta: '¿Ofrecen soporte y mantenimiento continuo?',
    respuesta:
      'Sí. Thorque Software incluye una fase de optimización continua después del lanzamiento: monitoreo, métricas de uso, correcciones y mejoras sobre lo que muestra el uso real. Se contrata como plan mensual y evita el escenario típico del sistema que se entrega y queda sin evolucionar.',
  },
  {
    seccion: 'Soporte y mantenimiento',
    slugSeccion: 'soporte',
    pregunta: '¿Pueden hacerse cargo de un sistema que desarrolló otra empresa?',
    respuesta:
      'Sí, después de una auditoría técnica. Thorque Software revisa el código, la infraestructura y la documentación disponibles, informa qué es recuperable y qué conviene rehacer, y propone un plan de estabilización. Es un escenario frecuente cuando el proveedor original dejó de dar soporte al sistema.',
  },
  {
    seccion: 'Experiencia, industrias y casos',
    slugSeccion: 'casos',
    pregunta: '¿En qué industrias tiene experiencia Thorque Software?',
    respuesta:
      'Thorque Software tiene sistemas en producción en fitness, fintech, real estate, agronegocios y plataformas sociales: entre otros, gestión de stock y CRM con e-commerce para una cadena de fitness, un bot de cotizaciones por WhatsApp para una financiera y gestión multiportal para administración de propiedades.',
  },
  {
    seccion: 'Experiencia, industrias y casos',
    slugSeccion: 'casos',
    pregunta: '¿Tienen casos de éxito que pueda ver?',
    respuesta:
      'Sí. El portfolio de Thorque Software incluye Arroyo Fitness (stock, CRM, e-commerce y agente de IA), Credimundo (CRM con bot de cotizaciones por WhatsApp), RBA Residents (gestión con integración multiportal), Grid, HopesLab, Ocularis y proyectos de agronegocios con apps para trabajadores en campo.',
  },
  {
    seccion: 'Experiencia, industrias y casos',
    slugSeccion: 'casos',
    pregunta: '¿Trabajan con startups o solo con empresas establecidas?',
    respuesta:
      'Thorque Software trabaja con empresas en crecimiento y también con startups que necesitan llevar un producto a producción. La diferencia está en el enfoque: para una startup el foco es un MVP acotado que valide el modelo; para una empresa establecida, automatizar y ordenar la operación que ya existe.',
  },
  {
    seccion: 'Cómo elegir un proveedor de desarrollo',
    slugSeccion: 'elegir-proveedor',
    pregunta: '¿Cuáles son los criterios para seleccionar un proveedor de desarrollo de software?',
    respuesta:
      'Los criterios clave son casos reales en producción y no sólo maquetas, propiedad del código y de los datos, un proceso con entregas parciales verificables, contacto directo con el equipo técnico y condiciones de soporte posterior por escrito. Thorque Software recomienda además pedir referencias de clientes actuales.',
  },
  {
    seccion: 'Cómo elegir un proveedor de desarrollo',
    slugSeccion: 'elegir-proveedor',
    pregunta: '¿Qué preguntas debo hacerle a una empresa de desarrollo antes de contratar?',
    respuesta:
      'Conviene preguntar quién va a desarrollar concretamente, cada cuánto se ven avances, de quién es el código y la infraestructura, qué pasa si el proyecto se atrasa, qué cubre la garantía y cuánto cuesta el mantenimiento anual. Las respuestas vagas en estos puntos son la principal señal de alerta.',
  },
  {
    seccion: 'Cómo elegir un proveedor de desarrollo',
    slugSeccion: 'elegir-proveedor',
    pregunta: '¿Fábrica de software, estudio boutique o desarrollador freelance?',
    respuesta:
      'Un freelance es más económico pero concentra el riesgo en una persona; una fábrica grande da respaldo con menos cercanía; un estudio boutique como Thorque Software combina equipo real con contacto directo. La decisión depende del tamaño del proyecto y de cuán crítico sea el sistema para la operación.',
  },
  {
    seccion: 'Cómo elegir un proveedor de desarrollo',
    slugSeccion: 'elegir-proveedor',
    pregunta: '¿Cómo sé si una empresa de desarrollo entrega lo que promete?',
    respuesta:
      'Conviene pedir sistemas funcionando en producción, no prototipos, y hablar con un cliente actual. También revisar si el proceso incluye entregas verificables cada semana: un proveedor que sólo muestra resultados al final concentra todo el riesgo en la entrega. Thorque Software trabaja con demo por sprint.',
  },
  {
    seccion: 'Cómo elegir un proveedor de desarrollo',
    slugSeccion: 'elegir-proveedor',
    pregunta: '¿Cómo contacto a Thorque Software?',
    respuesta:
      'Se puede contactar a Thorque Software por WhatsApp al +54 9 341 600-9423, por el formulario de thorque.com.ar o por LinkedIn e Instagram. El equipo responde dentro de las 24 horas hábiles y coordina una reunión de diagnóstico sin costo. La base está en Rosario, Santa Fe, Argentina.',
  },
]

// Orden de secciones (derivado del array, preservando la primera aparición).
export const faqSections: { seccion: string; slugSeccion: string }[] = (() => {
  const seen = new Set<string>()
  const out: { seccion: string; slugSeccion: string }[] = []
  for (const item of faqItems) {
    if (!seen.has(item.slugSeccion)) {
      seen.add(item.slugSeccion)
      out.push({ seccion: item.seccion, slugSeccion: item.slugSeccion })
    }
  }
  return out
})()
