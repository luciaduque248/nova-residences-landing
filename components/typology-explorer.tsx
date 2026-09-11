"use client";

import { useState } from "react";

const homes = [
  {
    id: "n01",
    code: "N01",
    name: "Essential",
    area: "54 m²",
    rooms: "1 habitación · 1 baño",
    copy: "Compacto, luminoso y flexible. Una planta pensada para una vida urbana simple, con una zona social continua y una terraza que amplía la experiencia.",
    plan: "/floorplans/n01.svg",
  },
  {
    id: "n02",
    code: "N02",
    name: "Balance",
    area: "78 m²",
    rooms: "2 habitaciones · 2 baños",
    copy: "La tipología central del proyecto. Separa con claridad el descanso de la vida social y suma un segundo ambiente adaptable para trabajo, invitados o familia.",
    plan: "/floorplans/n02.svg",
  },
  {
    id: "n03",
    code: "N03",
    name: "Panorama",
    area: "112 m²",
    rooms: "3 habitaciones · 3 baños",
    copy: "Más amplitud, más privacidad y una relación directa con el paisaje. La terraza se convierte en la extensión natural de la sala y el comedor.",
    plan: "/floorplans/n03.svg",
  },
] as const;

type HomeId = (typeof homes)[number]["id"];

export function TypologyExplorer() {
  const [activeId, setActiveId] = useState<HomeId>("n02");
  const active = homes.find((home) => home.id === activeId) ?? homes[1];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-14">
      <div className="flex flex-col justify-between">
        <div>
          <p className="eyebrow text-[var(--sand)]">02 · Residencias</p>
          <h2 className="mt-5 max-w-xl text-5xl font-medium leading-[.94] tracking-[-0.05em] md:text-7xl">Tres formas de habitar.</h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/58">Selecciona una tipología para explorar su distribución conceptual. Los planos y datos son ficticios y hacen parte del caso de estudio.</p>
        </div>

        <div className="mt-10 grid gap-2">
          {homes.map((home) => {
            const selected = home.id === activeId;
            return (
              <button
                key={home.id}
                type="button"
                onClick={() => setActiveId(home.id)}
                aria-pressed={selected}
                className={`group flex items-center justify-between rounded-[1.15rem] border px-5 py-5 text-left transition duration-300 ${selected ? "border-white/24 bg-white/[0.08]" : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.035]"}`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">{home.code}</p>
                  <p className="mt-1 text-xl font-medium tracking-[-0.025em]">{home.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[var(--sand)]">{home.area}</p>
                  <p className="mt-1 text-xs text-white/40">{home.rooms}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#201d19] shadow-[0_40px_100px_rgba(0,0,0,.18)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">Plano conceptual</p>
            <h3 className="mt-1 text-2xl font-medium tracking-[-0.03em]">{active.code} · {active.name}</h3>
          </div>
          <span className="rounded-full border border-white/12 px-3 py-2 text-xs text-white/50">{active.area}</span>
        </div>

        <div className="grid gap-0 md:grid-cols-[1fr_0.78fr]">
          <div className="bg-[#f0e9de] p-5 md:p-7">
            <img
              key={active.plan}
              src={active.plan}
              alt={`Plano conceptual de la tipología ${active.code} ${active.name}`}
              className="h-full min-h-[420px] w-full object-contain transition-opacity duration-300"
            />
          </div>
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--sand)]">Distribución</p>
              <p className="mt-5 text-3xl font-medium tracking-[-0.04em]">{active.rooms}</p>
              <p className="mt-5 text-sm leading-7 text-white/58">{active.copy}</p>
            </div>
            <a href="#visita" className="mt-10 inline-flex w-fit border-b border-white/28 pb-1 text-sm transition hover:border-white">Solicitar información</a>
          </div>
        </div>
      </div>
    </div>
  );
}
