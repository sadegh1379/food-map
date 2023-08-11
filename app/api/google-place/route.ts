
import { NextResponse } from 'next/server';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

export async function GET(req: Request){
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const radius = searchParams.get('radius');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  // const res = await fetch(
  //   BASE_URL + "/textsearch/json?query=" + category + 
  //   "&locale=" + lat + "," + lng + "&radius=" + radius + 
  //   "&key=" + GOOGLE_API_KEY,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  // );
  // const products = await res.json();
  const products = [
    {
      name: 'aran',
      lat: 34.715298,
      lng: 55.404343,
      icon: '/placeholder.jpeg',
      address: 'tehran tehranpars',
      rating: 4.5,
    },
    {
      name: 'aiex',
      lat: 34.715298,
      lng: 60.404343,
      icon: '/placeholder.jpeg',
      address: 'tehran satarkhan',
      rating: 4.5,
    },
    {
      name: 'webmetric',
      lat: 34.715298,
      lng: 57.404343,
      icon: '/placeholder.jpeg',
      address: 'tehran valiasr',
      rating: 4.5,
    },
    {
      name: 'sharif',
      lat: 39.715298,
      lng: 55.404343,
      icon: '/placeholder.jpeg',
      address: 'tehran azadi',
      rating: 4.5,
    },
  ]
  return NextResponse.json({ products });
}
