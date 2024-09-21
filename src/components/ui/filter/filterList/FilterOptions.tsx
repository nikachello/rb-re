import { FilterOptionsProps } from "./filterList.type";

const FilterOptions = ({ options, title }: FilterOptionsProps) => {
  return (
    <>
      <div className="font-bold">{title}</div>
      {options?.map((option) => (
        <div
          key={option.value}
          className="p-1 hover:bg-gray-100 cursor-pointer"
        >
          {option.label}
        </div>
      ))}
    </>
  );
};

export default FilterOptions;
