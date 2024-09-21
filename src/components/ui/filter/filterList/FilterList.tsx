import { useState } from "react";
import Dropdown from "./DropDown";
import PriceFilter from "./PriceFilter";
import AreaFilter from "./AreaFilter";
import FilterOptions from "./FilterOptions";
import { IFilterListProps } from "./filterList.type";

export function FilterList({ filters }: IFilterListProps) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  return (
    <div className="inline-flex gap-[15px] border rounded-md font-firago font-medium text-[16px]">
      {filters.map((filter) => (
        <Dropdown key={filter.label} label={filter.label}>
          {filter.label === "საფასო კატეგორია" ? (
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              minOptions={filter.minOptions}
              maxOptions={filter.maxOptions}
            />
          ) : filter.label === "ფართობი" ? (
            <AreaFilter
              minArea={minArea}
              maxArea={maxArea}
              setMinArea={setMinArea}
              setMaxArea={setMaxArea}
              minOptions={filter.minOptions}
              maxOptions={filter.maxOptions}
              title={filter.title}
            />
          ) : (
            <FilterOptions options={filter.options} title={filter.title} />
          )}
        </Dropdown>
      ))}
    </div>
  );
}
