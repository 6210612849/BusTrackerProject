import { GoogleMap, DirectionsService, DirectionsRenderer} from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { GoogleMapContext } from "./MapContainer";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 0,
    lng: 0,
};

//ต้องหา busstop ทั้ใกล้กับ user มากที่สุด



const CreateDirection  = (props) => {
    const { map } = useContext(GoogleMapContext)
    //const [directions, setDirections] = useState(null);
    const [directionsState, setDirectionsState] = useState(window.google.maps.DirectionsResult | null);
    //const DirectionsService = new window.google.maps.DirectionsService();

    useEffect(() => {
        /* if (!window.google) {
            return;
        } */

        const DirectionsService = new window.google.maps.DirectionsService();
        //const MatrixService = new window.google.maps.DistanceMatrixService();
        var directionsDisplay = new window.google.maps.DirectionsRenderer();

        console.log("bf direct")

        DirectionsService.route(
            {
                origin: {lat:14.070402, lng:100.610076}, 
                destination: {lat:14.070854, lng:100.597379}, //ตำแหน่งทดลอง
                travelMode: window.google.maps.TravelMode.DRIVING,
                unitSystem: window.google.maps.UnitSystem.METRIC,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    /* setDirectionsState(result);
                    directionsSetter(result); */
                    console.log(result.routes[0].legs[0].duration) //ได้ระยะเวลา
                    directionsDisplay.setDirections(result);
                    directionsDisplay.setMap(map);
                    
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );

    }, [map]);

    console.log("userLo", props.stateData.userLocation)
    console.log(props.stateData)

    /* if (props.stateData.selectedBusRoute.color == "green"){
        console.log("in condiin")
        //alert("in con")
    } */
    //console.log(props.selectedRoute)
    return null;
}

export default CreateDirection

