import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "INÍCIO" },
  { to: "/sobre", label: "SOBRE" },
  { to: "/servicos", label: "SERVIÇOS" },
  { to: "/portfolio", label: "PORTFÓLIO" },
  { to: "/contato", label: "CONTATO" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || buttonRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("touchmove", onScroll);
    };
  }, [open]);

  const navTransparent = isHomePage && !scrolled && !open;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      navTransparent 
        ? "bg-transparent border-transparent" 
        : "bg-background/85 backdrop-blur-md border-b border-border/40"
    }`}>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center justify-between">

        <Link to="/" className="font-display font-black text-xl tracking-tight relative z-50">
          ReisDev<span className="text-[var(--accent)]">X</span>
        </Link>

        {/* Desktop nav - Show on lg (1024px+) to keep tablet on mobile menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-mono-label transition-colors ${active ? "text-[var(--accent)]" : "text-foreground/70 hover:text-foreground"}`}
              >
                {l.label}
                {active && <span className="block h-px w-full bg-[var(--accent)] mt-1" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contato"
            className="bg-[var(--primary)] text-white font-mono-label px-5 py-3 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all rounded-sm"
          >
            ORÇAMENTO

          </Link>
        </div>

        {/* Mobile/tablet trigger - Show below lg */}
        <button
          ref={buttonRef}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center border border-border hover:border-foreground transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile/tablet slide-out panel - right to left */}
      <div
        ref={panelRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="flex flex-col p-6 pt-24 gap-4">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-mono-label px-4 py-3 transition-colors ${active ? "text-[var(--accent)] bg-foreground/5" : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contato"
            className="mt-2 bg-[var(--primary)] text-white font-mono-label px-4 py-3 text-center rounded-sm transition-all"
          >
            ORÇAMENTO
          </Link>
        </nav>
      </div>
    </header>
  );
}
