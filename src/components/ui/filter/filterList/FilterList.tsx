import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { IFilterListProps, IFilterOption } from "./filterList.type";

export function FilterList({ filters }: IFilterListProps) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  return (
    <div className="inline-flex gap-[15px] border p-3 rounded-md font-firago font-medium text-[16px]">
      {filters.map((filter: IFilterOption) => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const handleToggle = () => {
          setIsOpen((prev) => !prev);
        };

        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };

        useEffect(() => {
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, []);

        return (
          <div
            className="cursor-pointer mx-3 "
            key={filter.label}
            ref={dropdownRef}
          >
            <div className="flex" onClick={handleToggle}>
              {filter.label} <ChevronDown />
            </div>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-64 bg-white border rounded-md shadow-md p-2">
                {filter.label === "საფასო კატეგორია" ? (
                  <>
                    <div className="flex justify-between">
                      <input
                        type="number"
                        placeholder="მინიმალური"
                        className="border rounded-md p-1 w-24"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <input
                        type="number"
                        placeholder="მაქსიმალური"
                        className="border rounded-md p-1 w-24"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      {filter.minOptions && (
                        <div className="w-1/2">
                          <div className="font-bold">მინიმალური ფასი:</div>
                          {filter.minOptions.map((option) => (
                            <div
                              key={option.value}
                              className="p-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => setMinPrice(option.label)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                      {filter.maxOptions && (
                        <div className="w-1/2">
                          <div className="font-bold">მაქსიმალური ფასი:</div>
                          {filter.maxOptions.map((option) => (
                            <div
                              key={option.value}
                              className="p-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => setMaxPrice(option.label)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : filter.label === "ფართობი" ? (
                  <>
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
                    <div className="flex justify-between mt-2">
                      {filter.minOptions && (
                        <div className="w-1/2">
                          <div className="font-bold">მინიმალური ფართობი:</div>
                          {filter.minOptions.map((option) => (
                            <div
                              key={option.value}
                              className="p-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => setMinArea(option.label)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                      {filter.maxOptions && (
                        <div className="w-1/2">
                          <div className="font-bold">მაქსიმალური ფართობი:</div>
                          {filter.maxOptions.map((option) => (
                            <div
                              key={option.value}
                              className="p-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => setMaxArea(option.label)}
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-bold">{filter.title}</div>
                    {filter.options?.map((option) => (
                      <div
                        key={option.value}
                        className="p-1 hover:bg-gray-100 cursor-pointer"
                      >
                        {option.label}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
