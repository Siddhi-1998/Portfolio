import useReveal from "./usereaveal";

/* ─── REVEAL WRAPPER ──────────────────────────────────────── */
export default function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useReveal();
  const anim = direction === "right" ? "slideRight" : "fadeUp";
  return (
    <div ref={ref} style={{
      opacity: 0,
      animation: visible ? `${anim} 0.7s ${delay}s ease forwards` : "none",
      ...style,
    }}>
      {children}
    </div>
  );
}