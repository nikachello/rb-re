export interface FieldConfig {
  label?: string | undefined;
  name: string;
  type: "radio" | "text" | "file" | "dropdown";
  rules?: any;
  error?: string;
  options?: { label: string; value: string }[];
}

export interface FieldProps {
  label?: string;
  name: string;
  type: "text" | "radio" | "file" | "dropdown";
  options?: { label: string; value: string }[];
  error?: string;
  rules?: any;
  control: any;
  watch: any;
}

export interface Category {
  category: string;
  fields: FieldConfig[];
}
