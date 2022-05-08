export interface ButtonProps {
  width: number;
  height?: number;
  name: string;
  bgcolor: string;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?:boolean;
}
