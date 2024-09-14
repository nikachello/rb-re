import { ChevronDown } from "lucide-react";
import { IFilterListProps, IFilterOption } from "./filterList.type";

export function FilterList({ filters }: IFilterListProps) {
  return (
    <div className="inline-flex gap-[15px] border p-3 rounded-md font-firago font-medium text-[16px]">
      {filters.map((filter: IFilterOption) => (
        <div className="cursor-pointer mx-3 flex" key={filter.label}>
          {filter.label}
          <ChevronDown />
        </div>
      ))}
    </div>
  );
}
