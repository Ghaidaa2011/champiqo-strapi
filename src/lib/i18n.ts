import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    specialists: 'Specialists',
    testimonials: 'Testimonials',
    blog: 'Collaborations',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Welcome to',
    name: 'CHAMPIQO CLINIC',
    title: 'PLAY • RECOVER • COMPETE',
    description: 'Elite Sports Physical Therapy & Field Medical Support for Professional Athletes and Competitive Teams.',
    cta: 'Book Assessment',
    contactCta: 'Contact Us',
  },
  about: {
    title: 'About Champiqo',
    subtitle: 'Elite Sports Medical Care',
    description: 'Champiqo Clinic specializes in sports rehabilitation, performance enhancement, and professional field medical coverage. We provide evidence-based treatment protocols designed to accelerate recovery and optimize athletic performance for professional and competitive athletes.',
    experience: 'Years of Experience',
    projects: 'Athletes Treated',
    clients: 'Championship Coverage',
    experienceCount: '5+',
    projectsCount: '500+',
    clientsCount: '30+',
  },
  services: {
    title: 'Our Services',
    subtitle: 'Professional Sports & Medical Support',

    service1: {
      title: 'Physical Therapy',
      description: 'Comprehensive orthopedic and sports physical therapy focused on injury prevention, pain management, and functional restoration.',
    },
    service2: {
      title: 'Sports Rehabilitation',
      description: 'Structured rehabilitation programs designed to ensure safe and effective return-to-play.',
    },
    service3: {
      title: 'Recovery & Performance',
      description: 'Advanced recovery protocols including manual therapy, mobility work, and performance optimization.',
    },
    service4: {
      title: 'Field Medical Support',
      description: 'On-field injury assessment and medical coverage for events, championships, and competitive teams.',
    },
    service5: {
      title: 'Sports Nutrition',
      description: 'Performance-focused nutrition plans tailored to athletes and competitive individuals.',
    },
  },
  specialists: {
    title: 'Our Specialists',
    subtitle: 'Clinical expertise and professional experience',

    specialist1: {
      title: 'Orthopedic Rehabilitation Specialist',
      category: 'Sports & Musculoskeletal',
      description: 'Specialized in managing orthopedic injuries and structured return-to-play protocols.',
    },

    specialist2: {
      title: 'Sports Injury Management',
      category: 'On-Field & Acute Care',
      description: 'Immediate assessment, injury management, and athlete-centered medical decision-making.',
    },

    specialist3: {
      title: 'Performance Optimization',
      category: 'Strength & Conditioning',
      description: 'Evidence-based programs to enhance athletic performance and reduce injury risk.',
    },

    specialist4: {
      title: 'ICU & Post-Surgical Rehabilitation',
      category: 'Clinical Rehabilitation',
      description: 'Comprehensive rehabilitation planning for post-operative and critical care patients.',
    },
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What my clients say',
    testimonial1: {
      quote: '"Highly recommend! The physical therapy sessions were exactly what I needed for my recovery."',
      author: 'Fatima Ali',
      company: 'ABC Company',
    },
    testimonial2: {
      quote: '"Outstanding results with the laser therapy treatments. Very knowledgeable and caring professional."',
      author: 'Mohamed Hassan',
      company: 'XYZ Corp',
    },
  },
  collaboration: {
    title: 'Collaborations',
    subtitle: 'Strategic partnerships & medical support initiatives',
    viewMore: 'View Details',

    item1: {
      title: 'MENA 3×3 Basketball Tournament',
      date: 'MENA Basketball Lovers',
      summary:
        'Official Medical Team, Sponsor, and Collaboration Partner providing on-field physiotherapy support, injury prevention, and recovery services at MENA Sports Club – 6th of October.',
    },

    item2: {
      title: 'Football Academy Strategic Partnership',
      date: 'Strategic Partnership',
      summary:
        'Partnership between the Football Academy and the Physiotherapy Clinic combining expert athletic training with professional medical support to ensure peak performance and player safety.',
    },

    item3: {
      title: 'Egyptian Wheelchair Basketball League 2025–2026',
      date: 'Official Medical Collaboration',
      summary:
        'Proud collaboration with the Egyptian Wheelchair Basketball Federation delivering comprehensive physiotherapy, recovery, and medical support services throughout the league season.',
    },

    item4: {
      title: 'Dawret El-Farmawy Tournament',
      date: 'Tournament Participation',
      summary:
        'Official participation with our team while providing professional physiotherapy support to optimize performance and prevent injuries throughout the competition.',
    },
    item5: {
      title: 'First R2 Championship in Egypt',
      date: 'Event Coverage',
      summary: 'Providing medical support for the first-ever R2 Championship in Egypt, featuring exciting mixed-gender competitions.',
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Professional sports medical coverage starts here',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    sendButton: 'Send Message',
    address: 'Sheikh Zayed, 6th of October, Egypt',
    phone: '+20 155 815 5330',
    email: 'info@champiqo.eg',
    responseNote: 'We will respond as soon as possible.',

    // successMessage: 'Your message has been sent. Thank you!',
    // errorMessage: 'There was an error sending your message. Please try again.',
  },
  footer: {
    copyright: '© 2026 CHAMPIQO CLINIC. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};

// Arabic translations
const arTranslations = {
  navigation: {
    home: 'الرئيسية',
    about: 'عنّي',
    services: 'الخدمات',
    specialists: 'التخصصات',
    testimonials: 'آراء العملاء',
    blog: 'الشراكات',
    contact: 'اتصل بي',
  },
  hero: {
    greeting: 'مرحباً بكم في',
    name: 'عيادة CHAMPIQO',
    title: 'العب • تعافى • نافس',
    description: 'علاج طبيعي رياضي احترافي ودعم طبي ميداني للرياضيين والفرق التنافسية.',
    cta: 'احجز تقييم',
    contactCta: 'تواصل معنا',
  },
  about: {
    title: 'عن Champiqo',
    subtitle: 'رعاية طبية رياضية متقدمة',
    description: 'تتخصص عيادة Champiqo في التأهيل الرياضي، تحسين الأداء، والتغطية الطبية الميدانية للبطولات والفرق الرياضية، مع بروتوكولات علاجية مبنية على الأدلة العلمية لتسريع التعافي وتحسين الأداء.',
    experience: 'سنوات الخبرة',
    projects: 'عدد الرياضيين',
    clients: 'تغطيات بطولات',
    experienceCount: '5+',
    projectsCount: '500+',
    clientsCount: '30+',
  },
  services: {
    title: 'خدماتنا',
    subtitle: 'الدعم الطبي والرياضي الاحترافي',

    service1: {
      title: 'العلاج الطبيعي',
      description: 'خدمات علاج طبيعي شاملة متخصصة في الإصابات العظمية والرياضية مع التركيز على الوقاية من الإصابات واستعادة الكفاءة الحركية.',
    },

    service2: {
      title: 'التأهيل الرياضي',
      description: 'برامج تأهيل متكاملة مصممة لإعادة الرياضيين إلى الملاعب بأمان ووفق بروتوكولات عودة للمنافسة مبنية على أسس علمية.',
    },

    service3: {
      title: 'الاستشفاء وتحسين الأداء',
      description: 'بروتوكولات استشفاء متقدمة تشمل العلاج اليدوي، تحسين الحركة، وبرامج تطوير الأداء البدني.',
    },

    service4: {
      title: 'الدعم الطبي الميداني',
      description: 'تغطية طبية فورية للمباريات والبطولات مع تقييم وإدارة الإصابات داخل الملعب.',
    },

    service5: {
      title: 'التغذية الرياضية',
      description: 'خطط غذائية مبنية على الأدلة العلمية لدعم الأداء الرياضي وتسريع التعافي.',
    },
  },
  specialists: {
    title: 'فريق التخصصات',
    subtitle: 'خبرات إكلينيكية وتجربة مهنية احترافية',

    specialist1: {
      title: 'أخصائي التأهيل العظمي',
      category: 'إصابات الملاعب والجهاز الحركي',
      description: 'متخصص في إدارة الإصابات العظمية وتنفيذ بروتوكولات العودة الآمنة للملاعب.',
    },

    specialist2: {
      title: 'إدارة الإصابات الرياضية',
      category: 'الرعاية الميدانية والطوارئ',
      description: 'تقييم فوري وإدارة احترافية للإصابات مع اتخاذ قرارات طبية دقيقة تتمحور حول اللاعب.',
    },

    specialist3: {
      title: 'تحسين الأداء الرياضي',
      category: 'الإعداد البدني',
      description: 'برامج مبنية على الأدلة العلمية لرفع كفاءة الأداء وتقليل مخاطر الإصابات.',
    },

    specialist4: {
      title: 'تأهيل ما بعد الجراحة والعناية المركزة',
      category: 'التأهيل الإكلينيكي',
      description: 'خطط تأهيل متكاملة للحالات الجراحية ومرضى الرعاية الحرجة.',
    },
  },
  testimonials: {
    title: 'آراء العملاء',
    subtitle: 'ماذا يقول عملائي',
    testimonial1: {
      quote: '"أنصح بها بشدة! جلسات العلاج الطبيعي كانت بالضبط ما أحتاجه للتعافي."',
      author: 'فاطمة علي',
      company: 'شركة ABC',
    },
    testimonial2: {
      quote: '"نتائج رائعة مع علاجات الليزر. محترفة وتهتم كثيراً بالعميل."',
      author: 'محمد حسن',
      company: 'شركة XYZ',
    },
  },
  collaboration: {
    title: 'الشراكات والتعاونات',
    subtitle: 'شراكات استراتيجية ودعم طبي رياضي',
    viewMore: 'عرض التفاصيل',

    item1: {
      title: 'بطولة MENA 3×3 لكرة السلة',
      date: '12–14 فبراير',
      summary:
        'المشاركة كفريق طبي رسمي وراعٍ وشريك تعاون، مع تقديم دعم علاجي ميداني، الوقاية من الإصابات، وتسريع الاستشفاء في نادي مينا سبورتس – السادس من أكتوبر.',
    },

    item2: {
      title: 'شراكة استراتيجية مع أكاديمية كرة القدم',
      date: 'شراكة استراتيجية',
      summary:
        'تعاون بين أكاديمية كرة القدم وعيادة العلاج الطبيعي لدمج التدريب الاحترافي مع الدعم الطبي لضمان أفضل أداء وأعلى مستويات الأمان للاعبين.',
    },

    item3: {
      title: 'دوري كرة السلة للكراسي المتحركة 2025–2026',
      date: 'تعاون طبي رسمي',
      summary:
        'فخورون بالتعاون مع الاتحاد المصري لكرة السلة للكراسي المتحركة لتقديم خدمات العلاج الطبيعي والدعم الطبي والاستشفاء طوال الموسم.',
    },

    item4: {
      title: 'بطولة دورة الفرمواي',
      date: 'مشاركة رسمية',
      summary:
        'المشاركة بفريقنا الخاص في البطولة مع تقديم دعم علاجي رياضي احترافي للحفاظ على الأداء وتقليل الإصابات.',
    },
    item5: {
      title: 'أول بطولة R2 في مصر',
      date: 'تغطية طبية',
      summary: 'فخورون بتوفير الدعم الطبي لأول بطولة R2 بمصر، وهي منافسة مختلطة فريدة من نوعها تجمع بين الشباب والبنات.',
    },
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'التغطية الطبية الرياضية الاحترافية تبدأ من هنا',
    namePlaceholder: 'الاسم الكامل',
    emailPlaceholder: 'البريد الإلكتروني',
    messagePlaceholder: 'اكتب رسالتك هنا',
    sendButton: 'إرسال',
    address: 'الشيخ زايد، السادس من أكتوبر، مصر',
    phone: '+20 155 815 5330',
    email: 'info@champiqo.eg',
    responseNote: 'سيتم التواصل معك في أقرب وقت ممكن.',
    // successMessage: 'تم إرسال رسالتك. شكرًا لك!',
    // errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
  },
  footer: {
    copyright: '© 2026 CHAMPIQO CLINIC. جميع الحقوق محفوظة.',
    links: {
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
  },
};

// Initialize i18next 
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
