import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button/Button";
import { ChoosenFilter } from "../../components/ui/filter/choosenFilter/ChoosenFilter";
import { FilterList } from "../../components/ui/filter/filterList/FilterList";
import { homeFilterOptions } from "./home.data";

export function Home() {
  return (
    <div className="px-layout">
      <div>
        <div className="mt-[70px] flex flex-col items-start gap-[10px]">
          <FilterList filters={homeFilterOptions} />
          <div className="flex gap-[5px]">
            <ChoosenFilter filter={{ label: "თბილისი" }} />
            <ChoosenFilter filter={{ label: "2 საძინებელი" }} />
          </div>
          <Button type="main" Icon={Plus} text="ლისტინგის დამატება" />
          <Button type="secondary" Icon={Plus} text="აგენტის დამატება" />
        </div>
      </div>
    </div>
  );
}
