"use client"
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
    <div>
      <h2 className="text-red-300">home</h2>
    </div>
  );
}
