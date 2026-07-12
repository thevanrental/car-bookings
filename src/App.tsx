import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

type Lang = "en" | "es" | "ru" | "uk" | "fr";
type Category = "all" | "economy" | "suv" | "family";

const translations = {
  en: {
    navCars: "Cars", navCompanies: "Rental companies", navHow: "How it works", navPricing: "Pricing", listCompany: "List your company",
    heroEyebrow: "Independent car rentals", heroLine1: "Local cars.", heroLine2: "Real prices.",
    heroNote: "Compare verified local rental companies. The price you see is the price you pay.",
    location: "Location", pickup: "Pick-up", dropoff: "Drop-off", findCar: "Find a car",
    benefit1: "No hidden counter fees", benefit2: "Local companies only", benefit3: "Final price shown upfront",
    available: "Available now", carsIn: "Cars in", shown: "cars shown", dates: "Jul 18–22",
    filters: { all: "All", economy: "Economy", suv: "SUV", family: "Family" },
    seats: "seats", automatic: "Automatic", rentalCompany: "Rental company", deposit: "Refundable deposit",
    perDay: "/day", total: "total", view: "View", priceNote: "Taxes and mandatory fees are included in every total shown above.",
    knowWho: "Know who you rent from", localCompanies: "Local rental companies", verifiedDetails: "Identity and business details verified",
    verified: "Verified company", rating: "Rating", completed: "Completed rentals", reply: "Average reply", availableCars: "Available cars", profile: "View company profile",
    simple: "Simple by design", stepsTitle: "Three steps. No counter surprises.",
    step1: "Choose a local company", step1Text: "Compare its real fleet, location, reviews and rental terms.",
    step2: "See the total price", step2Text: "Mandatory taxes and fees are included before you reserve.",
    step3: "Book the actual car", step3Text: "Confirm directly with the company and receive exact pickup details.",
    forBusiness: "For independent rental businesses", businessTitle: "Put your real cars in front of real customers.",
    pricingEyebrow: "Launch offer for rental companies", pricingTitle: "Your first 6 months are free.", pricingNote: "List your company and its entire fleet at no cost. After the first six months, placement is $50 per month.",
    offerName: "Company listing", offerPrice: "$50", monthly: "/month after 6 free months", offer1: "Unlimited vehicles", offer2: "Full company profile", offer3: "Direct customer inquiries", startFree: "Start free", launchLabel: "6 months free",
    footerLine: "Independent rentals. Transparent prices.", forCompanies: "For companies", contact: "Contact",
    ariaNav: "Main navigation", ariaLanguage: "Language", ariaBenefits: "Booking benefits", ariaFilters: "Filter by vehicle type",
  },
  es: {
    navCars: "Autos", navCompanies: "Empresas de alquiler", navHow: "Cómo funciona", navPricing: "Planes", listCompany: "Publica tu empresa",
    heroEyebrow: "Alquileres de autos independientes", heroLine1: "Autos locales.", heroLine2: "Precios reales.",
    heroNote: "Compara empresas locales verificadas. El precio que ves es el precio que pagas.",
    location: "Ubicación", pickup: "Recogida", dropoff: "Devolución", findCar: "Buscar auto",
    benefit1: "Sin cargos ocultos", benefit2: "Solo empresas locales", benefit3: "Precio final por adelantado",
    available: "Disponibles ahora", carsIn: "Autos en", shown: "autos mostrados", dates: "18–22 jul",
    filters: { all: "Todos", economy: "Económico", suv: "SUV", family: "Familiar" },
    seats: "asientos", automatic: "Automático", rentalCompany: "Empresa de alquiler", deposit: "Depósito reembolsable",
    perDay: "/día", total: "total", view: "Ver", priceNote: "Los impuestos y cargos obligatorios están incluidos en todos los totales.",
    knowWho: "Conoce a quien te alquila", localCompanies: "Empresas locales de alquiler", verifiedDetails: "Identidad y datos comerciales verificados",
    verified: "Empresa verificada", rating: "Calificación", completed: "Alquileres completados", reply: "Respuesta promedio", availableCars: "Autos disponibles", profile: "Ver perfil de la empresa",
    simple: "Simple por diseño", stepsTitle: "Tres pasos. Sin sorpresas en el mostrador.",
    step1: "Elige una empresa local", step1Text: "Compara su flota real, ubicación, opiniones y condiciones.",
    step2: "Consulta el precio total", step2Text: "Los impuestos y cargos obligatorios aparecen antes de reservar.",
    step3: "Reserva el auto real", step3Text: "Confirma directamente y recibe los detalles exactos de recogida.",
    forBusiness: "Para empresas de alquiler independientes", businessTitle: "Muestra tus autos reales a clientes reales.",
    pricingEyebrow: "Oferta de lanzamiento para empresas", pricingTitle: "Tus primeros 6 meses son gratis.", pricingNote: "Publica tu empresa y toda su flota sin costo. Después de los primeros seis meses, la publicación cuesta $50 al mes.",
    offerName: "Publicación de empresa", offerPrice: "$50", monthly: "/mes después de 6 meses gratis", offer1: "Autos ilimitados", offer2: "Perfil completo de empresa", offer3: "Consultas directas de clientes", startFree: "Empezar gratis", launchLabel: "6 meses gratis",
    footerLine: "Alquileres independientes. Precios transparentes.", forCompanies: "Para empresas", contact: "Contacto",
    ariaNav: "Navegación principal", ariaLanguage: "Idioma", ariaBenefits: "Ventajas de la reserva", ariaFilters: "Filtrar por tipo de vehículo",
  },
  ru: {
    navCars: "Автомобили", navCompanies: "Прокатные компании", navHow: "Как это работает", navPricing: "Тарифы", listCompany: "Добавить компанию",
    heroEyebrow: "Независимые прокаты автомобилей", heroLine1: "Местные машины.", heroLine2: "Реальные цены.",
    heroNote: "Сравнивайте проверенные местные прокаты. Цена на экране — это цена, которую вы платите.",
    location: "Место", pickup: "Получение", dropoff: "Возврат", findCar: "Найти машину",
    benefit1: "Без скрытых сборов", benefit2: "Только местные компании", benefit3: "Итоговая цена сразу",
    available: "Доступно сейчас", carsIn: "Автомобили в", shown: "машин показано", dates: "18–22 июля",
    filters: { all: "Все", economy: "Эконом", suv: "SUV", family: "Семейные" },
    seats: "мест", automatic: "Автомат", rentalCompany: "Прокатная компания", deposit: "Возвратный депозит",
    perDay: "/день", total: "итого", view: "Открыть", priceNote: "Налоги и обязательные сборы включены в каждую итоговую цену.",
    knowWho: "Знайте, у кого арендуете", localCompanies: "Местные прокатные компании", verifiedDetails: "Личность и данные компании проверены",
    verified: "Проверенная компания", rating: "Рейтинг", completed: "Завершённых аренд", reply: "Средний ответ", availableCars: "Доступно машин", profile: "Профиль компании",
    simple: "Ничего лишнего", stepsTitle: "Три шага. Никаких сюрпризов на стойке.",
    step1: "Выберите местный прокат", step1Text: "Сравните реальные машины, расположение, отзывы и условия аренды.",
    step2: "Увидьте итоговую цену", step2Text: "Обязательные налоги и сборы включены до бронирования.",
    step3: "Забронируйте конкретную машину", step3Text: "Подтвердите аренду напрямую и получите точные инструкции.",
    forBusiness: "Для независимых прокатных компаний", businessTitle: "Покажите реальные машины реальным клиентам.",
    pricingEyebrow: "Стартовое предложение для прокатов", pricingTitle: "Первые 6 месяцев бесплатно.", pricingNote: "Разместите компанию и весь автопарк бесплатно. После первых шести месяцев размещение стоит $50 в месяц.",
    offerName: "Размещение компании", offerPrice: "$50", monthly: "/месяц после 6 бесплатных месяцев", offer1: "Неограниченное количество машин", offer2: "Полный профиль компании", offer3: "Прямые обращения клиентов", startFree: "Начать бесплатно", launchLabel: "6 месяцев бесплатно",
    footerLine: "Независимые прокаты. Прозрачные цены.", forCompanies: "Для компаний", contact: "Контакты",
    ariaNav: "Главное меню", ariaLanguage: "Язык", ariaBenefits: "Преимущества бронирования", ariaFilters: "Фильтр по типу автомобиля",
  },
  uk: {
    navCars: "Автомобілі", navCompanies: "Прокатні компанії", navHow: "Як це працює", navPricing: "Тарифи", listCompany: "Додати компанію",
    heroEyebrow: "Незалежні прокати автомобілів", heroLine1: "Місцеві авто.", heroLine2: "Реальні ціни.",
    heroNote: "Порівнюйте перевірені місцеві прокати. Ціна на екрані — це ціна, яку ви сплачуєте.",
    location: "Місце", pickup: "Отримання", dropoff: "Повернення", findCar: "Знайти авто",
    benefit1: "Без прихованих зборів", benefit2: "Лише місцеві компанії", benefit3: "Кінцева ціна одразу",
    available: "Доступно зараз", carsIn: "Автомобілі в", shown: "авто показано", dates: "18–22 липня",
    filters: { all: "Усі", economy: "Економ", suv: "SUV", family: "Сімейні" },
    seats: "місць", automatic: "Автомат", rentalCompany: "Прокатна компанія", deposit: "Поворотний депозит",
    perDay: "/день", total: "разом", view: "Відкрити", priceNote: "Податки та обов’язкові збори включено в кожну кінцеву ціну.",
    knowWho: "Знайте, у кого орендуєте", localCompanies: "Місцеві прокатні компанії", verifiedDetails: "Особу та дані компанії перевірено",
    verified: "Перевірена компанія", rating: "Рейтинг", completed: "Завершених оренд", reply: "Середня відповідь", availableCars: "Доступно авто", profile: "Профіль компанії",
    simple: "Нічого зайвого", stepsTitle: "Три кроки. Жодних сюрпризів на стійці.",
    step1: "Оберіть місцевий прокат", step1Text: "Порівняйте реальні авто, розташування, відгуки та умови.",
    step2: "Побачте кінцеву ціну", step2Text: "Обов’язкові податки та збори включено до бронювання.",
    step3: "Забронюйте конкретне авто", step3Text: "Підтвердьте оренду напряму й отримайте точні інструкції.",
    forBusiness: "Для незалежних прокатних компаній", businessTitle: "Покажіть реальні авто реальним клієнтам.",
    pricingEyebrow: "Стартова пропозиція для прокатів", pricingTitle: "Перші 6 місяців безкоштовно.", pricingNote: "Розмістіть компанію та весь автопарк безкоштовно. Після перших шести місяців розміщення коштує $50 на місяць.",
    offerName: "Розміщення компанії", offerPrice: "$50", monthly: "/місяць після 6 безкоштовних місяців", offer1: "Необмежена кількість авто", offer2: "Повний профіль компанії", offer3: "Прямі звернення клієнтів", startFree: "Почати безкоштовно", launchLabel: "6 місяців безкоштовно",
    footerLine: "Незалежні прокати. Прозорі ціни.", forCompanies: "Для компаній", contact: "Контакти",
    ariaNav: "Головне меню", ariaLanguage: "Мова", ariaBenefits: "Переваги бронювання", ariaFilters: "Фільтр за типом автомобіля",
  },
  fr: {
    navCars: "Voitures", navCompanies: "Agences de location", navHow: "Comment ça marche", navPricing: "Tarifs", listCompany: "Ajouter votre agence",
    heroEyebrow: "Locations de voitures indépendantes", heroLine1: "Voitures locales.", heroLine2: "Prix réels.",
    heroNote: "Comparez des agences locales vérifiées. Le prix affiché est le prix payé.",
    location: "Lieu", pickup: "Prise en charge", dropoff: "Retour", findCar: "Trouver une voiture",
    benefit1: "Aucun frais caché", benefit2: "Agences locales uniquement", benefit3: "Prix final affiché dès le départ",
    available: "Disponibles maintenant", carsIn: "Voitures à", shown: "voitures affichées", dates: "18–22 juil.",
    filters: { all: "Toutes", economy: "Économique", suv: "SUV", family: "Familiale" },
    seats: "places", automatic: "Automatique", rentalCompany: "Agence de location", deposit: "Dépôt remboursable",
    perDay: "/jour", total: "total", view: "Voir", priceNote: "Les taxes et frais obligatoires sont inclus dans chaque total affiché.",
    knowWho: "Sachez auprès de qui vous louez", localCompanies: "Agences de location locales", verifiedDetails: "Identité et informations de l’entreprise vérifiées",
    verified: "Agence vérifiée", rating: "Note", completed: "Locations terminées", reply: "Réponse moyenne", availableCars: "Voitures disponibles", profile: "Voir le profil de l’agence",
    simple: "Simple par conception", stepsTitle: "Trois étapes. Aucune surprise au comptoir.",
    step1: "Choisissez une agence locale", step1Text: "Comparez sa flotte réelle, son emplacement, ses avis et conditions.",
    step2: "Voyez le prix total", step2Text: "Les taxes et frais obligatoires sont inclus avant la réservation.",
    step3: "Réservez la voiture réelle", step3Text: "Confirmez directement et recevez les détails précis de prise en charge.",
    forBusiness: "Pour les agences indépendantes", businessTitle: "Présentez vos vraies voitures à de vrais clients.",
    pricingEyebrow: "Offre de lancement pour les agences", pricingTitle: "Vos 6 premiers mois sont gratuits.", pricingNote: "Publiez votre agence et toute sa flotte gratuitement. Après les six premiers mois, la publication coûte 50 $ par mois.",
    offerName: "Publication de l’agence", offerPrice: "$50", monthly: "/mois après 6 mois gratuits", offer1: "Voitures illimitées", offer2: "Profil complet de l’agence", offer3: "Demandes directes des clients", startFree: "Commencer gratuitement", launchLabel: "6 mois gratuits",
    footerLine: "Locations indépendantes. Prix transparents.", forCompanies: "Pour les agences", contact: "Contact",
    ariaNav: "Navigation principale", ariaLanguage: "Langue", ariaBenefits: "Avantages de la réservation", ariaFilters: "Filtrer par type de véhicule",
  },
} as const;

const cars = [
  { name: "Chevrolet Aveo", category: "economy" as Category, company: "Maya Drive", location: "Cancún Downtown", seats: 5, total: 116, daily: 29, deposit: 150 },
  { name: "Nissan Kicks", category: "suv" as Category, company: "Costa Car Rental", location: "Cancún Airport", seats: 5, total: 168, daily: 42, deposit: 200 },
  { name: "Toyota Avanza", category: "family" as Category, company: "Local Wheels Cancún", location: "Hotel Zone", seats: 7, total: 220, daily: 55, deposit: 250 },
  { name: "Jeep Renegade", category: "suv" as Category, company: "Maya Drive", location: "Cancún Downtown", seats: 5, total: 236, daily: 59, deposit: 250 },
];

const companies = [
  { name: "Maya Drive", area: "Cancún Downtown", cars: 14, rating: "4.9", rentals: "1,240", response: "8 min" },
  { name: "Costa Car Rental", area: "Cancún Airport", cars: 9, rating: "4.8", rentals: "860", response: "12 min" },
  { name: "Local Wheels Cancún", area: "Hotel Zone", cars: 21, rating: "4.9", rentals: "2,105", response: "6 min" },
];

const filterKeys: Category[] = ["all", "economy", "suv", "family"];
const languageNames: Record<Lang, string> = { en: "EN", es: "ES", ru: "RU", uk: "UA", fr: "FR" };

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [category, setCategory] = useState<Category>("all");
  const [location, setLocation] = useState("Cancún, Mexico");
  const [searchedLocation, setSearchedLocation] = useState("Cancún, Mexico");
  const t = translations[lang];

  useEffect(() => {
    const saved = window.localStorage.getItem("car-bookings-language") as Lang | null;
    if (saved && saved in translations) setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("car-bookings-language", lang);
  }, [lang]);

  const filteredCars = useMemo(
    () => cars.filter((car) => category === "all" || car.category === category),
    [category],
  );

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchedLocation(location.trim() || "Cancún, Mexico");
    document.querySelector("#cars")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Car Bookings">CAR BOOKINGS<span>.</span></a>
        <nav aria-label={t.ariaNav}>
          <a href="#cars">{t.navCars}</a><a href="#companies">{t.navCompanies}</a><a href="#pricing">{t.navPricing}</a><a href="#how">{t.navHow}</a>
        </nav>
        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{t.ariaLanguage}</span>
            <select value={lang} onChange={(event) => setLang(event.target.value as Lang)} aria-label={t.ariaLanguage}>
              {(Object.keys(languageNames) as Lang[]).map((code) => <option key={code} value={code}>{languageNames[code]}</option>)}
            </select>
          </label>
          <a className="company-link" href="#list-company">{t.listCompany}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroLine1}<br />{t.heroLine2}</h1>
          <p className="hero-note">{t.heroNote}</p>
        </div>
        <form className="search-panel" onSubmit={submitSearch}>
          <label><span>{t.location}</span><input name="location" value={location} onChange={(event) => setLocation(event.target.value)} aria-label={t.location} /></label>
          <label><span>{t.pickup}</span><input name="pickup" type="date" defaultValue="2026-07-18" aria-label={t.pickup} /></label>
          <label><span>{t.dropoff}</span><input name="dropoff" type="date" defaultValue="2026-07-22" aria-label={t.dropoff} /></label>
          <button type="submit">{t.findCar}</button>
        </form>
        <div className="proof-row" aria-label={t.ariaBenefits}><span>{t.benefit1}</span><span>{t.benefit2}</span><span>{t.benefit3}</span></div>
      </section>

      <section className="listings section" id="cars">
        <div className="section-heading"><div><p className="eyebrow">{t.available}</p><h2>{t.carsIn} {searchedLocation}</h2></div><p>{filteredCars.length} {t.shown} · {t.dates}</p></div>
        <div className="filters" aria-label={t.ariaFilters}>
          {filterKeys.map((filter) => <button className={category === filter ? "active" : ""} key={filter} type="button" onClick={() => setCategory(filter)} aria-pressed={category === filter}>{t.filters[filter]}</button>)}
        </div>
        <div className="car-list">
          {filteredCars.map((car) => (
            <article className="car-row" key={car.name}>
              <div className="car-index" aria-hidden="true">{String(cars.indexOf(car) + 1).padStart(2, "0")}</div>
              <div className="car-name"><p>{t.filters[car.category]}</p><h3>{car.name}</h3><span>{car.seats} {t.seats} · {t.automatic}</span></div>
              <div className="car-company"><span>{t.rentalCompany}</span><a href="#companies">{car.company}</a><small>{car.location}</small></div>
              <div className="car-deposit"><span>{t.deposit}</span><strong>${car.deposit}</strong></div>
              <div className="car-price"><span>${car.daily}{t.perDay}</span><strong>${car.total} {t.total}</strong></div>
              <button className="view-button" type="button" aria-label={`${t.view} ${car.name}`}>{t.view}</button>
            </article>
          ))}
        </div>
        <p className="price-note">{t.priceNote}</p>
      </section>

      <section className="companies section" id="companies">
        <div className="section-heading"><div><p className="eyebrow">{t.knowWho}</p><h2>{t.localCompanies}</h2></div><p>{t.verifiedDetails}</p></div>
        <div className="company-grid">
          {companies.map((company, index) => (
            <article className="company-card" key={company.name}>
              <div className="company-number">0{index + 1}</div>
              <div><p className="verified">{t.verified}</p><h3>{company.name}</h3><p className="company-area">{company.area}</p></div>
              <dl><div><dt>{t.rating}</dt><dd>{company.rating}</dd></div><div><dt>{t.completed}</dt><dd>{company.rentals}</dd></div><div><dt>{t.reply}</dt><dd>{company.response}</dd></div><div><dt>{t.availableCars}</dt><dd>{company.cars}</dd></div></dl>
              <a href="#cars">{t.profile} <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="how section" id="how">
        <div className="section-heading"><div><p className="eyebrow">{t.simple}</p><h2>{t.stepsTitle}</h2></div></div>
        <ol><li><span>01</span><h3>{t.step1}</h3><p>{t.step1Text}</p></li><li><span>02</span><h3>{t.step2}</h3><p>{t.step2Text}</p></li><li><span>03</span><h3>{t.step3}</h3><p>{t.step3Text}</p></li></ol>
      </section>

      <section className="pricing section" id="pricing">
        <div className="section-heading">
          <div><p className="eyebrow">{t.pricingEyebrow}</p><h2>{t.pricingTitle}</h2></div>
          <p>{t.pricingNote}</p>
        </div>
        <article className="launch-offer">
          <div className="offer-price-block"><p className="plan-name">{t.offerName}</p><p className="plan-price">{t.offerPrice}</p><p className="offer-period">{t.monthly}</p></div>
          <div className="offer-details"><p className="launch-label">{t.launchLabel}</p><ul><li>{t.offer1}</li><li>{t.offer2}</li><li>{t.offer3}</li></ul></div>
          <a href="mailto:partners@car-bookings.com?subject=6%20months%20free">{t.startFree}<span>→</span></a>
        </article>
      </section>

      <section className="list-company section" id="list-company">
        <p className="eyebrow">{t.forBusiness}</p><div><h2>{t.businessTitle}</h2><a href="mailto:partners@car-bookings.com?subject=List%20my%20rental%20company">{t.listCompany}</a></div>
      </section>

      <footer>
        <a className="brand" href="#top">CAR BOOKINGS<span>.</span></a><p>{t.footerLine}</p>
        <div><a href="#cars">{t.findCar}</a><a href="#list-company">{t.forCompanies}</a><a href="mailto:hello@car-bookings.com">{t.contact}</a></div><small>© 2026 Car Bookings</small>
      </footer>
    </main>
  );
}

