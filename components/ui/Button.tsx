import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-white";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyle = "font-button-text text-button-text rounded-full transition-all duration-300 cursor-hover flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-coral to-[#ff7e54] text-white hover:scale-105 hover:shadow-hover-button px-8 py-4",
    secondary: "border border-on-background text-on-background hover:bg-on-background hover:text-white px-8 py-4",
    "outline-white": "bg-transparent border border-white text-white hover:bg-white hover:text-on-background px-10 py-5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
