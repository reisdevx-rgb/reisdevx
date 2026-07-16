
# Plano de SEO — ReisDevX

Vou implementar SEO técnico completo, acessibilidade e melhorias de performance **sem alterar a identidade visual** (cores, fontes, layouts e conteúdo visível permanecem idênticos).

## 1. Metadados por página (head route-a-route)

Para cada rota (`/`, `/servicos`, `/portfolio`, `/sobre`, `/contato`) adicionar em `head()`:
- `<title>` e `description` exclusivos
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">` auto-referente (apenas nas rotas folha)
- `meta robots` apropriado

**Home:**
- Title: `ReisDevX | Criação de Sites Profissionais e Soluções Digitais`
- Description: `A ReisDevX desenvolve sites profissionais, landing pages e sistemas web rápidos, modernos e otimizados para o Google. Solicite um orçamento.`

Textos otimizados para as demais páginas com palavras-chave: *criação de sites*, *desenvolvimento web*, *landing pages*, *sistemas web*, *loja virtual*, *criação de sites para empresas*.

Remover do `__root.tsx` os títulos/descrições genéricos e o `og:image` (que hoje está no root e sobrescreve todas as rotas — mover para leaf).

## 2. Schema.org (JSON-LD)

- `Organization` + `WebSite` no `__root.tsx` (já existe, vou expandir com `logo`, `contactPoint`, `sameAs`).
- `LocalBusiness` na Home com: nome, categoria (Desenvolvimento Web), telefone, WhatsApp, endereço (Itanhém, BR), horário, `areaServed`, redes sociais.
- `Service` em `/servicos` (ItemList de serviços oferecidos).
- `BreadcrumbList` em todas as páginas internas.
- `ContactPage` em `/contato`.
- `FAQPage` na Home ou `/servicos` com perguntas comuns.

## 3. Sitemap e robots

- `sitemap.xml` já existe como server route — vou manter e garantir que reflete todas as rotas com `lastmod` correto.
- `robots.txt` já permite indexação e aponta o sitemap — OK, verificar.

## 4. Estrutura HTML semântica

Auditar as rotas atuais e garantir:
- Apenas **um `<h1>`** por página (ajustar onde houver múltiplos).
- Hierarquia correta de `<h2>` → `<h3>` → `<h4>`.
- Uso consistente de `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`.
- Um único `<main>` por rota (colocado no `Shell`).

## 5. Acessibilidade

- `alt` descritivo em todas as imagens (atendente, devices, raio, aperto-mao, logos, portfólio).
- `aria-label` em botões só-ícone (CursorDot é decorativo — `aria-hidden`).
- `<label>` em todos os campos do formulário de contato.
- Contraste — a paleta atual (#0A0A0A sobre #FAFAFA, dourado #D4A017) já passa AA; verificar textos secundários.
- Foco visível nos links/botões.

## 6. Performance

- **Imagens**: converter `atendente-2.png`, `devices.png`, `raio.png`, `aperto-mao.png` para **WebP** com fallback, e servir via `<picture>` ou `<img>` WebP direto. Adicionar `loading="lazy"` (exceto LCP) e `decoding="async"`, `width`/`height` explícitos para evitar CLS.
- **Fontes**: as fontes Google já usam `display=swap` + preconnect. Adicionar `<link rel="preload">` para o peso principal do Inter Tight (LCP).
- **Preconnect**: já existe para `fonts.googleapis.com` e `fonts.gstatic.com`.
- Code splitting já é automático via TanStack Router; validar que não há imports pesados no root.

## 7. Breadcrumbs

Componente `<Breadcrumbs />` visual + JSON-LD `BreadcrumbList` para páginas internas (`/servicos`, `/portfolio`, `/sobre`, `/contato`).

## 8. CTAs de conversão

Revisar os CTAs existentes para usar linguagem de intenção comercial: *Solicite um orçamento*, *Criar meu site*, *Falar com um especialista* — sem alterar posição/estilo visual.

## 9. Links internos

Garantir links cruzados entre Home ↔ Serviços ↔ Portfólio ↔ Contato dentro do conteúdo (não só no menu), reforçando âncoras com palavras-chave.

## 10. Fora do escopo desta entrega

- **Blog**: você pediu estrutura de blog com artigos, Schema Article, índice, etc. Como isso exige decisão sobre onde os posts vão morar (Markdown no repo vs. Lovable Cloud/CMS), vou **deixar a estrutura preparada** (rota `/blog` + rota dinâmica `/blog/$slug` com meta/Schema Article prontos e um post de exemplo em Markdown). Se preferir CMS no Lovable Cloud, me avise e faço em seguida.
- Geração de novo `og:image` customizado: manterei o atual até você aprovar um novo visual.

---

## Detalhes técnicos

Arquivos que vou tocar:
- `src/routes/__root.tsx` — limpar meta genéricos, expandir JSON-LD Organization/WebSite, remover og:image do root.
- `src/routes/index.tsx` — head() completo, LocalBusiness + FAQPage JSON-LD, alt/aria, h1 único, lazy loading.
- `src/routes/servicos.tsx`, `portfolio.tsx`, `sobre.tsx`, `contato.tsx` — head() por rota + BreadcrumbList + ContactPage/Service JSON-LD.
- `src/components/Breadcrumbs.tsx` (novo).
- `src/components/Shell.tsx` — garantir um único `<main>`.
- Novos: `src/routes/blog.tsx`, `src/routes/blog.$slug.tsx`, um post de exemplo.
- `public/img/*` — adicionar versões `.webp` das imagens públicas (mantenho os PNG como fallback).
- `src/routes/sitemap[.]xml.ts` — incluir `/blog` e posts.

Nada muda visualmente. Design, cores (#FAFAFA, #0A0A0A, #D4A017), fontes (Inter Tight, Inter, JetBrains Mono) e layout permanecem idênticos.

Aprova para eu implementar?
