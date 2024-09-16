import type { PropsWithChildren } from "react";
import { Header } from "./header/Header";
export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <Header />
      <div className="px-layout">{children}</div>
    </div>
  );
}
