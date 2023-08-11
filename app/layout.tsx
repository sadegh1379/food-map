"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Provider from "./Provider";
import HeaderNavBar from "@/components/HeaderNavBar";
import { useEffect, useState } from "react";
import { userLocationContext } from "@/context/userLocationContext";
const raleway = Raleway({ subsets: ["latin"] });

type Location = {
  lat: number;
  lng: number;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userLocation, setUserLocation] = useState<Location>({
    lat: 35.715298,
    lng: 51.404343,
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = (): void => {
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
      // console.log('pos:', pos.coords)
      setUserLocation({
        lat: pos.coords.altitude as number,
        lng: pos.coords.longitude as number,
      });
    });
    } else{
      alert('no')
    }
  
  };
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <userLocationContext.Provider value={{userLocation, setUserLocation}}>
            <HeaderNavBar />
            {children}
          </userLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
