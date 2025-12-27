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
      "site.tagline": "The most advanced, fast, and secure CPK protection tool<br />available on the market.",
      "nav.products": "Products",
      "nav.demo": "Demo",
      "nav.pricing": "Pricing",
      "nav.contact": "Contact",
      "sections.products": "Products",
      "sections.demo": "Demo",
      "sections.pricing": "Pricing and Licensing",
      "sections.contact": "Contact",

      "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Secure. Bloatware-free. Malware-free.</span>",
      "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> If you're interested to protect your CPK files from unauthorized access, this is the tool for you <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Key advantages include:",
      "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Blazing fast speeds while processing files",
      "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Unlimited filesize",
      "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> More secure<i>(i've bypassed and unlocked every locked cpk i found on the internet thus i know how to protect mine better - if you need proof check <b>ULTIMATE CPK Unlocker</b>)</i>",
      "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> No bloatware (no extra redistributables required)",
      "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> High-DPI friendly—looks sharp on 1440p and 4K displays",

      "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Secure. Bloatware-free. Malware-free.</span>",
      "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Need to unlock protected CPK files? This is the right tool for the job—with a very high success rate across publicly available files <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ULTIMATE CPK Unlocker does <b>not</b> unlock files protected with CPK Protection Toolkit.",
      "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> ULTIMATE CPK Unlocker is available as a <b>perpetual (lifetime)</b> license or a <b>subscription</b> license <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.pricingNote": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* For current prices, please see the Pricing section.</span>",

      "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Smooth. Easy to use. Malware-free.</span>",
      "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Looking for an all-in-one solution for your preferred PES title? <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Compatible with PES versions and DLCs from <b>Pro Evolution Soccer 2017</b> through <b>eFootball Pro Evolution Soccer 2021</b> <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
      "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Preserves KONAMI’s original <b>DpFileList.bin</b> format. Many alternative tools generate incompatible files—even if they appear to load in-game <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Download: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",
      "products.udg.free": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* This app is FREE.</span>",

      "demo.cpkpt.lead": "Watch the video above to see CPK Protection Toolkit in action. For purchasing details and discounts on multiple licenses, please review the Pricing section. If you have questions, please use the <a href=\"#contact\">Contact</a> page.",
      "demo.cpkpt.moreInfo": "For additional details, use the Information button in the CPKPT menu.",
      "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Demo download: <a href=\"#\" target=\"_blank\">No demo available</a>",
      "demo.udg.lead": "Watch the video above to see Universal DpFileList Generator in action.",
      "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Download: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

      "pricing.intro": "We offer two licensing models: <b>perpetual (lifetime)</b> and <b>non-perpetual (subscription)</b>. Licenses are bound to a single computer. For use on multiple computers, please purchase a multi-license (minimum two). Multi-licenses may qualify for discounts—contact us to discuss. See the table below for current single-license prices (multi-license pricing differs).",
      "pricing.tableTitle": "Product pricing",
      "pricing.th.name": "Name",
      "pricing.th.license": "License",
      "pricing.th.price": "Price",
      "pricing.license.perpetual": "Perpetual license.",
      "pricing.license.nonperpetual": "Non-perpetual license.",
      "pricing.license.none": "None",
      "pricing.price.free": "FREE",

      "contact.lead": "Use the embedded form below to contact us by email. We respond as quickly as possible.",
      "contact.social": "You can also reach us on Twitter, Facebook, or Discord via the icons below.",
      "footer.copyright": "© 2025 IT World Software Solutions"
    },

    "es": {
      "page.title": "CPK Protection Toolkit",
      "lang.label": "Idioma",
      "site.title": "CPK Protection Toolkit",
      "site.tagline": "La herramienta de protección CPK más avanzada, rápida y segura<br />disponible en el mercado.",
      "nav.products": "Productos",
      "nav.demo": "Demostración",
      "nav.pricing": "Precios",
      "nav.contact": "Contacto",
      "sections.products": "Productos",
      "sections.demo": "Demostración",
      "sections.pricing": "Precios y licencias",
      "sections.contact": "Contacto",

      "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Seguro. Sin bloatware. Sin malware.</span>",
      "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Proteja sus archivos CPK contra accesos no autorizados con un toolkit específico y de propósito definido <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Principales ventajas:",
      "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Procesamiento de archivos de alto rendimiento",
      "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sin limitaciones prácticas de tamaño de archivo",
      "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Seguridad reforzada (desarrollado por especialistas con experiencia analizando CPK bloqueados; consulte <b>ULTIMATE CPK Unlocker</b> como referencia.)",
      "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sin bloatware (no requiere redistribuibles adicionales)",
      "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Limpio y seguro (diseñado para evitar falsos positivos y optimizado para fiabilidad)",
      "products.cpkpt.b6": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Compatible con alta densidad de píxeles: se ve nítido en 1440p y 4K",
      "products.cpkpt.b7": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Sin suscripción mensual. CPK Protection Toolkit ofrece una licencia de por vida a un precio competitivo <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span> <i>(Nota: solo para la Edición Estándar.)</i>",

      "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Seguro. Sin bloatware. Sin malware.</span>",
      "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ¿Necesita desbloquear archivos CPK protegidos? Esta es la herramienta adecuada, con una tasa de éxito muy alta en archivos disponibles públicamente <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ULTIMATE CPK Unlocker <b>no</b> desbloquea archivos protegidos con CPK Protection Toolkit.",
      "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> ULTIMATE CPK Unlocker está disponible con licencia <b>perpetua (de por vida)</b> o licencia por <b>suscripción</b> <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.pricingNote": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* Para precios actuales, consulte la sección de Precios.</span>",

      "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Fluido. Fácil de usar. Sin malware.</span>",
      "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ¿Busca una solución todo en uno para su título de PES preferido? <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Compatible con versiones y DLC de PES desde <b>Pro Evolution Soccer 2017</b> hasta <b>eFootball Pro Evolution Soccer 2021</b> <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
      "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Conserva el formato original de KONAMI para <b>DpFileList.bin</b>. Muchas alternativas generan archivos incompatibles, aunque aparenten cargarse en el juego <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Descarga: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",
      "products.udg.free": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* Esta aplicación es GRATUITA.</span>",

      "demo.cpkpt.lead": "Vea el video de arriba para ver CPK Protection Toolkit en acción. Para detalles de compra y descuentos por múltiples licencias, revise la sección de Precios. Si tiene preguntas, utilice la página de <a href=\"#contact\">Contacto</a>.",
      "demo.cpkpt.moreInfo": "Para más detalles, use el botón Información en el menú de CPKPT.",
      "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Descarga de demo: <a href=\"#\" target=\"_blank\">No hay demo disponible</a>",
      "demo.udg.lead": "Vea el video de arriba para ver Universal DpFileList Generator en acción.",
      "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Descarga: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

      "pricing.intro": "Ofrecemos dos modelos de licencia: <b>perpetua (de por vida)</b> y <b>no perpetua (suscripción)</b>. Las licencias se vinculan a un solo equipo. Para usar una aplicación en varios equipos, adquiera una multi-licencia (mínimo dos). Las multi-licencias pueden incluir descuentos; contáctenos para evaluarlo. Consulte la tabla siguiente para precios actuales de licencia individual (los precios de multi-licencia difieren).",
      "pricing.tableTitle": "Precios de productos",
      "pricing.th.name": "Nombre",
      "pricing.th.license": "Licencia",
      "pricing.th.price": "Precio",
      "pricing.license.perpetual": "Licencia perpetua.",
      "pricing.license.nonperpetual": "Licencia no perpetua.",
      "pricing.license.none": "Ninguna",
      "pricing.price.free": "GRATIS",

      "contact.lead": "Utilice el formulario integrado a continuación para contactarnos por correo electrónico. Respondemos lo antes posible.",
      "contact.social": "También puede encontrarnos en Twitter, Facebook o Discord mediante los iconos de abajo.",
      "footer.copyright": "© 2025 IT World Software Solutions"
    },

    "id": {
      "page.title": "CPK Protection Toolkit",
      "lang.label": "Bahasa",
      "site.title": "CPK Protection Toolkit",
      "site.tagline": "Alat perlindungan CPK paling canggih, cepat, dan aman<br />yang tersedia di pasaran.",
      "nav.products": "Produk",
      "nav.demo": "Demo",
      "nav.pricing": "Harga",
      "nav.contact": "Kontak",
      "sections.products": "Produk",
      "sections.demo": "Demo",
      "sections.pricing": "Harga & lisensi",
      "sections.contact": "Kontak",

      "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Aman. Bebas bloatware. Bebas malware.</span>",
      "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Lindungi file CPK Anda dari akses tidak sah dengan toolkit khusus yang dibuat untuk tujuan ini <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Keunggulan utama:",
      "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Pemrosesan file berperforma tinggi",
      "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Tanpa batas ukuran file yang berarti",
      "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Keamanan lebih kuat (dikembangkan oleh praktisi berpengalaman dalam menganalisis CPK terkunci—lihat <b>ULTIMATE CPK Unlocker</b> sebagai referensi.)",
      "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Bebas bloatware (tidak perlu redistributable tambahan)",
      "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Aman dan bersih (dirancang untuk meminimalkan false positive dan dioptimalkan untuk keandalan)",
      "products.cpkpt.b6": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Ramah High-DPI—tampil tajam pada layar 1440p dan 4K",
      "products.cpkpt.b7": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Tanpa langganan bulanan. CPK Protection Toolkit menawarkan lisensi seumur hidup dengan harga kompetitif <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span> <i>(Catatan: hanya untuk Standard Edition.)</i>",

      "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Aman. Bebas bloatware. Bebas malware.</span>",
      "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Ingin membuka file CPK yang diproteksi? Ini alat yang tepat—dengan tingkat keberhasilan yang sangat tinggi pada file yang tersedia publik <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ULTIMATE CPK Unlocker <b>tidak</b> membuka file yang diproteksi oleh CPK Protection Toolkit.",
      "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> ULTIMATE CPK Unlocker tersedia dalam lisensi <b>perpetual (seumur hidup)</b> atau lisensi <b>berlangganan</b> <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.pricingNote": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* Untuk harga terbaru, silakan lihat bagian Harga.</span>",

      "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Mulus. Mudah digunakan. Bebas malware.</span>",
      "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Mencari solusi all-in-one untuk judul PES pilihan Anda? <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Kompatibel dengan versi PES dan DLC dari <b>Pro Evolution Soccer 2017</b> hingga <b>eFootball Pro Evolution Soccer 2021</b> <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
      "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Mempertahankan format asli KONAMI untuk <b>DpFileList.bin</b>. Banyak alat lain menghasilkan file yang tidak kompatibel, meskipun terlihat termuat di dalam game <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Unduh: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",
      "products.udg.free": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* Aplikasi ini GRATIS.</span>",

      "demo.cpkpt.lead": "Tonton video di atas untuk melihat CPK Protection Toolkit beraksi. Untuk detail pembelian dan diskon untuk beberapa lisensi, silakan lihat bagian Harga. Jika Anda memiliki pertanyaan, gunakan halaman <a href=\"#contact\">Kontak</a>.",
      "demo.cpkpt.moreInfo": "Untuk informasi lebih lanjut, gunakan tombol Information pada menu CPKPT.",
      "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Unduhan demo: <a href=\"#\" target=\"_blank\">Demo belum tersedia</a>",
      "demo.udg.lead": "Tonton video di atas untuk melihat Universal DpFileList Generator beraksi.",
      "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> Unduh: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

      "pricing.intro": "Kami menyediakan dua model lisensi: <b>perpetual (seumur hidup)</b> dan <b>non-perpetual (berlangganan)</b>. Lisensi terikat pada satu komputer. Untuk penggunaan di beberapa komputer, silakan beli multi-lisensi (minimal dua). Multi-lisensi dapat memenuhi syarat diskon—hubungi kami untuk membahasnya. Lihat tabel di bawah untuk harga lisensi tunggal (harga multi-lisensi berbeda).",
      "pricing.tableTitle": "Harga produk",
      "pricing.th.name": "Nama",
      "pricing.th.license": "Lisensi",
      "pricing.th.price": "Harga",
      "pricing.license.perpetual": "Lisensi perpetual.",
      "pricing.license.nonperpetual": "Lisensi non-perpetual.",
      "pricing.license.none": "Tidak ada",
      "pricing.price.free": "GRATIS",

      "contact.lead": "Gunakan formulir tersemat di bawah ini untuk menghubungi kami melalui email. Kami akan merespons secepat mungkin.",
      "contact.social": "Anda juga dapat menemukan kami di Twitter, Facebook, atau Discord melalui ikon di bawah.",
      "footer.copyright": "© 2025 IT World Software Solutions"
    },

    "zh-Hans": {
      "page.title": "CPK Protection Toolkit",
      "lang.label": "语言",
      "site.title": "CPK Protection Toolkit",
      "site.tagline": "市面上最先进、最快、最安全的 CPK 保护工具。",
      "nav.products": "产品",
      "nav.demo": "演示",
      "nav.pricing": "价格",
      "nav.contact": "联系",
      "sections.products": "产品",
      "sections.demo": "演示",
      "sections.pricing": "价格与许可",
      "sections.contact": "联系",

      "products.cpkpt.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。安全。无捆绑软件。无恶意软件。</span>",
      "products.cpkpt.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 使用专为 CPK 场景打造的工具套件，保护您的 CPK 文件免遭未授权访问 <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.cpkpt.benefitsIntro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 核心优势包括：",
      "products.cpkpt.b1": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 高性能文件处理",
      "products.cpkpt.b2": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 实际使用中无明显文件大小限制",
      "products.cpkpt.b3": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 更强的安全性（由具备锁定 CPK 分析经验的团队打造；可参考 <b>ULTIMATE CPK Unlocker</b>。）",
      "products.cpkpt.b4": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 无捆绑（无需额外安装运行库/组件）",
      "products.cpkpt.b5": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 可靠且安全（尽量避免误报，并针对稳定性进行优化）",
      "products.cpkpt.b6": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 友好支持高 DPI——在 1440p 与 4K 屏幕上依然清晰",
      "products.cpkpt.b7": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 无月费订阅。CPK Protection Toolkit 提供价格合理的终身许可 <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span> <i>（注：仅适用于标准版。）</i>",

      "products.ucu.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。安全。无捆绑软件。无恶意软件。</span>",
      "products.ucu.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 需要解锁受保护的 CPK 文件？这是一款适合该任务的工具，在公开可获取文件上具有很高的成功率 <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.note": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ULTIMATE CPK Unlocker <b>无法</b> 解锁由 CPK Protection Toolkit 保护的文件。",
      "products.ucu.licenses": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> ULTIMATE CPK Unlocker 提供 <b>永久（终身）</b>许可或<b>订阅</b>许可 <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.ucu.pricingNote": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* 具体价格请参见“价格”部分。</span>",

      "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。流畅。易用。无恶意软件。</span>",
      "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 想要一站式解决您偏好的 PES 版本相关需求？<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 兼容 <b>Pro Evolution Soccer 2017</b> 至 <b>eFootball Pro Evolution Soccer 2021</b> 的所有 PES 版本与 DLC <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
      "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 保留 KONAMI 原始 <b>DpFileList.bin</b> 格式。许多替代工具会生成不兼容文件——即使看起来能在游戏中加载 <span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
      "products.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 下载：<a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",
      "products.udg.free": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">* 本应用免费。</span>",

      "demo.cpkpt.lead": "观看上方视频，了解 CPK Protection Toolkit 的实际效果。有关购买信息及多许可折扣，请查看“价格”部分。如有疑问，请使用 <a href=\"#contact\">联系</a> 页面。",
      "demo.cpkpt.moreInfo": "更多细节请在 CPKPT 菜单中使用“Information”按钮查看。",
      "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 演示版下载：<a href=\"#\" target=\"_blank\">暂无演示版</a>",
      "demo.udg.lead": "观看上方视频，了解 Universal DpFileList Generator 的实际效果。",
      "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">👉</span> 下载：<a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

      "pricing.intro": "我们提供两种许可模式：<b>永久（终身）</b>许可与<b>非永久（订阅）</b>许可。许可绑定至单台电脑使用；如需多台电脑使用，请购买多许可（至少 2 份）。多许可可能适用折扣，欢迎联系我们沟通。下表为单许可当前价格（多许可价格另计）。",
      "pricing.tableTitle": "产品价格",
      "pricing.th.name": "名称",
      "pricing.th.license": "许可类型",
      "pricing.th.price": "价格",
      "pricing.license.perpetual": "永久许可。",
      "pricing.license.nonperpetual": "非永久许可。",
      "pricing.license.none": "无",
      "pricing.price.free": "免费",

      "contact.lead": "请使用下方嵌入表单通过电子邮件联系我们。我们将尽快回复。",
      "contact.social": "您也可以通过下方图标在 Twitter、Facebook 或 Discord 与我们联系。",
      "footer.copyright": "© 2025 IT World Software Solutions"
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

