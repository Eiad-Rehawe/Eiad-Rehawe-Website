import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { HeroScene } from "@/components/three/HeroScene";

function NetworkFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="absolute h-64 w-64 animate-pulse-glow rounded-full bg-[color:var(--color-accent)]/20 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute h-48 w-48 animate-spin rounded-full border border-[color:var(--color-accent)]/25 [animation-duration:24s] sm:h-60 sm:w-60" />
      <div className="absolute h-32 w-32 animate-spin rounded-full border border-[color:var(--color-accent-2)]/25 [animation-duration:16s] [animation-direction:reverse] sm:h-40 sm:w-40" />
      <div className="h-3 w-3 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_24px_6px_rgba(59,109,251,0.6)]" />
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="animate-float absolute h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-2)]"
          style={{
            top: `${18 + ((i * 13) % 60)}%`,
            left: `${12 + ((i * 27) % 76)}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroCanvas() {
  const webglSupported = useWebGLSupport();
  const reducedMotion = usePrefersReducedMotion();
  const tier = useDeviceTier();
  const pointer = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const progress = Math.min(1, window.scrollY / (window.innerHeight || 1));
      scrollRef.current = progress;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  if (webglSupported === null) {
    return <div className="h-full w-full" aria-hidden="true" />;
  }

  if (!webglSupported || reducedMotion || tier === "mobile") {
    return <NetworkFallback />;
  }

  return (
    <Canvas
      dpr={[1, tier === "desktop" ? 1.75 : 1.25]}
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!touch-none"
    >
      <Suspense fallback={null}>
        <HeroScene pointer={pointer} scrollRef={scrollRef} tier={tier} />
      </Suspense>
    </Canvas>
  );
}
