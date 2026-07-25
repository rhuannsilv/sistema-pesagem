import type { ButtonProps } from "./Button.types";

const defaultStyle =
  "cursor-pointer rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${defaultStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
