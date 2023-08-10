import { useState } from "react";

function RangeSelect() {
  const [radius, setRadius] = useState<string>('50');
  return (
    <div className="pt-2">
      <h2 className="font-bold">Select Radius (In Meter)</h2>
      <input
        type="range"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        className="bg-gray-100 appearance-none rounded-lg h-2 w-full"
        min={'0'}
        max={'100'}
        step={'10'}
      />
      <label className="text-gray-500 text-[15px]">In {+radius as number * 10} meter</label>
    </div>
  );
}

export default RangeSelect;
