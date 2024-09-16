import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IModalProps } from "./modal.type";

export function Modal({ onClick, children }: IModalProps) {
  const modalRoot = document.getElementById("modal-root");

  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [el, modalRoot]);

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
