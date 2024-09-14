import { X } from "lucide-react";
import { IChoosenFilterProps } from "./choosenFilter.type";

export function ChoosenFilter({ filter }: IChoosenFilterProps) {
  return (
    <div className="border inline-block p-3 rounded-2xl">
      <div className="flex items-center justify-center">
        {filter.label} <X className="w-4 h-4 mt-1 ml-1" />
      </div>
    </div>
  );
}
