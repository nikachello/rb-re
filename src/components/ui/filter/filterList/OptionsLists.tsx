import { OptionListsProps } from "./filterList.type";

const OptionLists = ({
  minOptions,
  maxOptions,
  setMinValue,
  setMaxValue,
}: OptionListsProps) => {
  return (
    <div className="flex justify-between mt-2">
      {minOptions && (
        <div className="w-1/2">
          <div className="font-bold">მინიმალური:</div>
          {minOptions.map((option) => (
            <div
              key={option.value}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => setMinValue(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {maxOptions && (
        <div className="w-1/2">
          <div className="font-bold">მაქსიმალური:</div>
          {maxOptions.map((option) => (
            <div
              key={option.value}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => setMaxValue(option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionLists;
