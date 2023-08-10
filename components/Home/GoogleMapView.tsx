import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const center = {
  lat: 35.715298,
  lng: 51.404343,
};

function GoogleMapView() {
  return (
    <div>
      <LoadScript
        googleMapsApiKey={``}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
