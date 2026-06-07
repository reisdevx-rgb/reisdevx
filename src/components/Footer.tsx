import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#050505] text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display font-black text-2xl">
            ReisDev<span className="text-[var(--accent)]">X</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-md">
            Engenhando impérios digitais. Sites, e-commerce, SaaS e plataformas que dominam mercados.
          </p>
        </div>
        <div>
          <div className="font-mono-label text-background/40 mb-4">Navegação</div>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/sobre" className="hover:text-[var(--gold)]">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-[var(--gold)]">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-[var(--gold)]">Portfólio</Link></li>
            <li><Link to="/contato" className="hover:text-[var(--gold)]">Contato</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-label text-background/40 mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-background/80">
            <li>reisdevx@gmail.com</li>
            <li>+55 73 9999-9999</li>
            <li>Itanhém, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-6 text-center font-mono-label text-background/40">
        © {new Date().getFullYear()} ReisDevX — Todos os direitos reservados
      </div>
    </footer>
  );
}
