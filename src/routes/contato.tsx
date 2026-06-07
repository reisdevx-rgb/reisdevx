import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Clock, Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato — ReisDevX" }, { name: "description", content: "Inicie seu projeto digital. Resposta em até 24 horas úteis." }] }),
});

const info = [
  { icon: Mail, t: "Email", v: "reisdevx@gmail.com" },
  { icon: MessageCircle, t: "WhatsApp", v: "+55 73 9999-9999" },
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
      <section className="px-6 lg:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-6">Vamos trabalhar juntos</div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Protocolo <span className="text-[var(--primary)]">de Build</span></h1>
          </ScrollReveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            <StaggerReveal staggerDelay={100}>
              {info.map((i) => (
                <div key={i.t} className="bg-[#111111] p-8 hover:bg-[#161616] transition-colors">
                  <i.icon className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
                  <div className="font-mono-label text-muted-foreground mt-6">{i.t}</div>
                  <div className="font-display font-bold text-lg mt-1">{i.v}</div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <ScrollReveal>
            <form onSubmit={(e) => { e.preventDefault(); alert("Briefing enviado!"); }} className="border border-border p-8 md:p-10 space-y-6 bg-[#111111]/30 backdrop-blur-sm rounded-sm">
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
              <button type="submit" className="w-full md:w-auto bg-[var(--primary)] text-white font-mono-label px-8 py-4 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all rounded-sm">Enviar Briefing</button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <aside className="bg-[#111111] text-foreground p-8 md:p-10 self-start border border-border rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 blur-[40px] rounded-full" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="font-mono-label text-[var(--accent)]">Manifesto do Projeto</div>
                <span className="font-mono-label flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" /> Live</span>
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

      <section className="px-6 lg:px-12 py-24 border-t border-border">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-4">Dúvidas frequentes</div>
            <h2 className="font-display font-black text-5xl md:text-6xl">Perguntas <span className="text-[var(--primary)]">& Respostas</span></h2>
          </ScrollReveal>
          <div className="mt-12 border-t border-border">
            <StaggerReveal staggerDelay={100}>
              {faqs.map((f, i) => (
                <div key={f.q} className="border-b border-border">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between text-left py-6">
                    <span className="font-display font-bold text-lg md:text-xl">{f.q}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-[var(--primary)]" /> : <Plus className="w-5 h-5 text-[var(--primary)]" />}
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
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full border border-border bg-background px-4 py-3 focus:border-[var(--primary)] outline-none rounded-sm transition-colors" />
    </div>
  );
}
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="font-mono-label text-muted-foreground">{label}</label>
      <select required value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full border border-border bg-background px-4 py-3 focus:border-[var(--primary)] outline-none rounded-sm transition-colors">
        <option value="">Selecione...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-background/15 pb-3">
      <span className="text-background/60">{k}</span>
      <span className="text-[var(--gold)] text-right truncate max-w-[60%]">{v || "—"}</span>
    </div>
  );
}
