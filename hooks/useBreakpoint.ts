import { useEffect, useState } from "react";
import { BREAKPOINTS } from "@constants/breakpoints";

export function useBreakpoint() {
  const [width, setWidth] = useState<number>(typeof window === "undefined" ? 0 : window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isSm: width >= BREAKPOINTS.sm,
    isMd: width >= BREAKPOINTS.md,
    isLg: width >= BREAKPOINTS.lg,
    isXl: width >= BREAKPOINTS.xl,
  };
}
