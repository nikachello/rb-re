import { X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { IModalProps } from "./modal.type";

export function Modal({ onClick, children }: IModalProps) {
  const modalRoot = document.getElementById("modal-root");

  const el = document.createElement("div");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    modalRoot?.appendChild(el);
    return () => {
      document.body.style.overflow = "";
      modalRoot?.removeChild(el);
    };
  }, [el, modalRoot]);

  //   escape chaxurva

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <div
      onClick={onClick}
      className="fixed inset-0 backdrop-blur-sm flex justify-center items-center font-firago"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-24 py-10 bg-white rounded-3xl relative"
      >
        <div
          onClick={onClick}
          className="cursor-pointer absolute right-3 top-3"
        >
          <X />
        </div>
        <div>{children}</div>
      </div>
    </div>,
    el
  );
}
