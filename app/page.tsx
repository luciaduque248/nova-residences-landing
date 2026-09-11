import { FinancingEstimator } from "@/components/financing-estimator";
import { LeadForm } from "@/components/lead-form";

const projectFacts = [
  ["Tipologías", "1–3 habitaciones"],
  ["Áreas", "54–112 m²"],
  ["Entrega", "Concepto 2028"],
  ["Ubicación", "Cali · escenario conceptual"],
];

const typologies = [
  {
    code: "N01",
    name: "Essential",
    area: "54 m²",
    rooms: "1 hab · 1 baño",
    copy: "Una planta compacta para una vida urbana simple, flexible y bien resuelta.",
  },
  {
    code: "N02",
    name: "Balance",
    area: "78 m²",
    rooms: "2 hab · 2 baños",
    copy: "Luz cruzada, zona social abierta y un segundo ambiente que se adapta al ritmo diario.",
  },
  {
    code: "N03",
    name: "Panorama",
    area: "112 m²",
    rooms: "3 hab · 3 baños",
    copy: "Más amplitud, privacidad y una relación directa entre interiores, terraza y paisaje.",
  },
];

const amenities = [
  ["01", "Rooftop lounge", "Atardeceres, encuentros y una vista abierta sobre la ciudad."],
  ["02", "Piscina elevada", "Un espacio sereno diseñado para bajar el ritmo."],
  ["03", "Wellness studio", "Entrenamiento, movilidad y bienestar en un mismo nivel."],
  ["04", "Coworking", "Salas silenciosas y espacios para reuniones breves."],
  ["05", "Pet garden", "Zona exterior para quienes comparten la vida con mascotas."],
  ["06", "Lobby concierge", "Una llegada sobria, segura y pensada para recibir."],
];

const nearby = [
  ["Parque lineal", "6 min"],
  ["Zona gastronómica", "9 min"],
  ["Centro empresarial", "12 min"],
  ["Universidades", "14 min"],
];

const gallery = [
  {
    className: "lg:col-span-7 lg:row-span-2",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    label: "Arquitectura exterior",
  },
  {
    className: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    label: "Interiores serenos",
  },
  {
    className: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    label: "Materialidad cálida",
  },
];

const faqs = [
  [
    "¿NOVA Residences es un proyecto inmobiliario real?",
    "No. NOVA es un caso conceptual creado para portafolio con el objetivo de demostrar estrategia de conversión, UX/UI y desarrollo frontend para real estate.",
  ],
  [
    "¿Los precios, áreas y fechas representan una oferta comercial?",
    "No. Los datos mostrados son escenarios de demostración y no constituyen una oferta, cotización ni disponibilidad inmobiliaria real.",
  ],
  [
    "¿Qué ocurre al enviar el formulario?",
    "En esta versión de portafolio se muestra un estado de éxito local. No se almacenan ni se envían datos personales a un CRM.",
  ],
  [
    "¿El simulador calcula una financiación real?",
    "No. Es una demo de experiencia de usuario. La cifra mostrada representa únicamente capital dividido por plazo y excluye intereses, seguros, impuestos y otros costos.",
  ],
];

export default function Home() {
  return (
    <main className="overflow-clip">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--surface)]/96 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#inicio" className="flex items-baseline gap-2" aria-label="NOVA Residences, inicio">
            <span className="text-lg font-semibold tracking-[0.16em]">NOVA</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:inline">Residences</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm lg:flex" aria-label="Navegación principal">
            <a className="nav-link" href="#residencias">Residencias</a>
            <a className="nav-link" href="#amenidades">Amenidades</a>
            <a className="nav-link" href="#ubicacion">Ubicación</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>
          <a className="button button-dark" href="#visita">Agendar visita</a>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1500px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between bg-[var(--surface)] px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="max-w-xl pt-8 lg:pt-16">
            <p className="eyebrow">Concepto de portafolio · Real estate</p>
            <h1 className="mt-6 text-[clamp(4rem,8vw,8.4rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Vivir<br />más arriba.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-[var(--muted)] md:text-xl">
              NOVA imagina una residencia urbana donde arquitectura, calma y proximidad conviven sin exceso.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="button button-dark" href="#visita">Agendar visita</a>
              <a className="button button-outline" href="#residencias">Explorar residencias</a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-black/10 pt-7 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {projectFacts.map(([label, value]) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{label}</p>
                <p className="mt-2 text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-image relative min-h-[68svh] overflow-hidden bg-cover bg-center lg:min-h-full"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,14,12,.02), rgba(15,14,12,.28)), url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90')",
          }}
          role="img"
          aria-label="Arquitectura residencial contemporánea de referencia visual"
        >
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white md:bottom-8 md:left-8 md:right-8">
            <p className="max-w-xs text-sm leading-6 text-white/85">Dirección visual: arquitectura editorial, piedra, luz y proporciones serenas.</p>
            <span className="rounded-full border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.16em]">Cali · Concepto</span>
          </div>
        </div>
      </section>

      <section className="section-shell py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow">01 · El concepto</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.06] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Una arquitectura que no compite con tu vida: la enmarca.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-2">
              <p className="body-copy">NOVA propone espacios luminosos, materiales honestos y circulaciones simples. La experiencia comienza antes de entrar al apartamento y continúa en cada transición.</p>
              <p className="body-copy">La landing está diseñada como una pieza de captación: presenta valor, reduce incertidumbre y lleva a una conversación comercial sin llenar la página de promesas vacías.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="residencias" className="bg-[var(--ink)] py-28 text-[var(--paper)] md:py-36">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[var(--sand)]">02 · Residencias</p>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.045em] md:text-7xl">Tres formas de habitar.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/60">Las áreas y configuraciones son ficticias y se usan únicamente para demostrar jerarquía de producto y comparación de tipologías.</p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/15 lg:grid-cols-3">
            {typologies.map((item, index) => (
              <article key={item.code} className="group flex min-h-[31rem] flex-col justify-between bg-[var(--ink)] p-7 transition-colors duration-300 hover:bg-[#24211d] md:p-9">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/50">
                  <span>{item.code}</span>
                  <span>0{index + 1}</span>
                </div>
                <div>
                  <p className="text-sm text-[var(--sand)]">{item.area} · {item.rooms}</p>
                  <h3 className="mt-3 text-4xl font-medium tracking-[-0.04em] md:text-5xl">{item.name}</h3>
                  <p className="mt-5 max-w-sm leading-7 text-white/60">{item.copy}</p>
                  <a href="#visita" className="mt-8 inline-flex border-b border-white/30 pb-1 text-sm transition-colors hover:border-white">Solicitar información</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="amenidades" className="section-shell py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">03 · Amenidades</p>
            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.05em] md:text-6xl">Espacios que amplían tu apartamento.</h2>
            <div
              className="mt-10 aspect-[4/5] rounded-[1.75rem] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85')" }}
              role="img"
              aria-label="Interior contemporáneo de referencia visual"
            />
          </div>
          <div className="lg:col-span-7 lg:pt-28">
            {amenities.map(([number, title, copy]) => (
              <article key={number} className="grid gap-4 border-t border-black/10 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="text-xs tracking-[0.16em] text-[var(--accent)]">{number}</span>
                <div className="grid gap-3 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
                  <h3 className="text-2xl font-medium tracking-[-0.025em]">{title}</h3>
                  <p className="body-copy">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--stone)] py-28 md:py-36">
        <div className="section-shell">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">04 · Galería</p>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.045em] md:text-7xl">Materiales, luz, silencio.</h2>
            </div>
            <span className="hidden text-sm text-[var(--muted)] md:block">Referencias visuales de dirección artística</span>
          </div>
          <div className="grid min-h-[860px] gap-4 lg:grid-cols-12 lg:grid-rows-2">
            {gallery.map((item) => (
              <figure key={item.label} className={`${item.className} group relative min-h-[300px] overflow-hidden rounded-[1.5rem]`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 pt-20 text-white">
                  <figcaption className="text-sm">{item.label}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section-shell py-28 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">05 · Ubicación</p>
            <h2 className="mt-5 text-5xl font-medium leading-[1] tracking-[-0.05em] md:text-7xl">Cerca de lo que mueve tu día.</h2>
            <p className="mt-8 max-w-md body-copy">Para el caso de estudio usamos una ubicación conceptual en Cali. Los tiempos son ilustrativos y no corresponden a un proyecto real.</p>
            <div className="mt-10">
              {nearby.map(([place, time]) => (
                <div key={place} className="flex items-center justify-between border-t border-black/10 py-5">
                  <span>{place}</span>
                  <span className="text-sm text-[var(--muted)]">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#d8d0c1] p-7 md:p-10">
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(21,20,18,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(21,20,18,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute left-[18%] top-[18%] h-[58%] w-[64%] rotate-[-8deg] rounded-[42%] border-[18px] border-[var(--surface)]/75" />
              <div className="absolute left-[12%] top-[58%] h-3 w-[80%] rotate-6 rounded-full bg-[var(--surface)]/80" />
              <div className="absolute right-[19%] top-[27%] flex h-24 w-24 items-center justify-center rounded-full bg-[var(--ink)] text-center text-xs uppercase tracking-[0.12em] text-white shadow-xl">
                NOVA<br />Residences
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between gap-4 text-xs uppercase tracking-[0.14em] text-black/55">
                <span>Mapa conceptual</span>
                <span>Cali · Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-28 md:py-36">
        <div className="section-shell grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow">06 · Simulador</p>
            <h2 className="mt-5 text-5xl font-medium leading-[1] tracking-[-0.05em] md:text-7xl">Haz tangible la decisión.</h2>
            <p className="mt-8 max-w-md body-copy">Una interacción útil dentro del funnel: permite explorar escenarios antes de dejar los datos, sin presentarlos como una cotización financiera real.</p>
          </div>
          <div className="lg:col-span-7">
            <FinancingEstimator />
          </div>
        </div>
      </section>

      <section className="section-shell py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">07 · Por qué NOVA</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] md:text-6xl">Una propuesta pensada para comunicar valor antes que urgencia.</h2>
            <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-3">
              {[
                ["Arquitectura", "Espacios legibles y una identidad material coherente."],
                ["Flexibilidad", "Tipologías para distintos momentos de vida, sin sobrecargar la elección."],
                ["Experiencia", "Información, comparación y contacto integrados en una sola ruta de conversión."],
              ].map(([title, copy]) => (
                <article key={title} className="bg-[var(--background)] p-7 md:p-8">
                  <h3 className="text-2xl font-medium">{title}</h3>
                  <p className="mt-5 body-copy">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visita" className="bg-[var(--ink)] py-28 text-[var(--paper)] md:py-36">
        <div className="section-shell grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--sand)]">08 · Conversión principal</p>
            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.05em] md:text-7xl">Conoce NOVA a tu ritmo.</h2>
            <p className="mt-8 max-w-md text-base leading-7 text-white/60">Completa el formulario para probar el flujo de captación. Esta demo no envía ni almacena tus datos.</p>
          </div>
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">09 · Preguntas frecuentes</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] md:text-5xl">Antes de seguir.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-t border-black/10 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-medium marker:hidden md:text-2xl">
                  <span>{question}</span>
                  <span className="text-2xl font-light text-[var(--accent)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-7 pr-12 body-copy">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 mb-4 overflow-hidden rounded-[2rem] bg-[var(--accent)] px-6 py-20 text-[var(--paper)] md:mx-6 md:mb-6 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <p className="text-xs uppercase tracking-[0.18em] text-white/70">NOVA Residences · Portfolio concept</p>
          <div className="mt-7 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl">¿Listo para recorrer la experiencia?</h2>
            <a className="button bg-white text-[var(--ink)] hover:bg-white/90" href="#visita">Agendar visita</a>
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col justify-between gap-5 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center">
        <div>
          <span className="font-semibold tracking-[0.12em] text-[var(--foreground)]">NOVA</span>
          <span className="ml-3">Concepto ficticio para portafolio.</span>
        </div>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-[var(--foreground)]" href="#inicio">Inicio</a>
          <a className="hover:text-[var(--foreground)]" href="#residencias">Residencias</a>
          <a className="hover:text-[var(--foreground)]" href="#visita">Contacto</a>
        </div>
      </footer>

      <a href="#visita" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-center rounded-full bg-[var(--ink)] px-5 text-sm font-medium text-white shadow-2xl lg:hidden">
        Agendar visita
      </a>
    </main>
  );
}
