import { FinancingEstimator } from "@/components/financing-estimator";
import { LeadForm } from "@/components/lead-form";
import { NovaHero } from "@/components/nova-hero";
import { TypologyExplorer } from "@/components/typology-explorer";

const amenities = [
  ["01", "Rooftop lounge", "Una terraza alta para reuniones pequeñas, lectura y atardeceres sobre la ciudad."],
  ["02", "Piscina elevada", "Agua, sombra y vegetación en un espacio pensado para bajar el ritmo."],
  ["03", "Wellness studio", "Entrenamiento, movilidad y recuperación sin salir del edificio."],
  ["04", "Work lounge", "Mesas compartidas, cabinas silenciosas y salas breves para trabajo híbrido."],
  ["05", "Pet garden", "Un jardín exterior de uso cotidiano para quienes comparten la vida con mascotas."],
  ["06", "Lobby concierge", "Una llegada sobria, segura y cuidadosamente iluminada."],
];

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88",
    label: "Volúmenes y terrazas",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
    label: "Materialidad cálida",
    className: "lg:col-span-5",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
    label: "Interiores serenos",
    className: "lg:col-span-5",
  },
];

const nearby = [
  ["Parque lineal", "6 min"],
  ["Zona gastronómica", "9 min"],
  ["Centro empresarial", "12 min"],
  ["Universidades", "14 min"],
];

const faqs = [
  [
    "¿NOVA Residences es un proyecto inmobiliario real?",
    "No. NOVA es un caso conceptual creado para portafolio con el objetivo de demostrar estrategia de conversión, UX/UI y desarrollo frontend aplicado a real estate.",
  ],
  [
    "¿Los precios, áreas y fechas representan una oferta comercial?",
    "No. Todos los datos son escenarios de demostración y no constituyen oferta, cotización, promesa de venta ni disponibilidad inmobiliaria real.",
  ],
  [
    "¿Qué ocurre al enviar el formulario?",
    "La demo muestra un estado de éxito local para representar el cierre del funnel. No se almacenan ni se envían datos personales a un CRM.",
  ],
  [
    "¿El simulador calcula una financiación real?",
    "No. Es una demostración de experiencia de usuario. El cálculo divide capital restante entre plazo y excluye intereses, seguros, impuestos y demás costos.",
  ],
];

export default function Home() {
  return (
    <main className="overflow-clip">
      <NovaHero />

      <section className="section-shell py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">01 · Manifiesto</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-6xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] md:text-6xl lg:text-[5.25rem]">
              La arquitectura no necesita llamar la atención para transformar la manera en que vivimos.
            </h2>
            <div className="mt-14 grid gap-8 border-t border-black/10 pt-9 md:grid-cols-[1.1fr_.9fr] md:gap-16">
              <p className="body-copy max-w-2xl">NOVA parte de una idea simple: menos ruido visual, mejores transiciones y espacios que se sienten amplios porque cada decisión tiene una razón. Luz, ventilación, sombra y circulación construyen el carácter del proyecto.</p>
              <div className="grid grid-cols-2 gap-7">
                <Metric value="3" label="tipologías" />
                <Metric value="6" label="amenidades" />
                <Metric value="1" label="lenguaje material" />
                <Metric value="0" label="promesas vacías" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="residencias" className="bg-[var(--ink)] py-28 text-[var(--paper)] md:py-40">
        <div className="section-shell">
          <TypologyExplorer />
        </div>
      </section>

      <section id="amenidades" className="section-shell py-28 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">03 · Amenidades</p>
            <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">Más espacio sin sumar metros.</h2>
            <p className="mt-7 max-w-md body-copy">Las amenidades funcionan como extensiones reales de la vivienda: trabajar, entrenar, recibir o simplemente salir del apartamento sin salir de casa.</p>

            <div className="group relative mt-11 aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#b4a18d]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]" role="img" aria-label="Interior residencial contemporáneo de referencia visual" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-7 pt-28 text-white">
                <p className="text-xs uppercase tracking-[.17em] text-white/60">Interior direction</p>
                <p className="mt-2 text-xl font-medium">Piedra, madera, sombra y luz natural.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-28">
            {amenities.map(([number, title, copy]) => (
              <article key={number} className="group grid gap-4 border-t border-black/10 py-7 sm:grid-cols-[4rem_1fr] md:py-8">
                <span className="pt-1 text-xs tracking-[0.18em] text-[var(--accent)]">{number}</span>
                <div className="grid gap-4 md:grid-cols-[.76fr_1.24fr] md:gap-10">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
                  <p className="body-copy">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--stone)] py-28 md:py-40">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">04 · Galería</p>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.05em] md:text-7xl">Materiales, luz, silencio.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Referencias visuales que definen la dirección artística del caso conceptual.</p>
          </div>

          <div className="grid min-h-[880px] gap-4 lg:grid-cols-12 lg:grid-rows-2">
            {gallery.map((item) => (
              <figure key={item.label} className={`${item.className} group relative min-h-[310px] overflow-hidden rounded-[1.65rem]`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.025]" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 text-white md:p-7">
                  <span className="text-sm">{item.label}</span>
                  <span className="h-8 w-8 rounded-full border border-white/35 text-center text-lg leading-7 transition-transform duration-300 group-hover:rotate-45">↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section-shell py-28 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">05 · Ubicación</p>
            <h2 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">La ciudad, a la distancia correcta.</h2>
            <p className="mt-8 max-w-md body-copy">Para este caso usamos una localización conceptual en Cali. Los tiempos sirven para mostrar cómo una landing inmobiliaria puede traducir contexto urbano en valor percibido.</p>

            <div className="mt-11">
              {nearby.map(([place, time]) => (
                <div key={place} className="flex items-center justify-between border-t border-black/10 py-5">
                  <span>{place}</span>
                  <span className="text-sm text-[var(--muted)]">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[1.16/1] overflow-hidden rounded-[2rem] border border-black/8 bg-[#d8d0c4] p-6 md:p-9">
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(23,21,18,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,18,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="absolute left-[14%] top-[18%] h-[68%] w-[72%] rotate-[-10deg] rounded-[50%] border border-black/15" />
              <div className="absolute left-[23%] top-[26%] h-[52%] w-[55%] rotate-[14deg] rounded-[48%] border border-black/13" />
              <div className="absolute left-[-8%] top-[58%] h-[2px] w-[118%] rotate-[-12deg] bg-black/14" />
              <div className="absolute left-[48%] top-[-6%] h-[112%] w-[2px] rotate-[18deg] bg-black/14" />

              <div className="absolute left-[54%] top-[47%] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[var(--accent)]/18" />
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[var(--ink)] text-xs font-semibold tracking-[.16em] text-white shadow-2xl">NOVA</span>
              </div>

              <span className="absolute left-[15%] top-[22%] text-xs text-black/48">Parque lineal</span>
              <span className="absolute right-[10%] top-[28%] text-xs text-black/48">Distrito gastronómico</span>
              <span className="absolute bottom-[18%] left-[18%] text-xs text-black/48">Centro empresarial</span>
              <span className="absolute bottom-[14%] right-[12%] text-xs text-black/48">Campus</span>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 md:bottom-9 md:left-9 md:right-9">
                <p className="max-w-xs text-xs leading-5 text-black/48">Mapa ilustrativo. No corresponde a coordenadas ni distancias reales.</p>
                <span className="text-xs uppercase tracking-[.17em] text-black/48">Cali · Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-28 md:py-40">
        <div className="section-shell grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="eyebrow">06 · Escenario financiero</p>
            <h2 className="mt-5 text-5xl font-medium leading-[.98] tracking-[-0.055em] md:text-6xl">Entender antes de preguntar.</h2>
            <p className="mt-7 max-w-md body-copy">Una herramienta simple puede reducir fricción antes del contacto comercial. Esta demo prioriza claridad y transparencia sobre falsas precisiones.</p>
          </div>
          <div className="lg:col-span-8">
            <FinancingEstimator />
          </div>
        </div>
      </section>

      <section className="section-shell py-28 md:py-40">
        <div className="rounded-[2rem] bg-[var(--accent)] px-6 py-10 text-white md:px-10 md:py-14 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[.18em] text-white/66">07 · Una landing pensada para convertir</p>
              <h2 className="mt-6 max-w-4xl text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-7xl">Menos discurso. Más razones para avanzar.</h2>
            </div>
            <div className="grid gap-5 text-sm leading-7 text-white/75">
              <p>El flujo combina deseo, información de producto, contexto, objeciones y una acción final clara. No depende de descuentos inventados ni urgencia artificial.</p>
              <a href="#visita" className="inline-flex w-fit border-b border-white/45 pb-1 text-white transition hover:border-white">Quiero conocer NOVA</a>
            </div>
          </div>
        </div>
      </section>

      <section id="visita" className="bg-[var(--ink)] py-28 text-white md:py-40">
        <div className="section-shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--sand)]">08 · Agenda un recorrido</p>
            <h2 className="mt-6 text-5xl font-medium leading-[.94] tracking-[-.055em] md:text-7xl">La conversación empieza aquí.</h2>
            <p className="mt-8 max-w-md text-base leading-8 text-white/58">En un proyecto real, este formulario conectaría la intención del visitante con un asesor, CRM o calendario. En esta demo el flujo termina localmente.</p>

            <div className="mt-12 border-t border-white/12 pt-7 text-sm text-white/45">
              <p>Proyecto conceptual de portafolio.</p>
              <p className="mt-2">Sin venta, disponibilidad ni captación real de datos.</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">09 · Transparencia</p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.05em]">Preguntas antes de cerrar.</h2>
          </div>
          <div className="lg:col-span-8">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group border-t border-black/10 py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-xl font-medium tracking-[-0.025em] md:text-2xl">
                  {question}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/12 text-lg transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-5 body-copy">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[var(--surface)]">
        <div className="section-shell flex flex-col gap-8 py-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[.2em]">NOVA</p>
            <p className="mt-2 text-xs uppercase tracking-[.16em] text-[var(--muted)]">Residences · Portfolio concept</p>
          </div>
          <div className="text-xs leading-5 text-[var(--muted)] md:text-right">
            <p>UX/UI · Frontend · Conversion landing</p>
            <p>Concepto ficticio desarrollado como caso de portafolio.</p>
          </div>
        </div>
      </footer>

      <a href="#visita" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-14 items-center justify-between rounded-full bg-[var(--ink)] px-6 text-sm font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,.22)] lg:hidden">
        <span>Agendar visita</span><span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-black/10 pt-4">
      <p className="text-4xl font-medium tracking-[-0.05em]">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[.15em] text-[var(--muted)]">{label}</p>
    </div>
  );
}
