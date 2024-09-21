import { useForm } from "react-hook-form";
import Field from "../../components/ui/field/Field";
import { formCategories } from "./addListing.data";
import axios from "axios";
import { useEffect, useState } from "react";

interface FormValues {
  username: string;
  dealType: string;
  address: string;
  region: string;
  postcode: string;
  profilePicture: FileList;
  agent: string;
}

export function AddListing() {
  const [agents, setAgents] = useState<{ label: string; value: string }[]>([]); // State to store agents
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get(
          "https://api.real-estate-manager.redberryinternship.ge/api/agents",
          {
            headers: {
              Authorization: "Bearer 9d10918c-e1ae-4e20-9ffd-a4f153673508",
            },
          }
        );
        const agentOptions = response.data.map(
          (agent: { id: string; name: string }) => ({
            label: agent.name,
            value: agent.id,
          })
        );
        setAgents(agentOptions);
      } catch (error) {
        console.error("Failed to fetch agents", error);
      }
    };

    fetchAgents();
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="font-firago w-full items-center text-center mt-8">
      <div>
        <h1 className="text-3xl font-medium">ლისტინგის დამატება</h1>
        <div className="font-firago w-1/2 m-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {formCategories.map((category) => (
              <div key={category.category} className="space-y-4 text-left">
                <span className="text-lg font-semibold">
                  {category.category}
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {category.fields.map((field) => {
                    const isFullWidth = [
                      "description",
                      "profilePicture",
                      "agent",
                    ].includes(field.name);

                    return (
                      <div
                        className={isFullWidth ? "col-span-2" : ""}
                        key={field.name}
                      >
                        <Field
                          label={field.label}
                          name={field.name}
                          type={field.type}
                          control={control}
                          rules={field.rules}
                          error={
                            errors[field.name as keyof FormValues]?.message
                          }
                          options={
                            field.name === "agent" ? agents : field.options
                          } // Use fetched agents if the field is agent
                          watch={watch}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
