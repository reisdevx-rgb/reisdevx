import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import barbeariaImg from "@/assets/barbearia.png";
import clinicaImg from "@/assets/clinica-medica.png";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => {
    const title = "Portfólio — Projetos de Sites e Aplicações | ReisDevX";
    const description = "Portfólio selecionado de sites, e-commerce, landing pages e plataformas SaaS desenvolvidos pela ReisDevX com precisão arquitetônica e design premium.";
    const url = "https://reisdevx.com.br/portfolio";
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


const filters = ["Todos", "SaaS", "E-commerce", "Institucional"] as const;
type Filter = (typeof filters)[number];

const projects = [
  { n: "Barbearia Clássica", c: "Barbearia", cat: "Institucional", t: ["React", "Tailwind"], img: barbeariaImg, url: "https://sitedebarbearia.lovable.app" },
  { n: "Clínica Médica", c: "Medicina", cat: "Institucional", t: ["React", "Tailwind"], img: clinicaImg, url: "https://sitedeclinicamedica.lovable.app" },
];

function Portfolio() {
  const [active, setActive] = useState<Filter>("Todos");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const visible = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

  useEffect(() => {
    if (previewUrl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [previewUrl]);
  return (
    <Shell>
      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--accent)] mb-6">Nossos trabalhos</div>
            <h1 className="font-display text-4xl font-black leading-[1] sm:text-5xl md:text-7xl">Portfólio <span className="text-[var(--primary)]">Selecionado</span></h1>
            <p className="text-lg text-muted-foreground mt-8 max-w-2xl">Estruturas digitais construídas com precisão arquitetônica. Clique em qualquer projeto para ver os detalhes completos.</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-2 sm:mt-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`min-h-11 flex-1 rounded-sm border px-4 py-3 font-mono-label transition-colors sm:flex-none sm:px-5 ${active === f ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "border-border hover:border-[var(--primary)]"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 md:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StaggerReveal staggerDelay={100}>
            {visible.map((p) => (
              <button
                key={p.n}
                type="button"
                onClick={() => setPreviewUrl(p.url)}
                className="group block text-left w-full"
              >
                <div className="relative aspect-video overflow-hidden bg-muted rounded-sm">
                  <img src={p.img} alt={p.n} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[var(--primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="mx-4 rounded-sm bg-white px-4 py-3 text-center font-mono-label font-bold text-[var(--primary)] shadow-xl transition-transform duration-500 group-hover:translate-y-0 sm:px-6">
                      VISUALIZAR MODELO
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-20 text-center sm:px-6 md:py-24 lg:px-12">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-black sm:text-4xl md:text-5xl">Seu projeto pode ser o <span className="text-[var(--primary)]">próximo case de sucesso.</span></h2>
          <p className="text-muted-foreground mt-6">Vamos construir algo extraordinário juntos.</p>
          <Link to="/contato" className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-[var(--primary)] px-6 py-4 font-mono-label text-white transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] sm:w-auto sm:px-8">
            Iniciar meu projeto <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
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
            <div className="flex shrink-0 items-center gap-3">
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 font-mono-label text-sm transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Abrir em nova aba</span>
              </a>
              <button
                onClick={() => setPreviewUrl(null)}
                className="flex items-center gap-2 font-mono-label transition-colors hover:text-[var(--accent)]"
              >
                <X className="w-5 h-5" />
                <span>Fechar</span>
              </button>
            </div>

          </div>
          <div className="w-full h-full pt-16">
            <iframe 
              src={previewUrl} 
              className="w-full h-full border-none"
              title="Site Preview"
            />
          </div>
        </div>
      )}
    </Shell>
  );
}
