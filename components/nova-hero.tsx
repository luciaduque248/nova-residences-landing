const heroFacts = [
  ["3", "tipologías"],
  ["54–112 m²", "áreas"],
  ["28", "niveles conceptuales"],
  ["Cali", "escenario urbano"],
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1758448511578-ec292173b70c?auto=format&fit=crop&fm=jpg&q=88&w=2400";

export function NovaHero() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#f7f1e8]/94 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.6rem] max-w-[1560px] items-center justify-between px-5 md:px-9 lg:px-12">
          <a href="#inicio" className="group flex items-baseline gap-2" aria-label="NOVA Residences, inicio">
            <span className="font-serif text-[1.05rem] font-semibold tracking-[-0.03em]">NOVA</span>
            <span className="hidden text-[9px] uppercase tracking-[0.24em] text-black/42 sm:inline">Residences</span>
          </a>

          <nav className="hidden items-center gap-8 text-[12px] lg:flex" aria-label="Navegación principal">
            <a className="nav-link" href="#residencias">Residencias</a>
            <a className="nav-link" href="#amenidades">Amenidades</a>
            <a className="nav-link" href="#ubicacion">Ubicación</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </nav>

          <a className="button button-dark min-h-[2.7rem] px-5 text-xs" href="#visita">Agendar visita</a>
        </div>
      </header>

      <section id="inicio" className="nova-hero-stage mx-auto max-w-[1560px]">
        <div
          className="nova-hero-image"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
          role="img"
          aria-label="Residencia contemporánea de lujo con balcones, vegetación y luz cálida al atardecer"
        />
        <div className="nova-hero-scrim" aria-hidden="true" />

        <div className="relative z-10 grid min-h-[calc(100svh-4.6rem)] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-between px-6 py-9 md:px-10 md:py-12 lg:px-14 lg:py-14 xl:px-16">
            <div className="max-w-[44rem] pt-4 md:pt-7 lg:pt-8">
              <div className="reveal-up flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--accent)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Una nueva forma de vivir la ciudad
                </p>
              </div>

              <h1 className="hero-display reveal-up reveal-delay-1 mt-7 max-w-[10.5ch] text-[clamp(3.45rem,6.5vw,7.5rem)] leading-[0.88] tracking-[-0.06em] text-[#241d17]">
                Residencias modernas para una vida más luminosa.
              </h1>

              <p className="reveal-up reveal-delay-2 mt-7 max-w-[33rem] text-[0.98rem] leading-7 text-[#5e554d] md:text-[1.05rem] md:leading-8">
                Arquitectura contemporánea, balcones abiertos y espacios pensados para vivir con más luz, más calma y una relación más cercana con la ciudad.
              </p>

              <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap items-center gap-4">
                <a className="button button-dark px-6" href="#visita">Agendar visita</a>
                <a className="hero-text-link" href="#residencias">
                  Explorar residencias <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 border-y border-black/12 bg-[#f7f1e8]/70 backdrop-blur-[2px] md:grid-cols-4 lg:bg-transparent lg:backdrop-blur-none">
              {heroFacts.map(([value, label], index) => (
                <div
                  key={label}
                  className={`py-4 pr-4 md:py-5 ${index > 0 ? "md:border-l md:border-black/10 md:pl-5" : ""} ${index % 2 === 1 ? "border-l border-black/10 pl-5 md:border-l" : ""}`}
                >
                  <p className="font-serif text-[1.15rem] font-semibold tracking-[-0.03em] text-[#2a231d] md:text-[1.25rem]">{value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-black/46">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute right-8 top-8 flex items-center gap-3 rounded-full border border-white/35 bg-black/10 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-md xl:right-10 xl:top-10">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Residential concept · 2026
            </div>

            <div className="absolute bottom-10 right-9 max-w-[16rem] border-l border-white/45 pl-4 text-white xl:right-12">
              <p className="font-serif text-2xl leading-[1.05] tracking-[-0.035em]">Horizonte urbano, luz cálida y arquitectura serena.</p>
              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/65">NOVA · Portfolio concept</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
