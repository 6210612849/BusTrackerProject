import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import UserLocaterMarker from "./UserLocaterMarker";
import { MapContext, DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import BusStopLocaterMarker from "./BusStopLocaterMarker";
import BusLocaterMarker from "./BusLocaterMarker";
import NearestBusStopMarker from "./NearestBusStopMarker";
import { HeatmapLayer } from "@react-google-maps/api";
import RouteWaypoint from "./RouteWaypoint";
import CreateRoutePolyline from "./CreateRoutePolyline"

const SelectedRoute = ({ lineColor }) => {
    const map = useState(MapContext)
    const [token, setToken] = useState()
    const [busRoutes, setBusRoutes] = useState()
    const [route, setRoute] = useState([])
    const [loaded, setLoaded] = useState(false)


    const [directions, setDirections] = useState(null);
    const [res, setRes] = useState()

    useEffect(() => {
        if (lineColor != undefined) {
            const fetchData = () => {
                return new Promise(async (resolve, reject) => {
                    try {
                        const tokenData = await fetchBustrackerToken();
                        setToken(tokenData);
                        const busRouteData = await fetchStopBusRoutes(tokenData);
                        setBusRoutes(busRouteData)
                        console.log(busRouteData)
                        console.log(lineColor)
                        const selectedRoute = await busRouteData.find((route) => route.line === lineColor).lineData
                        //setRoute(selectedRoute)

                        console.log('after selected color', selectedRoute)

                        resolve(selectedRoute); // resolve the promise after all the async operations are complete
                    } catch (error) {
                        console.error(error);
                        reject(error); // reject the promise if there's an error
                    }
                });
            };

            fetchData().then((selectedRoute) => {
                //setBusRoutes(selectedRoute)
                setRoute(selectedRoute)
                console.log("done fetch")
                console.log(selectedRoute)
                console.log("route", route)
                //setRes(createWaypoint(selectedRoute))
                setLoaded(true)

            });


        }


    }, [loaded, lineColor])



    const createWaypoint = (routesList) => {
        try {
            //split into chunk
            console.log("routesList", routesList)
            let chunks = []
            const MAX_CHUNK = 20
            if (routesList.length <= 20) {
                console.log("not splited")
                return (
                    <RouteWaypoint coordinates={routesList} callback={console.log("call routewaypoint")} />
                )
            } else {
                var waypoints = [];
                var maxWaypoints = 20;
                var totalWaypoints = routesList.length - 2;
                var numRequests = Math.ceil(totalWaypoints / maxWaypoints);

                for (var i = 0; i < numRequests; i++) {
                    var requestWaypoints = [];
                    var startIndex = i * maxWaypoints + 1;
                    requestWaypoints.push(routesList[startIndex])

                    var endIndex = Math.min((i + 1) * maxWaypoints + 1, totalWaypoints + 1);

                    for (var j = startIndex; j < endIndex; j++) {
                        /* var latLng = new window.google.maps.LatLng(coords[j].lat, coords[j].lng);
                        requestWaypoints.push({
                            location: latLng,
                            stopover: false
                        }); */
                        requestWaypoints.push(routesList[j])
                    }
                    requestWaypoints.push(routesList[endIndex])
                    waypoints.push(requestWaypoints)

                }
                console.log("splited waypoints", waypoints)
                return (
                    waypoints.map((piece) => <RouteWaypoint coordinates={piece} />)

                )
            }
        } catch (error) {
            console.error("error in createWaypoint", error)
            return null
        }

    }

    function createWaypoints(coords) {
        var directionsService = new window.google.maps.DirectionsService();
        var directionsRenderer = new window.google.maps.DirectionsRenderer();

        var start = new window.google.maps.LatLng(coords[0].lat, coords[0].lng);
        var end = new window.google.maps.LatLng(coords[coords.length - 1].lat, coords[coords.length - 1].lng);

        var waypoints = [];
        var maxWaypoints = 20;
        var totalWaypoints = coords.length - 2;
        var numRequests = Math.ceil(totalWaypoints / maxWaypoints);

        for (var i = 0; i < numRequests; i++) {
            var requestWaypoints = [];
            var startIndex = i * maxWaypoints + 1;
            var endIndex = Math.min((i + 1) * maxWaypoints + 1, totalWaypoints + 1);

            for (var j = startIndex; j < endIndex; j++) {
                var latLng = new window.google.maps.LatLng(coords[j].lat, coords[j].lng);
                requestWaypoints.push({
                    location: latLng,
                    stopover: false
                });
            }

            var request = {
                origin: start,
                destination: end,
                waypoints: requestWaypoints,
                travelMode: window.google.maps.TravelMode.DRIVING
            };



            directionsService.route(request, function (result, status) {
                if (status == window.google.maps.DirectionsStatus.OK) {
                    var directionsRendererOptopns = {
                        map: map,
                        origin: { lat: route[0].value.lat, lng: route[0].value.long },
                        waypoints: createWaypoints(route),
                        travelMode: 'DRIVING',
                    }
                    directionsRenderer.setDirections(result);
                    directionsRenderer.setMap(map)
                }
            });
        }
    }


    const directionsCallback = (response) => {
        if (response !== null) {
            setDirections(response);
        }
    }

    const options = {
        polylineOptions: {
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 4,
        },
    };


    return route.length > 0 ? (
        <>
            {/* <RouteWaypoint coordinates={route} callback={console.log("call routewaypoint")} /> */}
            <CreateRoutePolyline showRoute={true} coordinates={route}/>
            {/* {createWaypoint(route)} */}
            {/* <DirectionsService
                options={{
                    origin: route[0],
                    destination: route[-1],
                    waypoints: createWaypoints(coords),
                    travelMode: 'DRIVING',
                }}
                callback={directionsCallback}
            />
            {directions && <DirectionsRenderer directions={directions} />} */}
            {console.log("in selected route")}
        </>
    ) : null;

}

export default SelectedRoute

async function fetchBustrackerToken() {
    const response = await fetch('https://api.supersonixz.in.th/session', {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    //console.log(tokenData);
    return tokenData;
}

async function fetchStopBusRoutes(token) {
    if (!token) {
        throw new Error("Token is undefined");
    }
    const body = { token: token, password: 'aaa' }
    const queryParams = new URLSearchParams(body);

    const response = await fetch('https://api.supersonixz.in.th/listAllListLineBusStops?' + queryParams.toString(), {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const busStopData = await response.json();
    //console.log(busStopData.data.listBusStops.items);
    return busStopData;
}