import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Lang = "en" | "es" | "ru" | "uk" | "fr";

const translations = {
  en: {
    navCars: "Cars", navCompanies: "Rental companies", navHow: "How it works", listCompany: "List your company",
    heroEyebrow: "Independent car rentals", heroLine1: "Local cars.", heroLine2: "Real prices.",
    heroNote: "Choose a city and compare independent local rentals as new partners join the platform.",
    location: "Location", pickup: "Pick-up", dropoff: "Drop-off", findCar: "Find a car",
    benefit1: "No hidden counter fees", benefit2: "Local companies only", benefit3: "Final price shown upfront",
    available: "Available now", carsIn: "Cars in", shown: "cars shown", dates: "Jul 18–22",
    filters: { all: "All", economy: "Economy", suv: "SUV", family: "Family" },
    seats: "seats", automatic: "Automatic", rentalCompany: "Rental company", deposit: "Refundable deposit",
    perDay: "/day", total: "total", view: "View", priceNote: "Taxes and mandatory fees are included in every total shown above.",
    demoNotice: "Demo listings while we onboard local partners.", representative: "Representative photo", demo: "Demo listing", request: "Request this car", close: "Close",
    knowWho: "Know who you rent from", localCompanies: "Local rental companies", verifiedDetails: "Identity and business details verified",
    verified: "Demo company", rating: "Rating", completed: "Sample rentals", reply: "Average reply", availableCars: "Sample cars", profile: "View cars",
    simple: "Simple by design", stepsTitle: "Three steps. No counter surprises.",
    step1: "Choose a local company", step1Text: "Compare its real fleet, location, reviews and rental terms.",
    step2: "See the total price", step2Text: "Mandatory taxes and fees are included before you reserve.",
    step3: "Book the actual car", step3Text: "Confirm directly with the company and receive exact pickup details.",
    forBusiness: "For independent rental businesses", businessTitle: "List your company and cars for free.",
    footerLine: "Independent rentals. Transparent prices.", forCompanies: "For companies", contact: "Contact",
    ariaNav: "Main navigation", ariaLanguage: "Language", ariaBenefits: "Booking benefits", ariaFilters: "Filter by vehicle type",
  },
  es: {
    navCars: "Autos", navCompanies: "Empresas de alquiler", navHow: "Cómo funciona", listCompany: "Publica tu empresa",
    heroEyebrow: "Alquileres de autos independientes", heroLine1: "Autos locales.", heroLine2: "Precios reales.",
    heroNote: "Elige una ciudad y compara alquileres locales independientes a medida que se suman nuevos socios.",
    location: "Ubicación", pickup: "Recogida", dropoff: "Devolución", findCar: "Buscar auto",
    benefit1: "Sin cargos ocultos", benefit2: "Solo empresas locales", benefit3: "Precio final por adelantado",
    available: "Disponibles ahora", carsIn: "Autos en", shown: "autos mostrados", dates: "18–22 jul",
    filters: { all: "Todos", economy: "Económico", suv: "SUV", family: "Familiar" },
    seats: "asientos", automatic: "Automático", rentalCompany: "Empresa de alquiler", deposit: "Depósito reembolsable",
    perDay: "/día", total: "total", view: "Ver", priceNote: "Los impuestos y cargos obligatorios están incluidos en todos los totales.",
    demoNotice: "Anuncios de demostración mientras incorporamos socios locales.", representative: "Foto representativa", demo: "Anuncio de demostración", request: "Solicitar este auto", close: "Cerrar",
    knowWho: "Conoce a quien te alquila", localCompanies: "Empresas locales de alquiler", verifiedDetails: "Identidad y datos comerciales verificados",
    verified: "Empresa de demostración", rating: "Calificación", completed: "Alquileres de ejemplo", reply: "Respuesta promedio", availableCars: "Autos de ejemplo", profile: "Ver autos",
    simple: "Simple por diseño", stepsTitle: "Tres pasos. Sin sorpresas en el mostrador.",
    step1: "Elige una empresa local", step1Text: "Compara su flota real, ubicación, opiniones y condiciones.",
    step2: "Consulta el precio total", step2Text: "Los impuestos y cargos obligatorios aparecen antes de reservar.",
    step3: "Reserva el auto real", step3Text: "Confirma directamente y recibe los detalles exactos de recogida.",
    forBusiness: "Para empresas de alquiler independientes", businessTitle: "Publica tu empresa y tus autos gratis.",
    footerLine: "Alquileres independientes. Precios transparentes.", forCompanies: "Para empresas", contact: "Contacto",
    ariaNav: "Navegación principal", ariaLanguage: "Idioma", ariaBenefits: "Ventajas de la reserva", ariaFilters: "Filtrar por tipo de vehículo",
  },
  ru: {
    navCars: "Автомобили", navCompanies: "Прокатные компании", navHow: "Как это работает", listCompany: "Добавить компанию",
    heroEyebrow: "Независимые прокаты автомобилей", heroLine1: "Местные машины.", heroLine2: "Реальные цены.",
    heroNote: "Выберите город и сравнивайте независимые местные прокаты по мере подключения новых партнёров.",
    location: "Место", pickup: "Получение", dropoff: "Возврат", findCar: "Найти машину",
    benefit1: "Без скрытых сборов", benefit2: "Только местные компании", benefit3: "Итоговая цена сразу",
    available: "Доступно сейчас", carsIn: "Автомобили в", shown: "машин показано", dates: "18–22 июля",
    filters: { all: "Все", economy: "Эконом", suv: "SUV", family: "Семейные" },
    seats: "мест", automatic: "Автомат", rentalCompany: "Прокатная компания", deposit: "Возвратный депозит",
    perDay: "/день", total: "итого", view: "Открыть", priceNote: "Налоги и обязательные сборы включены в каждую итоговую цену.",
    demoNotice: "Демо-объявления, пока мы подключаем местных партнёров.", representative: "Иллюстративное фото", demo: "Демо-объявление", request: "Запросить эту машину", close: "Закрыть",
    knowWho: "Знайте, у кого арендуете", localCompanies: "Местные прокатные компании", verifiedDetails: "Личность и данные компании проверены",
    verified: "Демо-компания", rating: "Рейтинг", completed: "Пример аренд", reply: "Средний ответ", availableCars: "Пример машин", profile: "Смотреть машины",
    simple: "Ничего лишнего", stepsTitle: "Три шага. Никаких сюрпризов на стойке.",
    step1: "Выберите местный прокат", step1Text: "Сравните реальные машины, расположение, отзывы и условия аренды.",
    step2: "Увидьте итоговую цену", step2Text: "Обязательные налоги и сборы включены до бронирования.",
    step3: "Забронируйте конкретную машину", step3Text: "Подтвердите аренду напрямую и получите точные инструкции.",
    forBusiness: "Для независимых прокатных компаний", businessTitle: "Разместите компанию и автомобили бесплатно.",
    footerLine: "Независимые прокаты. Прозрачные цены.", forCompanies: "Для компаний", contact: "Контакты",
    ariaNav: "Главное меню", ariaLanguage: "Язык", ariaBenefits: "Преимущества бронирования", ariaFilters: "Фильтр по типу автомобиля",
  },
  uk: {
    navCars: "Автомобілі", navCompanies: "Прокатні компанії", navHow: "Як це працює", listCompany: "Додати компанію",
    heroEyebrow: "Незалежні прокати автомобілів", heroLine1: "Місцеві авто.", heroLine2: "Реальні ціни.",
    heroNote: "Оберіть місто та порівнюйте незалежні місцеві прокати в міру підключення нових партнерів.",
    location: "Місце", pickup: "Отримання", dropoff: "Повернення", findCar: "Знайти авто",
    benefit1: "Без прихованих зборів", benefit2: "Лише місцеві компанії", benefit3: "Кінцева ціна одразу",
    available: "Доступно зараз", carsIn: "Автомобілі в", shown: "авто показано", dates: "18–22 липня",
    filters: { all: "Усі", economy: "Економ", suv: "SUV", family: "Сімейні" },
    seats: "місць", automatic: "Автомат", rentalCompany: "Прокатна компанія", deposit: "Поворотний депозит",
    perDay: "/день", total: "разом", view: "Відкрити", priceNote: "Податки та обов’язкові збори включено в кожну кінцеву ціну.",
    demoNotice: "Демооголошення, поки ми підключаємо місцевих партнерів.", representative: "Ілюстративне фото", demo: "Демооголошення", request: "Запросити це авто", close: "Закрити",
    knowWho: "Знайте, у кого орендуєте", localCompanies: "Місцеві прокатні компанії", verifiedDetails: "Особу та дані компанії перевірено",
    verified: "Демокомпанія", rating: "Рейтинг", completed: "Приклад оренд", reply: "Середня відповідь", availableCars: "Приклад авто", profile: "Дивитися авто",
    simple: "Нічого зайвого", stepsTitle: "Три кроки. Жодних сюрпризів на стійці.",
    step1: "Оберіть місцевий прокат", step1Text: "Порівняйте реальні авто, розташування, відгуки та умови.",
    step2: "Побачте кінцеву ціну", step2Text: "Обов’язкові податки та збори включено до бронювання.",
    step3: "Забронюйте конкретне авто", step3Text: "Підтвердьте оренду напряму й отримайте точні інструкції.",
    forBusiness: "Для незалежних прокатних компаній", businessTitle: "Розмістіть компанію та автомобілі безкоштовно.",
    footerLine: "Незалежні прокати. Прозорі ціни.", forCompanies: "Для компаній", contact: "Контакти",
    ariaNav: "Головне меню", ariaLanguage: "Мова", ariaBenefits: "Переваги бронювання", ariaFilters: "Фільтр за типом автомобіля",
  },
  fr: {
    navCars: "Voitures", navCompanies: "Agences de location", navHow: "Comment ça marche", listCompany: "Ajouter votre agence",
    heroEyebrow: "Locations de voitures indépendantes", heroLine1: "Voitures locales.", heroLine2: "Prix réels.",
    heroNote: "Choisissez une ville et comparez les locations locales indépendantes à mesure que de nouveaux partenaires nous rejoignent.",
    location: "Lieu", pickup: "Prise en charge", dropoff: "Retour", findCar: "Trouver une voiture",
    benefit1: "Aucun frais caché", benefit2: "Agences locales uniquement", benefit3: "Prix final affiché dès le départ",
    available: "Disponibles maintenant", carsIn: "Voitures à", shown: "voitures affichées", dates: "18–22 juil.",
    filters: { all: "Toutes", economy: "Économique", suv: "SUV", family: "Familiale" },
    seats: "places", automatic: "Automatique", rentalCompany: "Agence de location", deposit: "Dépôt remboursable",
    perDay: "/jour", total: "total", view: "Voir", priceNote: "Les taxes et frais obligatoires sont inclus dans chaque total affiché.",
    demoNotice: "Annonces de démonstration pendant l’arrivée de nos partenaires locaux.", representative: "Photo représentative", demo: "Annonce de démonstration", request: "Demander cette voiture", close: "Fermer",
    knowWho: "Sachez auprès de qui vous louez", localCompanies: "Agences de location locales", verifiedDetails: "Identité et informations de l’entreprise vérifiées",
    verified: "Agence de démonstration", rating: "Note", completed: "Exemples de locations", reply: "Réponse moyenne", availableCars: "Exemples de voitures", profile: "Voir les voitures",
    simple: "Simple par conception", stepsTitle: "Trois étapes. Aucune surprise au comptoir.",
    step1: "Choisissez une agence locale", step1Text: "Comparez sa flotte réelle, son emplacement, ses avis et conditions.",
    step2: "Voyez le prix total", step2Text: "Les taxes et frais obligatoires sont inclus avant la réservation.",
    step3: "Réservez la voiture réelle", step3Text: "Confirmez directement et recevez les détails précis de prise en charge.",
    forBusiness: "Pour les agences indépendantes", businessTitle: "Publiez votre agence et vos voitures gratuitement.",
    footerLine: "Locations indépendantes. Prix transparents.", forCompanies: "Pour les agences", contact: "Contact",
    ariaNav: "Navigation principale", ariaLanguage: "Langue", ariaBenefits: "Avantages de la réservation", ariaFilters: "Filtrer par type de véhicule",
  },
} as const;


const managementCopy: Record<Lang, {
  navOwners: string; searchTitle: string; searchText: string; ownerEyebrow: string; ownerTitle: string;
  ownerText: string; areaLabel: string; areaText: string; service1: string; service2: string; service3: string; ownerCta: string;
}> = {
  en: { navOwners: "For car owners", searchTitle: "Local cars are coming soon.", searchText: "We are onboarding independent cars and rental partners in this location.", ownerEyebrow: "Car management in Southern California", ownerTitle: "Have a car? Let us manage it.", ownerText: "We accept vehicles throughout Los Angeles and Orange County. We handle the listing, customer communication and day-to-day rental coordination.", areaLabel: "Service area", areaText: "Los Angeles · Orange County", service1: "Listing and customer inquiries", service2: "Booking coordination", service3: "Transparent owner communication", ownerCta: "Offer your car" },
  es: { navOwners: "Para propietarios", searchTitle: "Próximamente: autos locales.", searchText: "Estamos incorporando autos y socios de alquiler independientes en esta ubicación.", ownerEyebrow: "Gestión de autos en el sur de California", ownerTitle: "¿Tienes un auto? Nosotros lo gestionamos.", ownerText: "Aceptamos vehículos en Los Ángeles y Orange County. Gestionamos la publicación, la comunicación con clientes y la coordinación diaria del alquiler.", areaLabel: "Área de servicio", areaText: "Los Ángeles · Orange County", service1: "Publicación y consultas", service2: "Coordinación de reservas", service3: "Comunicación transparente", ownerCta: "Ofrecer mi auto" },
  ru: { navOwners: "Владельцам авто", searchTitle: "Местные автомобили скоро появятся.", searchText: "Мы подключаем частные автомобили и независимые прокаты в этом городе.", ownerEyebrow: "Управление автомобилями в Южной Калифорнии", ownerTitle: "Есть автомобиль? Передайте его нам в управление.", ownerText: "Мы принимаем автомобили по всему Лос-Анджелесу и Orange County. Берём на себя размещение, общение с клиентами и ежедневную координацию аренды.", areaLabel: "Зона работы", areaText: "Лос-Анджелес · Orange County", service1: "Размещение и обращения клиентов", service2: "Координация бронирований", service3: "Прозрачная связь с владельцем", ownerCta: "Предложить автомобиль" },
  uk: { navOwners: "Власникам авто", searchTitle: "Місцеві автомобілі скоро з’являться.", searchText: "Ми підключаємо приватні авто та незалежні прокати в цьому місті.", ownerEyebrow: "Управління автомобілями в Південній Каліфорнії", ownerTitle: "Є автомобіль? Передайте його нам в управління.", ownerText: "Ми приймаємо автомобілі по всьому Лос-Анджелесу й Orange County. Беремо на себе розміщення, спілкування з клієнтами та координацію оренди.", areaLabel: "Зона роботи", areaText: "Лос-Анджелес · Orange County", service1: "Розміщення та звернення клієнтів", service2: "Координація бронювань", service3: "Прозорий зв’язок із власником", ownerCta: "Запропонувати автомобіль" },
  fr: { navOwners: "Pour les propriétaires", searchTitle: "Les voitures locales arrivent bientôt.", searchText: "Nous intégrons des voitures et partenaires de location indépendants dans cette ville.", ownerEyebrow: "Gestion automobile en Californie du Sud", ownerTitle: "Vous avez une voiture ? Confiez-nous sa gestion.", ownerText: "Nous acceptons des véhicules dans tout Los Angeles et Orange County. Nous gérons l’annonce, les échanges clients et la coordination quotidienne des locations.", areaLabel: "Zone desservie", areaText: "Los Angeles · Orange County", service1: "Annonce et demandes clients", service2: "Coordination des réservations", service3: "Communication transparente", ownerCta: "Proposer ma voiture" },
};

const locations = ["Los Angeles, CA", "Orange County, CA", "Cancún, Mexico", "Playa del Carmen, Mexico", "Tulum, Mexico"];

const languageNames: Record<Lang, string> = { en: "EN", es: "ES", ru: "RU", uk: "UA", fr: "FR" };

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [location, setLocation] = useState(locations[0]);
  const [searchedLocation, setSearchedLocation] = useState(locations[0]);
  const t = translations[lang];
  const m = managementCopy[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("car-bookings-language") as Lang | null;
    if (saved && saved in translations) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("car-bookings-language", lang);
  }, [lang]);



  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchedLocation(location);
    document.querySelector("#cars")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Car Bookings">CAR BOOKINGS<span>.</span></a>
        <nav aria-label={t.ariaNav}>
          <a href="#cars">{t.navCars}</a><a href="#owners">{m.navOwners}</a><a href="#how">{t.navHow}</a>
        </nav>
        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{t.ariaLanguage}</span>
            <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} aria-label={t.ariaLanguage}>
              {(Object.keys(languageNames) as Lang[]).map((code) => <option key={code} value={code}>{languageNames[code]}</option>)}
            </select>
          </label>
          <a className="company-link" href="#owners">{m.ownerCta}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroLine1}<br />{t.heroLine2}</h1>
          <p className="hero-note">{t.heroNote}</p>
        </div>
        <form className="search-panel" onSubmit={submitSearch}>
          <label><span>{t.location}</span><select name="location" value={location} onChange={(event) => setLocation(event.target.value)} aria-label={t.location}>{locations.map((place) => <option key={place} value={place}>{place}</option>)}</select></label>
          <label><span>{t.pickup}</span><input name="pickup" type="date" defaultValue="2026-07-18" aria-label={t.pickup} /></label>
          <label><span>{t.dropoff}</span><input name="dropoff" type="date" defaultValue="2026-07-22" aria-label={t.dropoff} /></label>
          <button type="submit">{t.findCar}</button>
        </form>
        <div className="proof-row" aria-label={t.ariaBenefits}><span>{t.benefit1}</span><span>{t.benefit2}</span><span>{t.benefit3}</span></div>
      </section>

      <section className="listings section" id="cars">
        <div className="section-heading"><div><p className="eyebrow">{t.available}</p><h2>{t.carsIn} {searchedLocation}</h2></div><p>{t.dates}</p></div>
        <div className="empty-state"><span>CAR BOOKINGS</span><h3>{m.searchTitle}</h3><p>{m.searchText}</p><a href="#owners">{m.navOwners}<b>→</b></a></div>
      </section>

      <section className="owners section" id="owners">
        <div className="owner-intro"><p className="eyebrow">{m.ownerEyebrow}</p><h2>{m.ownerTitle}</h2><p>{m.ownerText}</p></div>
        <div className="owner-panel"><div><span>{m.areaLabel}</span><strong>{m.areaText}</strong></div><ul><li>{m.service1}</li><li>{m.service2}</li><li>{m.service3}</li></ul><a href="mailto:partners@car-bookings.com?subject=Car%20management%20in%20Los%20Angeles%20or%20Orange%20County">{m.ownerCta}<b>→</b></a></div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading"><div><p className="eyebrow">{t.simple}</p><h2>{t.stepsTitle}</h2></div></div>
        <ol><li><h3>{t.step1}</h3><p>{t.step1Text}</p></li><li><h3>{t.step2}</h3><p>{t.step2Text}</p></li><li><h3>{t.step3}</h3><p>{t.step3Text}</p></li></ol>
      </section>


      <footer>
        <a className="brand" href="#top">CAR BOOKINGS<span>.</span></a><p>{t.footerLine}</p>
        <div><a href="#cars">{t.findCar}</a><a href="#owners">{m.navOwners}</a><a href="mailto:partners@car-bookings.com">Email</a><a href="https://wa.me/13236107634" target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© 2026 Car Bookings. All rights reserved. Car Bookings is operated by Gavrilkoff LLC.</small>
      </footer>

    </main>
  );
}
