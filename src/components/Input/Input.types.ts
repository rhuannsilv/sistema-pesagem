export type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
};