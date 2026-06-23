type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ title, subtitle, align = "center", className = "", titleClassName = "" }: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-16 ${className}`}>
      <h2 className={`font-headline-xl text-3xl md:text-headline-xl text-on-background mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body-lg text-body-lg text-text-secondary max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
