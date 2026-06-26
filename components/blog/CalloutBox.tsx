// components/blog/CalloutBox.tsx
import { Lightbulb, TrendingUp } from "lucide-react";

interface CalloutBoxProps {
  children: React.ReactNode;
  variant?: "stat" | "tip";
}

export function CalloutBox({ children, variant = "tip" }: CalloutBoxProps) {
  if (variant === "stat") {
    return (
      <div className="my-8 rounded-3xl bg-surface border border-glass-border p-6 flex gap-4 items-start shadow-[var(--shadow-card)]">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral-wash flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-brand-coral" />
        </div>
        <div className="text-on-background text-base leading-relaxed">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-3xl bg-surface-bright border-l-4 border-brand-coral pl-6 pr-6 py-5 flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral-wash flex items-center justify-center mt-0.5">
        <Lightbulb className="w-4 h-4 text-brand-coral" />
      </div>
      <div className="text-on-background text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
