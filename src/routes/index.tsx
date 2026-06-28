import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { InteractiveDots } from "@/components/InteractiveDots";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowDown, Zap, Shield, Award, HeartHandshake, X } from "lucide-react";
import barbeariaImg from "@/assets/barbearia.png";
import clinicaImg from "@/assets/clinica-medica.png";
import atendenteAsset from "@/assets/atendente.png.asset.json";
import devicesAsset from "@/assets/devices.png.asset.json";
import raioAsset from "@/assets/raio.png.asset.json";
import apertoMaoAsset from "@/assets/aperto-mao.png.asset.json";



export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const title = "ReisDevX — Criação de Sites, Landing Pages e Desenvolvimento Web";
    const description = "Estúdio de desenvolvimento web premium. Criação de sites profissionais, landing pages de alta conversão, e-commerce, SaaS e design de interfaces que dominam mercados.";
    const url = "https://reisdevx.com.br/";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "criação de sites, desenvolvimento web, landing pages, design de interfaces, e-commerce, SaaS, sites profissionais, agência digital, ReisDevX" },
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


const stats: { n?: string; icon?: string; l: string }[] = [
  { icon: atendenteAsset.url, l: "ATENDIMENTO PERSONALIZADO" },
  { icon: devicesAsset.url, l: "SITES MODERNOS E RESPONSIVOS" },
  { icon: raioAsset.url, l: "FOCO EM PERFORMANCE E SEO" },
  { icon: apertoMaoAsset.url, l: "SUPORTE DEDICADO" },
];


const pillars = [
  { icon: Zap, t: "Performance A+", d: "Sites com carregamento abaixo de 1.5 segundos e Core Web Vitals perfeitos." },
  { icon: Shield, t: "Confiabilidade Digital", d: "Soluções modernas desenvolvidas com foco em responsabilidade, qualidade e experiência do usuário." },
  { icon: Award, t: "Design Premiado", d: "Interfaces premiadas que combinam estética editorial com conversão real." },
  { icon: HeartHandshake, t: "Suporte Contínuo", d: "Parceria de longo prazo com manutenção, atualizações e evolução constante." },
];

const projects = [
  { name: "Barbearia Clássica", tag: "Institucional", img: barbeariaImg, url: "https://sitedebarbearia.lovable.app" },
  { name: "Clínica Médica", tag: "Institucional", img: clinicaImg, url: "https://sitedeclinicamedica.lovable.app" },
];

function Index() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = previewUrl ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [previewUrl]);

  return (
    <Shell>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-4 py-12 sm:px-6 lg:px-12">
        <InteractiveDots />


        <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30" />
        <div className="relative mx-auto max-w-[1400px] w-full">
          <ScrollReveal delay={100}>
            <h1 className="relative z-10 flex max-w-full flex-col break-words px-0 pt-8 font-display text-[clamp(2.25rem,10vw,10rem)] font-black leading-[0.95] sm:pl-4 md:pl-8 md:pr-4 lg:pl-12">
              <span className="relative z-10">ENGENHANDO</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] relative z-30 py-4 -my-4">IMPÉRIOS</span>
              <span className="relative z-0">DIGITAIS</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:pl-4 md:pl-8 lg:pl-12">
              <Link to="/contato" className="group inline-flex w-full max-w-full items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 text-center font-mono-label text-white transition-all hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] sm:w-auto">
                ORÇAMENTO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-sm border border-[var(--primary)] px-6 py-4 text-center font-mono-label text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white sm:w-auto">
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
        <StaggerReveal staggerDelay={120} className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} className={`flex min-h-full flex-col items-center justify-center p-5 text-center sm:p-8 lg:p-10 ${i > 0 ? "md:border-l border-border" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}>
              {s.icon ? (
                <img src={s.icon} alt={s.l} className="w-12 h-12 object-contain" />
              ) : (
                <div className="font-display font-black text-5xl text-[var(--primary)]">{s.n}</div>
              )}
              <div className="mt-3 max-w-full font-mono-label text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* FILOSOFIA */}
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <div className="font-mono-label text-[var(--accent)] mb-6">Nossa Filosofia</div>
              <h2 className="font-display text-4xl font-black leading-[1] sm:text-5xl md:text-7xl">
                Cada projeto tem&nbsp; um&nbsp;<span className="text-[var(--primary)]">propósito.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6 text-lg text-muted-foreground self-end">
              <p>Acreditamos que um site vai muito além da aparência. Cada detalhe é planejado para transmitir credibilidade, fortalecer a identidade da marca e proporcionar uma experiência intuitiva para o usuário.</p>
              <p>Não entregamos apenas páginas na internet, criamos soluções digitais modernas que ajudam empresas a se destacar, conquistar clientes e crescer de forma consistente.</p>
              <Link to="/sobre" className="inline-flex items-center gap-2 text-foreground font-mono-label border-b border-[var(--primary)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors">
                Conheça nossa história <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2 lg:grid-cols-4">
          <StaggerReveal staggerDelay={120}>
            {pillars.map((p, i) => (
              <div
                key={p.t}
                 className={`group relative overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-2 sm:p-8 lg:p-10 ${i > 0 ? "md:border-l border-border" : ""}`}
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
      <section className="border-t border-border px-4 py-20 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
             <div className="mb-12 grid gap-6 sm:mb-16 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <div className="font-mono-label text-[var(--accent)] mb-4">Trabalhos Selecionados</div>
                <h2 className="font-display text-4xl font-black sm:text-5xl md:text-7xl">Projetos em <span className="text-[var(--primary)]">Destaque</span></h2>
              </div>
              <Link to="/portfolio" className="w-fit font-mono-label border-b border-[var(--primary)] pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">Ver todos os projetos →</Link>
            </div>
          </ScrollReveal>
      <StaggerReveal staggerDelay={120} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPreviewUrl(p.url)}
             className="group block w-full text-left"
          >
            <div className="relative aspect-video overflow-hidden bg-muted rounded-sm">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-[var(--primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="mx-4 rounded-sm bg-white px-4 py-3 text-center font-mono-label font-bold text-[var(--primary)] shadow-xl transition-transform duration-500 group-hover:translate-y-0 sm:px-6">
                  VISUALIZAR MODELO
                </div>
              </div>
            </div>
            <h3 className="font-display font-bold text-xl mt-4">{p.name}</h3>
            <div className="font-mono-label text-muted-foreground mt-1 text-sm">{p.tag}</div>
          </button>
        ))}
      </StaggerReveal>
        </div>
      </section>


      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-card px-4 py-20 text-foreground sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-[1400px] text-center relative z-10">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-6">Pronto para começar?</div>
            <h2 className="font-display text-4xl font-black sm:text-5xl md:text-7xl">Vamos construir <span className="text-[var(--primary)]">juntos.</span></h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">Transforme sua visão em realidade digital. Nossa equipe está pronta para criar algo extraordinário.</p>
            <Link to="/contato" className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] sm:w-auto sm:px-8">
              ORÇAMENTO <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {previewUrl && (
        <div className="fixed inset-0 z-[100] bg-background animate-in fade-in duration-300">
           <div className="absolute left-0 right-0 top-0 z-10 grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md sm:px-6">
             <div className="flex min-w-0 items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono-label text-sm text-muted-foreground hidden md:inline">Visualização de Modelo</span>
            </div>
            <button
              onClick={() => setPreviewUrl(null)}
               className="flex shrink-0 items-center gap-2 font-mono-label transition-colors hover:text-[var(--accent)]"
            >
              <X className="w-5 h-5" />
              <span>Fechar</span>
            </button>
          </div>
          <div className="w-full h-full pt-16">
            <iframe src={previewUrl} className="w-full h-full border-none" title="Site Preview" />
          </div>
        </div>
      )}
    </Shell>
  );
}
