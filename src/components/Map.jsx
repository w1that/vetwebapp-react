import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.lat, lng: props.long }} />
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;
