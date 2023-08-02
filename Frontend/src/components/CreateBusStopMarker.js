import { useContext, useEffect } from "react";
import { BusStopsContext } from "../contexts/Contexts";
//import { GoogleMapContext } from "@react-google-maps/api";
import { GoogleMapContext } from "./MapContainer";
//import busStopData from "./bus-stop-data.json";

const CreateBusStopMarker = (props) => {
  //const { map } = useContext(GoogleMapContext);
  const busStops = useContext(BusStopsContext);
  const map = props.map

  /* console.log(props.setStateData("hello from cbs"))
  console.log(props.stateData) */
  useEffect(() => {
    //console.log(busStops)
    if (map && busStops) {

      props.setStateData(current => {
        /* console.log(busStops)
        console.log("update busstop list") */
        let data = {
          ...current,
          selectedBusRoute: {
            ...current.selectedBusRoute,
            color: "green",
            busStopLists: [...busStops]
          }
        }
        //findNearestBusStop(props, props.stateData.userLocation, data.selectedBusRoute.busStopLists)
        //findNearestBusStop(props, data.userLocation, data.selectedBusRoute.busStopLists)
        return data
        
      })

      
    }

  }, [map, busStops]);


  //draw busstop marker
  if (props.map && busStops) {

    busStops.forEach((stop) => {
      let icon = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      if (stop.bsid == props.stateData.selectedBusRoute.nearestBusStop.bsid) {
        icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"

      }
      const marker = new window.google.maps.Marker({
        position: { lat: stop.coordinate[1], lng: stop.coordinate[0] }, //ไว้แก้ให้เป็น object จาก list
        map,
        icon: icon
      });



    });
  }

  return null;
}

const findNearestBusStop = (props, userLocation, busStopLists) => {
  let nearestBusStop = props.stateData.selectedBusRoute.nearestBusStop
  console.log("findNearestBisStop passengerLocation: ", userLocation)
  busStopLists.forEach((stop) => {
    if (nearestBusStop.interval == null || (distance(userLocation.lat, userLocation.lng, stop.coordinate[1], stop.coordinate[0], "K") < nearestBusStop.interval)) {
      nearestBusStop.bsid = stop.bsid
      nearestBusStop.title = stop.title
      nearestBusStop.interval = distance(userLocation.lat, userLocation.lng, stop.coordinate[1], stop.coordinate[0], "K")
      nearestBusStop.location = {lat: stop.coordinate[1], lng: stop.coordinate[0]}
    }
  })
  console.log("neareset busstop")
  console.log(nearestBusStop)
  //return nearestBusStop
}

function distance(lat1, lon1, lat2, lon2, unit) { //miles is deafult unit
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 } //kilometer
    if (unit == "N") { dist = dist * 0.8684 } // nautical miles
    return dist;
  }
}

export default CreateBusStopMarker;
