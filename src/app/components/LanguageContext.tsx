import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'ua' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contacts': 'Contacts',
    
    // Hero
    'hero.title': 'Reliable Transportation Services in Poland',
    'hero.subtitle': 'Professional movers, drivers, and comprehensive moving solutions',
    'hero.cta': 'Get a Quote',
    
    // Features
    'features.title': 'Our Services',
    'features.driver.title': 'Car with Driver',
    'features.driver.desc': 'Professional drivers for your transportation needs',
    'features.movers.title': 'Moving Services',
    'features.movers.desc': 'Experienced movers to handle your belongings',
    'features.complex.title': 'Complete Moves',
    'features.complex.desc': 'Full-service moving solutions',
    'features.intercity.title': 'Intercity Transport',
    'features.intercity.desc': 'Long-distance moving services',
    'features.office.title': 'Office Relocation',
    'features.office.desc': 'Professional office moving services',
    
    // About
    'about.title': 'About Service8',
    'about.text': 'We are a professional transportation and moving company operating in Poland. Our team provides high-quality services for individuals and businesses.',
    
    // Price Calculator
    'calc.title': 'Price Calculator',
    'calc.service': 'Select Service',
    'calc.distance': 'Distance (km)',
    'calc.movers': 'Number of Movers',
    'calc.calculate': 'Calculate',
    'calc.result': 'Estimated Cost',
    
    // Request Form
    'form.title': 'Request a Quote',
    'form.name': 'Your Name',
    'form.phone': 'Phone Number',
    'form.email': 'Email',
    'form.service': 'Select Service',
    'form.details': 'Additional Details',
    'form.submit': 'Send Request',
    'form.success': 'Request sent successfully!',
    
    // CTA
    'cta.title': 'Ready to Move?',
    'cta.subtitle': 'Contact us today for a free consultation',
    'cta.button': 'Get Started',
    
    // Footer
    'footer.services': 'Services',
    'footer.contacts': 'Contacts',
    'footer.rights': 'All rights reserved',
  },
  ru: {
    // Header
    'nav.services': 'Услуги',
    'nav.about': 'О нас',
    'nav.contacts': 'Контакты',
    
    // Hero
    'hero.title': 'Надежные транспортные услуги в Польше',
    'hero.subtitle': 'Профессиональные грузчики, водители и комплексные решения для переезда',
    'hero.cta': 'Получить расчет',
    
    // Features
    'features.title': 'Наши услуги',
    'features.driver.title': 'Автомобиль с водителем',
    'features.driver.desc': 'Профессиональные водители для ваших нужд',
    'features.movers.title': 'Услуги грузчиков',
    'features.movers.desc': 'Опытные грузчики для работы с вашими вещами',
    'features.complex.title': 'Комплексные переезды',
    'features.complex.desc': 'Полный спектр услуг для переезда',
    'features.intercity.title': 'Междугородние перевозки',
    'features.intercity.desc': 'Услуги перевозки на дальние расстояния',
    'features.office.title': 'Офисные переезды',
    'features.office.desc': 'Профессиональные услуги по переезду офиса',
    
    // About
    'about.title': 'О компании Service8',
    'about.text': 'Мы — профессиональная транспортная и переездная компания, работающая в Польше. Наша команда предоставляет высококачественные услуги для частных лиц и бизнеса.',
    
    // Price Calculator
    'calc.title': 'Калькулятор стоимости',
    'calc.service': 'Выберите услугу',
    'calc.distance': 'Расстояние (км)',
    'calc.movers': 'Количество грузчиков',
    'calc.calculate': 'Рассчитать',
    'calc.result': 'Примерная стоимость',
    
    // Request Form
    'form.title': 'Оставить заявку',
    'form.name': 'Ваше имя',
    'form.phone': 'Номер телефона',
    'form.email': 'Email',
    'form.service': 'Выберите услугу',
    'form.details': 'Дополнительные детали',
    'form.submit': 'Отправить заявку',
    'form.success': 'Заявка успешно отправлена!',
    
    // CTA
    'cta.title': 'Готовы к переезду?',
    'cta.subtitle': 'Свяжитесь с нами сегодня для бесплатной консультации',
    'cta.button': 'Начать',
    
    // Footer
    'footer.services': 'Услуги',
    'footer.contacts': 'Контакты',
    'footer.rights': 'Все права защищены',
  },
  ua: {
    // Header
    'nav.services': 'Послуги',
    'nav.about': 'Про нас',
    'nav.contacts': 'Контакти',
    
    // Hero
    'hero.title': 'Надійні транспортні послуги в Польщі',
    'hero.subtitle': 'Професійні вантажники, водії та комплексні рішення для переїзду',
    'hero.cta': 'Отримати розрахунок',
    
    // Features
    'features.title': 'Наші послуги',
    'features.driver.title': 'Автомобіль з водієм',
    'features.driver.desc': 'Професійні водії для ваших потреб',
    'features.movers.title': 'Послуги вантажників',
    'features.movers.desc': 'Досвідчені вантажники для роботи з вашими речами',
    'features.complex.title': 'Комплексні переїзди',
    'features.complex.desc': 'Повний спектр послуг для переїзду',
    'features.intercity.title': 'Міжміські перевезення',
    'features.intercity.desc': 'Послуги перевезення на далекі відстані',
    'features.office.title': 'Офісні переїзди',
    'features.office.desc': 'Професійні послуги з переїзду офісу',
    
    // About
    'about.title': 'Про компанію Service8',
    'about.text': 'Ми — професійна транспортна та переїзна компанія, що працює в Польщі. Наша команда надає високоякісні послуги для приватних осіб та бізнесу.',
    
    // Price Calculator
    'calc.title': 'Калькулятор вартості',
    'calc.service': 'Оберіть послугу',
    'calc.distance': 'Відстань (км)',
    'calc.movers': 'Кількість вантажників',
    'calc.calculate': 'Розрахувати',
    'calc.result': 'Приблизна вартість',
    
    // Request Form
    'form.title': 'Залишити заявку',
    'form.name': "Ваше ім'я",
    'form.phone': 'Номер телефону',
    'form.email': 'Email',
    'form.service': 'Оберіть послугу',
    'form.details': 'Додаткові деталі',
    'form.submit': 'Надіслати заявку',
    'form.success': 'Заявку успішно надіслано!',
    
    // CTA  
    'cta.title': 'Готові до переїзду?',
    'cta.subtitle': "Зв'яжіться з нами сьогодні для безкоштовної консультації",
    'cta.button': 'Почати',
    
    // Footer
    'footer.services': 'Послуги',
    'footer.contacts': 'Контакти',
    'footer.rights': 'Всі права захищені',
  },
  pl: {
    // Header
    'nav.services': 'Usługi',
    'nav.about': 'O nas',
    'nav.contacts': 'Kontakty',
    
    // Hero
    'hero.title': 'Niezawodne usługi transportowe w Polsce',
    'hero.subtitle': 'Profesjonalni przeprowadzkarze, kierowcy i kompleksowe rozwiązania przeprowadzkowe',
    'hero.cta': 'Uzyskaj wycenę',
    
    // Features
    'features.title': 'Nasze usługi',
    'features.driver.title': 'Samochód z kierowcą',
    'features.driver.desc': 'Profesjonalni kierowcy dla Twoich potrzeb',
    'features.movers.title': 'Usługi przeprowadzkowe',
    'features.movers.desc': 'Doświadczeni przeprowadzkarze do obsługi Twoich rzeczy',
    'features.complex.title': 'Kompleksowe przeprowadzki',
    'features.complex.desc': 'Pełny zakres usług przeprowadzkowych',
    'features.intercity.title': 'Transport międzymiastowy',
    'features.intercity.desc': 'Usługi przeprowadzkowe na duże odległości',
    'features.office.title': 'Przeprowadzki biurowe',
    'features.office.desc': 'Profesjonalne usługi przeprowadzki biura',
    
    // About
    'about.title': 'O firmie Service8',
    'about.text': 'Jesteśmy profesjonalną firmą transportową i przeprowadzkową działającą w Polsce. Nasz zespół świadczy wysokiej jakości usługi dla osób prywatnych i firm.',
    
    // Price Calculator
    'calc.title': 'Kalkulator cen',
    'calc.service': 'Wybierz usługę',
    'calc.distance': 'Odległość (km)',
    'calc.movers': 'Liczba przeprowadzkarzy',
    'calc.calculate': 'Oblicz',
    'calc.result': 'Szacowany koszt',
    
    // Request Form
    'form.title': 'Złóż zapytanie',
    'form.name': 'Twoje imię',
    'form.phone': 'Numer telefonu',
    'form.email': 'Email',
    'form.service': 'Wybierz usługę',
    'form.details': 'Dodatkowe szczegóły',
    'form.submit': 'Wyślij zapytanie',
    'form.success': 'Zapytanie wysłane pomyślnie!',
    
    // CTA
    'cta.title': 'Gotowy do przeprowadzki?',
    'cta.subtitle': 'Skontaktuj się z nami już dziś, aby uzyskać bezpłatną konsultację',
    'cta.button': 'Zacznij',
    
    // Footer
    'footer.services': 'Usługi',
    'footer.contacts': 'Kontakty',
    'footer.rights': 'Wszelkie prawa zastrzeżone',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
