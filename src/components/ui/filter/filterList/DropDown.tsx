import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { DropdownProps } from "./filterList.type";

const Dropdown = ({ label, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="cursor-pointer mx-3" ref={dropdownRef}>
      <div className="flex" onClick={handleToggle}>
        {label} <ChevronDown />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white border rounded-md shadow-md p-2 w-80">
          <p></p>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
