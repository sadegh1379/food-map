"use client"
import CategoryList from "@/components/Home/CategoryList";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import RatingSelect from "@/components/Home/RatingSelect";
import { BusinessType } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BusinessView from '@/components/Home/BusinessView';

export default function Home() {
  const [businessList, setBusinessList] = useState<BusinessType[] | []>([])
  const { data: sessoion } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!sessoion?.user) {
      // TODO: added push('/login')
      router.push("/");
    }
  }, [sessoion]); // eslint-disable-line

  useEffect(() => {
    axios.get('/api/google-place').then(res => {
      setBusinessList(res.data.products)
    })
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3 flex flex-col gap-10">
        <CategoryList/>
        <RangeSelect/>
        <RatingSelect/>
      </div>
      <div className="col-span-3 p-3">
        <GoogleMapView />
        <BusinessView businessList={businessList}/>
      </div>
    </div>
  );
}
