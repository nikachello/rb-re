import { IButtonProps } from "./button.type";

export function Button({ type, text, Icon }: IButtonProps) {
  return (
    <div>
      <a
        className={`p-4 font-firago rounded-xl block cursor-pointer flex items-center gap-2 ${
          type === "main"
            ? "text-white bg-mainRed"
            : "text-mainRed border border-mainRed"
        }`}
      >
        {Icon && <Icon />}
        {text}
      </a>
    </div>
  );
}
