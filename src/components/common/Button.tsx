interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
}

const BASE =
  "min-w-72 text-white tracking-widest uppercase text-base rounded-full font-medium p-4 ";
const VARIANT_SOLID = BASE.concat("bg-teal-500 ");
const VARIANT_OUTLINE = BASE.concat("border-2 border-white ");

export function Button({
  label,
  type = "button",
  variant = "solid",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        variant === "solid" ? VARIANT_SOLID : VARIANT_OUTLINE
      } ${className}`}
    >
      {label}
    </button>
  );
}
