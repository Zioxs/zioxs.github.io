import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    nav: {
      home: string;
      projects: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      viewProjects: string;
      contactMe: string;
    };
    about: {
      title: string;
      title1: string;
      description1: string;
      description2: string;
      description3: string;
      letsWork: string;
      skills: {
        modding: {
          title: string;
          description: string;
        };
        frameworks: {
          title: string;
          description: string;
        };
        animation: {
          title: string;
          description: string;
        };
        optimization: {
          title: string;
          description: string;
        };
      };
    };
    projects: {
      title: string;
      title1: string;
      subtitle: string;
      viewAll: string;
      allProjects: {
        title: string;
        title1: string;
      };
      cards: {
        werewolf: {
          title: string;
          description: string;
          content: string;
        };
        ecommerce: {
          title: string;
          description: string;
          content: string;
        };
        task: {
          title: string;
          description: string;
          content: string;
        };
        health: {
          title: string;
          description: string;
          content: string;
        };
        ai: {
          title: string;
          description: string;
          content: string;
        };
      };
    };
    contact: {
      title: string;
      title1: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      info: {
        title: string;
        description: string;
      };
    };
  };
}

const translations: Translations = {
  EN: {
    nav: {
      home: 'Home',
      projects: 'Projects',
    },
    hero: {
      title: "Hello, I'm",
      subtitle: 'Minecraft Mod Developer',
      description: 'I bring your ideas to life through high-quality Minecraft mod, emphasizing structure and intuitive mechanics.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About ',
      title1: 'Me',
      description1: "I'm a passionate Minecraft mod developer with over 5 years of experience creating engaging in-game experiences players enjoy.",
      description2: "I've worked with a range of modding platforms like Forge, Fabric, and Architectury to bring new features, mechanics, and visual enhancements to life.",
      description3: "Previously, I collaborated with creators and modding communities alike to help them achieve their project goals. My work is known for its clean codebase, thoughtful design, and attention to detail.",
      letsWork: "Let's work together",
      skills: {
        modding: {
          title: 'Core Modding',
          description: 'Expert in Java-based Minecraft modding, creating custom items, blocks, entities, and game mechanics.'
        },
        frameworks: {
          title: 'Modding Frameworks',
          description: 'Proficient with Forge, Fabric, and NeoForge, ensuring cross-platform compatibility and stability.'
        },
        animation: {
          title: 'Model & Animation',
          description: 'Skilled in creating custom entity models and animations using GeckoLib and other animation libraries.'
        },
        optimization: {
          title: 'Performance',
          description: 'Focused on optimizing mod performance, reducing memory usage, and maintaining server compatibility.'
        }
      }
    },
    projects: {
      title: 'Featured ',
      title1: 'Project',
      subtitle: 'Check out my latest work and see how I bring ideas to life',
      viewAll: 'View all projects',
      allProjects: {
        title: 'All ',
        title1: 'Projects'
      },
      cards: {
        werewolf: {
          title: 'Werewolf Simulation',
          description: 'A comprehensive Minecraft mod that adds werewolf transformation mechanics, custom animations, and a unique progression system.',
          content: 'This mod introduces a complete werewolf transformation system with custom models, animations, and progression mechanics. Players can experience the thrill of transforming into a werewolf, complete with unique abilities and challenges. The mod features a day/night cycle awareness, custom sound effects, and particle systems that enhance the immersive experience.'
        },
        ecommerce: {
          title: 'Mythical Creatures',
          description: 'An extensive mod adding various mythical creatures to Minecraft, complete with custom models, AI behaviors, and interactive features.',
          content: 'Mythical Creatures brings a diverse range of legendary beings to life in Minecraft. Each creature features unique AI behaviors, custom animations, and interactive elements that make them feel truly alive in the game world. The mod includes a comprehensive bestiary system and special items related to each creature.'
        },
        task: {
          title: 'Magic Spells',
          description: 'A magic-themed mod introducing new spell casting mechanics, particle effects, and an innovative magic progression system.',
          content: 'The Magic Spells mod revolutionizes magical gameplay in Minecraft with an intuitive spell casting system. Players can learn and master various spells, each with unique effects and particle systems. The mod includes a spell crafting system, magical reagents, and a progression system that rewards skillful play.'
        },
        health: {
          title: 'Enhanced Combat',
          description: 'A combat enhancement mod featuring new weapons, combat mechanics, and special abilities for an improved fighting experience.',
          content: 'Enhanced Combat overhauls the vanilla combat system with new weapons, combat mechanics, and special abilities. The mod introduces combo systems, weapon-specific abilities, and enhanced hit detection. Players can master different fighting styles and unlock powerful combat techniques.'
        },
        ai: {
          title: 'Custom NPCs',
          description: 'Advanced NPC system with custom AI behaviors, dialogue systems, and quest mechanics for enhanced gameplay interaction.',
          content: 'The Custom NPCs mod creates more engaging and interactive villagers with advanced AI behaviors. NPCs feature dynamic dialogue systems, relationship mechanics, and a quest system that adapts to player choices. Each NPC has unique personalities and daily routines that make the world feel more alive.'
        }
      }
    },
    contact: {
      title: 'Get In ',
      title1: 'Touch',
      subtitle: "I'm always open to new opportunities and collaborations. Feel free to reach out with any questions or project inquiries.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully!',
      info: {
        title: "Let's build something amazing",
        description: "I'm currently available for freelance work and full-time positions. If you have a project that needs some creative work, let's talk!",
      },
    },
  },
  ID: {
    nav: {
      home: 'Beranda',
      projects: 'Proyek',
    },
    hero: {
      title: 'Halo, Saya',
      subtitle: 'Pengembang Mod Minecraft',
      description: 'Saya mewujudkan ide-ide Anda melalui mod Minecraft berkualitas tinggi, dengan penekanan pada struktur dan mekanika yang intuitif.',
      viewProjects: 'Lihat Proyek',
      contactMe: 'Hubungi Saya',
    },
    about: {
      title: 'Tentang ',
      title1: 'Saya',
      description1: 'Saya adalah pengembang mod Minecraft yang bersemangat dengan pengalaman lebih dari 5 tahun menciptakan pengalaman dalam game yang menarik bagi pemain.',
      description2: 'Saya telah bekerja dengan berbagai platform modding seperti Forge, Fabric, dan Architectury untuk menghadirkan fitur, mekanika, dan peningkatan visual baru.',
      description3: 'Sebelumnya, saya berkolaborasi dengan kreator dan komunitas modding untuk membantu mereka mencapai tujuan proyek mereka. Karya saya dikenal dengan basis kode yang bersih, desain yang matang, dan perhatian pada detail.',
      letsWork: 'Mari bekerja sama',
      skills: {
        modding: {
          title: 'Modding Inti',
          description: 'Ahli dalam modding Minecraft berbasis Java, membuat item, blok, entitas, dan mekanika game khusus.'
        },
        frameworks: {
          title: 'Framework Modding',
          description: 'Mahir dengan Forge, Fabric, dan NeoForge, memastikan kompatibilitas dan stabilitas lintas platform.'
        },
        animation: {
          title: 'Model & Animasi',
          description: 'Terampil dalam membuat model entitas khusus dan animasi menggunakan GeckoLib dan pustaka animasi lainnya.'
        },
        optimization: {
          title: 'Performa',
          description: 'Fokus pada optimasi performa mod, mengurangi penggunaan memori, dan menjaga kompatibilitas server.'
        }
      }
    },
    projects: {
      title: 'Proyek ',
      title1: 'Unggulan',
      subtitle: 'Lihat karya terbaru saya dan bagaimana saya mewujudkan ide-ide',
      viewAll: 'Lihat semua proyek',
      allProjects: {
        title: 'Semua ',
        title1: 'Proyek'
      },
      cards: {
        werewolf: {
          title: 'Simulasi Manusia Serigala',
          description: 'Mod Minecraft komprehensif yang menambahkan mekanika transformasi manusia serigala, animasi kustom, dan sistem progresi unik.',
          content: 'Mod ini memperkenalkan sistem transformasi manusia serigala lengkap dengan model kustom, animasi, dan mekanika progresi. Pemain dapat merasakan sensasi bertransformasi menjadi manusia serigala, lengkap dengan kemampuan dan tantangan unik. Mod ini memiliki kesadaran siklus siang/malam, efek suara kustom, dan sistem partikel yang meningkatkan pengalaman immersif.'
        },
        ecommerce: {
          title: 'Makhluk Mitologi',
          description: 'Mod ekstensif yang menambahkan berbagai makhluk mitologi ke Minecraft, lengkap dengan model kustom, perilaku AI, dan fitur interaktif.',
          content: 'Makhluk Mitologi menghidupkan berbagai makhluk legendaris di Minecraft. Setiap makhluk memiliki perilaku AI unik, animasi kustom, dan elemen interaktif yang membuat mereka terasa benar-benar hidup di dunia game. Mod ini mencakup sistem bestiarium komprehensif dan item khusus yang terkait dengan setiap makhluk.'
        },
        task: {
          title: 'Sihir dan Mantra',
          description: 'Mod bertema sihir yang memperkenalkan mekanika casting mantra baru, efek partikel, dan sistem progresi sihir yang inovatif.',
          content: 'Mod Sihir dan Mantra merevolusi gameplay magis di Minecraft dengan sistem casting mantra yang intuitif. Pemain dapat mempelajari dan menguasai berbagai mantra, masing-masing dengan efek dan sistem partikel unik. Mod ini mencakup sistem pembuatan mantra, reagen magis, dan sistem progresi yang menghargai permainan terampil.'
        },
        health: {
          title: 'Pertarungan yang Ditingkatkan',
          description: 'Mod peningkatan pertarungan dengan senjata baru, mekanika pertarungan, dan kemampuan khusus untuk pengalaman bertarung yang lebih baik.',
          content: 'Pertarungan yang Ditingkatkan mengubah sistem pertarungan vanilla dengan senjata baru, mekanika pertarungan, dan kemampuan khusus. Mod ini memperkenalkan sistem combo, kemampuan khusus senjata, dan deteksi hit yang ditingkatkan. Pemain dapat menguasai gaya bertarung yang berbeda dan membuka teknik pertarungan yang kuat.'
        },
        ai: {
          title: 'NPC Kustom',
          description: 'Sistem NPC canggih dengan perilaku AI kustom, sistem dialog, dan mekanika quest untuk interaksi gameplay yang ditingkatkan.',
          content: 'Mod NPC Kustom menciptakan penduduk desa yang lebih menarik dan interaktif dengan perilaku AI canggih. NPC memiliki sistem dialog dinamis, mekanika hubungan, dan sistem quest yang beradaptasi dengan pilihan pemain. Setiap NPC memiliki kepribadian unik dan rutinitas harian yang membuat dunia terasa lebih hidup.'
        }
      }
    },
    contact: {
      title: 'Hubungi ',
      title1: 'Saya',
      subtitle: 'Saya selalu terbuka untuk peluang dan kolaborasi baru. Jangan ragu untuk menghubungi saya dengan pertanyaan atau permintaan proyek.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: 'Pesan Anda telah berhasil dikirim!',
      info: {
        title: 'Mari buat sesuatu yang luar biasa',
        description: 'Saya saat ini tersedia untuk pekerjaan freelance dan posisi penuh waktu. Jika Anda memiliki proyek yang membutuhkan pekerjaan kreatif, mari bicara!',
      },
    },
  },
};

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};