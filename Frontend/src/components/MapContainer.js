import { useJsApiLoader } from "@react-google-maps/api";
import { useState, useEffect, useContext, createContext } from "react";
//import { GoogleMap, GoogleMapContext } from "@react-google-maps/api";
import { GoogleMap, } from "@react-google-maps/api";
import CreateBusStopMarker from "./CreateBusStopMarker";
import CreateMyLocationMarker from "./CreateMyLocationMarker";
//import { BusTrackersContext } from "./Map";
import CreateBusTracker from "./CreateBusTracker";
import { BusTrackersContext } from "../contexts/Contexts";
import CreateDirection from "./CreateDirection";
//import { MapContext } from "@react-google-maps/api";

export const GoogleMapContext = createContext();

export const TU_BONDS = {

  north: 14.088540,
  south: 14.064454,
  west: 100.590749,
  east: 100.618673,

};
const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 14.071780, lng: 100.606732
};

const map_option = {
  // mapTypeControl: false,
  // streetViewControl: false,
  // fullscreenControl: false,
  restriction: {
    latLngBounds: TU_BONDS,
    strictBounds: false,
  },

};

const MapContainer = ({ googleMapsApiKey }) => {
  console.log("before")
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });


  //const { map } = useContext(GoogleMapContext);

  const [map, setMap] = useState(null);
  const busTracker = useContext(BusTrackersContext);
  const [stateData, setStateData] = useState({
    userLocation: { lat: null, lng: null },
    selectedBusRoute: {
      color: "",
      busStopLists: [],
      nearestBus: {
        uuid: null,
        location: { lat: null, lng: null }
      },
      nearestBusStop: {
        bsid: "",
        title: "",
        location: { lat: null, lng: null }
      }
    }
  });

  const onMapLoad = (map) => {
    console.log("mapppppppppppppppppppppppppppp")
    setMap(map)

  };


  return isLoaded ? (<>
    {/* <p>{stateData.userLocation}</p> */}
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={onMapLoad}
      options={map_option}



    >
      {/* <MapContext.Provider value={{ map }}> */}
      <GoogleMapContext.Provider value={{ map }}>
        <CreateMyLocationMarker stateData={stateData} setStateData={setStateData} />
        <CreateBusStopMarker stateData={stateData} setStateData={setStateData} />
        <CreateBusTracker stateData={stateData} setStateData={setStateData} />
        <CreateDirection stateData={stateData} setStateData={setStateData} />
      </GoogleMapContext.Provider>

      {/* </MapContext.Provider> */}


    </GoogleMap>
  </>

  ) : (
    <></>
  );
};

export default MapContainer;
