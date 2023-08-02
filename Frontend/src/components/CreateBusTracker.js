import { useContext } from "react";
import { BusTrackersContext } from "../contexts/Contexts";
//import { GoogleMapContext } from "@react-google-maps/api";
import { GoogleMapContext } from "./MapContainer";
//import busStopData from "./bus-stop-data.json";

/* const busStops = [
  { id: 1, name: 'Bus Stop 1', lat: 37.7749, lng: -122.4194, status: true },
  { id: 2, name: 'Bus Stop 2', lat: 37.7895, lng: -122.4225, status: true },
  { id: 3, name: 'Bus Stop 3', lat: 37.7749, lng: -122.4312, status: false },
]; */

const CreateBusTracker = (props) => {
  const { map } = useContext(GoogleMapContext);
  //const { Bustrackers } = useContext(BusTrackersContext)
  const busTracker = useContext(BusTrackersContext);

  /* useEffect(() => {
    props.setStateData(current => {
      return {
        ...current,
        selectedBusRoute: {
          ...current.selectedBusRoute,
          color: "green",
          busStopLists: busStops
        }
      }
    })
  }, [map, ]); */

  if (map && busTracker) {
    //console.log(busTracker)
    busTracker.forEach((tracker) => {
      const marker = new window.google.maps.Marker({
        position: { lat: tracker.data.latitude, lng: tracker.data.longitude },
        map,
        icon: tracker.status ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      });
    });
  }

  return null;
};

export default CreateBusTracker;