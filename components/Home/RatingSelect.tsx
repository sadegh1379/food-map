import { useState } from "react";
import Data, { IRating } from '@/Shared/Data';

function RatingSelect() {
  const [selectedRating, setSelectedRating] = useState<number[]|[]>([]);

  const onSelectRate = (item: number, value: boolean) => {
    if(value){
      setSelectedRating([...selectedRating, item]);
    } else {
      setSelectedRating(selectedRating.filter(r => r !== item))
    }
  }
  console.log('selected rating', selectedRating)
  return (
    <div className="pt-2">
      <h2 className="font-bold">Select Rating</h2>
      {Data.ratingList.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <label>{item.icon}</label>
          <input onChange={(e) => onSelectRate(item.name, e.target.checked)} type="checkbox" />
        </div>
      ))}
    </div>
  );
}

export default RatingSelect;
