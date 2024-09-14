import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button/Button";
import { ChoosenFilter } from "../../components/ui/filter/choosenFilter/ChoosenFilter";
import { FilterList } from "../../components/ui/filter/filterList/FilterList";
import { homeFilterOptions } from "./home.data";
import { Card } from "../../components/ui/card/Card";

export function Home() {
  return (
    <div className="px-layout">
      <div className="flex">
        <div className="flex-1 mt-[70px] flex flex-col items-start gap-3">
          <FilterList filters={homeFilterOptions} />
          <div className="flex gap-3">
            <ChoosenFilter filter={{ label: "თბილისი" }} />
            <ChoosenFilter filter={{ label: "2 საძინებელი" }} />
          </div>
        </div>
        <div className="flex mt-[70px] flex gap-3">
          <Button type="main" Icon={Plus} text="ლისტინგის დამატება" />
          <Button type="secondary" Icon={Plus} text="აგენტის დამატება" />
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
    </div>
  );
}
