import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru' | 'uk' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.calculator': 'Calculator',
    
    // Hero
    'hero.title': 'Transport and Moving Services across Poland',
    'hero.description': 'Fast and reliable delivery of cargo of any size. Professional team, apartment and office relocations, intercity transport',
    'hero.cta.call': 'Call us',
    'hero.cta.calculate': 'Calculate cost',
    'hero.stat.availability': '24/7',
    'hero.stat.availability.desc': 'We work around the clock',
    
    // Features
    'features.title': 'Our Services',
    'features.subtitle': 'Full range of transport and moving services',
    'features.minTime': 'min.',
    'features.perWorker': 'per worker',
    'features.workers': 'workers',
    'features.truck.title': 'Vehicle and driver',
    'features.truck.detail1': 'Driver does not participate in loading',
    'features.truck.detail2': 'City delivery from 15 km +40 PLN',
    'features.movers.title': 'Loading crew',
    'features.movers.detail1': 'Professional loading, unloading and moving',
    'features.movers.detail2': 'Rates outside city limits negotiable',
    'features.moving.title': 'Complete moving service',
    'features.moving.detail1': 'Comprehensive service: vehicle + crew',
    'features.moving.detail2': '2 workers included',
    'features.intercity.title': 'Intercity transport',
    'features.intercity.price': '4-5 PLN/km',
    'features.intercity.detail1': '30-100 km: 4 PLN/km + 100 PLN/h',
    'features.intercity.detail2': 'Over 100 km: 5 PLN/km',
    'features.office.title': 'Office relocations',
    'features.office.detail1': 'Office relocation with equipment and furniture',
    'features.office.badge': 'For Business',
    'features.office.detail2': 'Experienced team for corporate moves',
    'features.office.detail3': 'Minimal downtime guarantee',
    
    // About
    'about.title': 'Why choose us?',
    'about.description': 'We are a reliable transport company with years of experience. We ensure safe transportation of cargo of any complexity throughout Poland. Our clients come back to us again and again.',
    'about.benefit.1': 'Fast vehicle dispatch',
    'about.benefit.2': 'Modern fleet of vehicles',
    'about.benefit.3': 'Help with packing belongings',
    'about.benefit.4': 'We work on weekends and holidays',
    'about.benefit.5': 'Individual approach to each client',
    
    // Calculator
    'calc.title': 'Calculate the cost of the service',
    'calc.subtitle': 'Fill out the form and get an instant cost estimate',
    'calc.service': 'Service type',
    'calc.service.truck': 'Vehicle with driver',
    'calc.service.movers': 'Loading crew only',
    'calc.service.moving': 'Complete moving',
    'calc.service.intercity': 'Intercity transport',
    'calc.service.office': 'Office relocation',
    'calc.distance': 'Distance (km)',
    'calc.movers': 'Number of movers',
    'calc.hours': 'Estimated hours',
    'calc.extras': 'Additional services',
    'calc.extras.packing': 'Packing materials',
    'calc.extras.furniture': 'Furniture assembly/disassembly',
    'calc.extras.elevator': 'Stairs carry (no elevator)',
    'calc.extras.express': 'Express dispatch (15 min)',
    'calc.result': 'Estimated cost',
    'calc.from': 'from',
    'calc.button': 'Request this service',
    'calc.note': '* Final cost may vary depending on specific conditions',
    
    // CTA
    'cta.title': 'Need help with moving or delivery?',
    'cta.subtitle': 'Call us now and get a free consultation and cost estimate',
    'cta.phone': 'Call us',
    'cta.request': 'Leave a request',
    'cta.availability': 'We work 24/7 • Departure within 30 minutes',
    
    // Request Form
    'form.title': 'Leave a request',
    'form.subtitle': 'Fill out the form and we will contact you shortly',
    'form.name': 'Your name',
    'form.name.placeholder': 'John Doe',
    'form.phone': 'Phone number',
    'form.phone.placeholder': '+48 123 456 789',
    'form.service': 'Select service',
    'form.comment': 'Comment (optional)',
    'form.comment.placeholder': 'Tell us about your needs...',
    'form.submit': 'Send request',
    'form.or': 'or contact us via',
    
    // Footer
    'footer.about.title': 'About company',
    'footer.about.text': 'Professional transport and moving services throughout Poland.',
    'footer.services.title': 'Services',
    'footer.services.1': 'Cargo transport',
    'footer.services.2': 'Loading services',
    'footer.services.3': 'Apartment relocations',
    'footer.services.4': 'Office relocations',
    'footer.services.5': 'Intercity transport',
    'footer.info.title': 'Information',
    'footer.info.1': 'Price list',
    'footer.info.2': 'Our fleet',
    'footer.info.3': 'Reviews',
    'footer.info.4': 'FAQ',
    'footer.contact.title': 'Contact',
    'footer.contact.phone': 'Phone: +48 500 554 818',
    'footer.contact.email': 'Email: service8cargo@gmail.com',
    'footer.contact.hours': 'Working hours: 24/7',
    'footer.contact.address': 'Warsaw, Poland',
    'footer.copyright': 'Service8. All rights reserved',
    
    // Phone Modal
    'phoneModal.title': 'Call us',
    'phoneModal.description': 'We are ready to help you 24/7',
    'phoneModal.copy': 'Copy number',
    'phoneModal.copied': 'Copied!',
    'phoneModal.call': 'Call now',
  },
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'nav.calculator': 'Калькулятор',
    
    // Hero
    'hero.title': 'Транспортные и грузоперевозочные услуги по Польше',
    'hero.description': 'Быстрая и надежная доставка грузов любого размера. Профессиональная команда, квартирные и офисные переезды, междугородние перевозки',
    'hero.cta.call': 'Позвонить',
    'hero.cta.calculate': 'Рассчитать стоимость',
    'hero.stat.availability': '24/7',
    'hero.stat.availability.desc': 'Работаем круглосуточно',
    
    // Features
    'features.title': 'Наши услуги',
    'features.subtitle': 'Полный спектр транспортных и грузоперевозочных услуг',
    'features.minTime': 'мин.',
    'features.perWorker': 'за грузчика',
    'features.workers': 'грузчиков',
    'features.truck.title': 'Автомобиль и водитель',
    'features.truck.detail1': 'Водитель не участвует в погрузке',
    'features.truck.detail2': 'Перевозка по городу от 15 км +40 PLN',
    'features.movers.title': 'Услуги грузчиков',
    'features.movers.detail1': 'Профессиональная погрузка, разгрузка и перенос вещей',
    'features.movers.detail2': 'По городу - цена по договоренности',
    'features.moving.title': 'Переезд под ключ',
    'features.moving.detail1': 'Комплексная услуга: авто + грузчики',
    'features.moving.detail2': 'Включены 2 грузчика',
    'features.intercity.title': 'Междугородние перевозки',
    'features.intercity.price': '4-5 PLN/км',
    'features.intercity.detail1': '30-100 км: 4 PLN/км + 100 PLN/час',
    'features.intercity.detail2': 'Свыше 100 км: 5 PLN/км',
    'features.office.title': 'Офисные переезды',
    'features.office.detail1': 'Переезд офиса с оборудованием и мебелью',
    'features.office.badge': 'Для бизнеса',
    'features.office.detail2': 'Опытная команда для корпоративных переездов',
    'features.office.detail3': 'Гарантия минимального простоя',
    
    // About
    'about.title': 'Почему выбирают нас?',
    'about.description': 'Мы — надежная транспортная компания с многолетним опытом работы. Обеспечиваем безопасную перевозку грузов любой сложности по всей Польше. Наши клиенты возвращаются к нам снова и снова.',
    'about.benefit.1': 'Быстрая подача транспорта',
    'about.benefit.2': 'Современный автопарк',
    'about.benefit.3': 'Помощь в упаковке вещей',
    'about.benefit.4': 'Работаем в выходные и праздники',
    'about.benefit.5': 'Индивидуальный подход к каждому клиенту',
    
    // Calculator
    'calc.title': 'Рассчитайте стоимость услуги',
    'calc.subtitle': 'Заполните форму и получите мгновенный расчет стоимости',
    'calc.service': 'Тип услуги',
    'calc.service.truck': 'Автомобиль с водителем',
    'calc.service.movers': 'Только грузчики',
    'calc.service.moving': 'Полный переезд',
    'calc.service.intercity': 'Междугородняя перевозка',
    'calc.service.office': 'Офисный переезд',
    'calc.distance': 'Расстояние (км)',
    'calc.movers': 'Количество грузчиков',
    'calc.hours': 'Ориентировочное время (часов)',
    'calc.extras': 'Дополнительные услуги',
    'calc.extras.packing': 'Упаковочные материалы',
    'calc.extras.furniture': 'Сборка/разборка мебели',
    'calc.extras.elevator': 'Подъем без лифта',
    'calc.extras.express': 'Экспресс подача (15 мин)',
    'calc.result': 'Ориентировочная стоимость',
    'calc.from': 'от',
    'calc.button': 'Заказать эту услугу',
    'calc.note': '* Итоговая стоимость может варьироваться в зависимости от конкретных условий',
    
    // CTA
    'cta.title': 'Нужна помощь с переездом или доставкой?',
    'cta.subtitle': 'Позвоните нам прямо сейчас и получите бесплатную консультацию и расчет стоимости',
    'cta.phone': 'Позвонить',
    'cta.request': 'Оставить заявку',
    'cta.availability': 'Работаем 24/7 • Выезд в течение 30 минут',
    
    // Request Form
    'form.title': 'Оставить заявку',
    'form.subtitle': 'Заполните форму и мы свяжемся с вами в ближайшее время',
    'form.name': 'Ваше имя',
    'form.name.placeholder': 'Иван Иванов',
    'form.phone': 'Номер телефона',
    'form.phone.placeholder': '+48 123 456 789',
    'form.service': 'Выберите услугу',
    'form.comment': 'Комментарий (опционально)',
    'form.comment.placeholder': 'Расскажите о своих потребностях...',
    'form.submit': 'Отправить заявку',
    'form.or': 'или свяжитесь с нами через',
    
    // Footer
    'footer.about.title': 'О компании',
    'footer.about.text': 'Профессиональные транспортные и грузоперевозочные услуги по всей Польше.',
    'footer.services.title': 'Услуги',
    'footer.services.1': 'Грузоперевозки',
    'footer.services.2': 'Услуги грузчиков',
    'footer.services.3': 'Квартирные переезды',
    'footer.services.4': 'Офисные переезды',
    'footer.services.5': 'Междугородние перевозки',
    'footer.info.title': 'Информация',
    'footer.info.1': 'Прайс-лист',
    'footer.info.2': 'Наш автопарк',
    'footer.info.3': 'Отзывы',
    'footer.info.4': 'Вопросы и ответы',
    'footer.contact.title': 'Контакты',
    'footer.contact.phone': 'Телефон: +48 500 554 818',
    'footer.contact.email': 'Email: service8cargo@gmail.com',
    'footer.contact.hours': 'Часы работы: 24/7',
    'footer.contact.address': 'Варшава, Польша',
    'footer.copyright': 'Service8. Все права защищены',
    
    // Phone Modal
    'phoneModal.title': 'Позвоните нам',
    'phoneModal.description': 'Мы готовы помочь вам 24/7',
    'phoneModal.copy': 'Скопировать номер',
    'phoneModal.copied': 'Скопировано!',
    'phoneModal.call': 'Позвонить сейчас',
  },
  uk: {
    // Navigation
    'nav.services': 'Послуги',
    'nav.about': 'Про нас',
    'nav.contact': 'Контакти',
    'nav.calculator': 'Калькулятор',
    
    // Hero
    'hero.title': 'Транспортні та вантажні послуги по Польщі',
    'hero.description': 'Швидка та надійна доставка вантажів будь-якого розміру. Професійна команда, квартирні та офісні переїзди, міжміські перевезення',
    'hero.cta.call': 'Зателефонувати',
    'hero.cta.calculate': 'Розрахувати вартість',
    'hero.stat.availability': '24/7',
    'hero.stat.availability.desc': 'Працюємо цілодобово',
    
    // Features
    'features.title': 'Наші послуги',
    'features.subtitle': 'Повний спектр транспортних та вантажних послуг',
    'features.minTime': 'мін.',
    'features.perWorker': 'за вантажника',
    'features.workers': 'вантажників',
    'features.truck.title': 'Автомобіль і водій',
    'features.truck.detail1': 'Водій не бере участі в завантаженні',
    'features.truck.detail2': 'Перевезення по місту від 15 км +40 PLN',
    'features.movers.title': 'Послуги вантажників',
    'features.movers.detail1': 'Професійне завантаження, розвантаження та перенесення речей',
    'features.movers.detail2': 'По місту - ціна за домовленістю',
    'features.moving.title': 'Переїзд під ключ',
    'features.moving.detail1': 'Комплексна послуга: авто + вантажники',
    'features.moving.detail2': 'Включено 2 вантажники',
    'features.intercity.title': 'Міжміські перевезення',
    'features.intercity.price': '4-5 PLN/км',
    'features.intercity.detail1': '30-100 км: 4 PLN/км + 100 PLN/год',
    'features.intercity.detail2': 'Понад 100 км: 5 PLN/км',
    'features.office.title': 'Офісні переїзди',
    'features.office.detail1': 'Переїзд офісу з обладнанням та меблями',
    'features.office.badge': 'Для бізнесу',
    'features.office.detail2': 'Досвідна команда для корпоративних переїздів',
    'features.office.detail3': 'Гарантія мінімального простою',
    
    // About
    'about.title': 'Чому обирають нас?',
    'about.description': 'Ми — нальійна транспортна компанія з багаторічним досвідом роботи. Забезпечуємо безпечне перевезення вантажів будь-якої складності по всій Польщі. Наші клієнти повертаються до нас знову і знову.',
    'about.benefit.1': 'Швидка подача транспорту',
    'about.benefit.2': 'Сучасний автопарк',
    'about.benefit.3': 'Допомога в пакуванні речей',
    'about.benefit.4': 'Працюємо у вихідні та свята',
    'about.benefit.5': 'Індивідуальний підхід до кожного клієнта',
    
    // Calculator
    'calc.title': 'Розрахуйте вартість послуги',
    'calc.subtitle': 'Заповніть форму та отримайте миттєвий розрахунок вартості',
    'calc.service': 'Тип послуги',
    'calc.service.truck': 'Автомобіль з водієм',
    'calc.service.movers': 'Тільки вантажники',
    'calc.service.moving': 'Повний переїзд',
    'calc.service.intercity': 'Міжміське перевезення',
    'calc.service.office': 'Офісний переїзд',
    'calc.distance': 'Відстань (км)',
    'calc.movers': 'Кількість вантажників',
    'calc.hours': 'Орієнтовний час (годин)',
    'calc.extras': 'Додаткові послуги',
    'calc.extras.packing': 'Пакувальні матеріали',
    'calc.extras.furniture': 'Збирання/розбирання меблів',
    'calc.extras.elevator': 'Підйом без ліфта',
    'calc.extras.express': 'Експресна подача (15 хв)',
    'calc.result': 'Орієнтовна вартість',
    'calc.from': 'від',
    'calc.button': 'Замовити цю послугу',
    'calc.note': '* Підсумкова вартість може змінюватися залежно від конкретних умов',
    
    // CTA
    'cta.title': 'Потрібна допомога з переїздом або доставкою?',
    'cta.subtitle': 'Зателефонуйте нам прямо зараз та отримайте безкоштовну консультацію та розрахунок вартості',
    'cta.phone': 'Зателефонувати',
    'cta.request': 'Залишити заявку',
    'cta.availability': 'Працюємо 24/7 • Виїзд протягом 30 хвилин',
    
    // Request Form
    'form.title': 'Залишити заявку',
    'form.subtitle': 'Заповніть форму і ми зв\'яжемося з вами найближчим часом',
    'form.name': 'Ваше ім\'я',
    'form.name.placeholder': 'Іван Іванов',
    'form.phone': 'Номер телефону',
    'form.phone.placeholder': '+48 123 456 789',
    'form.service': 'Виберіть послугу',
    'form.comment': 'Коментар (опціонально)',
    'form.comment.placeholder': 'Розкажіть про свої потребності...',
    'form.submit': 'Надіслати заявку',
    'form.or': 'або зв\'яжіться з нами через',
    
    // Footer
    'footer.about.title': 'Про компанію',
    'footer.about.text': 'Професійні транспортні та вантажні послуги по всій Польщі.',
    'footer.services.title': 'Послуги',
    'footer.services.1': 'Вантажоперевезення',
    'footer.services.2': 'Послуги вантажників',
    'footer.services.3': 'Квартирні переїзди',
    'footer.services.4': 'Офісні переїзди',
    'footer.services.5': 'Міжміські перевезення',
    'footer.info.title': 'Інформація',
    'footer.info.1': 'Прайс-лист',
    'footer.info.2': 'Наш автопарк',
    'footer.info.3': 'Відгуки',
    'footer.info.4': 'Питання та відповіді',
    'footer.contact.title': 'Контакти',
    'footer.contact.phone': 'Телефон: +48 500 554 818',
    'footer.contact.email': 'Email: service8cargo@gmail.com',
    'footer.contact.hours': 'Години роботи: 24/7',
    'footer.contact.address': 'Варшава, Польща',
    'footer.copyright': 'Service8. Всі права захищені',
    
    // Phone Modal
    'phoneModal.title': 'Зателефонуйте нам',
    'phoneModal.description': 'Ми готові допомогти вам 24/7',
    'phoneModal.copy': 'Скопіювати номер',
    'phoneModal.copied': 'Скопійовано!',
    'phoneModal.call': 'Зателефонувати зараз',
  },
  pl: {
    // Navigation
    'nav.services': 'Usługi',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.calculator': 'Kalkulator',
    
    // Hero
    'hero.title': 'Usługi transportowe i przeprowadzkowe w całej Polsce',
    'hero.description': 'Szybka i niezawodna dostawa ładunków dowolnej wielkości. Profesjonalny zespół, przeprowadzki mieszkaniowe i biurowe, transport międzymiastowy',
    'hero.cta.call': 'Zadzwoń do nas',
    'hero.cta.calculate': 'Oblicz koszt',
    'hero.stat.availability': '24/7',
    'hero.stat.availability.desc': 'Pracujemy całą dobę',
    
    // Features
    'features.title': 'Nasze usługi',
    'features.subtitle': 'Pełna gama usług transportowych i przeprowadzkowych',
    'features.minTime': 'min.',
    'features.perWorker': 'za pracownika',
    'features.workers': 'pracowników',
    'features.truck.title': 'Pojazd z kierowcą',
    'features.truck.detail1': 'Kierowca nie uczestniczy w załadunku',
    'features.truck.detail2': 'Transport po mieście od 15 km +40 PLN',
    'features.movers.title': 'Ekipa załadunkowa',
    'features.movers.detail1': 'Profesjonalny załadunek, rozładunek i przenoszenie rzeczy',
    'features.movers.detail2': 'Poza miastem - cena do uzgodnienia',
    'features.moving.title': 'Przeprowadzka pod klucz',
    'features.moving.detail1': 'Kompleksowa usługa: auto + ekipa',
    'features.moving.detail2': 'Wliczone 2 pracownicy',
    'features.intercity.title': 'Transport międzymiastowy',
    'features.intercity.price': '4-5 PLN/km',
    'features.intercity.detail1': '30-100 km: 4 PLN/km + 100 PLN/godz',
    'features.intercity.detail2': 'Powyżej 100 km: 5 PLN/km',
    'features.office.title': 'Przeprowadzki biurowe',
    'features.office.detail1': 'Przeprowadzka biura ze sprzętem i meblami',
    'features.office.badge': 'Dla biznesu',
    'features.office.detail2': 'Doświadczona drużyna dla przeprowadzki firmowej',
    'features.office.detail3': 'Gwarancja minimalnego przestoju',
    
    // About
    'about.title': 'Dlaczego my?',
    'about.description': 'Jesteśmy niezawodną firmą transportową z wieloletnim doświadczeniem. Zapewniamy bezpieczny transport ładunków o dowolnej złożoności w całej Polsce. Nasi klienci wracają do nas raz za razem.',
    'about.benefit.1': 'Szybka dostawa pojazdu',
    'about.benefit.2': 'Nowoczesna flota pojazdów',
    'about.benefit.3': 'Pomoc w pakowaniu rzeczy',
    'about.benefit.4': 'Pracujemy w weekendy i święta',
    'about.benefit.5': 'Indywidualne podejście do każdego klienta',
    
    // Calculator
    'calc.title': 'Oblicz koszt usługi',
    'calc.subtitle': 'Wypełnij formularz i uzyskaj natychmiastowy kosztorys',
    'calc.service': 'Typ usługi',
    'calc.service.truck': 'Pojazd z kierowcą',
    'calc.service.movers': 'Tylko ekipa załadunkowa',
    'calc.service.moving': 'Pełna przeprowadzka',
    'calc.service.intercity': 'Transport międzymiastowy',
    'calc.service.office': 'Przeprowadzka biura',
    'calc.distance': 'Odległość (km)',
    'calc.movers': 'Liczba pracowników',
    'calc.hours': 'Szacowany czas (godziny)',
    'calc.extras': 'Dodatkowe usługi',
    'calc.extras.packing': 'Materiały pakowe',
    'calc.extras.furniture': 'Montaż/demontaż mebli',
    'calc.extras.elevator': 'Wnoszenie po schodach (brak windy)',
    'calc.extras.express': 'Ekspresowa dostawa (15 min)',
    'calc.result': 'Szacowany koszt',
    'calc.from': 'od',
    'calc.button': 'Zamów tę usługę',
    'calc.note': '* Ostateczny koszt może się różnić w zależności od konkretnych warunków',
    
    // CTA
    'cta.title': 'Potrzebujesz pomocy przy przeprowadzce lub dostawie?',
    'cta.subtitle': 'Zadzwoń do nas teraz i uzyskaj bezpłatną konsultację oraz kosztorys',
    'cta.phone': 'Zadzwoń do nas',
    'cta.request': 'Zostaw zgłoszenie',
    'cta.availability': 'Pracujemy 24/7 • Wyjazd w ciągu 30 minut',
    
    // Request Form
    'form.title': 'Zostaw zgłoszenie',
    'form.subtitle': 'Wypełnij formularz i skontaktujemy się z Tobą wkrótce',
    'form.name': 'Twoje imię i nazwisko',
    'form.name.placeholder': 'Jan Kowalski',
    'form.phone': 'Numer telefonu',
    'form.phone.placeholder': '+48 123 456 789',
    'form.service': 'Wybierz usługę',
    'form.comment': 'Komentarz (opcjonalnie)',
    'form.comment.placeholder': 'Opisz swoje potrzeby...',
    'form.submit': 'Wyślij zgłoszenie',
    'form.or': 'lub skontaktuj się z nami przez',
    
    // Footer
    'footer.about.title': 'O firmie',
    'footer.about.text': 'Profesjonalne usługi transportowe i przeprowadzkowe w całej Polsce.',
    'footer.services.title': 'Usługi',
    'footer.services.1': 'Transport towarów',
    'footer.services.2': 'Ekipa załadunkowa',
    'footer.services.3': 'Przeprowadzki mieszkaniowe',
    'footer.services.4': 'Przeprowadzki biurowe',
    'footer.services.5': 'Transport międzymiastowy',
    'footer.info.title': 'Informacje',
    'footer.info.1': 'Cennik',
    'footer.info.2': 'Nasza flota',
    'footer.info.3': 'Opinie',
    'footer.info.4': 'Pytania i odpowiedzi',
    'footer.contact.title': 'Kontakt',
    'footer.contact.phone': 'Telefon: +48 500 554 818',
    'footer.contact.email': 'Email: service8cargo@gmail.com',
    'footer.contact.hours': 'Godziny pracy: 24/7',
    'footer.contact.address': 'Warszawa, Polska',
    'footer.copyright': 'Service8. Wszelkie prawa zastrzeżone',
    
    // Phone Modal
    'phoneModal.title': 'Zadzwoń do nas',
    'phoneModal.description': 'Jestemy gotowi pomóc 24/7',
    'phoneModal.copy': 'Skopiuj numer',
    'phoneModal.copied': 'Skopiowano!',
    'phoneModal.call': 'Zadzwoń teraz',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'pl';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

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
