"use client"
import CategoryList from "@/components/Home/CategoryList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: sessoion } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!sessoion?.user) {
      // TODO: added push('/login')
      router.push("/");
    }
  }, [sessoion]); // eslint-disable-line
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList/>
      </div>
      <div className="col-span-3">1</div>
      <div></div>
    </div>
  );
}
