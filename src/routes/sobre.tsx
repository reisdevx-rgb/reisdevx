import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ArrowRight, Code2, Handshake, Globe2, Clock, Sparkles, Cpu, Monitor, Rocket, ShoppingBag, Palette, Zap, Search } from "lucide-react";
import { ThreeDPhone } from "@/components/ThreeDPhone";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => {
    const title = "Sobre a ReisDevX — Estúdio de Desenvolvimento Web Premium";
    const description = "Conheça a ReisDevX: estúdio de criação de sites e desenvolvimento web focado em performance, design e resultados reais para o seu negócio.";
    const url = "https://reisdevx.com.br/sobre";
    return {
      meta: [
        { title },
        { name: "description", content: description },
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


const principles = [
  { icon: Code2, t: "Excelência Técnica", d: "Código limpo, arquitetura sólida e performance otimizada em cada linha." },
  { icon: Handshake, t: "Parceria Real", d: "Não somos fornecedores, somos parceiros. Seu sucesso é nossa métrica principal." },
  { icon: Globe2, t: "Visão Global", d: "Desenvolvemos soluções com padrão internacional, prontas para escalar globalmente." },
  { icon: Clock, t: "Entrega no Prazo", d: "Metodologia ágil comprovada com 98% dos projetos entregues dentro do cronograma." },
  { icon: Sparkles, t: "Qualidade Sem Concessões", d: "Cada detalhe é revisado. Nunca entregamos menos do que o melhor possível." },
  { icon: Cpu, t: "Tecnologia de Ponta", d: "Utilizamos o stack mais moderno e eficiente para cada tipo de projeto." },
];

const timeline = [
  { y: "1", t: "Descoberta", d: "Entendemos seus objetivos, público-alvo e necessidades para criar uma solução alinhada ao seu negócio." },
  { y: "2", t: "Planejamento", d: "Estruturamos a estratégia, o design e a arquitetura do projeto para garantir eficiência e resultados." },
  { y: "3", t: "Desenvolvimento", d: "Transformamos a ideia em uma experiência digital moderna, rápida e responsiva." },
  { y: "4", t: "Refinamento", d: "Realizamos ajustes, otimizações e testes para garantir qualidade máxima." },
  { y: "5", t: "Entrega", d: "Publicamos o projeto e oferecemos suporte para que tudo funcione perfeitamente." },
];


const team = [
  { n: "Desenvolvimento Web", r: "Sites modernos e responsivos", d: "Criação de sites modernos, rápidos e responsivos, desenvolvidos para oferecer a melhor experiência em qualquer dispositivo." },
  { n: "Design UI/UX", r: "Interfaces que convertem", d: "Interfaces elegantes e intuitivas, projetadas para melhorar a experiência do usuário e aumentar a conversão." },
  { n: "Performance & SEO", r: "Velocidade e visibilidade", d: "Otimização de velocidade, estrutura técnica e SEO para melhorar o posicionamento nos mecanismos de busca." },
  { n: "Atendimento Personalizado", r: "Acompanhamento dedicado", d: "Acompanhamento direto em todas as etapas do projeto, garantindo comunicação clara e resultados alinhados aos seus objetivos." },
];

function Sobre() {
  return (
    <Shell>
      <section className="overflow-hidden px-4 py-16 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] md:gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="relative z-10">
              <div className="font-mono-label text-[var(--accent)] mb-6">Quem somos</div>
              <h1 className="font-display text-4xl font-black leading-[1] sm:text-5xl md:text-6xl lg:text-7xl">Sobre a <span className="text-[var(--primary)]">ReisDevX</span></h1>
              <p className="text-base md:text-lg text-muted-foreground mt-8 max-w-xl">Somos um estúdio de desenvolvimento web premium, fundado com a missão de transformar negócios através de soluções digitais que dominam seu mercado.</p>
              
              <div className="mt-10 border-l-2 border-[var(--primary)] bg-card/50 py-4 pl-5 backdrop-blur-sm md:mt-12 md:pl-8">
                <p className="font-display text-lg italic leading-snug md:text-2xl lg:text-3xl">"Cada site que criamos é um instrumento de poder para o nosso cliente."</p>
                <div className="mt-8 flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-display text-lg font-bold text-white md:h-14 md:w-14 md:text-xl">R</div>
                  <div>
                    <div className="font-bold text-sm md:text-base">Rodrigo Reis</div>
                    <div className="font-mono-label text-muted-foreground text-xs md:text-sm">CEO & Fundador</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} className="relative order-first mx-auto w-full max-w-[320px] md:order-last md:max-w-none">
            <div className="absolute inset-0 bg-radial-gradient from-[var(--primary)]/10 to-transparent blur-3xl rounded-full scale-150" />
            <ThreeDPhone />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Nossos Princípios</div>
              <h2 className="font-display text-4xl font-black sm:text-5xl md:text-6xl">O que nos <span className="text-[var(--primary)]">define</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            <StaggerReveal staggerDelay={100}>
              {principles.map((p) => (
                 <div key={p.t} className="group relative overflow-hidden bg-card p-6 transition-transform duration-500 hover:-translate-y-2 sm:p-8 lg:p-10">
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

      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16">
              <div className="font-mono-label text-[var(--accent)] mb-4">Nosso Processo</div>
              <h2 className="font-display text-4xl font-black sm:text-5xl md:text-6xl">Como <span className="text-[var(--primary)]">Trabalhamos</span></h2>

            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[20px] md:left-[80px] top-0 bottom-0 w-px bg-border" />
            <StaggerReveal staggerDelay={100} itemClassName="block">
              {timeline.map((t, i) => (
                <div key={t.y} className={`grid grid-cols-[50px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-12 items-start ${i !== timeline.length - 1 ? "mb-12" : ""}`}>
                  <div className="font-display font-black text-xl md:text-4xl text-[var(--primary)] text-right pr-2 md:pr-0">{t.y}</div>
                  <div className="pl-6 md:pl-8 relative min-h-[88px] md:min-h-[96px]">
              <div className="absolute -left-[31px] top-2 h-2 w-2 rounded-full border-4 border-background bg-[var(--primary)] md:-left-[21px] md:h-3 md:w-3" />
                    <h3 className="font-display font-bold text-xl md:text-2xl">{t.t}</h3>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl">{t.d}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>

        </div>
      </section>

      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="relative overflow-hidden border border-border bg-card rounded-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative grid items-start gap-8 p-5 sm:p-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:p-12">
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-display text-3xl font-black text-white md:h-28 md:w-28 md:text-4xl">R</div>
                </div>
                <div>
                  <div className="font-mono-label text-[var(--accent)] mb-2">Fundador</div>
                  <h3 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">Rodrigo Reis</h3>
                  <div className="font-mono-label text-muted-foreground mt-2">Fundador & Desenvolvedor</div>
                  <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-2xl leading-relaxed">
                    Transformo ideias em experiências digitais modernas através de design estratégico, desenvolvimento web e soluções personalizadas para empresas e profissionais que desejam crescer no ambiente digital.
                  </p>

                  <div className="mt-10">
                    <div className="font-mono-label text-[var(--accent)] mb-5">Áreas de atuação</div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { icon: Monitor, t: "Desenvolvimento de Sites" },
                        { icon: Rocket, t: "Landing Pages" },
                        { icon: ShoppingBag, t: "E-commerce" },
                        { icon: Palette, t: "Design de Interfaces (UI/UX)" },
                        { icon: Zap, t: "Automações" },
                        { icon: Search, t: "SEO e Performance" },
                      ].map((a) => (
                         <div key={a.t} className="group flex min-w-0 items-center gap-3 rounded-sm border border-border bg-background/40 px-4 py-3 transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5">
                           <a.icon className="h-5 w-5 shrink-0 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                           <span className="text-sm font-medium">{a.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <StaggerReveal staggerDelay={120} itemClassName="h-full">
              {team.map((m) => (
                <div
                  key={m.n}
                   className="group relative h-full overflow-hidden rounded-sm border border-border bg-card p-6 transition-all duration-500 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.4)] sm:p-8"
                >
                  {/* Expanding ink fill from top-left */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute top-8 left-8 w-16 h-16 rounded-full bg-[var(--primary)] scale-0 group-hover:scale-[14] transition-transform duration-700 ease-out origin-center"
                  />
                  <h3 className="relative z-10 font-display font-bold text-xl transition-colors duration-500 group-hover:text-white">{m.n}</h3>
                  <div className="relative z-10 font-mono-label text-[var(--accent)] mt-1 transition-colors duration-500 group-hover:text-white">{m.r}</div>
                  <p className="relative z-10 text-muted-foreground mt-4 text-sm transition-colors duration-500 group-hover:text-white/90">{m.d}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 text-center sm:px-6 md:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">Pronto para trabalhar <span className="text-[var(--primary)]">com a melhor equipe?</span></h2>
            <Link to="/contato" className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] sm:w-auto sm:px-8">
              Falar com a equipe <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Shell>
  );
}
