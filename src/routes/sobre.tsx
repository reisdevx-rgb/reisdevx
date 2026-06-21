import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ArrowRight, Code2, Handshake, Globe2, Clock, Sparkles, Cpu } from "lucide-react";
import { ThreeDPhone } from "@/components/ThreeDPhone";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({ meta: [{ title: "Sobre — ReisDevX" }, { name: "description", content: "Estúdio de desenvolvimento web premium, fundado para transformar negócios através de soluções digitais que dominam mercados." }] }),
});

const principles = [
  { icon: Code2, t: "Excelência Técnica", d: "Código limpo, arquitetura sólida e performance otimizada em cada linha que escrevemos." },
  { icon: Handshake, t: "Parceria Real", d: "Não somos fornecedores, somos parceiros. Seu sucesso é nossa métrica principal." },
  { icon: Globe2, t: "Visão Global", d: "Desenvolvemos soluções com padrão internacional, prontas para escalar globalmente." },
  { icon: Clock, t: "Entrega no Prazo", d: "Metodologia ágil comprovada com 98% dos projetos entregues dentro do cronograma." },
  { icon: Sparkles, t: "Qualidade Sem Concessões", d: "Cada detalhe é revisado. Nunca entregamos menos do que o melhor possível." },
  { icon: Cpu, t: "Tecnologia de Ponta", d: "Utilizamos o stack mais moderno e eficiente para cada tipo de projeto." },
];

const timeline = [
  { y: "2019", t: "Fundação", d: "ReisDevX nasce da visão de criar sites que são verdadeiras obras de engenharia digital." },
  { y: "2020", t: "Primeiros 10 Clientes", d: "Consolidamos nossa metodologia e entregamos os primeiros projetos de alto impacto." },
  { y: "2021", t: "Expansão da Equipe", d: "Crescemos para um time multidisciplinar de especialistas em design, dev e estratégia." },
  { y: "2022", t: "Projetos SaaS", d: "Entrada no mercado de plataformas SaaS complexas com arquiteturas escaláveis." },
  { y: "2023", t: "50+ Projetos Entregues", d: "Marco histórico de 50 projetos entregues com 98% de satisfação dos clientes." },
  { y: "2026", t: "Presente", d: "Referência no mercado, com 120+ projetos e parcerias com empresas líderes de segmento." },
];

const team = [
  { i: "RR", n: "Rafael Reis", r: "CEO & Lead Developer", d: "Arquiteto de sistemas com 8+ anos construindo produtos digitais de escala global." },
  { i: "AL", n: "Ana Lima", r: "UI/UX Designer", d: "Especialista em design de experiências que mesclam beleza editorial e conversão." },
  { i: "BS", n: "Bruno Santos", r: "Full-Stack Engineer", d: "Engenheiro focado em performance, escalabilidade e soluções de back-end robustas." },
  { i: "CM", n: "Carla Mendes", r: "Gestora de Projetos", d: "Garante que cada entrega seja no prazo, dentro do orçamento e além das expectativas." },
];

function Sobre() {
  return (
    <Shell>
      <section className="px-6 lg:px-12 py-16 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative z-10">
              <div className="font-mono-label text-[var(--accent)] mb-6">Quem somos</div>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Sobre a <span className="text-[var(--primary)]">ReisDevX</span></h1>
              <p className="text-lg text-muted-foreground mt-8 max-w-xl">Somos um estúdio de desenvolvimento web premium, fundado com a missão de transformar negócios através de soluções digitais que dominam seu mercado.</p>
              
              <div className="mt-12 border-l-2 border-[var(--primary)] pl-6 md:pl-8 py-4 bg-[#111111]/50 backdrop-blur-sm">
                <p className="font-display text-xl md:text-3xl italic leading-snug">"Cada site que criamos é um instrumento de poder para o nosso cliente."</p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-display font-bold text-lg md:text-xl">R</div>
                  <div>
                    <div className="font-bold text-sm md:text-base">Rafael Reis</div>
                    <div className="font-mono-label text-muted-foreground text-xs md:text-sm">CEO & Fundador</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-radial-gradient from-[var(--primary)]/10 to-transparent blur-3xl rounded-full scale-150" />
            <ThreeDPhone />
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Nossos Princípios</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">O que nos <span className="text-[var(--primary)]">define</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            <StaggerReveal staggerDelay={100}>
              {principles.map((p) => (
                <div key={p.t} className="group relative bg-[#111111] p-10 cursor-pointer transition-transform duration-500 hover:-translate-y-2">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)",
                    }}
                  />
                  <p.icon
                    className="relative w-7 h-7 text-[var(--primary)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-hover:text-[var(--accent)] group-hover:drop-shadow-[0_0_12px_rgba(0,102,255,0.6)]"
                    strokeWidth={1.5}
                  />
                  <h3 className="relative font-display font-bold text-xl mt-6 transition-colors duration-500 group-hover:text-[var(--primary)]">{p.t}</h3>
                  <p className="relative text-muted-foreground mt-3 text-sm transition-colors duration-500 group-hover:text-foreground">{p.d}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Nossa Jornada</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Uma história de <span className="text-[var(--primary)]">evolução</span></h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[20px] md:left-[80px] top-0 bottom-0 w-px bg-border" />
            <StaggerReveal staggerDelay={100}>
              {timeline.map((t) => (
                <div key={t.y} className="grid grid-cols-[50px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-12 items-start mb-12 last:mb-0">
                  <div className="font-display font-black text-xl md:text-4xl text-[var(--primary)] text-right pr-2 md:pr-0">{t.y}</div>
                  <div className="pl-6 md:pl-8 relative">
                    <div className="absolute -left-[31px] md:-left-[21px] top-2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[var(--primary)] border-4 border-[#0a0a0a]" />
                    <h3 className="font-display font-bold text-xl md:text-2xl">{t.t}</h3>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl">{t.d}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">As Pessoas</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Nossa <span className="text-[var(--primary)]">equipe</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerReveal staggerDelay={120}>
              {team.map((m) => (
                <div key={m.n} className="border border-border p-8 bg-[#111111] hover:border-[var(--primary)] transition-colors rounded-sm group">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-display font-bold group-hover:shadow-[0_0_15px_rgba(0,102,255,0.3)] transition-all">{m.i}</div>
                  <h3 className="font-display font-bold text-xl mt-6">{m.n}</h3>
                  <div className="font-mono-label text-[var(--accent)] mt-1">{m.r}</div>
                  <p className="text-muted-foreground mt-4 text-sm">{m.d}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border text-center">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display font-black text-4xl md:text-5xl">Pronto para trabalhar <span className="text-[var(--primary)]">com a melhor equipe?</span></h2>
            <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-[var(--primary)] text-white font-mono-label px-8 py-4 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all rounded-sm">
              Falar com a equipe <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Shell>
  );
}
