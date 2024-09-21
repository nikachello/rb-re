import { LucideIcon } from "lucide-react";

export type ButtonType = "main" | "secondary";

export type ButtonAction = "add";

export interface IButtonProps {
  type: ButtonType;
  text: string;
  action?: ButtonAction;
  Icon?: LucideIcon;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  to?: string;
  submit?: boolean;
}
