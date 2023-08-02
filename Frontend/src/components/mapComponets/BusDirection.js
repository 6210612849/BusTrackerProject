import React, { useState, useContext } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, MapContext } from '@react-google-maps/api';
import { useEffect } from 'react';

const BusDirection = ({ start, destination, setArrivalTime }) => {
    const map = useContext(MapContext)
    const [directions, setDirections] = useState(null);

    const onDirectionChange = (result) => {
        setDirections(result)
    }

    useEffect(() => {
        console.log("create busDirection")
    }, [])

    useEffect(() => {
        console.log(destination)
        const createDirection = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const DirectionsService = new window.google.maps.DirectionsService();
                    //const MatrixService = new window.google.maps.DistanceMatrixService();
                    var directionsDisplay = new window.google.maps.DirectionsRenderer();



                    DirectionsService.route(
                        {
                            origin: start,
                            destination: destination,
                            travelMode: window.google.maps.TravelMode.DRIVING,
                            unitSystem: window.google.maps.UnitSystem.METRIC,
                        },
                        (result, status) => {
                            if (status === window.google.maps.DirectionsStatus.OK) {
                                /* setDirectionsState(result);
                                directionsSetter(result); */
                                let duration = result.routes[0].legs[0].duration;
                                console.log(result.routes[0].legs[0].duration); //ได้ระยะเวลา
                                console.log(result.routes[0].legs[0]);
                                directionsDisplay.setDirections(result);
                                directionsDisplay.setMap(map);
                                console.log("return duration", duration);
                                resolve(duration);
                            } else {
                                console.error(`error fetching directions ${result}`);
                                resolve(null);
                            }
                        }
                    );
                } catch (error) {
                    console.error(error)
                    reject(error)
                }
            })
        }
        if (destination) {

            console.log("call set arrival")
            createDirection().then((res) => {
                console.log("res setArrival", res)
                setArrivalTime(res)
            })
            //setArrivalTime("test... min")

        }else{
            console.log("hello directionBus")
        }


    }, [map, destination]);


    return (
        <>  
            {console.log("return call busDirection")}
        </>
    )
}

export default BusDirection