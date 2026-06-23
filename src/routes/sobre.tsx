import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ArrowRight, Code2, Handshake, Globe2, Clock, Sparkles, Cpu, Monitor, Rocket, ShoppingBag, Palette, Zap, Search } from "lucide-react";
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
      <section className="px-6 lg:px-12 py-16 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative z-10">
              <div className="font-mono-label text-[var(--accent)] mb-6">Quem somos</div>
              <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Sobre a <span className="text-[var(--primary)]">ReisDevX</span></h1>
              <p className="text-lg text-muted-foreground mt-8 max-w-xl">Somos um estúdio de desenvolvimento web premium, fundado com a missão de transformar negócios através de soluções digitais que dominam seu mercado.</p>
              
              <div className="mt-12 border-l-2 border-[var(--primary)] pl-6 md:pl-8 py-4 bg-card/50 backdrop-blur-sm">
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
                <div key={p.t} className="group relative bg-card p-10 cursor-pointer transition-transform duration-500 hover:-translate-y-2">
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
              <div className="font-mono-label text-[var(--accent)] mb-4">Nosso Processo</div>
              <h2 className="font-display font-black text-5xl md:text-6xl">Como <span className="text-[var(--primary)]">Trabalhamos</span></h2>

            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[20px] md:left-[80px] top-0 bottom-0 w-px bg-border" />
            <StaggerReveal staggerDelay={100} itemClassName="block">
              {timeline.map((t, i) => (
                <div key={t.y} className={`grid grid-cols-[50px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-12 items-start ${i !== timeline.length - 1 ? "mb-12" : ""}`}>
                  <div className="font-display font-black text-xl md:text-4xl text-[var(--primary)] text-right pr-2 md:pr-0">{t.y}</div>
                  <div className="pl-6 md:pl-8 relative min-h-[88px] md:min-h-[96px]">
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
            <div className="relative overflow-hidden border border-border bg-card rounded-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--primary)]/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-8 md:p-12 items-start">
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-display font-black text-4xl">R</div>
                </div>
                <div>
                  <div className="font-mono-label text-[var(--accent)] mb-2">Fundador</div>
                  <h3 className="font-display font-black text-4xl md:text-5xl">Rodrigo Reis</h3>
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
                        <div key={a.t} className="group flex items-center gap-3 border border-border bg-background/40 px-4 py-3 rounded-sm transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5">
                          <a.icon className="w-5 h-5 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
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
                  className="relative h-full overflow-hidden border border-border p-8 bg-card rounded-sm group cursor-pointer transition-all duration-500 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_-15px_rgba(0,102,255,0.4)]"
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
