import { useState, useEffect } from "react";
import OptionLists from "./OptionsLists";

import { PriceFilterProps } from "./filterList.type";

const PriceFilter = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  minOptions,
  maxOptions,
}: PriceFilterProps) => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (minPrice && maxPrice && Number(maxPrice) < Number(minPrice)) {
      setError("მაქსიმალური ფასი უნდა იყოს მინიმალურზე მეტი");
    } else {
      setError(""); // Clear error if validation passes
    }
  }, [minPrice, maxPrice]);
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <input
          type="number"
          placeholder="დან"
          className="border rounded-md p-1 w-24"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="მდე"
          className="border rounded-md p-1 w-24"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <OptionLists
        minOptions={minOptions}
        maxOptions={maxOptions}
        setMinValue={setMinPrice}
        setMaxValue={setMaxPrice}
      />
    </div>
  );
};

export default PriceFilter;
