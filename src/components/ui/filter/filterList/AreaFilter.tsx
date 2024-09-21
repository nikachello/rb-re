import { useEffect, useState } from "react";
import OptionLists from "./OptionsLists";
import { AreaFilterProps } from "./filterList.type";

const AreaFilter = ({
  minArea,
  maxArea,
  setMinArea,
  setMaxArea,
  minOptions,
  maxOptions,
}: AreaFilterProps) => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (minArea && maxArea && Number(maxArea) < Number(minArea)) {
      setError("მაქსიმალური ფართობი უნდა იყოს მინიმალურზე მეტი");
    } else {
      setError(""); // Clear error if validation passes
    }
  }, [minArea, maxArea]);

  return (
    <>
      <p></p>
      <div className="flex justify-between">
        <input
          type="number"
          placeholder="მინიმალური"
          className="border rounded-md p-1 w-24"
          value={minArea}
          onChange={(e) => setMinArea(e.target.value)}
        />
        <input
          type="number"
          placeholder="მაქსიმალური"
          className="border rounded-md p-1 w-24"
          value={maxArea}
          onChange={(e) => setMaxArea(e.target.value)}
        />
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <OptionLists
        minOptions={minOptions}
        maxOptions={maxOptions}
        setMinValue={setMinArea}
        setMaxValue={setMaxArea}
      />
    </>
  );
};

export default AreaFilter;
