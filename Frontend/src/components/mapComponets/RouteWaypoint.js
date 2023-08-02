import { MapContext, GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect } from 'react';



const RouteWaypoint = ({ coordinates }) => { //create directiobwaypoint from waypoints
    //const map = useState(MapContext)
    const [directions, setDirections] = useState(null)
    const [optimizedWaypoints, SetOptimizedWaypoints] = useState([])

    useEffect(() => {
        async function createOptimalWaypoints(coords) {
            console.log("coords", coords)
            const arr = []
            
            coords.forEach(coord => {
                arr.push({ lat: coord.value.lat, lng:coord.value.long })

            });
            SetOptimizedWaypoints(arr)
        }
        createOptimalWaypoints(coordinates)
        

    }, [coordinates])

    if (!optimizedWaypoints) {
        console.log("not optimized")
        return null
    }
    const directionOptions = {
        origin: optimizedWaypoints[0],
        destination: optimizedWaypoints[optimizedWaypoints.length - 1],
        waypoints: optimizedWaypoints.slice(1, -1).map((coord) => ({
            location: new window.google.maps.LatLng(coord.lat, coord.lng),
            stopover: false,
        })),
        optimizeWaypoints: true,
        travelMode: 'DRIVING',
    }

    const directionsCallback = (response) => {
        if (response !== null) {
            setDirections(response);
            console.log("directionCallback", directions)
        }
    }

    const options = {
        polylineOptions: {
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 4,
        },
    };

    const directionRendererOptions = {
        suppressMarkers: true
    }


    console.log("call direction", directionOptions)
    return (
        <>
            {/* <DirectionsService
                options={
                    directionOptions
                }
                callback={directionsCallback}
            /> */}
            {/* {directions && <DirectionsRenderer directions={directions} options={directionRendererOptions}/>} */}
            

        </>

    );



}

export default RouteWaypoint