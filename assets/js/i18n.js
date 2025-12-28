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
    "nav.demo": "Demo & Download",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "sections.products": "Products",
    "sections.demo": "Demo and Download",
    "sections.pricing": "Pricing and Licensing",
    "sections.contact": "Contact",

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

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Fast. Smooth. Easy to use. Malware-free.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Looking for an all-in-one solution to manage <b>DpFileList.bin</b> for your preferred PES title? If the answer is YES, then this is the tool for you<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> This is compatible with all PES versions and DLCs starting Pro Evolution Soccer 2017 up to eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> It's the only tool that actually respects the original KONAMI format for <b>DpFileList.bin</b>. The other existing tools are generating the bins using wrong data <i>(even if the files are loaded ingame)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the above video to see <b>CPK Protection Toolkit</b> in action. If you're interested in purchasing, please go to the <a href=\"#pricing\"><b>pricing</b></a> section to find out more informations about the licensing system and applicable discounts in case of purchasing of more than one license. If you have more questions, please <a href=\"#contact\">contact us</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> For additional details, use the Information button in the <b>CPKPT</b> application's menu.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"#\" target=\"_blank\">No download/demo download available</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the above video to see <b>UNIVERSAL CPK Unlocker</b> in action. If you're interested in purchasing, please go to the <a href=\"#pricing\"><b>pricing</b></a> section to find out more informations about the licensing system and applicable discounts in case of purchasing of more than one license. If you have more questions, please <a href=\"#contact\">contact us</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> For additional details, use the Information button in the <b>UCU</b> application's menu.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"#\" target=\"_blank\">No download/demo download available</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Watch the video above to see Universal DpFileList Generator in action.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Download: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "There are two types of licenses available: <b>perpetual license</b><i>(lifetime)</i> and <b>non-perpetual license</b><i>(subscription)</i>. A license is bound to one computer only. That means, you can't buy a license and use it on more than one computer. If you want to use an app on multiple computers, you need to buy a <b>multilicense</b>. When buying a multilicense, you have to buy minimum 2 licenses for an app. This will also unlock some discounts that we can discuss about. Check the below table for current prices. Keep in mind these prices are applicable for <b>single license</b>, not for <b>multilicense</b>.",
    "pricing.tableTitle": "Product pricing",
    "pricing.th.name": "Name",
    "pricing.th.license": "License",
    "pricing.th.price": "Price",
    "pricing.license.perpetual": "Perpetual license.",
    "pricing.license.nonperpetual": "Non-perpetual license.",
    "pricing.license.none": "None",
    "pricing.price.free": "FREE",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> To purchase any of the products listed above, click the <b>BUY WITH PAYPAL</b> button below. On the purchase details page, enter the name of the app you want in the <u>Description</u> field, and enter the corresponding amount from the table in the <u>Price per item field</u>.",
    "buy.withPayPal.button": "Buy with PayPal",

    "contact.lead": "Use the below contact form if you want to contact us on e-mail. We will answer as soon as possible.",
    "contact.social": "You can find us on Twitter, Facebook or Discord by clicking the below icons corresponding to each social network.",
    "footer.copyright": "© 2025 IT World Software Solutions"
  },

  "es": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "Idioma",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "La herramienta de protección CPK más avanzada, rápida y segura<br />disponible en el mercado.",
    "nav.products": "Productos",
    "nav.demo": "Demo y descarga",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "sections.products": "Productos",
    "sections.demo": "Demo y descarga",
    "sections.pricing": "Precios y licencias",
    "sections.contact": "Contacto",

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

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Rápido. Fluido. Fácil de usar. Sin malware.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> ¿Busca una solución todo en uno para gestionar <b>DpFileList.bin</b> para su título de PES preferido? Si la respuesta es SÍ, entonces esta es la herramienta para usted<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Esto es compatible con todas las versiones de PES y DLC desde Pro Evolution Soccer 2017 hasta eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Es la única herramienta que respeta realmente el formato original de KONAMI para <b>DpFileList.bin</b>. Las demás herramientas existentes generan los bin usando datos incorrectos <i>(incluso si los archivos se cargan en el juego)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver <b>CPK Protection Toolkit</b> en acción. Si le interesa comprarlo, vaya a la sección de <a href=\"#pricing\"><b>precios</b></a> para conocer más información sobre el sistema de licencias y los descuentos aplicables al comprar más de una licencia. Si tiene más preguntas, por favor <a href=\"#contact\">contáctenos</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para más detalles, utilice el botón Information en el menú de la aplicación <b>CPKPT</b>.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"#\" target=\"_blank\">No hay descarga / demo disponible</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver <b>UNIVERSAL CPK Unlocker</b> en acción. Si le interesa comprarlo, vaya a la sección de <a href=\"#pricing\"><b>precios</b></a> para conocer más información sobre el sistema de licencias y los descuentos aplicables al comprar más de una licencia. Si tiene más preguntas, por favor <a href=\"#contact\">contáctenos</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para más detalles, utilice el botón Information en el menú de la aplicación <b>UCU</b>.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"#\" target=\"_blank\">No hay descarga / demo disponible</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Vea el video de arriba para ver Universal DpFileList Generator en acción.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Descarga: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "Hay dos tipos de licencias disponibles: <b>licencia perpetua</b><i>(de por vida)</i> y <b>licencia no perpetua</b><i>(suscripción)</i>. La licencia está vinculada a un solo ordenador. Esto significa que no puede comprar una licencia y usarla en más de un ordenador. Si desea usar una aplicación en varios ordenadores, necesita comprar una <b>multilicencia</b>. Al comprar una multilicencia, debe comprar un mínimo de 2 licencias para una aplicación. Esto también desbloqueará algunos descuentos que podemos comentar. Consulte la tabla de abajo para los precios actuales. Tenga en cuenta que estos precios se aplican a una <b>licencia única</b>, no a una <b>multilicencia</b>.",
    "pricing.tableTitle": "Precios de productos",
    "pricing.th.name": "Nombre",
    "pricing.th.license": "Licencia",
    "pricing.th.price": "Precio",
    "pricing.license.perpetual": "Licencia perpetua.",
    "pricing.license.nonperpetual": "Licencia no perpetua.",
    "pricing.license.none": "Ninguna",
    "pricing.price.free": "GRATIS",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Para comprar cualquiera de los productos listados arriba, haga clic en el botón <b>COMPRAR CON PAYPAL</b> de abajo. En la página de detalles de la compra, introduzca el nombre de la aplicación que desea en el campo <u>Descripción</u> e introduzca el importe correspondiente de la tabla en el campo <u>Precio por artículo</u>.",
    "buy.withPayPal.button": "Comprar con PayPal",
    
    "contact.lead": "Use el formulario de contacto de abajo si desea contactarnos por correo electrónico. Responderemos lo antes posible.",
    "contact.social": "Puede encontrarnos en Twitter, Facebook o Discord haciendo clic en los iconos de abajo correspondientes a cada red social.",
    "footer.copyright": "© 2025 IT World Software Solutions"
  },

  "id": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "Bahasa",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "Alat perlindungan CPK paling canggih, cepat, dan aman<br />yang tersedia di pasaran.",
    "nav.products": "Produk",
    "nav.demo": "Demo & Unduh",
    "nav.pricing": "Harga",
    "nav.contact": "Kontak",
    "sections.products": "Produk",
    "sections.demo": "Demo dan Unduh",
    "sections.pricing": "Harga dan lisensi",
    "sections.contact": "Kontak",

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

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">Cepat. Mulus. Mudah digunakan. Bebas malware.</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Sedang mencari solusi all-in-one untuk mengelola <b>DpFileList.bin</b> untuk judul PES favorit Anda? Jika jawabannya YA, maka ini alat untuk Anda<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Ini kompatibel dengan semua versi PES dan DLC mulai dari Pro Evolution Soccer 2017 hingga eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Ini adalah satu-satunya alat yang benar-benar menghormati format asli KONAMI untuk <b>DpFileList.bin</b>. Alat lain yang ada menghasilkan bin menggunakan data yang salah <i>(meskipun file dimuat di dalam game)</i>.",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat <b>CPK Protection Toolkit</b> beraksi. Jika Anda tertarik untuk membeli, silakan buka bagian <a href=\"#pricing\"><b>harga</b></a> untuk mengetahui lebih lanjut tentang sistem lisensi dan diskon yang berlaku jika membeli lebih dari satu lisensi. Jika Anda punya pertanyaan, silakan <a href=\"#contact\">hubungi kami</a>.",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk detail tambahan, gunakan tombol Information pada menu aplikasi <b>CPKPT</b>.",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"#\" target=\"_blank\">Tidak ada unduhan / demo yang tersedia</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat <b>UNIVERSAL CPK Unlocker</b> beraksi. Jika Anda tertarik untuk membeli, silakan buka bagian <a href=\"#pricing\"><b>harga</b></a> untuk mengetahui lebih lanjut tentang sistem lisensi dan diskon yang berlaku jika membeli lebih dari satu lisensi. Jika Anda punya pertanyaan, silakan <a href=\"#contact\">hubungi kami</a>.",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk detail tambahan, gunakan tombol Information pada menu aplikasi <b>UCU</b>.",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"#\" target=\"_blank\">Tidak ada unduhan / demo yang tersedia</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Tonton video di atas untuk melihat Universal DpFileList Generator beraksi.",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> Unduh: <a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "Ada dua jenis lisensi yang tersedia: <b>lisensi perpetual</b><i>(seumur hidup)</i> dan <b>lisensi non-perpetual</b><i>(berlangganan)</i>. Lisensi terikat hanya pada satu komputer. Artinya, Anda tidak bisa membeli satu lisensi dan menggunakannya di lebih dari satu komputer. Jika Anda ingin menggunakan aplikasi di beberapa komputer, Anda perlu membeli <b>multilicense</b>. Saat membeli multilicense, Anda harus membeli minimal 2 lisensi untuk sebuah aplikasi. Ini juga akan membuka beberapa diskon yang bisa kita diskusikan. Lihat tabel di bawah untuk harga saat ini. Perlu diingat, harga ini berlaku untuk <b>lisensi tunggal</b>, bukan untuk <b>multilicense</b>.",
    "pricing.tableTitle": "Harga produk",
    "pricing.th.name": "Nama",
    "pricing.th.license": "Lisensi",
    "pricing.th.price": "Harga",
    "pricing.license.perpetual": "Lisensi perpetual.",
    "pricing.license.nonperpetual": "Lisensi non-perpetual.",
    "pricing.license.none": "Tidak ada",
    "pricing.price.free": "GRATIS",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> Untuk membeli salah satu produk yang tercantum di atas, klik tombol <b>BELI DENGAN PAYPAL</b> di bawah. Pada halaman detail pembelian, masukkan nama aplikasi yang Anda inginkan pada kolom <u>Deskripsi</u>, lalu masukkan jumlah yang sesuai dari tabel pada kolom <u>Harga per item</u>.",
    "buy.withPayPal.button": "Beli dengan PayPal",
    
    "contact.lead": "Gunakan formulir kontak di bawah ini jika Anda ingin menghubungi kami melalui email. Kami akan menjawab secepat mungkin.",
    "contact.social": "Anda dapat menemukan kami di Twitter, Facebook, atau Discord dengan mengklik ikon di bawah sesuai dengan masing-masing jejaring sosial.",
    "footer.copyright": "© 2025 IT World Software Solutions"
  },

  "zh-Hans": {
    "page.title": "CPK Protection Toolkit",
    "lang.label": "语言",
    "site.title": "CPK Protection Toolkit",
    "site.tagline": "市面上最先进、最快、最安全的 CPK 保护工具<br />现已提供。",
    "nav.products": "产品",
    "nav.demo": "演示与下载",
    "nav.pricing": "价格",
    "nav.contact": "联系",
    "sections.products": "产品",
    "sections.demo": "演示与下载",
    "sections.pricing": "价格与许可",
    "sections.contact": "联系",

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

    "products.udg.tagline": "<span style=\"font-family:'Segoe UI Symbol'; color:#00b050\">✅</span> <span style=\"font-weight:bold\">快速。流畅。易用。无恶意软件。</span>",
    "products.udg.intro": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 想要一站式解决您偏好的 PES 作品中 <b>DpFileList.bin</b> 的管理需求吗？如果答案是 YES，那么这就是适合您的工具<span style=\"font-family:'Segoe UI Emoji'; color:#ff0000\">❗️</span>",
    "products.udg.compat": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 兼容所有 PES 版本与 DLC，从 Pro Evolution Soccer 2017 一直到 eFootball Pro Evolution Soccer 2021 <span style=\"font-family:'Segoe UI Emoji'\">😏</span>",
    "products.udg.dpfile": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 它是唯一真正遵循 KONAMI 原始 <b>DpFileList.bin</b> 格式的工具。其他现有工具会用错误的数据生成 bin <i>（即使文件在游戏内能加载）</i>。",

    "demo.cpkpt.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 <b>CPK Protection Toolkit</b> 的实际效果。如需购买，请前往 <a href=\"#pricing\"><b>价格</b></a> 部分，了解许可系统以及购买多份许可时适用的折扣。如有更多问题，请 <a href=\"#contact\">联系我们</a>。",
    "demo.cpkpt.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如需更多细节，请在 <b>CPKPT</b> 应用菜单中使用 Information 按钮。",
    "demo.cpkpt.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"#\" target=\"_blank\">暂无下载/演示版可用</a>",

    "demo.ucu.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 <b>UNIVERSAL CPK Unlocker</b> 的实际效果。如需购买，请前往 <a href=\"#pricing\"><b>价格</b></a> 部分，了解许可系统以及购买多份许可时适用的折扣。如有更多问题，请 <a href=\"#contact\">联系我们</a>。",
    "demo.ucu.moreInfo": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 如需更多细节，请在 <b>UCU</b> 应用菜单中使用 Information 按钮。",
    "demo.ucu.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"#\" target=\"_blank\">暂无下载/演示版可用</a>",

    "demo.udg.lead": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 观看上方视频，了解 Universal DpFileList Generator 的实际效果。",
    "demo.udg.download": "<span style=\"font-family:'Segoe UI Symbol'; color:#ff0000\">🌐</span> 下载：<a href=\"https://github.com/CPKProtectionToolkit/udg/\" target=\"_blank\">https://github.com/CPKProtectionToolkit/udg/</a>",

    "pricing.intro": "提供两种许可类型：<b>永久许可</b><i>（终身）</i> 与 <b>非永久许可</b><i>（订阅）</i>。许可仅绑定一台电脑使用。这意味着您不能购买一份许可并在多台电脑上使用。如需在多台电脑上使用某个应用，您需要购买 <b>多许可（批量许可证）</b>。购买多许可时，单个应用至少需要购买 2 份许可；这也会解锁一些可协商的折扣。请查看下表了解当前价格。请注意：这些价格适用于 <b>单许可</b>，不适用于 <b>多许可</b>。",
    "pricing.tableTitle": "产品价格",
    "pricing.th.name": "名称",
    "pricing.th.license": "许可",
    "pricing.th.price": "价格",
    "pricing.license.perpetual": "永久许可。",
    "pricing.license.nonperpetual": "非永久许可。",
    "pricing.license.none": "无",
    "pricing.price.free": "免费",

    "buy.withPayPal.info": "<span style=\"font-family:'Segoe UI Emoji'; color:#004dbb\">ℹ️</span> 要购买上述任何产品，请点击下方的 <b>使用 PayPal 购买</b> 按钮。在购买详情页面中，请在 <u>描述</u> 字段填写您想要的应用名称，并在 <u>单价</u> 字段填写表格中对应的金额。",
    "buy.withPayPal.button": "使用 PayPal 购买",
    
    "contact.lead": "如需通过电子邮件联系，请使用下方联系表单。我们会尽快回复。",
    "contact.social": "您也可以点击下方对应图标，在 Twitter、Facebook 或 Discord 上找到我们。",
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



