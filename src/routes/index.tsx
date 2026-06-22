import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { InteractiveDots } from "@/components/InteractiveDots";
import { ArrowRight, ArrowDown, Zap, Shield, Award, HeartHandshake } from "lucide-react";
import barbeariaImg from "@/assets/barbearia.png";
import clinicaImg from "@/assets/clinica-medica.png";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ReisDevX — Engenhando Impérios Digitais" },
      { name: "description", content: "Estúdio de desenvolvimento web premium. Sites de alto impacto, e-commerce, SaaS e landing pages." },
    ],
  }),
});

const stats = [
  { n: "120+", l: "ATENDIMENTO PERSONALIZADO" },
  { n: "98%", l: "Satisfação" },
  { n: "5+", l: "Anos de Experiência" },
  { n: "50+", l: "Clientes Ativos" },
];

const pillars = [
  { icon: Zap, t: "Performance A+", d: "Sites com carregamento abaixo de 1.5 segundos e Core Web Vitals perfeitos." },
  { icon: Shield, t: "Segurança Total", d: "Infraestrutura protegida com SSL, backups automáticos e monitoramento 24/7." },
  { icon: Award, t: "Design Premiado", d: "Interfaces premiadas que combinam estética editorial com conversão real." },
  { icon: HeartHandshake, t: "Suporte Contínuo", d: "Parceria de longo prazo com manutenção, atualizações e evolução constante." },
];

const projects = [
  { name: "Barbearia Clássica", tag: "Institucional", img: barbeariaImg },
  { name: "Clínica Médica", tag: "Institucional", img: clinicaImg },
];

function Index() {
  return (
    <Shell>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 overflow-hidden">
        <InteractiveDots />


        <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30" />
        <div className="relative mx-auto max-w-[1400px] w-full">
          <ScrollReveal delay={100}>
            <h1 className="font-display font-black text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-tighter pl-4 md:pl-8 lg:pl-12 flex flex-col relative z-10 pt-8">
              <span className="relative z-10">ENGENHANDO</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] relative z-30 py-4 -my-4">IMPÉRIOS</span>
              <span className="relative z-0">DIGITAIS</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-4 pl-4 md:pl-8 lg:pl-12">
              <Link to="/contato" className="group inline-flex items-center gap-3 bg-[var(--primary)] text-white font-mono-label px-7 py-4 hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] transition-all rounded-sm">
                ORÇAMENTO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-3 border border-[var(--primary)] text-[var(--primary)] px-7 py-4 font-mono-label hover:bg-[var(--primary)] hover:text-white transition-all rounded-sm">
                Ver Portfólio
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border">
        <StaggerReveal staggerDelay={120} className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} className={`p-10 ${i > 0 ? "md:border-l border-border" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}>
              <div className="font-display font-black text-5xl text-[var(--primary)]">{s.n}</div>
              <div className="font-mono-label mt-2 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* FILOSOFIA */}
      <section className="px-6 lg:px-12 py-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <div className="font-mono-label text-[var(--accent)] mb-6">Nossa Filosofia</div>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
                Código é <span className="text-[var(--primary)]">arquitetura.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-lg text-muted-foreground self-end">
              <p>Tratamos cada projeto como uma obra estrutural. Cada linha de código é uma decisão de engenharia; cada pixel, uma escolha estética deliberada.</p>
              <p>Não construímos apenas sites — construímos instrumentos de dominação digital que geram resultados mensuráveis, crescimento sustentável e presença que impressiona.</p>
              <Link to="/sobre" className="inline-flex items-center gap-2 text-foreground font-mono-label border-b border-[var(--primary)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                Conheça nossa história <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 lg:grid-cols-4">
          <StaggerReveal staggerDelay={120}>
            {pillars.map((p, i) => (
              <div
                key={p.t}
                className={`group relative p-10 cursor-pointer transition-transform duration-500 hover:-translate-y-2 ${i > 0 ? "md:border-l border-border" : ""}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 70%)",
                  }}
                />
                <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)",
                  }}
                />
                <p.icon
                  className="w-8 h-8 text-[var(--primary)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:text-[var(--accent)] group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.6)]"
                  strokeWidth={1.5}
                />
                <h3 className="font-display font-bold text-xl mt-6 transition-colors duration-500 group-hover:text-[var(--primary)]">{p.t}</h3>
                <p className="text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground">{p.d}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="px-6 lg:px-12 py-32 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
              <div>
                <div className="font-mono-label text-[var(--accent)] mb-4">Trabalhos Selecionados</div>
                <h2 className="font-display font-black text-5xl md:text-7xl">Projetos em <span className="text-[var(--primary)]">Destaque</span></h2>
              </div>
              <Link to="/portfolio" className="font-mono-label border-b border-[var(--primary)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">Ver todos os projetos →</Link>
            </div>
          </ScrollReveal>
      <StaggerReveal staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link key={p.name} to="/portfolio" className="group block">
            <div className="aspect-[4/3] overflow-hidden bg-muted rounded-sm">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            </div>
            <h3 className="font-display font-bold text-xl mt-4">{p.name}</h3>
            <div className="font-mono-label text-muted-foreground mt-1 text-sm">{p.tag}</div>
          </Link>
        ))}
      </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-32 border-t border-border bg-card text-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-[1400px] text-center relative z-10">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-6">Pronto para começar?</div>
            <h2 className="font-display font-black text-5xl md:text-7xl">Vamos construir <span className="text-[var(--primary)]">juntos.</span></h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">Transforme sua visão em realidade digital. Nossa equipe está pronta para criar algo extraordinário.</p>
            <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-[var(--primary)] text-white font-mono-label px-8 py-4 hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] transition-all rounded-sm">
              ORÇAMENTO <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Shell>
  );
}
