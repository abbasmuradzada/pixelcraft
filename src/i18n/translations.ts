export type Language = 'en' | 'az' | 'ru'

export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface Translations {
  nav: {
    services: string
    about: string
    contact: string
  }
  hero: {
    badge: string
    titleStart: string
    titleHighlight: string
    titleEnd: string
    description: string
    getStarted: string
    ourServices: string
  }
  services: {
    title: string
    subtitle: string
    items: ServiceItem[]
  }
  about: {
    title: string
    p1: string
    p2: string
    stats: { projects: string; clients: string; years: string }
  }
  contact: {
    title: string
    subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sent: string
  }
  footer: {
    rights: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      badge: 'IT Solutions Provider',
      titleStart: 'We Build ',
      titleHighlight: 'Digital',
      titleEnd: 'Experiences',
      description: 'Transform your ideas into powerful digital solutions. We craft innovative software that drives business growth and delivers exceptional results.',
      getStarted: 'Get Started',
      ourServices: 'Our Services'
    },
    services: {
      title: 'What We Offer',
      subtitle: 'Comprehensive IT solutions tailored to your unique business needs',
      items: [
        { icon: '{ }', title: 'Web Development', description: 'Modern, responsive websites and web applications built with cutting-edge technologies.' },
        { icon: '< >', title: 'Custom Software', description: 'Tailored software solutions designed to streamline your business operations.' },
        { icon: '#', title: 'UI/UX Design', description: 'Intuitive, beautiful interfaces that deliver exceptional user experiences.' },
        { icon: '@', title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment for maximum performance.' },
        { icon: '[ ]', title: 'Mobile Apps', description: 'Native and cross-platform mobile applications for iOS and Android.' },
        { icon: '>>', title: 'IT Consulting', description: 'Strategic technology guidance to help your business grow and innovate.' }
      ]
    },
    about: {
      title: 'Why Choose PixelCraft?',
      p1: "We're a team of passionate developers, designers, and strategists dedicated to transforming your vision into reality. With years of experience across diverse industries, we deliver solutions that matter.",
      p2: 'From startups to enterprises, we partner with businesses to create technology that scales, performs, and delights users.',
      stats: { projects: 'Projects', clients: 'Clients', years: 'Years' }
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to start your next project? Get in touch and let's create something amazing.",
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell us about your project...',
      send: 'Send Message',
      sent: 'Message Sent!'
    },
    footer: {
      rights: '© 2024 PixelCraft Studio. All rights reserved.'
    }
  },
  az: {
    nav: {
      services: 'Xidmətlər',
      about: 'Haqqımızda',
      contact: 'Əlaqə'
    },
    hero: {
      badge: 'IT Həlləri Provayderi',
      titleStart: 'Biz ',
      titleHighlight: 'Rəqəmsal',
      titleEnd: 'Təcrübələr Yaradırıq',
      description: 'İdeyalarınızı güclü rəqəmsal həllərə çevirin. Biz biznesinizin böyüməsini təmin edən və müstəsna nəticələr verən innovativ proqram təminatı hazırlayırıq.',
      getStarted: 'Başlayın',
      ourServices: 'Xidmətlərimiz'
    },
    services: {
      title: 'Nə Təklif Edirik',
      subtitle: 'Sizin unikal biznes ehtiyaclarınıza uyğunlaşdırılmış hərtərəfli IT həlləri',
      items: [
        { icon: '{ }', title: 'Veb İnkişaf', description: 'Müasir texnologiyalarla qurulmuş müasir, responsiv veb saytlar və veb tətbiqlər.' },
        { icon: '< >', title: 'Xüsusi Proqram', description: 'Biznes əməliyyatlarınızı sadələşdirmək üçün hazırlanmış fərdi proqram həlləri.' },
        { icon: '#', title: 'UI/UX Dizayn', description: 'Müstəsna istifadəçi təcrübəsi təqdim edən intuitiv, gözəl interfeyslər.' },
        { icon: '@', title: 'Bulud Həlləri', description: 'Maksimum performans üçün miqyaslana bilən bulud infrastrukturu.' },
        { icon: '[ ]', title: 'Mobil Tətbiqlər', description: 'iOS və Android üçün native və cross-platform mobil tətbiqlər.' },
        { icon: '>>', title: 'IT Konsaltinq', description: 'Biznesinizin böyüməsinə və yenilik etməsinə kömək edən strateji texnoloji rəhbərlik.' }
      ]
    },
    about: {
      title: 'Niyə PixelCraft?',
      p1: 'Biz vizyonunuzu reallığa çevirməyə həsr olunmuş həvəsli developerlar, dizaynerlər və strateqlərdən ibarət komandayıq. Müxtəlif sənayelərdə illərlə təcrübə ilə əhəmiyyətli həllər təqdim edirik.',
      p2: 'Startaplardan müəssisələrə qədər, miqyaslanan, performans göstərən və istifadəçiləri sevindirən texnologiya yaratmaq üçün biznislərlə əməkdaşlıq edirik.',
      stats: { projects: 'Layihə', clients: 'Müştəri', years: 'İl' }
    },
    contact: {
      title: 'Birlikdə İşləyək',
      subtitle: 'Növbəti layihənizə başlamağa hazırsınız? Əlaqə saxlayın və birlikdə möhtəşəm bir şey yaradaq.',
      namePlaceholder: 'Adınız',
      emailPlaceholder: 'E-poçtunuz',
      messagePlaceholder: 'Layihəniz haqqında bizə məlumat verin...',
      send: 'Mesaj Göndər',
      sent: 'Mesaj Göndərildi!'
    },
    footer: {
      rights: '© 2024 PixelCraft Studio. Bütün hüquqlar qorunur.'
    }
  },
  ru: {
    nav: {
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      badge: 'Поставщик IT-решений',
      titleStart: 'Мы создаём ',
      titleHighlight: 'Цифровой',
      titleEnd: 'Опыт',
      description: 'Превратите ваши идеи в мощные цифровые решения. Мы создаём инновационное программное обеспечение, которое способствует росту бизнеса и обеспечивает исключительные результаты.',
      getStarted: 'Начать',
      ourServices: 'Наши услуги'
    },
    services: {
      title: 'Что мы предлагаем',
      subtitle: 'Комплексные IT-решения, адаптированные к вашим уникальным бизнес-потребностям',
      items: [
        { icon: '{ }', title: 'Веб-разработка', description: 'Современные, адаптивные веб-сайты и веб-приложения, созданные с использованием передовых технологий.' },
        { icon: '< >', title: 'Заказное ПО', description: 'Индивидуальные программные решения, разработанные для оптимизации ваших бизнес-процессов.' },
        { icon: '#', title: 'UI/UX дизайн', description: 'Интуитивно понятные, красивые интерфейсы, обеспечивающие исключительный пользовательский опыт.' },
        { icon: '@', title: 'Облачные решения', description: 'Масштабируемая облачная инфраструктура для максимальной производительности.' },
        { icon: '[ ]', title: 'Мобильные приложения', description: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android.' },
        { icon: '>>', title: 'IT-консалтинг', description: 'Стратегическое технологическое руководство для роста и инноваций вашего бизнеса.' }
      ]
    },
    about: {
      title: 'Почему PixelCraft?',
      p1: 'Мы — команда увлечённых разработчиков, дизайнеров и стратегов, посвятивших себя воплощению вашего видения в реальность. С многолетним опытом в различных отраслях мы создаём решения, которые имеют значение.',
      p2: 'От стартапов до предприятий — мы сотрудничаем с бизнесом для создания технологий, которые масштабируются, работают эффективно и радуют пользователей.',
      stats: { projects: 'Проектов', clients: 'Клиентов', years: 'Лет' }
    },
    contact: {
      title: 'Давайте работать вместе',
      subtitle: 'Готовы начать свой следующий проект? Свяжитесь с нами, и давайте создадим что-то удивительное.',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'Ваш email',
      messagePlaceholder: 'Расскажите нам о вашем проекте...',
      send: 'Отправить',
      sent: 'Сообщение отправлено!'
    },
    footer: {
      rights: '© 2024 PixelCraft Studio. Все права защищены.'
    }
  }
}
