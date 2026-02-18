(function () {
  const STORAGE_KEY = "site_lang";

  const LANGS = [
    { code: "en", label: "English", short: "EN" },
    { code: "es", label: "Español", short: "ES" },
    { code: "id", label: "Bahasa Indonesia", short: "ID" },
    { code: "zh-Hans", label: "中文（简体）", short: "中文" }
  ];

  // Same dictionary approach as before; only the selector implementation changed.
  const translations = {
  "en": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "Language",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "The most advanced, fast, and secure CPK protection tool<br/>available on the market.",
    "nav.products": "Products",
    "nav.demo": "Demo & Download",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "sections.products": "Products",
    "sections.demo": "Demo and Download",
    "sections.pricing": "Pricing and Licensing",
    "sections.contact": "Contact",

    "messenger.label": "Messenger",
    "messenger.aria": "Chat on Messenger",
    "social.twitter": "Twitter",
    "social.facebook": "Facebook",
    "social.discord": "Discord",
    "social.github": "GitHub",
    "contact.formTitle": "CPK Protection Toolkit Form",

    "pricing.product.cpkpt": "CPK Protection Toolkit",
    "pricing.product.ucu": "ULTIMATE CPK Unlocker",
    "pricing.product.udg": "Universal DpFileList Generator",
    "pricing.product.pespt": "PES Protection Toolkit",

    "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Secure. Bloatware-free. Malware-free.</span>",
    "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> If you're interested to protect your CPK files from unauthorized access, this is the tool for you.",
    "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Key advantages include:",
    "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Blazing fast speeds while processing files",
    "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Unlimited filesize",
    "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> More secure <i>(i've bypassed and unlocked every locked cpk i found on the internet thus i know how to protect mine better - if you need proof check <b>ULTIMATE CPK Unlocker</b>)</i>",
    "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> No bloatware <i>(no extra redistributables required)</i>",
    "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> High-DPI friendly—looks sharp on 1440p and 4K displays",

    "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Secure. Bloatware-free. Malware-free.</span>",
    "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> If you need to unlock protected CPK files, this tool is designed for you. In my testing, it achieved a <b>99.9%</b> success rate across all files evaluated. If you encounter a file the tool cannot extract, I will promptly update it to ensure compatibility and support extraction of the affected file.",
    "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> <b>ULTIMATE CPK Unlocker</b> is available as a <b>perpetual (lifetime)</b> license or a <b>subscription</b> license.",
    "products.ucu.note1": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Note 1: <b>ULTIMATE CPK Unlocker</b> does <b>not unlock</b> files protected with <b>CPK Protection Toolkit</b>.",
    "products.ucu.note2": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Note 2: Before deciding on a purchase, it is recommended to <a href=\"#contact\"><b>contact me</b></a> and send at least 3 locked files you want to unlock so i can test.",
    "products.pespt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Secure. Patch-ready. Malware-free.</span>",
    "products.pespt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> PES Protection Toolkit helps you protect your PES patch content with built-in licensing and encryption, delivered with a custom installer for your patch.",
    "products.pespt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Key advantages include:",
    "products.pespt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Built-in licensing system (per device)",
    "products.pespt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Encryption for common PES and Sider assets (tier-dependent)",
    "products.pespt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Custom installer for your patch included in Pro/Ultimate",
    "products.pespt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Standard/Pro (1-year subscription) or Ultimate (monthly subscription) depending on the formats you need",
    "products.pespt.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> For pricing and tier comparison, see the <a href=\"#pricing\"><b>Pricing</b></a> section.",

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Smooth. Easy to use. Malware-free.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Looking for an all-in-one solution to manage <b>DpFileList.bin</b> for your preferred PES title? If the answer is YES, then this is the tool for you<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> This is compatible with all PES versions and DLCs starting Pro Evolution Soccer 2017 up to eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> It's the only tool that actually respects the original KONAMI format for <b>DpFileList.bin</b>. The other existing tools are generating the bins using wrong data <i>(even if the files are loaded ingame)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the above video to see <b>CPK Protection Toolkit</b> in action. If you're interested in purchasing, please go to the <a href=\"#pricing\"><b>pricing</b></a> section to find out more informations about the licensing system and applicable discounts in case of purchasing of more than one license. If you have more questions, please <a href=\"#contact\">contact us</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> For additional details, use the Information button in the <b>CPKPT</b> application's menu.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"#\" target=\"_blank\">No download/demo download available</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the above video to see <b>ULTIMATE CPK Unlocker</b> in action. If you're interested in purchasing, please go to the <a href=\"#pricing\"><b>pricing</b></a> section to find out more informations about the licensing system and applicable discounts in case of purchasing of more than one license. If you have more questions, please <a href=\"#contact\">contact us</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> For additional details, use the Information button in the <b>UCU</b> application's menu.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"#\" target=\"_blank\">No download/demo download available</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the video above to see Universal DpFileList Generator in action.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "There are two licensing options available: a <b>Lifetime</b> <i>(perpetual)</i> license and a <b>Subscription</b> <i>(non-perpetual)</i> license. Each license is tied to a single computer and cannot be used on multiple machines.<br/><br/>If you need to use the application on more than one computer, you will need a <b>multi-license</b>. Multi-licenses require a minimum purchase of two licenses per application and may qualify you for volume discounts, which we can discuss.<br/><br/><u>Special case:</u> The <b>PES Protection Toolkit</b> offers a 1-year subscription license <i>(Standard and Pro)</i> and a monthly subscription license <i>(Ultimate)</i>. It also supports multi-license mode for up to three members of the patch team.<br/><br/>Please refer to the table below for current pricing. <i>Note that the listed prices apply to single licenses only; multi-license pricing may differ.</i>",
    "pricing.tableTitle": "Plans & pricing",
    "pricing.th.name": "Name",
    "pricing.th.license": "License",
    "pricing.th.price": "Price",
    "pricing.license.perpetual": "Perpetual license.",
    "pricing.license.nonperpetual": "Non-perpetual license.",
    "pricing.license.none": "None",
    "pricing.price.free": "FREE",
    "pricing.plan.subscription": "Subscription",
    "pricing.plan.lifetime": "Lifetime",
    "pricing.plan.free": "Free",
    "pricing.badge.bestValue": "Best value",
    "pricing.unit.perMonth": "/mo",
    "pricing.meta.activation": "+ $54.99 activation fee (one-time)",
    "pricing.meta.oneTime": "one-time payment",
    "pricing.meta.bundleIncludes": "Includes Toolkit + Unlocker",
    "pricing.meta.saveSmall": "Save $9.98 vs separate",
    "pricing.meta.openSource": "Open-source on GitHub",
    "pricing.meta.oneYear": "<u>1-year subscription</u>",
    "pricing.plan.pes.standard": "Standard",
    "pricing.plan.pes.pro": "Pro",
    "pricing.plan.pes.ultimate": "<u>monthly subscription</u>",
    "pricing.meta.pesInstaller": "Pro and Ultimate tiers include a custom installer for your patch (licensing system included).",
    "pricing.pes.standard.features": "<li>Licensing system</li>\n\t\t\t\t\t\t\t\t<li>Encryption for CPK files</li>",
    "pricing.pes.pro.features": "<li>Licensing system</li>\n\t\t\t\t\t\t\t\t<li>Patch Installer system</li>\n\t\t\t\t\t\t\t\t<li>Encryption for CPK files</li>\n\t\t\t\t\t\t\t\t<li>Encryption for following Sider assets: MP3, TXT, LUA</li>",
    "pricing.pes.ultimate.features": "<li>Licensing system</li><li>Patch Installer system</li><li>Encryption for CPK files</li><li>Encryption for following Sider assets: BIN, FTEX, FPK, FPKD, FDC, USM, MP3, TXT, LUA</li><li>Encryption for EDIT00000000 database</li>",
    "pricing.note.device": "Licenses are <b>per device</b> (1 computer). If you need the same tool on multiple computers, you'll need multiple licenses.",
    "pricing.note.breakEven": "For the Subscription of <b>CPK Protection Toolkit</b> / <b>ULTIMATE CPK Unlocker</b>, the break-even point versus Lifetime is about <b>6.7 months</b> (<code>54.99 + 15 × months</code>). Choose Subscription for short projects; choose Lifetime for long-term use.",
    "pricing.note.multilicense": "Need <b>2+ licenses</b>? Ask about volume discounts when you contact us.",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> To purchase any of the products listed above, click the <b>BUY WITH PAYPAL</b> button below. On the purchase details page, enter the name of the app you want in the <u>Description</u> field, and enter the corresponding amount from the pricing options above in the <u>Price per item</u> field.",
    "buy.withPayPal.button": "Buy with PayPal",

    "contact.lead": "Use the below contact form if you want to contact us on e-mail. We will answer as soon as possible.",
    "contact.social": "You can find us on Twitter, Facebook or Discord by clicking the below icons corresponding to each social network.",
    "footer.copyright": "© 2026 IT World Software Solutions",
    "pricing.meta.activation.fee": "+ $500 activation fee (one-time)",
    "pricing.tier.pes.ultimate": "Ultimate",
},

  "es": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "Idioma",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "La herramienta de protección CPK más avanzada, rápida y segura<br/>disponible en el mercado.",
    "nav.products": "Productos",
    "nav.demo": "Demo y descarga",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "sections.products": "Productos",
    "sections.demo": "Demo y descarga",
    "sections.pricing": "Precios y licencias",
    "sections.contact": "Contacto",

    "messenger.label": "Messenger",
    "messenger.aria": "Chatear en Messenger",
    "social.twitter": "Twitter",
    "social.facebook": "Facebook",
    "social.discord": "Discord",
    "social.github": "GitHub",
    "contact.formTitle": "Formulario de CPK Protection Toolkit",

    "pricing.product.cpkpt": "CPK Protection Toolkit",
    "pricing.product.ucu": "ULTIMATE CPK Unlocker",
    "pricing.product.udg": "Universal DpFileList Generator",
    "pricing.product.pespt": "PES Protection Toolkit",

    "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Seguro. Sin bloatware. Sin malware.</span>",
    "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Si quiere proteger sus archivos CPK contra accesos no autorizados, esta es la herramienta para usted.",
    "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Las principales ventajas incluyen:",
    "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Velocidades fulminantes al procesar archivos",
    "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Tamaño de archivo ilimitado",
    "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Más seguro <i>(he eludido y desbloqueado todos los CPK bloqueados que encontré en Internet, por lo que sé mejor cómo proteger los míos; si necesita pruebas, consulte <b>ULTIMATE CPK Unlocker</b>)</i>",
    "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sin bloatware <i>(no se requieren redistribuibles adicionales)</i>",
    "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Compatible con High-DPI: se ve nítido en pantallas 1440p y 4K",

    "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Seguro. Sin bloatware. Sin malware.</span>",
    "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Si necesita desbloquear archivos CPK protegidos, esta herramienta está diseñada para usted. En mis pruebas, alcanzó una tasa de éxito del <b>99,9%</b> en todos los archivos evaluados. Si se encuentra con un archivo que la herramienta no pueda extraer, la actualizaré de inmediato para garantizar la compatibilidad y permitir la extracción del archivo afectado.",
    "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> <b>ULTIMATE CPK Unlocker</b> está disponible como licencia <b>perpetua (de por vida)</b> o licencia de <b>suscripción</b>.",
    "products.ucu.note1": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Nota 1: <b>ULTIMATE CPK Unlocker</b> <b>no desbloquea</b> archivos protegidos con <b>CPK Protection Toolkit</b>.",
    "products.ucu.note2": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Nota 2: Antes de decidir una compra, se recomienda <a href=\"#contact\"><b>contactarme</b></a> y enviar al menos 3 archivos bloqueados que quiera desbloquear para que pueda probarlos.",
    "products.pespt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Seguro. Listo para parches. Sin malware.</span>",
    "products.pespt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> PES Protection Toolkit te ayuda a proteger el contenido de tu parche de PES con licencias integradas y cifrado, entregado con un instalador personalizado para tu parche.",
    "products.pespt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Las principales ventajas incluyen:",
    "products.pespt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sistema de licencias integrado (por dispositivo)",
    "products.pespt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Cifrado para archivos comunes de PES y Sider (según el nivel)",
    "products.pespt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Instalador personalizado para tu parche incluido en Pro/Ultimate",
    "products.pespt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Standard/Pro (suscripción de 1 año) o Ultimate (suscripción mensual) según los formatos que necesites",
    "products.pespt.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para precios y comparación de niveles, consulta la sección de <a href=\"#pricing\"><b>Precios</b></a>.",

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Fluido. Fácil de usar. Sin malware.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ¿Busca una solución todo en uno para gestionar <b>DpFileList.bin</b> para su título de PES preferido? Si la respuesta es SÍ, entonces esta es la herramienta para usted<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Esto es compatible con todas las versiones de PES y DLC desde Pro Evolution Soccer 2017 hasta eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Es la única herramienta que respeta realmente el formato original de KONAMI para <b>DpFileList.bin</b>. Las demás herramientas existentes generan los bin usando datos incorrectos <i>(incluso si los archivos se cargan en el juego)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver <b>CPK Protection Toolkit</b> en acción. Si le interesa comprarlo, vaya a la sección de <a href=\"#pricing\"><b>precios</b></a> para conocer más información sobre el sistema de licencias y los descuentos aplicables al comprar más de una licencia. Si tiene más preguntas, por favor <a href=\"#contact\">contáctenos</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para más detalles, utilice el botón Information en el menú de la aplicación <b>CPKPT</b>.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"#\" target=\"_blank\">No hay descarga / demo disponible</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver <b>ULTIMATE CPK Unlocker</b> en acción. Si le interesa comprarlo, vaya a la sección de <a href=\"#pricing\"><b>precios</b></a> para conocer más información sobre el sistema de licencias y los descuentos aplicables al comprar más de una licencia. Si tiene más preguntas, por favor <a href=\"#contact\">contáctenos</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para más detalles, utilice el botón Information en el menú de la aplicación <b>UCU</b>.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"#\" target=\"_blank\">No hay descarga / demo disponible</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver Universal DpFileList Generator en acción.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "Hay dos opciones de licencia disponibles: una licencia <b>De por vida</b> <i>(perpetua)</i> y una licencia de <b>Suscripción</b> <i>(no perpetua)</i>. Cada licencia está vinculada a un solo ordenador y no puede usarse en varias máquinas.<br/><br/>Si necesitas usar la aplicación en más de un ordenador, necesitarás una <b>multi-licencia</b>. Las multi-licencias requieren una compra mínima de dos licencias por aplicación y pueden darte acceso a descuentos por volumen, que podemos comentar.<br/><br/><u>Caso especial:</u> El <b>PES Protection Toolkit</b> ofrece una licencia de suscripción de 1 año <i>(Standard y Pro)</i> y una licencia de suscripción mensual <i>(Ultimate)</i>. También admite el modo multi-licencia para hasta tres miembros del equipo de parches.<br/><br/>Consulta la tabla de abajo para ver los precios actuales. <i>Ten en cuenta que los precios indicados se aplican solo a licencias individuales; el precio de multi-licencia puede variar.</i>",
    "pricing.tableTitle": "Planes y precios",
    "pricing.th.name": "Nombre",
    "pricing.th.license": "Licencia",
    "pricing.th.price": "Precio",
    "pricing.license.perpetual": "Licencia perpetua.",
    "pricing.license.nonperpetual": "Licencia no perpetua.",
    "pricing.license.none": "Ninguna",
    "pricing.price.free": "GRATIS",
    "pricing.plan.subscription": "Suscripción",
    "pricing.plan.lifetime": "De por vida",
    "pricing.plan.free": "Gratis",
    "pricing.badge.bestValue": "Mejor opción",
    "pricing.unit.perMonth": "/mes",
    "pricing.meta.activation": "+ $54.99 tarifa de activación (pago único)",
    "pricing.meta.oneTime": "pago único",
    "pricing.meta.bundleIncludes": "Incluye Toolkit + Unlocker",
    "pricing.meta.saveSmall": "Ahorra $9.98 vs. separado",
    "pricing.meta.openSource": "Código abierto en GitHub",
    "pricing.meta.oneYear": "<u>suscripción de 1 año</u>",
    "pricing.plan.pes.standard": "Estándar",
    "pricing.plan.pes.pro": "Pro",
    "pricing.plan.pes.ultimate": "<u>suscripción mensual</u>",
    "pricing.meta.pesUltimate": "Suscripción • $500 cuota inicial (pago único)",
    "pricing.meta.pesInstaller": "Los niveles Pro y Ultimate incluyen un instalador personalizado para tu parche (sistema de licencias incluido).",
    "pricing.pes.standard.features": "<li>Sistema de licencias</li><li>Cifrado de archivos CPK</li>",
    "pricing.pes.pro.features": "<li>Sistema de licencias</li><li>Sistema de instalador de parches</li><li>Cifrado de archivos CPK</li><li>Cifrado de los siguientes recursos de Sider: MP3, TXT, LUA</li>",
    "pricing.pes.ultimate.features": "<li>Sistema de licencias</li><li>Sistema de instalador de parches</li><li>Cifrado de archivos CPK</li><li>Cifrado de los siguientes recursos de Sider: BIN, FTEX, FPK, FPKD, FDC, USM, MP3, TXT, LUA</li><li>Cifrado de la base de datos EDIT00000000</li>",
    "pricing.note.device": "Las licencias son <b>por dispositivo</b> (1 ordenador). Si necesita la misma herramienta en varios ordenadores, necesitará varias licencias.",
    "pricing.note.breakEven": "Para la Suscripción de <b>CPK Protection Toolkit</b> / <b>ULTIMATE CPK Unlocker</b>, el punto de equilibrio frente a De por vida es de aproximadamente <b>6.7 meses</b> (<code>54.99 + 15 × meses</code>). Elija Suscripción para proyectos de corta duración; elija De por vida para uso a largo plazo.",
    "pricing.note.multilicense": "¿Necesita <b>2+ licencias</b>? Pregunte por descuentos por volumen cuando nos contacte.",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para comprar cualquiera de los productos listados arriba, haz clic en el botón <b>BUY WITH PAYPAL</b> de abajo. En la página de detalles de la compra, escribe el nombre de la app que quieres en el campo <u>Description</u> e introduce el importe correspondiente de las opciones de precios de arriba en el campo <u>Price per item</u>.",
    "buy.withPayPal.button": "Comprar con PayPal",
    
    "contact.lead": "Use el formulario de contacto de abajo si desea contactarnos por correo electrónico. Responderemos lo antes posible.",
    "contact.social": "Puede encontrarnos en Twitter, Facebook o Discord haciendo clic en los iconos de abajo correspondientes a cada red social.",
    "footer.copyright": "© 2026 IT World Software Solutions",
    "pricing.meta.activation.fee": "+ $500 tarifa de activación (pago único)",
    "pricing.tier.pes.ultimate": "Ultimate",
},

  "id": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "Bahasa",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "Alat perlindungan CPK paling canggih, cepat, dan aman<br/>yang tersedia di pasaran.",
    "nav.products": "Produk",
    "nav.demo": "Demo & Unduh",
    "nav.pricing": "Harga",
    "nav.contact": "Kontak",
    "sections.products": "Produk",
    "sections.demo": "Demo dan Unduh",
    "sections.pricing": "Harga dan lisensi",
    "sections.contact": "Kontak",

    "messenger.label": "Messenger",
    "messenger.aria": "Chat di Messenger",
    "social.twitter": "Twitter",
    "social.facebook": "Facebook",
    "social.discord": "Discord",
    "social.github": "GitHub",
    "contact.formTitle": "Formulir CPK Protection Toolkit",

    "pricing.product.cpkpt": "CPK Protection Toolkit",
    "pricing.product.ucu": "ULTIMATE CPK Unlocker",
    "pricing.product.udg": "Universal DpFileList Generator",
    "pricing.product.pespt": "PES Protection Toolkit",

    "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Aman. Bebas bloatware. Bebas malware.</span>",
    "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Jika Anda ingin melindungi file CPK Anda dari akses yang tidak sah, ini adalah alat yang tepat untuk Anda.",
    "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Keunggulan utama meliputi:",
    "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Kecepatan sangat tinggi saat memproses file",
    "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Ukuran file tidak terbatas",
    "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Lebih aman <i>(saya telah membypass dan membuka setiap CPK terkunci yang saya temukan di internet, jadi saya tahu cara melindungi milik saya dengan lebih baik—jika Anda butuh bukti, lihat <b>ULTIMATE CPK Unlocker</b>)</i>",
    "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Tanpa bloatware <i>(tidak memerlukan redistributable tambahan)</i>",
    "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Ramah High-DPI—tampil tajam di layar 1440p dan 4K",

    "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Aman. Bebas bloatware. Bebas malware.</span>",
    "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Jika Anda perlu membuka file CPK yang diproteksi, alat ini dirancang untuk Anda. Dalam pengujian saya, alat ini mencapai tingkat keberhasilan <b>99.9%</b> di semua file yang dievaluasi. Jika Anda menemukan file yang tidak bisa diekstrak oleh alat ini, saya akan segera memperbaruinya untuk memastikan kompatibilitas dan mendukung ekstraksi file tersebut.",
    "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> <b>ULTIMATE CPK Unlocker</b> tersedia sebagai lisensi <b>perpetual (seumur hidup)</b> atau lisensi <b>berlangganan</b>.",
    "products.ucu.note1": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Catatan 1: <b>ULTIMATE CPK Unlocker</b> <b>tidak membuka</b> file yang diproteksi dengan <b>CPK Protection Toolkit</b>.",
    "products.ucu.note2": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> Catatan 2: Sebelum memutuskan untuk membeli, disarankan untuk <a href=\"#contact\"><b>menghubungi saya</b></a> dan mengirim setidaknya 3 file terkunci yang ingin Anda buka agar saya bisa menguji.",
    "products.pespt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Aman. Siap untuk patch. Bebas malware.</span>",
    "products.pespt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> PES Protection Toolkit membantu Anda melindungi konten patch PES Anda dengan sistem lisensi dan enkripsi bawaan, disertai installer khusus untuk patch Anda.",
    "products.pespt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Keunggulan utama meliputi:",
    "products.pespt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sistem lisensi bawaan (per perangkat)",
    "products.pespt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Enkripsi untuk aset PES dan Sider yang umum (tergantung tier)",
    "products.pespt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Installer khusus untuk patch Anda termasuk Pro/Ultimate",
    "products.pespt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Standard/Pro (langganan 1 tahun) atau Ultimate (langganan bulanan) sesuai format yang Anda butuhkan",
    "products.pespt.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk harga dan perbandingan tier, lihat bagian <a href=\"#pricing\"><b>Harga</b></a>.",

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Mulus. Mudah digunakan. Bebas malware.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Sedang mencari solusi all-in-one untuk mengelola <b>DpFileList.bin</b> untuk judul PES favorit Anda? Jika jawabannya YA, maka ini alat untuk Anda<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Ini kompatibel dengan semua versi PES dan DLC mulai dari Pro Evolution Soccer 2017 hingga eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Ini adalah satu-satunya alat yang benar-benar menghormati format asli KONAMI untuk <b>DpFileList.bin</b>. Alat lain yang ada menghasilkan bin menggunakan data yang salah <i>(meskipun file dimuat di dalam game)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat <b>CPK Protection Toolkit</b> beraksi. Jika Anda tertarik untuk membeli, silakan buka bagian <a href=\"#pricing\"><b>harga</b></a> untuk mengetahui lebih lanjut tentang sistem lisensi dan diskon yang berlaku jika membeli lebih dari satu lisensi. Jika Anda punya pertanyaan, silakan <a href=\"#contact\">hubungi kami</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk detail tambahan, gunakan tombol Information pada menu aplikasi <b>CPKPT</b>.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"#\" target=\"_blank\">Tidak ada unduhan / demo yang tersedia</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat <b>ULTIMATE CPK Unlocker</b> beraksi. Jika Anda tertarik untuk membeli, silakan buka bagian <a href=\"#pricing\"><b>harga</b></a> untuk mengetahui lebih lanjut tentang sistem lisensi dan diskon yang berlaku jika membeli lebih dari satu lisensi. Jika Anda punya pertanyaan, silakan <a href=\"#contact\">hubungi kami</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk detail tambahan, gunakan tombol Information pada menu aplikasi <b>UCU</b>.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"#\" target=\"_blank\">Tidak ada unduhan / demo yang tersedia</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat Universal DpFileList Generator beraksi.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "Tersedia dua opsi lisensi: lisensi <b>Seumur hidup</b> <i>(perpetual)</i> dan lisensi <b>Berlangganan</b> <i>(non-perpetual)</i>. Setiap lisensi terikat pada satu komputer dan tidak dapat digunakan pada beberapa mesin.<br/><br/>Jika Anda perlu menggunakan aplikasi di lebih dari satu komputer, Anda memerlukan <b>multi-license</b>. Multi-license memerlukan pembelian minimum dua lisensi per aplikasi dan mungkin memenuhi syarat untuk diskon volume, yang dapat kita diskusikan.<br/><br/><u>Kasus khusus:</u> <b>PES Protection Toolkit</b> menawarkan lisensi berlangganan 1 tahun <i>(Standard dan Pro)</i> dan lisensi berlangganan bulanan <i>(Ultimate)</i>. Toolkit ini juga mendukung mode multi-license untuk hingga tiga anggota tim patch.<br/><br/>Silakan lihat tabel di bawah untuk harga saat ini. <i>Perlu diketahui bahwa harga yang tercantum berlaku untuk lisensi tunggal saja; harga multi-license dapat berbeda.</i>",
    "pricing.tableTitle": "Paket & harga",
    "pricing.th.name": "Nama",
    "pricing.th.license": "Lisensi",
    "pricing.th.price": "Harga",
    "pricing.license.perpetual": "Lisensi perpetual.",
    "pricing.license.nonperpetual": "Lisensi non-perpetual.",
    "pricing.license.none": "Tidak ada",
    "pricing.price.free": "GRATIS",
    "pricing.plan.subscription": "Berlangganan",
    "pricing.plan.lifetime": "Seumur hidup",
    "pricing.plan.free": "Gratis",
    "pricing.badge.bestValue": "Nilai terbaik",
    "pricing.unit.perMonth": "/bulan",
    "pricing.meta.activation": "+ $54.99 biaya aktivasi (sekali bayar)",
    "pricing.meta.oneTime": "sekali bayar",
    "pricing.meta.bundleIncludes": "Termasuk Toolkit + Unlocker",
    "pricing.meta.saveSmall": "Hemat $9.98 dibanding terpisah",
    "pricing.meta.openSource": "Open-source di GitHub",
    "pricing.meta.oneYear": "<u>langganan 1 tahun</u>",
    "pricing.plan.pes.standard": "Standar",
    "pricing.plan.pes.pro": "Pro",
    "pricing.plan.pes.ultimate": "<u>langganan bulanan</u>",
    "pricing.meta.pesUltimate": "Langganan • biaya awal $500 (sekali bayar)",
    "pricing.meta.pesInstaller": "Tingkat Pro dan Ultimate termasuk installer khusus untuk patch Anda (sistem lisensi termasuk).",
    "pricing.pes.standard.features": "<li>Sistem lisensi</li><li>Enkripsi file CPK</li>",
    "pricing.pes.pro.features": "<li>Sistem lisensi</li><li>Sistem installer patch</li><li>Enkripsi file CPK</li><li>Enkripsi untuk aset Sider berikut: MP3, TXT, LUA</li>",
    "pricing.pes.ultimate.features": "<li>Sistem lisensi</li><li>Sistem installer patch</li><li>Enkripsi file CPK</li><li>Enkripsi untuk aset Sider berikut: BIN, FTEX, FPK, FPKD, FDC, USM, MP3, TXT, LUA</li><li>Enkripsi database EDIT00000000</li>",
    "pricing.note.device": "Lisensi adalah <b>per perangkat</b> (1 komputer). Jika Anda membutuhkan alat yang sama di beberapa komputer, Anda memerlukan beberapa lisensi.",
    "pricing.note.breakEven": "Untuk Langganan <b>CPK Protection Toolkit</b> / <b>ULTIMATE CPK Unlocker</b>, titik impas dibanding Seumur hidup sekitar <b>6.7 bulan</b> (<code>54.99 + 15 × bulan</code>). Pilih Langganan untuk proyek jangka pendek; pilih Seumur hidup untuk penggunaan jangka panjang.",
    "pricing.note.multilicense": "Butuh <b>2+ lisensi</b>? Tanyakan diskon volume saat Anda menghubungi kami.",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk membeli produk apa pun yang tercantum di atas, klik tombol <b>BUY WITH PAYPAL</b> di bawah. Pada halaman detail pembelian, masukkan nama aplikasi yang Anda inginkan pada kolom <u>Description</u>, lalu masukkan nominal yang sesuai dari opsi harga di atas pada kolom <u>Price per item</u>.",
    "buy.withPayPal.button": "Beli dengan PayPal",
    
    "contact.lead": "Gunakan formulir kontak di bawah ini jika Anda ingin menghubungi kami melalui email. Kami akan menjawab secepat mungkin.",
    "contact.social": "Anda dapat menemukan kami di Twitter, Facebook, atau Discord dengan mengklik ikon di bawah sesuai dengan masing-masing jejaring sosial.",
    "footer.copyright": "© 2026 IT World Software Solutions",
    "pricing.meta.activation.fee": "+ $500 biaya aktivasi (sekali bayar)",
    "pricing.tier.pes.ultimate": "Ultimate",
},

  "zh-Hans": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "语言",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "最先进、最快、最安全的 CPK 保护工具<br/>尽在市场之上。",
    "nav.products": "产品",
    "nav.demo": "演示与下载",
    "nav.pricing": "价格",
    "nav.contact": "联系",
    "sections.products": "产品",
    "sections.demo": "演示与下载",
    "sections.pricing": "价格与许可",
    "sections.contact": "联系",

    "messenger.label": "Messenger",
    "messenger.aria": "在 Messenger 上聊天",
    "social.twitter": "Twitter",
    "social.facebook": "Facebook",
    "social.discord": "Discord",
    "social.github": "GitHub",
    "contact.formTitle": "CPK Protection Toolkit 表单",

    "pricing.product.cpkpt": "CPK Protection Toolkit",
    "pricing.product.ucu": "ULTIMATE CPK Unlocker",
    "pricing.product.udg": "Universal DpFileList Generator",
    "pricing.product.pespt": "PES Protection Toolkit",

    "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。安全。无捆绑软件。无恶意软件。</span>",
    "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如果您希望保护 CPK 文件免遭未授权访问，这就是适合您的工具。",
    "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 主要优势包括：",
    "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 处理文件时速度极快",
    "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 文件大小不受限制",
    "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 更安全 <i>（我已绕过并解锁在互联网上找到的所有锁定 CPK，因此更了解如何把自己的保护做得更好；如需证明，请查看 <b>ULTIMATE CPK Unlocker</b>）</i>",
    "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 无捆绑 <i>（无需额外安装运行库/组件）</i>",
    "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 支持高 DPI——在 1440p 和 4K 显示器上依然清晰",

    "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。安全。无捆绑软件。无恶意软件。</span>",
    "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如果您需要解锁受保护的 CPK 文件，这款工具就是为此而设计。在我的测试中，它在所有评估的文件上达到了 <b>99.9%</b> 的成功率。如果遇到工具无法解压的文件，我会及时更新以确保兼容，并支持解压受影响的文件。",
    "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> <b>ULTIMATE CPK Unlocker</b> 提供 <b>永久（终身）</b>许可或 <b>订阅</b>许可。",
    "products.ucu.note1": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> 注意 1：<b>ULTIMATE CPK Unlocker</b> <b>不会解锁</b> 使用 <b>CPK Protection Toolkit</b> 保护的文件。",
    "products.ucu.note2": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">⚠️</span> 注意 2：在决定购买之前，建议先 <a href=\"#contact\"><b>联系我</b></a>，并发送至少 3 个您想解锁的锁定文件，以便我进行测试。",
    "products.pespt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。安全。适用于补丁发布。无恶意软件。</span>",
    "products.pespt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> PES Protection Toolkit 帮助你通过内置授权系统与加密来保护你的 PES 补丁内容，并提供为你的补丁定制的安装器。",
    "products.pespt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 主要优势包括：",
    "products.pespt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 内置授权系统（按设备）",
    "products.pespt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 对常见 PES 和 Sider 资源进行加密（取决于套餐）",
    "products.pespt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Pro/Ultimate 包含为你的补丁定制的安装器",
    "products.pespt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 按所需格式选择 Standard/Pro（1 年订阅）或 Ultimate（月度订阅）",
    "products.pespt.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 价格与套餐对比请查看 <a href=\"#pricing\"><b>定价</b></a> 部分。",

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。流畅。易用。无恶意软件。</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 想要一站式解决您偏好的 PES 作品中 <b>DpFileList.bin</b> 的管理需求吗？如果答案是 YES，那么这就是适合您的工具<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 兼容所有 PES 版本与 DLC，从 Pro Evolution Soccer 2017 一直到 eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 它是唯一真正遵循 KONAMI 原始 <b>DpFileList.bin</b> 格式的工具。其他现有工具会用错误的数据生成 bin <i>（即使文件在游戏内能加载）</i>。",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 <b>CPK Protection Toolkit</b> 的实际效果。如需购买，请前往 <a href=\"#pricing\"><b>价格</b></a> 部分，了解许可系统以及购买多份许可时适用的折扣。如有更多问题，请 <a href=\"#contact\">联系我们</a>。",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如需更多细节，请在 <b>CPKPT</b> 应用菜单中使用 Information 按钮。",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"#\" target=\"_blank\">暂无下载/演示版可用</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 <b>ULTIMATE CPK Unlocker</b> 的实际效果。如需购买，请前往 <a href=\"#pricing\"><b>价格</b></a> 部分，了解许可系统以及购买多份许可时适用的折扣。如有更多问题，请 <a href=\"#contact\">联系我们</a>。",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如需更多细节，请在 <b>UCU</b> 应用菜单中使用 Information 按钮。",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"#\" target=\"_blank\">暂无下载/演示版可用</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 Universal DpFileList Generator 的实际效果。",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "目前提供两种授权方式：<b>永久</b><i>（perpetual）</i>许可证和 <b>订阅</b><i>（non-perpetual）</i>许可证。每个许可证仅绑定一台电脑，不能在多台机器上使用。<br/><br/>如果你需要在多台电脑上使用该应用，则需要购买 <b>多许可证（multi-license）</b>。多许可证要求每个应用至少购买两份许可证，并且可能符合批量折扣条件，具体可与我们沟通。<br/><br/><u>特殊情况：</u><b>PES Protection Toolkit</b> 提供 1 年订阅许可<i>（Standard 和 Pro）</i>以及月度订阅许可<i>（Ultimate）</i>。同时支持最多三名补丁团队成员的多许可证模式。<br/><br/>当前价格请参考下表。<i>注意：表中价格仅适用于单许可证；多许可证价格可能不同。</i>",
    "pricing.tableTitle": "方案与价格",
    "pricing.th.name": "名称",
    "pricing.th.license": "许可",
    "pricing.th.price": "价格",
    "pricing.license.perpetual": "永久许可。",
    "pricing.license.nonperpetual": "非永久许可。",
    "pricing.license.none": "无",
    "pricing.price.free": "免费",
    "pricing.plan.subscription": "订阅",
    "pricing.plan.lifetime": "永久",
    "pricing.plan.free": "免费",
    "pricing.badge.bestValue": "最划算",
    "pricing.unit.perMonth": "/月",
    "pricing.meta.activation": "+ $54.99 激活费（一次性）",
    "pricing.meta.oneTime": "一次性付款",
    "pricing.meta.bundleIncludes": "包含 Toolkit + Unlocker",
    "pricing.meta.saveSmall": "比分开购买省 $9.98",
    "pricing.meta.openSource": "GitHub 开源",
    "pricing.meta.oneYear": "<u>1 年订阅</u>",
    "pricing.plan.pes.standard": "标准版",
    "pricing.plan.pes.pro": "专业版",
    "pricing.plan.pes.ultimate": "<u>月度订阅</u>",
    "pricing.meta.pesUltimate": "订阅 • $500 初始费用（一次性）",
    "pricing.meta.pesInstaller": "Pro 和 Ultimate 档位均包含适用于你补丁的自定义安装程序（含授权系统）。",
    "pricing.pes.standard.features": "<li>授权系统</li><li>CPK 文件加密</li>",
    "pricing.pes.pro.features": "<li>授权系统</li><li>补丁安装器系统</li><li>CPK 文件加密</li><li>以下 Sider 资源加密：MP3、TXT、LUA</li>",
    "pricing.pes.ultimate.features": "<li>授权系统</li><li>补丁安装器系统</li><li>CPK 文件加密</li><li>以下 Sider 资源加密：BIN、FTEX、FPK、FPKD、FDC、USM、MP3、TXT、LUA</li><li>EDIT00000000 数据库加密</li>",
    "pricing.note.device": "许可为 <b>按设备</b>（1 台电脑）绑定。如果需要在多台电脑上使用同一工具，需要购买多个席位。",
    "pricing.note.breakEven": "对于 <b>CPK Protection Toolkit</b> / <b>ULTIMATE CPK Unlocker</b> 的订阅方案，与终身版相比的回本时间约为 <b>6.7 个月</b>（<code>54.99 + 15 × 月数</code>）。短期项目选订阅，长期使用选终身。",
    "pricing.note.multilicense": "需要 <b>2+ 席位</b>？联系时可咨询批量折扣。",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如需购买以上任意产品，请点击下方 <b>BUY WITH PAYPAL</b> 按钮。在购买详情页中，请在 <u>Description</u> 字段填写你想购买的应用名称，并在 <u>Price per item</u> 字段填写上方价格选项中对应的金额。",
    "buy.withPayPal.button": "使用 PayPal 购买",
    
    "contact.lead": "如需通过电子邮件联系，请使用下方联系表单。我们会尽快回复。",
    "contact.social": "您也可以点击下方对应图标，在 Twitter、Facebook 或 Discord 上找到我们。",
    "footer.copyright": "© 2026 IT World Software Solutions",
    "pricing.meta.activation.fee": "+ $500 激活费（一次性）",
    "pricing.tier.pes.ultimate": "终极版",
}
};


  function normalizeLang(lang) {
    if (!lang) return "en";
    const l = String(lang).toLowerCase();
    if (l.startsWith("es")) return "es";
    if (l === "id" || l.startsWith("id-")) return "id";
    if (l.startsWith("zh")) return "zh-Hans";
    return "en";
  }

  function getSupportedLang(lang) {
    return translations[lang] ? lang : "en";
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // Translate attributes (e.g. aria-label, placeholder) using a spec like:
    // data-i18n-attr="aria-label:buy.withPayPal.button,placeholder:search.placeholder"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(",").map(s => s.trim()).filter(Boolean).forEach((pair) => {
        const parts = pair.split(":").map(s => s.trim());
        if (parts.length !== 2) return;
        const attr = parts[0];
        const key = parts[1];
        if (dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
    
    if (dict["page.title"]) document.title = dict["page.title"];
    document.documentElement.lang = (lang === "zh-Hans") ? "zh-Hans" : lang;

    // Update injected switcher badge + selection state
    const short = (LANGS.find(x => x.code === lang) || LANGS[0]).short;
    const codeEl = document.querySelector("#i18n-switcher .i18n-code");
    if (codeEl) codeEl.textContent = short;

    document.querySelectorAll("#i18n-switcher [data-lang]").forEach((btn) => {
      btn.setAttribute("aria-current", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function setLanguage(lang) {
    const resolved = getSupportedLang(lang);
    localStorage.setItem(STORAGE_KEY, resolved);
    applyTranslations(resolved);
  }

  function buildSwitcher() {
    if (document.getElementById("i18n-switcher")) return;

    const wrap = document.createElement("div");
    wrap.id = "i18n-switcher";
    wrap.setAttribute("aria-label", "Language selector");

    wrap.innerHTML = `
      <button type="button" class="i18n-btn" aria-haspopup="true" aria-expanded="false">
        <svg class="i18n-globe" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" stroke-width="1.6"/>
          <path d="M2 12h20" stroke="currentColor" stroke-width="1.6"/>
          <path d="M12 2c3.2 3 3.2 17 0 20" stroke="currentColor" stroke-width="1.6"/>
          <path d="M12 2c-3.2 3-3.2 17 0 20" stroke="currentColor" stroke-width="1.6"/>
        </svg>
        <span class="i18n-code">EN</span>
      </button>
      <div class="i18n-menu" role="menu"></div>
    `;

    const menu = wrap.querySelector(".i18n-menu");
    LANGS.forEach((l) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "i18n-item";
      item.setAttribute("role", "menuitem");
      item.setAttribute("data-lang", l.code);
      item.innerHTML = `<span class="name">${l.label}</span><span class="meta">${l.short}</span>`;
      item.addEventListener("click", () => {
        setLanguage(l.code);
        closeMenu();
      });
      menu.appendChild(item);
    });

    const btn = wrap.querySelector(".i18n-btn");

    function openMenu() {
      wrap.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
    function closeMenu() {
      wrap.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
    function toggleMenu() {
      if (wrap.classList.contains("open")) closeMenu();
      else openMenu();
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener("click", () => closeMenu());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    document.body.appendChild(wrap);
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitcher();

    const saved = localStorage.getItem(STORAGE_KEY);
    const preferred = normalizeLang(navigator.language || navigator.userLanguage);
    setLanguage(saved || preferred);
  });
})();



