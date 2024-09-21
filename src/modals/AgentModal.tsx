import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button/Button";
import Field from "../components/ui/field/Field";
import axios from "axios";

interface AgentModalProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: File;
}

export function AgentModal({ onClick }: AgentModalProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      // Convert avatar file to Base64 and append

      //   const base64Avatar = await convertFileToBase64(data.avatar);
      formData.append("avatar", data.avatar);

      // Logging FormData contents for verification
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axios.post(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer 9d10918c-e1ae-4e20-9ffd-a4f153673508",
          },
        }
      );

      if (response.status === 201) {
        console.log("აგენტი წარმატებით დაემატა", response.data);
      }
    } catch (error) {
      console.error("ვერ ვამატებთ აგენტს", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-10 text-center">
      <div>
        <p className="text-2xl">აგენტის დამატება</p>
        <div className="grid grid-cols-2 gap-4 w-full p-10 text-left">
          <Field
            label="სახელი"
            name="name"
            type="text"
            control={control}
            rules={{
              required: "მინიმუმ ორი სიმბოლო", // Required field with a custom message
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლოა საჭირო", // Error message for min length
              },
            }}
            error={errors["name" as keyof FormValues]?.message}
            watch={watch}
          />

          <Field
            label="გვარი"
            name="surname"
            type="text"
            control={control}
            rules={{
              required: "მინიმუმ ორი სიმბოლო", // Required field with a custom message
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლოა საჭირო", // Error message for min length
              },
            }}
            error={errors["lastname" as keyof FormValues]?.message}
            watch={watch}
          />

          <Field
            label="ელ-ფოსტა"
            name="email"
            type="text"
            control={control}
            rules={{
              required: "მინიმუმ ორი სიმბოლო", // Required field with a custom message
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლოა საჭირო", // Error message for min length
              },
            }}
            error={errors["email" as keyof FormValues]?.message}
            watch={watch}
          />

          <Field
            label="ტელეფონის ნომერი"
            name="phone"
            type="text"
            control={control}
            rules={{
              required: "მინიმუმ ორი სიმბოლო", // Required field with a custom message
              minLength: {
                value: 2,
                message: "მინიმუმ 2 სიმბოლოა საჭირო", // Error message for min length
              },
            }}
            error={errors["phoneNum" as keyof FormValues]?.message}
            watch={watch}
          />
        </div>
        <div className="px-10">
          <Field
            label="ატვირთეთ ფოტო"
            name="avatar"
            type="file"
            control={control}
            rules={{
              required: "ატვირთეთ ფოტო", // Required field with a custom message
            }}
            error={errors["avatar" as keyof FormValues]?.message}
            watch={watch}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <Button onClick={onClick} type="secondary" text="გაუქმება" />
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="p-3 font-firago rounded-xl text-white bg-mainRed"
        >
          დაამატე აგენტი
        </button>
      </div>
    </div>
  );
}
