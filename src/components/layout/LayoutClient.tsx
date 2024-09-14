import type { PropsWithChildren } from "react";
import { Header } from "./header/Header";
export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
    </div>
  );
}
