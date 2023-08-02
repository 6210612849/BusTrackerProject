import { useState, useEffect, useContext, createContext } from "react";
import { GoogleMapContext } from "./MapContainer"


const CreateMyLocationMarker = (props) => {
  const [marker, setMarker] = useState(null);
  // const { map } = useContext(GoogleMapContext);


  const map = props.map

  useEffect(() => {
    console.log("ayoooaaaa ", navigator.geolocation, "aaaaaaaaaaaa", map)
    if (navigator.geolocation && map) {
      console.log("ayooo ")
      navigator.geolocation.getCurrentPosition((position) => {
        const newMarker = new window.google.maps.Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          map,
        });
        setMarker(newMarker);
        props.setStateData(current => {
          return {
            ...current,
            /* ...current.selectedBusRoute, */
            userLocation: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
          }
        })
      });
    }
  }, [map]);

  return null;
};

export default CreateMyLocationMarker;
