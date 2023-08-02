import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect, useState, useContext } from 'react';
import { BusStopsContext } from "../contexts/Contexts";
import CreateBusStopMarker from './CreateBusStopMarker';
import CreateMyLocationMarker from './CreateMyLocationMarker';

function MapLoader(props) {
    const [map, setMap] = useState(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);
    const [directionsDisplay, setDirectionsDisplay] = useState(null);
    const [passengerLocater, setPassengerLocater] = useState(null);

    const busStops = useContext(BusStopsContext);
    const [busStopsList, setBusStopLists] = useState(null)

    const TU_BONDS = {

        north: 14.088540,
        south: 14.054454,
        west: 100.590749,
        east: 100.618673,

    };

    var mapStyle = [{
        "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "on" },]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "off" }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "on" }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "on" }
        ]
    }]
    var mapStyle2 = [{
        "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "on" },]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "on" }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "off" }
        ],
        /* "stylers": [ //this will display or dorm and hotel
            {
              "visibility": "on",
              "featureType": "poi.business",
              "poi.business": "dorm"
            }
          ] */
    },
    ];
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

    useEffect(() => {
        const google = window.google; // reference to already loaded Google Maps API
        const loader = new Loader({
            apiKey: 'AIzaSyA_24K0W7o4uGh-mtt7FP63AwvdAIRK4GI',
            google,
        });

        loader.load().then(() => {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 14.071780, lng: 100.606732 },
                zoom: 16, restriction: {
                    latLngBounds: TU_BONDS,
                    strictBounds: false,
                },
                mapTypeControl: false,
                streetViewControl: false,
                styles: mapStyle2
            });

            console.log(map.mapID)

            getPassengerLocation()

            setMap(map);
            //setBusStopLists([...busStops])
            setDirectionsService(new google.maps.DirectionsService());
            setDirectionsRenderer(new google.maps.DirectionsRenderer());
            setDirectionsDisplay(new google.maps.DirectionsRenderer());

            //calculateNearestBusStop(props, passengerLocater, props.stateData.selectedBusRoute.busStopLists)
            //console.log(busStopsList)

        });


    }, []);

    /* const calculateDirections = () => {
        const startPoint = new window.google.maps.LatLng(40.712776, -74.005974); // New York City
        const endPoint = new window.google.maps.LatLng(34.052235, -118.243683); // Los Angeles

        directionsService.route(
            {
                origin: startPoint,
                destination: endPoint,
                travelMode: 'DRIVING',
            },
            (response, status) => {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(map);

                    // Get the distance in the desired direction
                    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
                        startPoint,
                        new window.google.maps.LatLng(
                            startPoint.lat() + 0.1, // Change the latitude in the desired direction
                            startPoint.lng() // Keep the longitude the same
                        )
                    );

                    // Convert the distance to miles
                    const distanceInMiles = distance * 0.000621371;

                    console.log(`The distance in the north direction is ${distance} meters`);

                    console.log("OK")
                    console.log(response)
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            }
        );
    }; */

    const calculateNearestBusStop = (props, userLocation, busStopLists) => {
        let nearestBusStop = props.stateData.selectedBusRoute.nearestBusStop
        console.log("findNearestBisStop passengerLocation: ", userLocation)
        busStopLists.forEach((stop) => {
            if (nearestBusStop.interval == null || (routeDistance({lat:userLocation.lat, lng:userLocation.lng}, {lng:stop.coordinate[1], lng:stop.coordinate[0]}) < nearestBusStop.interval)) {
                nearestBusStop.bsid = stop.bsid
                nearestBusStop.title = stop.title
                nearestBusStop.interval = routeDistance({lat:userLocation.lat, lng:userLocation.lng}, {lng:stop.coordinate[1], lng:stop.coordinate[0]})
                nearestBusStop.location = { lat: stop.coordinate[1], lng: stop.coordinate[0] }
            }
        })
        console.log("neareset busstop")
        console.log(nearestBusStop)
    };

    const routeDistance = (start, end) => {
        const startPoint = new window.google.maps.LatLng(start.lat, start.lng);
        const endPoint = new window.google.maps.LatLng(end.lat, end.lng);

        const directionsService = new window.google.maps.DirectionsService();

        // Define the request parameters
        const request = {
            origin: startPoint,
            destination: endPoint,
            travelMode: window.google.maps.TravelMode.DRIVING
        };

        // Call the DirectionsService to get the route
        directionsService.route(request, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                // Get the distance in the desired direction
                const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
                    startPoint,
                    new window.google.maps.LatLng(
                        startPoint.lat() + 0.1, // Change the latitude in the desired direction
                        startPoint.lng() // Keep the longitude the same
                    )
                );

                console.log(`The distance in the north direction is ${distance} meters`);
                return distance
            } else {
                console.error(`Error: ${status}`);
                return null
            }
        });
    }


    const getPassengerLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords)
                setPassengerLocater(position.coords)
                setStateData(current => {
                    return {
                        ...current,
                        ...current.selectedBusRoute,
                        userLocation: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }
                    }
                })
            })
        }
    }

    const callStateData = () => {
        console.log(stateData)
    }

    return (
        <div>
            {/* <button onClick={calculateDirections}>Get Directions</button> */}
            <button onClick={callStateData}>stateData</button>
            <div id="map" style={{
                width: "100%",
                height: "90vh",
            }}></div>
            <CreateBusStopMarker map={map} stateData={stateData} setStateData={setStateData} />
            <CreateMyLocationMarker map={map} stateData={stateData} setStateData={setStateData} />
        </div>
    );
}

export default MapLoader;
