import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => {
    const title = "Blog | Insights sobre Desenvolvimento Web, SEO e Design — ReisDevX";
    const description =
      "Artigos, guias e reflexões sobre criação de sites, desenvolvimento web, SEO e design digital. Conteúdo prático para quem quer construir autoridade online.";
    const url = "https://reisdevx.com.br/blog";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog ReisDevX",
            url,
            publisher: { "@type": "Organization", name: "ReisDevX", url: "https://reisdevx.com.br/" },
            blogPost: getAllPosts().map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.description,
              datePublished: p.date,
              url: `https://reisdevx.com.br/blog/${p.slug}`,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://reisdevx.com.br/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: url },
            ],
          }),
        },
      ],
    };
  },
});

function BlogIndex() {
  const posts = getAllPosts();
  return (
    <Shell>
      <section className="relative px-4 sm:px-6 lg:px-12 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="font-mono-label text-xs text-[var(--accent)]">/ BLOG</span>
            <h1 className="mt-4 font-display font-black tracking-tight leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              Ideias que <span className="text-[var(--accent)]">constroem</span> marcas digitais.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed">
              Artigos práticos sobre desenvolvimento web, SEO, design de interfaces e estratégia digital — direto do estúdio ReisDevX.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col bg-background/40 border border-border/60 rounded-sm p-6 md:p-8 hover:border-[var(--accent)]/60 hover:shadow-[0_0_40px_-15px_rgba(0,102,255,0.6)] transition-all duration-500"
              >
                <div className="flex items-center gap-4 text-[10px] font-mono-label text-foreground/50">
                  <span className="text-[var(--accent)]">{post.category}</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readMinutes} min
                  </span>
                </div>

                <h2 className="mt-5 font-display text-xl md:text-2xl font-bold leading-tight tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm md:text-base text-foreground/65 leading-relaxed flex-1">
                  {post.description}
                </p>

                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="mt-6 inline-flex items-center gap-2 font-mono-label text-xs text-foreground group-hover:text-[var(--accent)] transition-colors"
                  aria-label={`Ler artigo: ${post.title}`}
                >
                  LER ARTIGO
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <span className="absolute inset-0 rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 60px -20px rgba(0,102,255,0.35)" }} />
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </Shell>
  );
}
