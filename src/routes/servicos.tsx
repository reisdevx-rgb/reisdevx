import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { Globe, ShoppingBag, BarChart3, Layers, Smartphone, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({ meta: [{ title: "Serviços — ReisDevX" }, { name: "description", content: "Sites institucionais, e-commerce, plataformas SaaS, landing pages, web apps e consultoria digital." }] }),
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
      <section className="px-6 lg:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16 items-end">
          <ScrollReveal>
            <div>
              <div className="font-mono-label text-[var(--accent)] mb-6">O que fazemos</div>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Nossos <span className="text-[var(--primary)]">Serviços</span></h1>
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
              <div key={s.n} className="border-b border-border group hover:bg-[#111111] transition-colors">
                <div className="px-6 lg:px-12 py-10 grid grid-cols-[80px_50px_1fr_auto] md:grid-cols-[120px_60px_1fr_220px_40px] items-center gap-6">
                  <div className="font-display font-black text-3xl md:text-4xl text-foreground/10 group-hover:text-[var(--primary)] transition-colors">{s.n}</div>
                  <s.icon className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">{s.t}</h3>
                    <div className="font-mono-label text-muted-foreground group-hover:text-background/60 mt-1">{s.s}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="font-display font-black text-3xl text-[var(--accent)] group-hover:text-[var(--primary)] transition-colors">{s.m}</div>
                    <div className="font-mono-label text-muted-foreground">{s.l}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--primary)] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Como trabalhamos</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Nosso <span className="text-[var(--primary)]">Processo</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            <StaggerReveal staggerDelay={120}>
              {process.map((p) => (
                <div key={p.n} className="bg-[#111111] p-10 hover:bg-[#161616] transition-colors">
                  <div className="font-display font-black text-5xl text-[var(--primary)]">{p.n}</div>
                  <h3 className="font-display font-bold text-xl mt-6">{p.t}</h3>
                  <p className="text-muted-foreground mt-3 text-sm">{p.d}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border text-center">
        <ScrollReveal>
          <h2 className="font-display font-black text-4xl md:text-5xl">Qual serviço se encaixa <span className="text-[var(--primary)]">no seu projeto?</span></h2>
          <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-[var(--primary)] text-white font-mono-label px-8 py-4 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all rounded-sm">
            Falar com especialista <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </Shell>
  );
}
