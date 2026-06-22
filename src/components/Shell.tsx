import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorDot } from "./CursorDot";
import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col pt-20 bg-background selection:bg-[var(--primary)]/30 selection:text-[var(--accent)]">
      <CursorDot />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
