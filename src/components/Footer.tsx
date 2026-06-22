import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
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
          <div className="font-mono-label text-foreground/40 mb-4">Navegação</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/sobre" className="hover:text-[var(--accent)] transition-colors">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-[var(--accent)] transition-colors">Serviços</Link></li>
            <li><Link to="/portfolio" className="hover:text-[var(--accent)] transition-colors">Portfólio</Link></li>
            <li><Link to="/contato" className="hover:text-[var(--accent)] transition-colors">Contato</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-label text-foreground/40 mb-4">Contato</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>reisdevx@gmail.com</li>
            <li>+55 73 9999-9999</li>
            <li>Itanhém, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center font-mono-label text-foreground/40">
        © {new Date().getFullYear()} ReisDevX — Todos os direitos reservados
      </div>
    </footer>
  );
}
