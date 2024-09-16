import { useState } from "react";
import { ArrowBack, ArrowForward } from "react-ionicons";
import { Card } from "../card/Card";

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [1, 2, 3, 4, 5];

  // Cardebis raodenoba slideze
  const cardsPerGroup = 4;

  // sul ramdeni page unda gvkondes
  const totalGroups = Math.ceil(cards.length / cardsPerGroup);

  // ramdeni card unda ikos tito jgufshi
  const groupedCards = Array.from({ length: totalGroups }, (_, index) =>
    cards.slice(index * cardsPerGroup, index * cardsPerGroup + cardsPerGroup)
  );

  const showArrows = totalGroups > 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalGroups - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalGroups - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative pb-5">
      <div className="mt-5 flex gap-3 ">
        {/* isari previous */}
        {showArrows && (
          <div
            className="absolute cursor-pointer z-50 top-1/2 -left-12 transform -translate-y-1/2"
            onClick={handlePrev}
          >
            <ArrowBack />
          </div>
        )}

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {groupedCards.map((group, groupIndex) => (
              <div key={groupIndex} className="flex-shrink-0 w-full flex gap-2">
                {group.map((card, index) => (
                  <div key={index} className="flex-shrink-0 w-1/4">
                    <Card />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* isari next */}

        {showArrows && (
          <div
            className="absolute cursor-pointer z-50 top-1/2 -right-12 transform -translate-y-1/2"
            onClick={handleNext}
          >
            <ArrowForward />
          </div>
        )}
      </div>
    </div>
  );
}
