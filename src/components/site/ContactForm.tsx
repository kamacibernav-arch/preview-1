import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./motion";

const needs = ["Neue Website", "Relaunch", "Sonstige Anfrage"];
const types = ["Unternehmenswebsite", "Onepager / Landingpage", "Website mit Blog / News", "Noch unklar"];

const step1 = z.object({
  need: z.string().min(1, "Bitte wähle aus, was du benötigst."),
  industry: z.string().trim().min(1, "Bitte gib deine Branche an.").max(100, "Maximal 100 Zeichen."),
  site_type: z.string().min(1, "Bitte wähle eine Art von Website."),
});
const step2 = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(100, "Maximal 100 Zeichen."),
  company: z.string().trim().max(150, "Maximal 150 Zeichen."),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().max(40, "Maximal 40 Zeichen.").regex(/^[0-9+()\/\s-]*$/, "Bitte nur Ziffern und + ( ) / - verwenden."),
  message: z.string().trim().min(10, "Bitte beschreibe dein Projekt in mindestens 10 Zeichen.").max(3000, "Maximal 3000 Zeichen."),
});

type Data = z.infer<typeof step1> & z.infer<typeof step2> & { privacy: boolean };
const empty: Data = { need: "", industry: "", site_type: "", name: "", company: "", email: "", phone: "", message: "", privacy: false };

export function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = (schema: z.ZodTypeAny) => {
    const r = schema.safeParse(data);
    if (r.success) { setErrors({}); return true; }
    const errs: Partial<Record<keyof Data, string>> = {};
    for (const i of r.error.issues) errs[String(i.path[0]) as keyof Data] ??= i.message;
    setErrors(errs);
    return false;
  };

  const next = () => {
    if (step === 0 && validate(step1)) setStep(1);
    if (step === 1 && validate(step2)) setStep(2);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) return next();
    if (!data.privacy) { setErrors({ privacy: "Bitte bestätige die Datenschutzhinweise." }); return; }
    setStatus("sending");
    const { error } = await supabase.from("project_inquiries").insert({
      need: data.need,
      industry: data.industry.trim(),
      site_type: data.site_type,
      name: data.name.trim(),
      company: data.company.trim() || null,
      email: data.email.trim(),
      phone: data.phone.trim() || null,
      message: data.message.trim(),
      privacy_accepted: true,
    });
    setStatus(error ? "error" : "done");
  };

  const labels = ["Projekt", "Kontakt", "Absenden"];

  return (
    <section id="kontakt" className="surface-dark relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="glow-electric absolute -right-40 top-0 h-[600px] w-[600px] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal as="p" className="eyebrow flex items-center gap-3 text-lime"><span>05</span><span className="h-px w-8 bg-current" /> Kontakt</Reveal>
          <Reveal as="h2" className="mt-8 text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.95]">
            Lass uns deine Website auf das <em className="font-normal italic text-lime">nächste Level</em> bringen.
          </Reveal>
          <Reveal as="p" delay={120} className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Du hast eine Idee, möchtest deine bestehende Website modernisieren oder brauchst einen komplett neuen Auftritt? Wir sprechen unverbindlich über dein Projekt.
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-ink-soft/80 p-6 shadow-float backdrop-blur sm:p-10">
            {status === "done" ? (
              <div className="py-10 text-center" role="status">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-lime-ink"><Check className="h-8 w-8" /></span>
                <h3 className="mt-6 text-3xl font-semibold">Danke, {data.name.split(" ")[0]}!</h3>
                <p className="mx-auto mt-3 max-w-sm text-muted-foreground">Deine Anfrage ist bei uns eingegangen. Wir melden uns persönlich bei dir.</p>
                <button className="btn btn-ghost mt-8" onClick={() => { setData(empty); setStep(0); setStatus("idle"); }}>Neue Anfrage</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <ol className="mb-10 grid grid-cols-3 gap-2" aria-label="Fortschritt">
                  {labels.map((l, i) => (
                    <li key={l} aria-current={i === step ? "step" : undefined}>
                      <div className="h-1 overflow-hidden rounded-full bg-paper/10">
                        <div className={`h-full bg-lime transition-all duration-700 ${i <= step ? "w-full" : "w-0"}`} />
                      </div>
                      <p className={`eyebrow mt-3 !text-[10px] ${i === step ? "text-paper" : "text-muted-foreground"}`}>0{i + 1} · {l}</p>
                    </li>
                  ))}
                </ol>

                {step === 0 && (
                  <div className="fade-up space-y-8">
                    <Choice legend="Was wird benötigt?" name="need" options={needs} value={data.need} onChange={(v) => set("need", v)} error={errors.need} />
                    <Field label="Welche Branche?" error={errors.industry} id="industry">
                      <input id="industry" className="field" placeholder="z. B. Handwerk, Gastronomie, Beratung" value={data.industry} onChange={(e) => set("industry", e.target.value)} maxLength={100} />
                    </Field>
                    <Choice legend="Welche Art von Website?" name="site_type" options={types} value={data.site_type} onChange={(v) => set("site_type", v)} error={errors.site_type} />
                  </div>
                )}

                {step === 1 && (
                  <div className="fade-up grid gap-6 sm:grid-cols-2">
                    <Field label="Name *" id="name" error={errors.name}><input id="name" autoComplete="name" className="field" value={data.name} onChange={(e) => set("name", e.target.value)} maxLength={100} /></Field>
                    <Field label="Unternehmen (optional)" id="company" error={errors.company}><input id="company" autoComplete="organization" className="field" value={data.company} onChange={(e) => set("company", e.target.value)} maxLength={150} /></Field>
                    <Field label="E-Mail-Adresse *" id="email" error={errors.email}><input id="email" type="email" autoComplete="email" className="field" value={data.email} onChange={(e) => set("email", e.target.value)} maxLength={255} /></Field>
                    <Field label="Telefon (optional)" id="phone" error={errors.phone}><input id="phone" type="tel" autoComplete="tel" className="field" value={data.phone} onChange={(e) => set("phone", e.target.value)} maxLength={40} /></Field>
                    <div className="sm:col-span-2">
                      <Field label="Nachricht & Projektvorstellungen *" id="message" error={errors.message}>
                        <textarea id="message" rows={5} className="field resize-y" value={data.message} onChange={(e) => set("message", e.target.value)} maxLength={3000} />
                      </Field>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="fade-up">
                    <dl className="divide-y divide-border rounded-2xl border border-border">
                      {([
                        ["Bedarf", data.need], ["Branche", data.industry], ["Website-Art", data.site_type],
                        ["Name", data.name], ["Unternehmen", data.company || "–"], ["E-Mail", data.email],
                        ["Telefon", data.phone || "–"], ["Nachricht", data.message],
                      ] as const).map(([k, v]) => (
                        <div key={k} className="grid grid-cols-3 gap-4 px-5 py-3 text-sm">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="col-span-2 whitespace-pre-line break-words">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <input type="checkbox" className="mt-1 h-4 w-4 accent-lime" checked={data.privacy} onChange={(e) => set("privacy", e.target.checked)} aria-invalid={!!errors.privacy} />
                      <span>
                        Ich habe die <Link to="/datenschutz" target="_blank" className="text-paper underline underline-offset-4">Datenschutzerklärung</Link> zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage und zur Kontaktaufnahme gespeichert und verarbeitet werden. Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen.
                      </span>
                    </label>
                    {errors.privacy && <p className="mt-2 text-sm text-destructive">{errors.privacy}</p>}
                    {status === "error" && (
                      <p role="alert" className="mt-4 rounded-xl border border-destructive/50 p-4 text-sm text-destructive">
                        Deine Anfrage konnte leider nicht gesendet werden. Bitte prüfe deine Verbindung und versuche es erneut.
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-10 flex items-center justify-between gap-4">
                  {step > 0 ? (
                    <button type="button" className="btn btn-ghost" onClick={() => setStep((s) => s - 1)}><ArrowLeft className="h-4 w-4" /> Zurück</button>
                  ) : <span />}
                  <button type="submit" className="btn btn-lime" disabled={status === "sending"}>
                    {step < 2 ? <>Weiter <ArrowRight className="h-4 w-4" /></> : status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet…</> : <>Projektanfrage senden <ArrowRight className="h-4 w-4" /></>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted-foreground">{label}</label>
      {children}
      {error && <p className="mt-2 text-sm text-destructive" id={`${id}-error`}>{error}</p>}
    </div>
  );
}

function Choice({ legend, name, options, value, onChange, error }: { legend: string; name: string; options: string[]; value: string; onChange: (v: string) => void; error?: string | undefined }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-muted-foreground">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm transition has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-lime ${value === o ? "border-lime bg-lime text-lime-ink" : "border-border hover:border-paper/40"}`}>
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
            {o}
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </fieldset>
  );
}
