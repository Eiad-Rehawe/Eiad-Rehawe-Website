import { useMediaQuery } from "@/hooks/useMediaQuery";

export type DeviceTier = "mobile" | "tablet" | "desktop";

/**
 * Coarse quality tier for expensive visuals (3D, particle counts).
 * Mobile intentionally gets the lightest treatment to protect FPS and load time.
 */
export function useDeviceTier(): DeviceTier {
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isDesktop) return "desktop";
  if (isTablet) return "tablet";
  return "mobile";
}
