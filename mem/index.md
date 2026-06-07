# Project Memory

## Core
Replica fiel do site reisdevx.base44.app (propriedade do usuário). Manter posições, cores, fontes, páginas e links idênticos.
Paleta: fundo #FAFAFA, texto #0A0A0A, accent dourado #D4A017. Fontes: Inter Tight (display bold), Inter (body), JetBrains Mono (labels uppercase tracking-wider).
Páginas: / (Início), /sobre, /servicos, /portfolio, /contato. Nav fixa no topo com logo "ReisDevX" (X amarelo) e CTA "INICIAR PROJETO" preto.
Use SEMPRE `hsl()` em src/styles.css — nunca `oklch()` (navegador do usuário não renderiza oklch e cai para preto/branco).
