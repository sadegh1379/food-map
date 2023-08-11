import { BusinessType } from "@/types";
import BusinessItem from "./BusinessItem";

function BusinessView({ businessList }: { businessList: BusinessType[] }) {
  return (
    <div className="flex overflow-scroll overflow-x-auto">
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
  )
}

export default BusinessView
