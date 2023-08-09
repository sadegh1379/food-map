"use client"
import Image from "next/image";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  useEffect(() => {
    console.log('session:', session)
    if(session?.user){
      
    }
  }, [session])
  return (
    <div className="flex flex-col items-center mt-[10%] gap-5">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <button
        onClick={() => signIn()}
       className="text-center gap-5 flex items-center
        text-white bg-gradient-to-r from-blue-100 to-blue-700
        py-1 px-4 text-md rounded-md font-bold">
        <FcGoogle size={20} />
        <p>sign up with google</p>
      </button>
    </div>
  );
}
