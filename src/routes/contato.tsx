import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Clock, Plus, Minus } from "lucide-react";

const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c94d2506-05a1-40c8-97e6-8a0d25708473/id-preview-2214b6eb--02354174-23e9-4072-9351-fd9ed3778f57.lovable.app-1783364748371.png";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => {
    const title = "Contato | Solicite um Orçamento de Site — ReisDevX";
    const description = "Fale com a ReisDevX e receba um orçamento para criação de site, landing page, loja virtual ou sistema web. Resposta em até 24 horas úteis.";
    const url = "https://reisdevx.com.br/contato";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://reisdevx.com.br/" },
              { "@type": "ListItem", position: 2, name: "Contato", item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato ReisDevX",
            url,
            inLanguage: "pt-BR",
            mainEntity: {
              "@type": "Organization",
              name: "ReisDevX",
              email: "reisdevx@gmail.com",
              telephone: "+55 73 98831-7569",
              areaServed: { "@type": "Country", name: "Brasil" },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Qual o prazo médio de entrega?", acceptedAnswer: { "@type": "Answer", text: "Sites institucionais entre 3 e 6 semanas. E-commerce entre 6 e 10 semanas. SaaS varia conforme escopo, com média de 3 a 6 meses." } },
              { "@type": "Question", name: "Vocês oferecem suporte pós-entrega?", acceptedAnswer: { "@type": "Answer", text: "Sim. Todos os projetos incluem 30 dias de suporte gratuito. Após esse período, oferecemos planos mensais de manutenção e evolução." } },
              { "@type": "Question", name: "Como funciona o processo de pagamento?", acceptedAnswer: { "@type": "Answer", text: "Trabalhamos com 50% de entrada para início e 50% na entrega final. Para projetos maiores, dividimos em marcos com pagamentos parcelados." } },
              { "@type": "Question", name: "Posso pedir revisões durante o projeto?", acceptedAnswer: { "@type": "Answer", text: "Sim. Cada fase contempla rodadas de revisão. Solicitações fora do escopo inicial são orçadas como adicionais transparentes." } },
            ],
          }),
        },
      ],
    };
  },
});


const info = [
  { icon: Mail, t: "Email", v: "reisdevx@gmail.com" },
  { icon: MessageCircle, t: "WhatsApp", v: "+55 73 98831-7569" },
  { icon: MapPin, t: "Localização", v: "Itanhém, Brasil" },
  { icon: Clock, t: "Resposta", v: "Em até 24 horas úteis" },
];

const faqs = [
  { q: "Qual o prazo médio de entrega?", a: "Sites institucionais entre 3 e 6 semanas. E-commerce entre 6 e 10 semanas. SaaS varia conforme escopo, com média de 3 a 6 meses." },
  { q: "Vocês oferecem suporte pós-entrega?", a: "Sim. Todos os projetos incluem 30 dias de suporte gratuito. Após esse período, oferecemos planos mensais de manutenção e evolução." },
  { q: "Como funciona o processo de pagamento?", a: "Trabalhamos com 50% de entrada para início e 50% na entrega final. Para projetos maiores, dividimos em marcos com pagamentos parcelados." },
  { q: "Posso pedir revisões durante o projeto?", a: "Sim. Cada fase contempla rodadas de revisão. Solicitações fora do escopo inicial são orçadas como adicionais transparentes." },
];

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", prazo: "", tipo: "", investimento: "", briefing: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const upd = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <Shell>
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-6">Vamos trabalhar juntos</div>
            <h1 className="font-display text-4xl font-black leading-[1] sm:text-5xl md:text-7xl">Protocolo <span className="text-[var(--primary)]">de Build</span></h1>
          </ScrollReveal>
          <div className="mt-12 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2 lg:grid-cols-4">
            <StaggerReveal staggerDelay={100}>
              {info.map((i) => (
                <div key={i.t} className="bg-card p-6 transition-colors hover:bg-secondary sm:p-8">
                  <i.icon className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
                  <div className="font-mono-label text-muted-foreground mt-6">{i.t}</div>
                  <div className="mt-1 font-display text-lg font-bold break-words">{i.v}</div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,1fr)] lg:gap-12">
          <ScrollReveal>
            <form onSubmit={(e) => { e.preventDefault(); alert("Briefing enviado!"); }} className="space-y-6 rounded-sm border border-border bg-card/30 p-5 backdrop-blur-sm sm:p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Nome completo *" value={form.nome} onChange={(v) => upd("nome", v)} required />
                <Field label="Email corporativo *" type="email" value={form.email} onChange={(v) => upd("email", v)} required />
                <Field label="Empresa" value={form.empresa} onChange={(v) => upd("empresa", v)} />
                <Field label="Prazo desejado" value={form.prazo} onChange={(v) => upd("prazo", v)} />
                <Select label="Tipo de projeto *" value={form.tipo} onChange={(v) => upd("tipo", v)} options={["Site Institucional", "E-commerce", "Plataforma SaaS", "Landing Page", "Web App", "Consultoria Digital", "Outro"]} />
                <Select label="Investimento estimado *" value={form.investimento} onChange={(v) => upd("investimento", v)} options={["Até R$ 5.000", "R$ 5.000 – R$ 15.000", "R$ 15.000 – R$ 30.000", "R$ 30.000 – R$ 60.000", "Acima de R$ 60.000"]} />
              </div>
              <div>
                <label className="font-mono-label text-muted-foreground">Briefing do projeto *</label>
                <textarea required rows={6} value={form.briefing} onChange={(e) => upd("briefing", e.target.value)} className="mt-2 w-full border border-border bg-background px-4 py-3 focus:border-[var(--primary)] outline-none rounded-sm transition-colors" />
              </div>
              <button type="submit" className="w-full rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] md:w-auto md:px-8">Enviar Briefing</button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <aside className="relative self-start overflow-hidden rounded-sm border border-border bg-card p-5 text-foreground sm:p-8 md:p-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 blur-[40px] rounded-full" />
              <div className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <div className="font-mono-label text-[var(--accent)]">Manifesto do Projeto</div>
                <span className="flex shrink-0 items-center gap-2 font-mono-label"><span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" /> Live</span>
              </div>
              <div className="mt-8 space-y-5 font-mono text-sm">
                <Row k="CLIENTE" v={form.nome} />
                <Row k="EMAIL" v={form.email} />
                <Row k="ORGANIZAÇÃO" v={form.empresa} />
                <Row k="SERVIÇO" v={form.tipo} />
                <Row k="ORÇAMENTO" v={form.investimento} />
                <Row k="PRAZO" v={form.prazo} />
              </div>
              {!form.nome && !form.email && (
                <div className="font-mono-label text-foreground/20 mt-10">Aguardando preenchimento</div>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-4">Dúvidas frequentes</div>
            <h2 className="font-display text-4xl font-black sm:text-5xl md:text-6xl">Perguntas <span className="text-[var(--primary)]">& Respostas</span></h2>
          </ScrollReveal>
          <div className="mt-12 border-t border-border">
            <StaggerReveal staggerDelay={100}>
              {faqs.map((f, i) => (
                <div key={f.q} className="border-b border-border">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 text-left">
                    <span className="font-display text-lg font-bold md:text-xl">{f.q}</span>
                    {openFaq === i ? <Minus className="h-5 w-5 shrink-0 text-[var(--primary)]" /> : <Plus className="h-5 w-5 shrink-0 text-[var(--primary)]" />}
                  </button>
                  {openFaq === i && <p className="text-muted-foreground pb-6 max-w-2xl">{f.a}</p>}
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono-label text-muted-foreground">{label}</label>
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--primary)]" />
    </div>
  );
}
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="font-mono-label text-muted-foreground">{label}</label>
      <select required value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-[var(--primary)]">
        <option value="">Selecione...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 border-b border-foreground/5 pb-3">
      <span className="text-foreground/40">{k}</span>
      <span className="text-right font-bold text-[var(--primary)] break-words">{v || "—"}</span>
    </div>
  );
}
