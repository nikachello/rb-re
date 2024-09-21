import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FieldProps } from "../../../pages/addListing/addListing.type";

const Field: React.FC<FieldProps> = ({
  label,
  name,
  type,
  options,
  error,
  rules,
  control,
}) => {
  const [isTyping, setIsTyping] = useState(false); // Track if user is typing

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    field.onChange(e);
    setIsTyping(true);
  };

  const handleBlur = (field: any) => {
    field.onBlur();
    setIsTyping(false);
  };

  const getMessageColor = () => {
    if (error) {
      return "text-red-500";
    }
    if (isTyping) {
      return "text-green-500";
    }
    return "text-black";
  };

  const inputClass =
    name === "description"
      ? "w-full block p-4 border border-gray-500 rounded-md"
      : name === "profilePicture"
      ? "w-full block mt-2 p-2 border border-dashed rounded-md"
      : name === "agent"
      ? "w-full p-2 border border-gray-300 rounded-md bg-white"
      : "w-full p-2 border border-gray-300 rounded-md";

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-1 text-left"
        >
          {label}
        </label>
      )}

      {type === "radio" && options && (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                  <input
                    {...field}
                    type="radio"
                    value={option.value}
                    id={`${name}-${option.value}`}
                    className="mr-2"
                    checked={field.value === option.value}
                  />
                )}
              />
              <label htmlFor={`${name}-${option.value}`} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      )}

      {type === "text" && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input {...field} type="text" id={name} className={inputClass} />
          )}
        />
      )}

      {type === "file" && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <div className="relative border-dashed border-2 border-gray-300 rounded-lg p-8 text-center cursor-pointer">
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    field.onChange(e.target.files[0]); // Directly set the file object
                  }
                }}
                id={name}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-center h-full">
                <div className="w-12 h-12 border border-gray-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        />
      )}

      {type === "dropdown" && options && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <select {...field} className={inputClass}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      )}

      <p className={getMessageColor()}>{rules?.required}</p>
    </div>
  );
};

export default Field;
