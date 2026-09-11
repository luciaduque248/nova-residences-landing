"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-7 md:p-10" aria-live="polite">
        <p className="text-xs uppercase tracking-[0.17em] text-[var(--sand)]">Demo completada</p>
        <h3 className="mt-4 text-4xl font-medium tracking-[-0.04em]">Gracias por recorrer NOVA.</h3>
        <p className="mt-5 max-w-xl leading-7 text-white/60">
          En una implementación real, este sería el punto de confirmación y conexión con CRM, calendario o asesor comercial. Aquí no guardamos ni enviamos datos.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full border border-white/25 px-5 py-3 text-sm transition hover:border-white"
          onClick={() => setSubmitted(false)}
        >
          Probar de nuevo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-5 md:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
        <Field label="Correo" name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" required />
        <Field label="Teléfono" name="phone" type="tel" autoComplete="tel" placeholder="+57 300 000 0000" required />
        <label className="grid gap-2 text-sm text-white/75">
          Tipología de interés
          <select name="typology" defaultValue="" required className="form-control">
            <option value="" disabled>Selecciona una opción</option>
            <option value="n01">N01 · Essential</option>
            <option value="n02">N02 · Balance</option>
            <option value="n03">N03 · Panorama</option>
            <option value="unsure">Quiero asesoría</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm text-white/75">
        ¿Qué te gustaría conocer?
        <textarea
          name="message"
          rows={4}
          className="form-control resize-none"
          placeholder="Cuéntanos qué información quieres explorar en esta demo."
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/55">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--sand)]" />
        <span>Entiendo que NOVA Residences es un caso ficticio de portafolio y que este formulario no enviará mis datos.</span>
      </label>

      <div className="mt-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
        <p className="max-w-sm text-xs leading-5 text-white/45">Sin CRM, sin tracking y sin almacenamiento de información personal en esta demo.</p>
        <button type="submit" className="button bg-[var(--paper)] text-[var(--ink)] hover:bg-white">Solicitar recorrido</button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm text-white/75">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="form-control"
      />
    </label>
  );
}
