"use client";
import { useState } from "react";
import Data, { ICategory } from "@/Shared/Data";
import Image from "next/image";

function CategoryList() {
  const [categoryList, setCategoryList] = useState<ICategory[]>(
    Data.CategoryListData
  );
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  return (
    <div>
      <h2 className="font-bold">Select Food Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item: ICategory, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`flex flex-col
             bg-gray-100 rounded-lg p-2 m-2 cursor-pointer
              items-center justify-center 
              grayscale hover:grayscale-0
              border-[1px]
              ${
                index == selectedCategory
                  ? "grayscale-0 border-purple-400"
                  : null
              }`}
          >
            <Image src={item.icon} width={40} height={40} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
