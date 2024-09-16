import { Link } from "react-router-dom";
import { IButtonProps } from "./button.type";

export function Button({ type, text, Icon, onClick, to = "" }: IButtonProps) {
  return (
    <div className="inline-block">
      <Link
        to={to}
        onClick={onClick}
        className={`p-3 font-firago rounded-xl block cursor-pointer flex items-center gap-2 inline-block ${
          type === "main"
            ? "text-white bg-mainRed"
            : "text-mainRed border border-mainRed"
        }`}
      >
        {Icon && <Icon />}
        {text}
      </Link>
    </div>
  );
}
