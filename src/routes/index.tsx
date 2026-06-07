import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
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
  { n: "120+", l: "Projetos Entregues" },
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

        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <img src="https://media.base44.com/images/public/6a06181e699e1013b54b0ee8/172840bd6_generated_f86f8b28.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="relative mx-auto max-w-[1400px] w-full">
          <ScrollReveal delay={100}>
            <h1 className="font-display font-black text-[clamp(3rem,11vw,11rem)] leading-[0.88] tracking-tighter pl-4 md:pl-8 lg:pl-12">
              <span className="block">ENGENHANDO</span>
              <span className="block text-[var(--gold)]">IMPÉRIOS</span>
              <span className="block">DIGITAIS</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-4 pl-4 md:pl-8 lg:pl-12">
              <Link to="/contato" className="group inline-flex items-center gap-3 bg-foreground text-background font-mono-label px-7 py-4 hover:bg-[var(--gold)] hover:text-foreground transition-colors">
                ORÇAMENTO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 font-mono-label hover:border-foreground transition-colors">
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
              <div className="font-display font-black text-5xl text-[var(--gold)]">{s.n}</div>
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
              <div className="font-mono-label text-[var(--gold)] mb-6">Nossa Filosofia</div>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
                Código é <span className="text-[var(--gold)]">arquitetura.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-lg text-muted-foreground self-end">
              <p>Tratamos cada projeto como uma obra estrutural. Cada linha de código é uma decisão de engenharia; cada pixel, uma escolha estética deliberada.</p>
              <p>Não construímos apenas sites — construímos instrumentos de dominação digital que geram resultados mensuráveis, crescimento sustentável e presença que impressiona.</p>
              <Link to="/sobre" className="inline-flex items-center gap-2 text-foreground font-mono-label border-b border-foreground pb-1 hover:text-[var(--gold)] hover:border-[var(--gold)]">
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
              <div key={p.t} className={`p-10 ${i > 0 ? "md:border-l border-border" : ""}`}>
                <p.icon className="w-8 h-8 text-[var(--gold)]" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-xl mt-6">{p.t}</h3>
                <p className="text-muted-foreground mt-3 text-sm">{p.d}</p>
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
                <div className="font-mono-label text-[var(--gold)] mb-4">Trabalhos Selecionados</div>
                <h2 className="font-display font-black text-5xl md:text-7xl">Projetos em <span className="text-[var(--gold)]">Destaque</span></h2>
              </div>
              <Link to="/portfolio" className="font-mono-label border-b border-foreground pb-1 hover:text-[var(--gold)] hover:border-[var(--gold)]">Ver todos os projetos →</Link>
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
      <section className="px-6 lg:px-12 py-32 border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] text-center">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--gold)] mb-6">Pronto para começar?</div>
            <h2 className="font-display font-black text-5xl md:text-7xl">Vamos construir <span className="text-[var(--gold)]">juntos.</span></h2>
            <p className="text-background/70 mt-6 max-w-2xl mx-auto text-lg">Transforme sua visão em realidade digital. Nossa equipe está pronta para criar algo extraordinário.</p>
            <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-[var(--gold)] text-foreground font-mono-label px-8 py-4 hover:bg-background hover:text-foreground transition-colors">
              ORÇAMENTO <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Shell>
  );
}
