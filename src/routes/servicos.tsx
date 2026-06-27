import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { Globe, ShoppingBag, BarChart3, Layers, Smartphone, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => {
    const title = "Serviços — Criação de Sites, E-commerce e Landing Pages | ReisDevX";
    const description = "Serviços de criação de sites institucionais, e-commerce, landing pages de alta conversão, plataformas SaaS, web apps e design de interfaces. Soluções digitais sob medida.";
    const url = "https://reisdevx.com.br/servicos";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "criação de sites, e-commerce, landing pages, SaaS, web apps, design de interfaces, desenvolvimento web" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});


const services = [
  { n: "01", icon: Globe, t: "Sites Institucionais", s: "Presença digital de alto impacto", m: "< 1.5s", l: "Tempo de carregamento" },
  { n: "02", icon: ShoppingBag, t: "E-commerce", s: "Lojas que vendem enquanto você dorme", m: "+340%", l: "Aumento médio em conversão" },
  { n: "03", icon: BarChart3, t: "Plataformas SaaS", s: "Software que escala sem limites", m: "99.9%", l: "SLA de uptime garantido" },
  { n: "04", icon: Layers, t: "Landing Pages", s: "Páginas que convertem com cirurgia", m: "4.8x", l: "ROI médio dos clientes" },
  { n: "05", icon: Smartphone, t: "Web Apps", s: "Aplicações com alma de produto", m: "60fps", l: "Fluidez de interface" },
  { n: "06", icon: Compass, t: "Consultoria Digital", s: "Estratégia antes de execução", m: "2 sem.", l: "Prazo de entrega do diagnóstico" },
];

const process = [
  { n: "01", t: "Discovery", d: "Entendemos profundamente seu negócio, objetivos, público e mercado antes de escrever uma linha de código." },
  { n: "02", t: "Estratégia", d: "Definimos arquitetura, stack tecnológico, cronograma e entregáveis com total transparência." },
  { n: "03", t: "Execução", d: "Design e desenvolvimento em ciclos ágeis com revisões semanais e entregas incrementais." },
  { n: "04", t: "Lançamento", d: "Deploy com testes completos, treinamento da equipe e suporte no pós-lançamento." },
];

function Servicos() {
  return (
    <Shell>
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <div className="font-mono-label text-[var(--accent)] mb-6">O que fazemos</div>
              <h1 className="font-display text-4xl font-black leading-[1] sm:text-5xl md:text-7xl">Nossos <span className="text-[var(--primary)]">Serviços</span></h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-muted-foreground">Soluções digitais de alta engenharia para empresas que se recusam a ser medianas. Clique em cada serviço para ver os detalhes completos.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <StaggerReveal staggerDelay={80}>
            {services.map((s) => (
              <div key={s.n} className="border-b border-border group hover:bg-card transition-colors">
                <div className="grid grid-cols-[34px_24px_minmax(0,1fr)_24px] items-center gap-3 px-4 py-7 sm:px-6 md:grid-cols-[90px_42px_minmax(0,1fr)_180px_32px] md:gap-6 md:py-10 lg:grid-cols-[120px_60px_minmax(0,1fr)_220px_40px] lg:px-12">
                  <div className="font-display text-xl font-black text-foreground/10 transition-colors group-hover:text-[var(--primary)] md:text-4xl">{s.n}</div>
                  <s.icon className="h-5 w-5 shrink-0 text-[var(--primary)] md:h-6 md:w-6" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold sm:text-2xl md:text-3xl">{s.t}</h3>
                    <div className="font-mono-label text-muted-foreground mt-1 group-hover:text-muted-foreground/80">{s.s}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="font-display font-black text-3xl text-[var(--accent)] group-hover:text-[var(--primary)] transition-colors">{s.m}</div>
                    <div className="font-mono-label text-muted-foreground group-hover:text-muted-foreground/80">{s.l}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[var(--primary)] opacity-30 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Como trabalhamos</div>
              <h2 className="font-display text-4xl font-black sm:text-5xl md:text-6xl">Nosso <span className="text-[var(--primary)]">Processo</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            <StaggerReveal staggerDelay={120}>
              {process.map((p, idx) => {
                const animations = [
                  // 01 - Sweep light bar bottom→top + number lift
                  {
                    card: "group relative overflow-hidden bg-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:bg-secondary",
                    extra: (
                      <>
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent transition-all duration-700 ease-out group-hover:h-full" />
                        <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--primary)] shadow-[0_0_12px_var(--primary)] transition-all duration-700 group-hover:w-full" />
                      </>
                    ),
                    num: "font-display font-black text-5xl text-[var(--primary)] transition-transform duration-500 group-hover:-translate-y-1",
                    title: "font-display font-bold text-xl mt-6 transition-colors duration-500",
                    desc: "text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground",
                  },
                  // 02 - Diagonal shine sweep + number tilt
                  {
                    card: "group relative overflow-hidden bg-card p-6 sm:p-8 lg:p-10 transition-colors duration-500 hover:bg-secondary",
                    extra: (
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--primary)]/25 to-transparent skew-x-12 transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                    ),
                    num: "font-display font-black text-5xl text-[var(--primary)] inline-block transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",
                    title: "font-display font-bold text-xl mt-6 transition-all duration-500 group-hover:tracking-wide",
                    desc: "text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground",
                  },
                  // 03 - Radial glow + glitch shift on number
                  {
                    card: "group relative overflow-hidden bg-card p-6 sm:p-8 lg:p-10 transition-colors duration-500 hover:bg-secondary",
                    extra: (
                      <span
                        className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                        style={{ background: "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary) 50%, transparent), transparent 60%)" }}
                      />
                    ),
                    num: "font-display font-black text-5xl text-[var(--primary)] transition-all duration-500 group-hover:drop-shadow-[0_0_18px_var(--primary)] group-hover:[text-shadow:2px_0_0_var(--accent),-2px_0_0_var(--primary)]",
                    title: "font-display font-bold text-xl mt-6 transition-colors duration-500 group-hover:text-[var(--primary)]",
                    desc: "text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground",
                  },
                  // 04 - Border draw + lift + scaling number
                  {
                    card: "group relative overflow-hidden bg-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-secondary hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.5)]",
                    extra: (
                      <>
                        <span className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
                        <span className="pointer-events-none absolute top-0 right-0 h-0 w-[2px] bg-[var(--primary)] transition-all duration-300 delay-300 group-hover:h-full" />
                        <span className="pointer-events-none absolute bottom-0 right-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 delay-[600ms] group-hover:w-full" />
                        <span className="pointer-events-none absolute bottom-0 left-0 h-0 w-[2px] bg-[var(--primary)] transition-all duration-300 delay-[900ms] group-hover:h-full" />
                      </>
                    ),
                    num: "font-display font-black text-5xl text-[var(--primary)] inline-block transition-transform duration-500 group-hover:scale-125",
                    title: "font-display font-bold text-xl mt-6 transition-colors duration-500",
                    desc: "text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground",
                  },
                ];
                const a = animations[3];
                return (
                  <div key={p.n} className={a.card}>
                    {a.extra}
                    <div className="relative">
                      <div className={a.num}>{p.n}</div>
                      <h3 className={a.title}>{p.t}</h3>
                      <p className={a.desc}>{p.d}</p>
                    </div>
                  </div>
                );
              })}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 text-center sm:px-6 md:py-24 lg:px-12">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">Qual serviço se encaixa <span className="text-[var(--primary)]">no seu projeto?</span></h2>
          <Link to="/contato" className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] sm:w-auto sm:px-8">
            Falar com especialista
          </Link>
        </ScrollReveal>
      </section>
    </Shell>
  );
}
