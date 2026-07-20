export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const posts: Post[] = [
  {
    slug: "por-que-ter-um-site-profissional",
    title: "Por que sua empresa precisa de um site profissional em 2026",
    description:
      "Um site profissional é o principal canal de credibilidade da sua marca. Veja por que investir em desenvolvimento web dedicado gera mais autoridade e vendas.",
    date: "2026-07-15",
    readMinutes: 5,
    category: "Estratégia Digital",
    content: [
      {
        paragraphs: [
          "Em 2026, ter presença digital deixou de ser diferencial — virou pré-requisito. Antes de fechar qualquer negócio, o cliente pesquisa sua marca no Google. E o que ele encontra ali define se você entra na disputa ou some da lista.",
        ],
      },
      {
        heading: "Credibilidade que redes sociais não entregam",
        paragraphs: [
          "Um perfil no Instagram é território alugado. Um site profissional é território próprio: domínio, identidade, controle total sobre a experiência.",
          "Marcas sérias investem em sites porque sabem que 75% dos consumidores julgam a credibilidade de uma empresa pelo design do site (Stanford Web Credibility Research).",
        ],
      },
      {
        heading: "Performance vira conversão",
        paragraphs: [
          "Cada 100ms a mais de carregamento reduz conversão em 1% (Amazon). Sites rápidos, otimizados para SEO e responsivos convertem visitantes em clientes de forma consistente.",
        ],
      },
    ],
  },
  {
    slug: "landing-page-vs-site-institucional",
    title: "Landing Page ou Site Institucional: qual escolher?",
    description:
      "Entenda a diferença entre uma landing page de alta conversão e um site institucional — e descubra qual formato faz mais sentido para o seu negócio.",
    date: "2026-06-28",
    readMinutes: 4,
    category: "Desenvolvimento Web",
    content: [
      {
        paragraphs: [
          "As duas soluções resolvem problemas diferentes. Escolher errado significa perder dinheiro em tráfego pago ou perder autoridade orgânica.",
        ],
      },
      {
        heading: "Landing Page",
        paragraphs: [
          "Uma página única, focada em um objetivo: capturar leads, vender um produto, agendar uma reunião. Ideal para campanhas de Google Ads, Meta Ads e lançamentos.",
        ],
      },
      {
        heading: "Site Institucional",
        paragraphs: [
          "Múltiplas páginas que apresentam sua empresa, serviços, portfólio e conteúdo. Constrói autoridade orgânica no Google ao longo do tempo e sustenta toda a operação comercial.",
        ],
      },
      {
        heading: "O ideal? Os dois trabalhando juntos.",
        paragraphs: [
          "Site institucional como base de autoridade + landing pages específicas para cada campanha. Essa é a arquitetura que gera resultado consistente.",
        ],
      },
    ],
  },
  {
    slug: "seo-tecnico-que-funciona",
    title: "SEO técnico: o que realmente move o ponteiro no Google",
    description:
      "Meta tags, dados estruturados, Core Web Vitals e arquitetura de conteúdo. Um guia prático de SEO técnico para quem quer aparecer na primeira página.",
    date: "2026-06-10",
    readMinutes: 6,
    category: "SEO",
    content: [
      {
        paragraphs: [
          "SEO não é sobre truques. É sobre entregar a melhor resposta para uma busca — e sinalizar isso claramente para o Google.",
        ],
      },
      {
        heading: "Core Web Vitals",
        paragraphs: [
          "LCP abaixo de 2.5s, INP abaixo de 200ms e CLS abaixo de 0.1. Métricas de experiência que o Google usa como fator de ranqueamento desde 2021.",
        ],
      },
      {
        heading: "Dados estruturados (Schema.org)",
        paragraphs: [
          "JSON-LD com Organization, LocalBusiness, Article, Breadcrumb e FAQ. Ajuda o Google a entender o conteúdo e a exibir rich snippets nos resultados.",
        ],
      },
      {
        heading: "Arquitetura semântica",
        paragraphs: [
          "Um H1 por página. Hierarquia clara de H2/H3. URLs limpas. Links internos com âncoras descritivas. O básico bem feito supera qualquer black hat.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
