export interface FilterOptions {
  label: string;
  value: string;
}

export interface IFilterOption {
  label: string;
  options?: FilterOptions[];
  minOptions?: FilterOptions[];
  maxOptions?: FilterOptions[];
  title: string;
}

export interface IFilterListProps {
  filters: IFilterOption[];
}

export interface FilterOptionsProps {
  options?: { label: string; value: string }[];
  title?: string;
}

export interface OptionListsProps {
  minOptions?: FilterOptions[];
  maxOptions?: FilterOptions[];
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface PriceFilterProps {
  minPrice: string;
  maxPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  minOptions: IFilterOption["minOptions"];
  maxOptions: IFilterOption["maxOptions"];
}

export interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

export interface AreaFilterProps {
  minArea: string;
  maxArea: string;
  setMinArea: React.Dispatch<React.SetStateAction<string>>;
  setMaxArea: React.Dispatch<React.SetStateAction<string>>;
  minOptions: IFilterOption["minOptions"];
  maxOptions: IFilterOption["maxOptions"];
  title: string;
}
