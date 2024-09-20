import { Mail, Phone } from "lucide-react";
import { ArrowBack, Bed } from "react-ionicons";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button/Button";
import { useState } from "react";
import { Modal } from "../../components/ui/modal/modal";
import { Slider } from "../../components/ui/slider/Slider";

export function Listing() {
  const { id } = useParams<{ id: string }>();

  // ვნახოთ id ციფრია და არსებობს თუ არა ასეთი განცხადება
  const numericId = Number(id);

  if (!id || isNaN(numericId)) {
    return (
      <div className="text-center">
        <h1 className="text-6xl font-bold">Incorrect ID</h1>
      </div>
    );
  }

  const [agentModal, setAgentModal] = useState(false);

  return (
    <div className="mt-[50px] font-firago">
      <Link className="inline-block mb-5" to="/">
        <ArrowBack />
      </Link>
      <div className="flex gap-11 py-10">
        <div className="flex flex-col">
          <img
            className="max-w-[839px] max-h-[670px] object-contain inline-block"
            src="/estates/listingPhoto.png"
            alt="განცხადების ფოტო"
          />
          <p className="self-end text-secondaryText">
            გამოქვეყნების თარიღი 08/08/24
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <span className="font-bold text-3xl">80,000 ₾</span>
          <div className="text-lg flex flex-col gap-3 text-secondaryText">
            <div className="flex items-center inline-block">
              <img
                className="w-4 h-4 mr-2 object-contain"
                src="/icons/mapPin.png"
                alt="Area Icon"
              />
              <span>თბილისი, ი.ჭავჭავაძის 32</span>
            </div>
            <div className="flex items-center inline-block">
              <img
                className="w-4 h-4 mr-2 inline-block"
                src="/icons/area.png"
                alt="Area Icon"
              />
              <span>საძინებელი 2</span>
            </div>
            <div className="flex items-center object-fit inline-block -ml-1">
              <Bed color={"#02152680"} />
              <span className="ml-2">
                ფართი 55 მ<sup>2</sup>
              </span>
            </div>
            <div className="flex items-center">
              <img
                className="w-4 h-4 mr-2"
                src="/icons/zip.png"
                alt="Zip Icon"
              />
              <span>საფოსტო ინდექსი 2</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-secondaryText">
            იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით,
            ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით.
          </div>

          {/* Agent INFO */}
          <div className="border p-10">
            <div className="flex items-center gap-5">
              <div>
                <img src="/agents/agent.png" alt="Agent Picture" />
              </div>
              <div>
                <p>სოფიო გელოვანი</p>
                <p className="text-secondaryText">აგენტი</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <Mail width={15} height={15} />
                <p className="text-secondaryText">
                  sophio.gelovani@redberry.ge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone width={15} height={15} />
                <p className="text-secondaryText">577 777 777</p>
              </div>
            </div>
          </div>
          <div className="inline-block">
            <Button
              onClick={() => setAgentModal(true)}
              type="secondary"
              text="ლისტინგის წაშლა"
            />
          </div>
        </div>
      </div>
      {agentModal && (
        <Modal onClick={() => setAgentModal(false)}>
          <div className="flex flex-col gap-5">
            <div>გსურთ წაშალოთ ლისტინგი?</div>
            <div className="flex gap-5">
              <Button
                onClick={() => setAgentModal(false)}
                type="secondary"
                text="გაუქმება"
              />
              <Button type="main" text="დადასტურება" />
            </div>
          </div>
        </Modal>
      )}
      <h1 className="text-2xl font-medium">ბინები მსგავს ლოკაციაზე</h1>
      <Slider />
    </div>
  );
}
