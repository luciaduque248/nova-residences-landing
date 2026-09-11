"use client";

import { useMemo, useState } from "react";

const homes = [
  { id: "n01", label: "N01 · Essential", price: 480_000_000 },
  { id: "n02", label: "N02 · Balance", price: 635_000_000 },
  { id: "n03", label: "N03 · Panorama", price: 790_000_000 },
] as const;

const money = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export function FinancingEstimator() {
  const [homeId, setHomeId] = useState<(typeof homes)[number]["id"]>("n02");
  const [downPayment, setDownPayment] = useState(30);
  const [months, setMonths] = useState(180);

  const selected = homes.find((home) => home.id === homeId) ?? homes[1];
  const result = useMemo(() => {
    const initial = selected.price * (downPayment / 100);
    const financed = selected.price - initial;
    const monthlyCapital = financed / months;
    return { initial, financed, monthlyCapital };
  }, [downPayment, months, selected]);

  return (
    <div className="rounded-[2rem] border border-black/10 bg-[var(--background)] p-5 shadow-[0_30px_90px_rgba(21,20,18,.08)] md:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.17em] text-[var(--accent)]">Demo interactiva</p>
          <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">Explora un escenario</h3>
        </div>
        <span className="rounded-full border border-black/10 px-3 py-2 text-xs text-[var(--muted)]">Valores ficticios</span>
      </div>

      <div className="grid gap-8 py-8 md:grid-cols-2">
        <label className="grid gap-3 text-sm font-medium">
          Tipología
          <select
            className="min-h-12 rounded-xl border border-black/15 bg-[var(--surface)] px-4 outline-none transition focus:border-[var(--accent)]"
            value={homeId}
            onChange={(event) => setHomeId(event.target.value as (typeof homes)[number]["id"])}
          >
            {homes.map((home) => (
              <option key={home.id} value={home.id}>{home.label}</option>
            ))}
          </select>
        </label>
        <div>
          <p className="text-sm font-medium">Valor demostrativo</p>
          <p className="mt-3 text-3xl font-medium tracking-[-0.04em]">{money.format(selected.price)}</p>
        </div>
      </div>

      <div className="grid gap-8 border-t border-black/10 py-8 md:grid-cols-2">
        <label className="grid gap-4 text-sm font-medium">
          <span className="flex justify-between gap-4"><span>Cuota inicial</span><strong>{downPayment}%</strong></span>
          <input
            type="range"
            min="20"
            max="50"
            step="5"
            value={downPayment}
            onChange={(event) => setDownPayment(Number(event.target.value))}
            aria-label="Porcentaje de cuota inicial"
          />
        </label>
        <label className="grid gap-4 text-sm font-medium">
          <span className="flex justify-between gap-4"><span>Plazo ilustrativo</span><strong>{months} meses</strong></span>
          <input
            type="range"
            min="120"
            max="240"
            step="12"
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
            aria-label="Plazo ilustrativo en meses"
          />
        </label>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-3">
        <Result label="Cuota inicial" value={money.format(result.initial)} />
        <Result label="Capital restante" value={money.format(result.financed)} />
        <Result label="Capital / mes" value={money.format(result.monthlyCapital)} />
      </div>

      <p className="mt-6 text-xs leading-5 text-[var(--muted)]">
        Demostración UX sin validez financiera. El cálculo divide el capital restante entre el plazo seleccionado y no incluye intereses, seguros, impuestos, escrituración ni otros costos.
      </p>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--surface)] p-5">
      <p className="text-xs uppercase tracking-[0.13em] text-[var(--muted)]">{label}</p>
      <p className="mt-3 text-lg font-medium tracking-[-0.02em]">{value}</p>
    </div>
  );
}
