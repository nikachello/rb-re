import { IFilterOption } from "../../components/ui/filter/filterList/filterList.type";

export const homeFilterOptions: IFilterOption[] = [
  {
    label: "რეგიონი",
    title: "რეგიონის მიხედვით",
    options: [
      { label: "თბილისი", value: "tbilisi" },
      { label: "ბათუმი", value: "batumi" },
      { label: "ქუთაისი", value: "kutaisi" },
    ],
  },
  {
    label: "ფართობი",
    title: "ფართობის მიხედვით",
    minOptions: [
      { label: "50", value: "50" },
      { label: "100", value: "100" },
      { label: "200", value: "200" },
    ],
    maxOptions: [
      { label: "100", value: "100" },
      { label: "200", value: "200" },
      { label: "300", value: "300" },
    ],
  },
  {
    label: "საფასო კატეგორია",
    title: "ფასის მიხედვით",
    minOptions: [
      { label: "500", value: "500" },
      { label: "1000", value: "1000" },
      { label: "2000", value: "2000" },
    ],
    maxOptions: [
      { label: "1000", value: "1000" },
      { label: "2000", value: "2000" },
      { label: "3000", value: "3000" },
    ],
  },
  {
    label: "საძინებლების რაოდენობა",
    title: "საძინებლების რაოდენობა",
    options: [
      { label: "1 საძინებელი", value: "1" },
      { label: "2 საძინებელი", value: "2" },
      { label: "3 საძინებელი", value: "3" },
    ],
  },
];
