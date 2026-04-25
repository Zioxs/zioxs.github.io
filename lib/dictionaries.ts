export type Language = 'id' | 'en';

export const dictionaries = {
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      projects: 'Proyek',
      about: 'Tentang',
      commission: 'Pesan',
      commissionMe: 'Kirim Pesan',
    },
    hero: {
      available: '✦ Tersedia untuk pesanan',
      title: 'Mod Minecraft Kustom',
      builtFor: 'Dibuat untuk ',
      words: ['Pembuat Konten', 'Streamer', 'YouTuber'],
      description: 'Saya Zioxs — pengembang mod Minecraft profesional yang berspesialisasi dalam mod kustom, alat pembuat konten, dan plugin server untuk meningkatkan konten Anda.',
      viewProjects: 'Lihat Proyek',
      stats: {
        projects: 'Proyek',
        published: 'Mod Dirilis',
      }
    },
    services: {
      title: 'Layanan Khusus',
      subtitle: 'Semua yang Anda butuhkan untuk mewujudkan ide Anda.'
    },
    featured: {
      title: 'Proyek Unggulan',
      subtitle: 'Beberapa karya terbaik saya untuk klien.',
      viewAll: 'Lihat Semua Proyek',
    },
    testimonials: {
      title: 'Testimoni Klien',
      subtitle: 'Apa yang dikatakan para kreator tentang bekerja sama dengan saya.',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Perjalanan, keterampilan, dan komitmen saya terhadap kualitas.',
      whoAmI: 'Siapa saya?',
      whoAmIDesc: 'Saya seorang Modder Minecraft dengan pengalaman lebih dari bertahun-tahun dalam membuat pengalaman kustom untuk server dan pembuat konten. Saya berspesialisasi dalam membangun mod yang sangat optimal dari awal, dengan fokus pada kinerja dan skalabilitas.',
      whatIDo: 'Apa yang saya lakukan?',
      whatIDoDesc: 'Baik ketika Anda membutuhkan item baru yang sederhana atau mekanisme permainan yang rumit, saya memiliki keterampilan teknis untuk mewujudkan visi Anda. Saya telah bekerja dengan klien di seluruh dunia untuk menghadirkan mod unik berkualitas tinggi.',
      skills: 'Keterampilan Lanjutan',
      whyMe: 'Mengapa Memilih Saya?',
      reasons: {
        quality: { title: 'Kualitas Kode', desc: 'Kode yang bersih dan optimal.' },
        speed: { title: 'Pengiriman Cepat', desc: 'Selesai sesuai tenggat waktu.' },
        support: { title: 'Dukungan', desc: 'Perbaikan bug gratis.' },
      }
    },
    contact: {
      title: 'Mari Bekerja Sama',
      subtitle: 'Punya ide mod? Hubungi saya dan mari kita wujudkan.',
      status: 'Status Komisi',
      statusOpen: 'Menerima pesanan baru untuk Minecraft 1.20 - 1.21.',
      getInTouch: 'Hubungi Saya',
      copied: 'Disalin!',
      copy: 'Salin',
      cards: {
        whatsappTitle: 'WhatsApp',
        whatsappDesc: 'Lebih suka pesan langsung? Hubungi saya di WhatsApp untuk pertanyaan pesanan.',
        whatsappBtn: 'Kirim Pesan',
        discordTitle: 'Discord',
        discordDesc: 'Bergabunglah dengan server untuk obrolan, pembaruan mod, dan permintaan komisi.',
        discordBtn: 'Pemeliharaan',
      },
      ctaPrefix: 'Cek juga mod saya di ',
    },
    footer: {
      desc: 'Pengembang mod Minecraft profesional membuat mod kustom untuk kreator, server, dan pemain.',
      quickLinks: 'Tautan Cepat',
      services: 'Layanan',
      projects: 'Proyek',
      about: 'Tentang',
      rights: 'Semua hak dilindungi undang-undang.'
    },
    projectsPage: {
      title: 'Semua Proyek',
      subtitle: 'Koleksi lengkap mod dan karya kustom saya.',
      allLoaders: 'Semua Loader'
    },
    projectCard: {
      downloads: 'Unduhan',
      preview: 'Pratinjau',
      modrinth: 'Modrinth'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      commission: 'Commission',
      commissionMe: 'Commission Me',
    },
    hero: {
      available: '✦ Available for commissions',
      title: 'Custom Minecraft Mods',
      builtFor: 'Built for ',
      words: ['Content Creators', 'Streamers', 'YouTubers'],
      description: "I'm Zioxs — a professional Minecraft mod developer specialising in custom mods, content creator tools, and server plugins that take your content to the next level.",
      viewProjects: 'View Projects',
      stats: {
        projects: 'Projects',
        published: 'Mods Published',
      }
    },
    services: {
      title: 'Specialized Services',
      subtitle: 'Everything you need to bring your ideas to life.'
    },
    featured: {
      title: 'Featured Projects',
      subtitle: 'Some of my best work for various content creators.',
      viewAll: 'View All Projects',
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What creators say about working with me.',
    },
    about: {
      title: 'About Me',
      subtitle: 'My journey, skills, and commitment to quality.',
      whoAmI: 'Who am I?',
      whoAmIDesc: "I'm a Minecraft Modder with over years of experience creating custom experiences for servers and content creators. I specialize in building highly optimized mods from scratch, with a strong focus on performance.",
      whatIDo: 'What I do',
      whatIDoDesc: "Whether you need a simple new item or a complex gameplay mechanic, I have the technical skills to bring your vision to life. I have worked with clients worldwide to deliver high-quality, unique mods.",
      skills: 'Advanced Skills',
      whyMe: 'Why Choose Me?',
      reasons: {
        quality: { title: 'Clean Code', desc: 'Optimal & maintainable' },
        speed: { title: 'Fast Delivery', desc: 'On-time completion' },
        support: { title: 'Support', desc: 'Free bug fixes' },
      }
    },
    contact: {
      title: "Let's work together",
      subtitle: "Have a mod idea? Reach out and let's make it happen.",
      status: 'Commission Status',
      statusOpen: 'Currently accepting new projects for Minecraft 1.20 - 1.21.',
      getInTouch: 'Get in Touch',
      copied: 'Copied!',
      copy: 'Copy',
      cards: {
        whatsappTitle: 'WhatsApp',
        whatsappDesc: 'Prefer a direct message? Reach me on WhatsApp for commission inquiries.',
        whatsappBtn: 'Message Me',
        discordTitle: 'Discord',
        discordDesc: 'Join the server for a quick chat, mod updates, and commission requests.',
        discordBtn: 'Maintenance',
      },
      ctaPrefix: 'Also check out my mods on ',
    },
    footer: {
      desc: 'Professional Minecraft mod developer crafting custom mods for creators, servers, and players.',
      quickLinks: 'Quick Links',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      rights: 'All rights reserved.'
    },
    projectsPage: {
      title: 'All Projects',
      subtitle: 'A complete collection of my mods and custom work.',
      allLoaders: 'All Loaders'
    },
    projectCard: {
      downloads: 'Downloads',
      preview: 'Preview',
      modrinth: 'Modrinth'
    }
  }
}
