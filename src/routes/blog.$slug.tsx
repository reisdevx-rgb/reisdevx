import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const url = `https://reisdevx.com.br/blog/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "Artigo não encontrado — ReisDevX" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} — Blog ReisDevX`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "ReisDevX" },
            publisher: {
              "@type": "Organization",
              name: "ReisDevX",
              logo: { "@type": "ImageObject", url: "https://reisdevx.com.br/favicon.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: post.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://reisdevx.com.br/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://reisdevx.com.br/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <Shell>
      <section className="px-4 sm:px-6 lg:px-12 py-32 text-center">
        <h1 className="font-display text-4xl font-black">Artigo não encontrado</h1>
        <p className="mt-4 text-foreground/60">O post que você procura não existe ou foi movido.</p>
        <Link to="/blog" className="mt-8 inline-block font-mono-label text-xs text-[var(--accent)]">← VOLTAR AO BLOG</Link>
      </section>
    </Shell>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Shell>
      <article className="px-4 sm:px-6 lg:px-12 pt-16 pb-24 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <Link to="/blog" className="inline-flex items-center gap-2 font-mono-label text-xs text-foreground/60 hover:text-[var(--accent)] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              VOLTAR AO BLOG
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-mono-label text-foreground/50">
              <span className="text-[var(--accent)]">{post.category}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readMinutes} min de leitura
              </span>
            </div>

            <h1 className="mt-6 font-display font-black tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}>
              {post.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
              {post.description}
            </p>
          </ScrollReveal>

          <div className="mt-12 md:mt-16 space-y-10">
            {post.content.map((block: { heading?: string; paragraphs: string[] }, i: number) => (
              <ScrollReveal key={i} delay={i * 60}>
                {block.heading && (
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {block.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {block.paragraphs.map((p: string, j: number) => (
                    <p key={j} className="text-base md:text-lg text-foreground/80 leading-[1.75]">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-20 p-8 md:p-10 border border-[var(--accent)]/40 rounded-sm bg-gradient-to-br from-[var(--accent)]/5 to-transparent">
              <span className="font-mono-label text-xs text-[var(--accent)]">/ VAMOS CONVERSAR</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight">
                Pronto para tirar seu projeto do papel?
              </h3>
              <p className="mt-3 text-foreground/70">
                A ReisDevX transforma ideias em produtos digitais que geram autoridade e vendas.
              </p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center gap-2 bg-[var(--primary)] text-white font-mono-label px-5 py-3 rounded-sm hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
              >
                SOLICITAR ORÇAMENTO
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-12 pb-24 md:pb-32 border-t border-border/40 pt-16">
          <div className="mx-auto max-w-[1400px]">
            <ScrollReveal>
              <span className="font-mono-label text-xs text-[var(--accent)]">/ LEITURAS RELACIONADAS</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight">Continue explorando</h2>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block p-6 md:p-8 border border-border/60 rounded-sm hover:border-[var(--accent)]/60 transition-all hover:shadow-[0_0_40px_-15px_rgba(0,102,255,0.6)]"
                >
                  <span className="font-mono-label text-[10px] text-[var(--accent)]">{p.category}</span>
                  <h3 className="mt-3 font-display text-lg md:text-xl font-bold group-hover:text-[var(--accent)] transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Shell>
  );
}
