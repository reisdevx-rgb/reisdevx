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
              {process.map((p) => (
                 <div key={p.n} className="bg-card p-6 transition-colors hover:bg-secondary sm:p-8 lg:p-10">
                  <div className="font-display font-black text-5xl text-[var(--primary)]">{p.n}</div>
                  <h3 className="font-display font-bold text-xl mt-6">{p.t}</h3>
                  <p className="text-muted-foreground mt-3 text-sm">{p.d}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 text-center sm:px-6 md:py-24 lg:px-12">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">Qual serviço se encaixa <span className="text-[var(--primary)]">no seu projeto?</span></h2>
          <Link to="/contato" className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] sm:w-auto sm:px-8">
            Falar com especialista <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </Shell>
  );
}
