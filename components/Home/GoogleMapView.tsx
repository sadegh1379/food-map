import { userLocationContext } from "@/context/userLocationContext";
import { BusinessType } from "@/types";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useContext } from "react";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

function GoogleMapView({ businessList }: { businessList: BusinessType[] }) {
  const locationContext  = useContext(userLocationContext); 
  // console.log('userLocation', locationContext?.userLocation);
  console.log('businessList:', businessList)
  console.log('locationContext?.userLocation:', locationContext?.userLocation)
  return (
    <div>
      <LoadScript
        googleMapsApiKey={``}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={locationContext?.userLocation} zoom={10}>
          <MarkerF
            // @ts-ignore
            position={locationContext?.userLocation}
            icon={{ 
              url: '/user-location.png',
              scaledSize: {
                width: 50,
                height: 50,
                equals: () => true
              }
           }}
          />
          {businessList.map(({ lat, lng }, index) => (
            <MarkerF
            key={index}
            position={{
              lat,
               lng
            }}
          //   icon={{ 
          //     url: '/user-location.png',
          //     scaledSize: {
          //       width: 50,
          //       height: 50,
          //       equals: () => true
          //     }
          //  }}
          />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
