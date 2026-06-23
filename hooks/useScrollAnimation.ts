"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useScrollAnimation(animationCallback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback();
    }, ref);

    return () => ctx.revert();
  }, [animationCallback]);

  return ref;
}
