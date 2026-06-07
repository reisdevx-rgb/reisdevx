import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ArrowRight, Code2, Handshake, Globe2, Clock, Sparkles, Cpu } from "lucide-react";

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
      <section className="px-6 lg:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <div>
              <div className="font-mono-label text-[var(--accent)] mb-6">Quem somos</div>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Sobre a <span className="text-[var(--primary)]">ReisDevX</span></h1>
              <p className="text-lg text-muted-foreground mt-8 max-w-xl">Somos um estúdio de desenvolvimento web premium, fundado com a missão de transformar negócios através de soluções digitais que dominam seu mercado.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="border-l-2 border-[var(--primary)] pl-8 py-4 bg-[#111111]/50 backdrop-blur-sm">
              <p className="font-display text-2xl md:text-3xl italic leading-snug">"Cada site que criamos é um instrumento de poder para o nosso cliente."</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-display font-bold text-xl">R</div>
                <div>
                  <div className="font-bold">Rafael Reis</div>
                  <div className="font-mono-label text-muted-foreground">CEO & Fundador</div>
                </div>
              </div>
            </div>
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
                <div key={p.t} className="bg-background p-10">
                  <p.icon className="w-7 h-7 text-[var(--gold)]" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-xl mt-6">{p.t}</h3>
                  <p className="text-muted-foreground mt-3 text-sm">{p.d}</p>
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
              <div className="font-mono-label text-[var(--gold)] mb-4">Nossa Jornada</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Uma história de <span className="text-[var(--gold)]">evolução</span></h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-px bg-border hidden md:block" />
            <StaggerReveal staggerDelay={100}>
              {timeline.map((t) => (
                <div key={t.y} className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-12 items-start">
                  <div className="font-display font-black text-4xl text-[var(--gold)]">{t.y}</div>
                  <div className="md:pl-8 relative">
                    <div className="hidden md:block absolute -left-1 top-2 w-3 h-3 rounded-full bg-[var(--gold)]" />
                    <h3 className="font-display font-bold text-2xl">{t.t}</h3>
                    <p className="text-muted-foreground mt-2 max-w-2xl">{t.d}</p>
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
              <div className="font-mono-label text-[var(--gold)] mb-4">As Pessoas</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Nossa <span className="text-[var(--gold)]">equipe</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerReveal staggerDelay={120}>
              {team.map((m) => (
                <div key={m.n} className="border border-border p-8 hover:border-[var(--gold)] transition-colors">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-display font-bold">{m.i}</div>
                  <h3 className="font-display font-bold text-xl mt-6">{m.n}</h3>
                  <div className="font-mono-label text-[var(--gold)] mt-1">{m.r}</div>
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
            <h2 className="font-display font-black text-4xl md:text-5xl">Pronto para trabalhar <span className="text-[var(--gold)]">com a melhor equipe?</span></h2>
            <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background font-mono-label px-8 py-4 hover:bg-[var(--gold)] hover:text-foreground transition-colors">
              Falar com a equipe <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Shell>
  );
}
