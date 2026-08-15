"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useScrollAnimation(animationCallback: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(animationCallback);
  callbackRef.current = animationCallback;

  useEffect(() => {
    let ctx: gsap.Context;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        callbackRef.current();
      }, ref);
      ScrollTrigger.refresh();
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return ref;
}

