import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button/Button";
import { ChoosenFilter } from "../../components/ui/filter/choosenFilter/ChoosenFilter";
import { FilterList } from "../../components/ui/filter/filterList/FilterList";
import { homeFilterOptions } from "./home.data";
import { Card } from "../../components/ui/card/Card";
import { Modal } from "../../components/ui/modal/modal";
import { useState } from "react";

export function Home() {
  const [agentModal, setAgentModal] = useState(false);

  return (
    <>
      <div className="flex mt-[50px] font-firago">
        <div className="flex-1 flex flex-col items-start gap-3">
          <FilterList filters={homeFilterOptions} />
          <div className="flex gap-3">
            <ChoosenFilter filter={{ label: "თბილისი" }} />
            <ChoosenFilter filter={{ label: "2 საძინებელი" }} />
          </div>
        </div>
        <div className="flex  flex gap-3">
          <Button type="main" Icon={Plus} text="ლისტინგის დამატება" />
          <Button
            onClick={() => setAgentModal(true)}
            type="secondary"
            Icon={Plus}
            text="აგენტის დამატება"
          />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {agentModal && (
        <Modal onClick={() => setAgentModal(false)}>
          <div>გსურთ წაშალოთ ლისტინგი?</div>
        </Modal>
      )}
    </>
  );
}
