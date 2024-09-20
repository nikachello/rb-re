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
