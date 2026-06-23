import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  distance = 28,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  distance?: number;
}

export function StaggerReveal({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  distance = 24,
}: StaggerRevealProps) {
  const [visible, setVisible] = useState(false);
  const firstRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = firstRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Array.isArray(children) ? children : [children];

  const wrapped = (
    <>
      {items.map((child, i) => (
        <div
          key={i}
          ref={i === 0 ? firstRef : undefined}
          className={itemClassName}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
            transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + i * staggerDelay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + i * staggerDelay}ms`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </>
  );

  if (className) {
    return <div className={className}>{wrapped}</div>;
  }
  return wrapped;
}
