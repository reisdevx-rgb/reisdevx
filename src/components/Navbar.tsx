import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { to: "/", label: "INÍCIO" },
  { to: "/sobre", label: "SOBRE" },
  { to: "/servicos", label: "SERVIÇOS" },
  { to: "/portfolio", label: "PORTFÓLIO" },
  { to: "/blog", label: "BLOG" },
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

      <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:justify-between lg:px-12">

        <Link to="/" className={`relative z-50 truncate font-display text-xl font-black transition-opacity duration-200 ${open ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}>
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
          <ThemeToggle />
          <Link
            to="/contato"
            className="bg-[var(--primary)] text-white font-mono-label px-5 py-3 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all rounded-sm"
          >
            ORÇAMENTO

          </Link>
        </div>


        {/* Mobile/tablet trigger - Show below lg */}
        <div className="relative z-50 flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={buttonRef}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-border transition-colors hover:border-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile/tablet slide-out panel - right to left */}
      <div
        ref={panelRef}
        className={`fixed right-0 top-0 z-50 h-dvh w-80 max-w-[85vw] overflow-y-auto border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-20 items-center px-6 border-b border-border/40">
          <Link to="/" className="font-display text-xl font-black">
            ReisDev<span className="text-[var(--accent)]">X</span>
          </Link>
        </div>
        <nav className="flex flex-col p-6 gap-4">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-mono-label text-lg py-2 border-b border-border/10 transition-colors ${active ? "text-[var(--accent)]" : "text-foreground/80 hover:text-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contato"
            className="mt-4 bg-[var(--primary)] text-white font-mono-label px-4 py-4 text-center rounded-sm transition-all hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          >
            ORÇAMENTO
          </Link>
        </nav>
      </div>
      {/* Backdrop */}
      {open && (
        <div 
           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
