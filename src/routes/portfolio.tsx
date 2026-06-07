import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import barbeariaImg from "@/assets/barbearia.png";
import clinicaImg from "@/assets/clinica-medica.png";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({ meta: [{ title: "Portfólio — ReisDevX" }, { name: "description", content: "Portfólio selecionado de projetos: SaaS, e-commerce e sites institucionais construídos com precisão arquitetônica." }] }),
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
      <section className="px-6 lg:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <div className="font-mono-label text-[var(--gold)] mb-6">Nossos trabalhos</div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">Portfólio <span className="text-[var(--gold)]">Selecionado</span></h1>
            <p className="text-lg text-muted-foreground mt-8 max-w-2xl">Estruturas digitais construídas com precisão arquitetônica. Clique em qualquer projeto para ver os detalhes completos.</p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-12 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`font-mono-label px-5 py-3 border transition-colors ${active === f ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggerReveal staggerDelay={100}>
            {visible.map((p) => (
              <div 
                key={p.n} 
                className="group relative overflow-hidden bg-muted aspect-video cursor-pointer"
                onClick={() => setPreviewUrl(p.url)}
              >
                <img src={p.img} alt={p.n} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-background text-foreground font-mono-label px-6 py-3 border border-foreground/10 hover:bg-[var(--gold)] hover:text-background transition-colors">
                    VISUALIZAR MODELO
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-border text-center">
        <ScrollReveal>
          <h2 className="font-display font-black text-4xl md:text-5xl">Seu projeto pode ser o <span className="text-[var(--gold)]">próximo case de sucesso.</span></h2>
          <p className="text-muted-foreground mt-6">Vamos construir algo extraordinário juntos.</p>
          <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-foreground text-background font-mono-label px-8 py-4 hover:bg-[var(--gold)] hover:text-foreground transition-colors">
            Iniciar meu projeto <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {previewUrl && (
        <div className="fixed inset-0 z-[100] bg-background animate-in fade-in duration-300">
          <div className="absolute top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border px-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono-label text-sm text-muted-foreground hidden md:inline">Visualização de Modelo</span>
            </div>
            <button 
              onClick={() => setPreviewUrl(null)}
              className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors font-mono-label"
            >
              <X className="w-5 h-5" />
              <span>Fechar</span>
            </button>
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
