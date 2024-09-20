import { Category } from "./addListing.type";

export const formCategories: Category[] = [
  {
    category: "გარიგების ტიპი",
    fields: [
      {
        name: "dealType",
        type: "radio",
        options: [
          { label: "ყიდვა", value: "buy" },
          { label: "ქირა", value: "rent" },
        ],
        rules: {
          required: "გთხოვთ აირჩიოთ გარიგების ტიპი",
        },
      },
    ],
  },
  {
    category: "მდებარეობა",
    fields: [
      {
        label: "მისამართი",
        name: "address",
        type: "text",
        rules: {
          required: "მინიმუმ ორი სიმბოლო",
          minLength: { value: 2, message: "მინიმუმ ორი სიმბოლო" },
        },
      },
      {
        label: "საფოსტო ინდექსი",
        name: "postcode",
        type: "text",
        rules: {
          required: "მხოლოდ რიცხვები",
          pattern: {
            value: /^[0-9]+$/,
            message: "მხოლოდ რიცხვები",
          },
        },
      },
      {
        label: "რეგიონი",
        name: "region",
        type: "text",
        rules: {
          required: "გთხოვთ აირჩიოთ რეგიონი",
        },
      },
    ],
  },
  {
    category: "ბინის დეტალები",
    fields: [
      {
        label: "ფასი",
        name: "price",
        type: "text",
        rules: {
          required: "მხოლოდ რიცხვები",
          pattern: {
            value: /^[0-9]+$/,
            message: "მხოლოდ რიცხვები",
          },
        },
      },
      {
        label: "ფართობი",
        name: "area",
        type: "text",
        rules: {
          required: "მხოლოდ რიცხვები",
          pattern: {
            value: /^[0-9]+$/,
            message: "მხოლოდ რიცხვები",
          },
        },
      },
      {
        label: "საძინებლების რაოდენობა",
        name: "bedrooms",
        type: "text",
        rules: {
          required: "მხოლოდ რიცხვები",
          pattern: {
            value: /^[0-9]+$/,
            message: "მხოლოდ რიცხვები",
          },
        },
      },
    ],
  },
  {
    category: "",
    fields: [
      {
        label: "აღწერა",
        name: "description",
        type: "text",
        rules: {
          required: "მინიმუმ 5 სიმბოლო",
          minLength: { value: 5, message: "მინიმუმ 5 სიმბოლო" },
        },
      },
      {
        label: "ატვირთეთ ფოტო",
        name: "profilePicture",
        type: "file",
        rules: {
          required: "ატვირთეთ ფოტო",
        },
      },
      {
        label: "აგენტის არჩევა",
        name: "agent",
        type: "dropdown",
        options: [
          { label: "აგენტი 1", value: "agent1" },
          { label: "აგენტი 2", value: "agent2" },
        ],
      },
    ],
  },
];
