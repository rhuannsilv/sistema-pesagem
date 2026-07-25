import type { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
