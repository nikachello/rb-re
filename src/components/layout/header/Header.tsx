import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="px-layout py-[30px] border-b border-gray-300 border-b-[1px]">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>
    </div>
  );
}
