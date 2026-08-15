type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ title, subtitle, align = "center", className = "", titleClassName = "" }: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-10 md:mb-16 ${className}`}>
      <h2 className={`font-headline-xl text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight text-balance text-on-background mb-3 md:mb-4 ${titleClassName}`}>
        {title}<span className="text-brand-coral">.</span>
      </h2>
      {subtitle && (
        <p className={`font-body-lg text-sm sm:text-base md:text-xl text-text-secondary max-w-2xl text-balance ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
