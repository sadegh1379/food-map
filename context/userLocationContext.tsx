import { createContext } from "react";

export type UserLocationContextType = {
  userLocation: {
    lat: number,
    lng: number
  },
  setUserLocation: any;
}
export const userLocationContext = createContext<UserLocationContextType|null>(null);