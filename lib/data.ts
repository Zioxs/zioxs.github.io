export type ModLoader = 'Forge' | 'Fabric' | 'NeoForge'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: ModLoader[]
  mcVersion: string
  color: string
  featured: boolean
  image?: string
  modrinthUrl?: string
  previewUrl?: string
  downloads?: string
}

export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface Review {
  name: string
  handle: string
  platform: string
  avatar: string
  avatarUrl?: string
  rating: number
  text: string
  projectsCount: number
}

// ── Projects (mods only) ──────────────────────────────────────────────────────
export const projects = {
  en: [
    {
      id: 'replayfight',
      title: 'Replay Fight',
      description: 'Replay Fight is a simple patch that allows the Epic Fight Mod animations to render correctly within Replay Mod.',
      longDescription: 'CreatorTools is designed specifically for content creators who need precise control over their Minecraft recordings. Includes a cinematic camera system, waypoint-based shot planning, custom particle effects, and a streamlined HUD editor.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      color: '#7c6efc',
      featured: true,
      modrinthUrl: 'https://modrinth.com/mod/replayfight',
      downloads: '3K+',
      image: '/projects/replayfight.png',
    },
    {
      id: 'durin',
      title: 'Durin (Genshin Impact)',
      description: 'A playable character from Genshin Impact with complete interaction and combat animation.',
      longDescription: 'A playable character from Genshin Impact with complete interaction and combat animation.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      previewUrl: 'https://youtu.be/mvgOAkOyE7Y?si=1whF5qv2vAAKdej0&t=3482',
      color: '#9f1239',
      featured: true,
      image: '/projects/durin.png',
    },
    {
      id: 'linnea',
      title: 'Linnea (Genshin Impact)',
      description: 'A custom mod featuring playable character Linnea from Genshin Impact with complete interaction and combat animation.',
      longDescription: 'This mod brings Linnea into the game as a fully modelled, animated, and interactive playable character. Features include combat animation, skill animation, and custom sounds.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      previewUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      color: '#facc15',
      featured: false,
      image: '/projects/linnea.jpg',
    },
    {
      id: 'ojekonline',
      title: 'Ojek Online',
      description: 'A custom mod bringing ride-hailing services to Minecraft with motorbikes, an ordering system, and a leveling progression.',
      longDescription: 'The Ojek Online mod introduces a complete ride-hailing economy into the game. Players can ride fully animated motorbikes, take orders from an integrated ordering system, and progress through a custom leveling system to unlock better rides and rewards.',
      tags: ['Fabric'],
      mcVersion: '1.20.1',
      color: '#10b981',
      featured: true,
      image: '/projects/ojol.png',
    },
  ] as Project[],
  id: [
    {
      id: 'replayfight',
      title: 'Replay Fight',
      description: 'Replay Fight adalah patch sederhana yang memungkinkan animasi Epic Fight Mod di-render dengan benar di dalam Replay Mod.',
      longDescription: 'CreatorTools dirancang khusus untuk pembuat konten yang membutuhkan kontrol presisi atas rekaman Minecraft mereka.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      color: '#7c6efc',
      featured: true,
      modrinthUrl: 'https://modrinth.com/mod/replayfight',
      downloads: '3K+',
      image: '/projects/replayfight.png',
    },
    {
      id: 'durin',
      title: 'Durin (Genshin Impact)',
      description: 'Karakter yang dapat dimainkan dari Genshin Impact dengan interaksi dan animasi pertempuran lengkap.',
      longDescription: 'Karakter yang dapat dimainkan dari Genshin Impact dengan interaksi dan animasi pertempuran lengkap.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      previewUrl: 'https://youtu.be/mvgOAkOyE7Y?si=1whF5qv2vAAKdej0&t=3482',
      color: '#9f1239',
      featured: true,
      image: '/projects/durin.png',
    },
    {
      id: 'linnea',
      title: 'linnea (Genshin Impact)',
      description: 'Mod kustom yang menampilkan karakter yang dapat dimainkan Linnea dari Genshin Impact dengan interaksi dan animasi pertempuran lengkap.',
      longDescription: 'Mod ini menghadirkan Linnea ke dalam permainan sebagai karakter yang sepenuhnya dimodelkan, dianimasikan, dan interaktif.',
      tags: ['Forge'],
      mcVersion: '1.20.1',
      previewUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      color: '#facc15',
      featured: false,
      image: '/projects/linnea.jpg',
    },
    {
      id: 'ojekonline',
      title: 'Ojek Online',
      description: 'Mod kustom yang menghadirkan layanan ojek online ke Minecraft dengan sepeda motor, sistem pemesanan, dan perkembangan level.',
      longDescription: 'Mod Ojek Online memperkenalkan ekonomi ojek online lengkap ke dalam permainan. Pemain dapat mengendarai sepeda motor yang dianimasikan, mengambil pesanan dari sistem pesanan yang terintegrasi, dan naik level melalui sistem progresi khusus untuk membuka kendaraan dan hadiah yang lebih baik.',
      tags: ['Fabric'],
      mcVersion: '1.20.1',
      color: '#10b981',
      featured: true,
      image: '/projects/ojol.png',
    },
  ] as Project[],
};

// ── Services (mods only) ──────────────────────────────────────────────────────
export const services = {
  en: [
    {
      icon: 'Wrench',
      title: 'Custom Mod Development',
      description: 'From a single new item or mechanic to a full gameplay overhaul — I build exactly what you envision, clean and documented.',
      features: ['Forge, Fabric & NeoForge', 'Any Minecraft version', 'Clean, documented code'],
    },
    {
      icon: 'Box',
      title: 'Basic Model & Texture',
      description: 'I provide basic 3D modeling and custom texturing services for your items, blocks, and entities using Blockbench.',
      features: ['Blockbench modeling', 'Custom texturing', 'Entity & item design'],
    },
    {
      icon: 'Package',
      title: 'Mod Pack Integration',
      description: 'Already have mods you love? I integrate, patch, and extend existing mods to fit your exact modpack requirements.',
      features: ['Cross-mod compatibility', 'Config & balance tuning', 'Custom patches & addons'],
    },
  ] as Service[],
  id: [
    {
      icon: 'Wrench',
      title: 'Pengembangan Mod Kustom',
      description: 'Dari item baru yang sederhana hingga perombakan gameplay penuh — Saya membuat apa yang Anda bayangkan.',
      features: ['Forge, Fabric & NeoForge', 'Semua versi Minecraft', 'Kode bersih & terdokumentasi'],
    },
    {
      icon: 'Box',
      title: 'Model & Tekstur Dasar',
      description: 'Saya menyediakan pemodelan 3D dasar dan pembuatan tekstur kustom untuk item, blok, dan entitas Anda menggunakan Blockbench.',
      features: ['Pemodelan Blockbench', 'Tekstur kustom', 'Desain entitas & item'],
    },
    {
      icon: 'Package',
      title: 'Integrasi Mod Pack',
      description: 'Sudah punya mod yang Anda suka? Saya bisa menggabungkan, patch, dan memperluasnya agar sesuai dengan server Anda.',
      features: ['Kompatibilitas antar mod', 'Pengaturan keseimbangan', 'Patch & addon kustom'],
    },
  ] as Service[],
};

// ── Skills ────────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  { name: 'Java', level: 95 },
  { name: 'Fabric API', level: 90 },
  { name: 'Minecraft Forge', level: 88 },
  { name: 'Mixins', level: 84 }
]

// ── Reviews ───────────────────────────────────────────────────────────────────
export const reviews = {
  en: [
    {
      name: 'ItsSandwich',
      handle: '@ItsSandwich',
      platform: 'YouTube',
      avatar: 'I',
      avatarUrl: '/reviews/its-sandwich.png',
      rating: 5,
      text: 'Working with Zioxs was incredible. The mod was exactly what my videos needed, very polished, and delivered super fast! Highly recommended.',
      projectsCount: 12,
    },
    {
      name: 'Kaishi',
      handle: '@kaishi',
      platform: 'YouTube',
      avatar: 'K',
      avatarUrl: '/reviews/kaishi.png',
      rating: 5,
      text: 'We needed a really specific quest system for our series and Zioxs nailed every detail. Communication was great throughout and revisions were done fast. Will commission again.',
      projectsCount: 4,
    },
    {
      name: 'BlackBee',
      handle: '@blackbee',
      platform: 'YouTube',
      avatar: 'B',
      avatarUrl: '/reviews/blackbee.png',
      rating: 5,
      text: "I really love the result! This is the second time I've received help making a Minecraft mod and everything met my expectations perfectly. Zioxs is also great to brainstorm with during the development process. Thank you so much, thank you so much!!",
      projectsCount: 2,
    },
    {
      name: 'Fimauu',
      handle: '@fimauu',
      platform: 'YouTube',
      avatar: 'F',
      avatarUrl: '/reviews/fimauu.png',
      rating: 1,
      text: 'Asked for a loot overhaul mod for my series and got something that exceeded every expectation. The loot animations alone have become a running gag in my videos. Amazing work.',
      projectsCount: 3,
    },
  ] as Review[],
  id: [
    {
      name: 'ItsSandwich',
      handle: '@ItsSandwich',
      platform: 'YouTube',
      avatar: 'I',
      avatarUrl: '/reviews/its-sandwich.png',
      rating: 5,
      text: 'Bekerja dengan Zioxs sangat luar biasa. Mod-nya benar-benar sesuai dengan yang video saya butuhkan, sangat rapi, dan dikirim sangat cepat! Sangat direkomendasikan.',
      projectsCount: 12,
    },
    {
      name: 'Kaishi',
      handle: '@kaishi',
      platform: 'YouTube',
      avatar: 'K',
      avatarUrl: '/reviews/kaishi.png',
      rating: 5,
      text: 'Kami butuh sistem quest yang sangat spesifik dan Zioxs membuatnya dengan sempurna. Komunikasi lancar dan revisi dilakukan dengan cepat. Akan pesan lagi.',
      projectsCount: 4,
    },
        {
      name: 'BlackBee',
      handle: '@blackbee',
      platform: 'YouTube',
      avatar: 'B',
      avatarUrl: '/reviews/blackbee.png',
      rating: 5,
      text: 'Aku suka banget sama hasilnya, ini udah yang kedua kalinya dibantu untuk buat mod Minecraft dan semuanya sesuai dengan ekspetasiku. Bang Zioxs juga asik diajak untuk bertukar pikiran buat proses pembuatannya. Terimakasih banyak, Terimakasih banyak!!',
      projectsCount: 2,
    },
    {
      name: 'Fimauu',
      handle: '@fimauu',
      platform: 'YouTube',
      avatar: 'F',
      avatarUrl: '/reviews/fimauu.png',
      rating: 5,
      text: 'Meminta mod perombakan loot dan mendapatkan sesuatu yang melampaui harapan. Keseluruhan luar biasa. Kerja bagus.',
      projectsCount: 1,
    },
  ] as Review[],
}

// ── Socials ───────────────────────────────────────────────────────────────────
export const socials = {
  discord: 'https://discord.com/users/576298829796737037/',
  modrinth: 'https://modrinth.com/user/zioxs',
  whatsapp: 'https://wa.me/6285190807977',
  github: 'https://github.com/zioxs',
  email: 'mailto:zioxs44@gmail.com',
}