"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

function HeaderNavBar() {
  const { data: sessoion } = useSession();
  return (
    <div className="flex items-center justify-between p-3 shadow-md">
      <div className="flex items-center gap-5">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
        <h2 className="cursor-pointer">Home</h2>
        <h2 className="cursor-pointer">Favorite</h2>
      </div>
      <div className="md:flex w-[40%] hidden bg-gray-100 gap-2 p-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-1"
        />
      </div>
      <div>
        <Image
          src={"/sadegh.jpg"}
          width={40}
          height={40}
          alt="sadegh"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
export default HeaderNavBar;
