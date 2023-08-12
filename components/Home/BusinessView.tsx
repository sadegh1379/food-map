import { BusinessType } from "@/types";
import BusinessItem from "./BusinessItem";
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { Ref, useRef } from "react";

function BusinessView({ businessList }: { businessList: BusinessType[] }) {
  const businessListRef = useRef(null);

  const getLeft = (element: any) => {
    // @ts-ignore
    element.scrollLeft -= 500;
  }
  const getRight = (element: any) => {
    // @ts-ignore
    element.scrollLeft += 500;
  }
  return (
    <div className="relative">
      <AiFillLeftCircle onClick={() => getLeft(businessListRef.current)} color="#FFA726" className="absolute top-[38%] cursor-pointer left-5" size={35} />
    <div ref={businessListRef} className="flex overflow-scroll overflow-x-auto scrollbar-hide scroll-smooth">
      {businessList.map((business, i) => (
        <BusinessItem business={business} key={i}/>
      ))}
        {businessList.map((business, i) => (
        <BusinessItem business={business} key={i}/>
      ))}
        {businessList.map((business, i) => (
        <BusinessItem business={business} key={i}/>
      ))}
        {businessList.map((business, i) => (
        <BusinessItem business={business} key={i}/>
      ))}
        {businessList.map((business, i) => (
        <BusinessItem business={business} key={i}/>
      ))}
    </div>
      <AiFillRightCircle onClick={() => getRight(businessListRef.current)} color="#FFA726" className="absolute top-[38%] cursor-pointer right-5" size={35} />
    </div>
  )
}

export default BusinessView
