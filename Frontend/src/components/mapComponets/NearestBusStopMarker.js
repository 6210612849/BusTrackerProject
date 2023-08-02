import { useContext, useState } from "react";
import { MapContext, DirectionsService, DirectionsRenderer, Marker, PlacesService } from "@react-google-maps/api";
import { useEffect } from "react";
import { compose } from "@mui/system";
import BusLocaterMarker from "./BusLocaterMarker";

const NearestBusStopMarker = ({ busStopLocater, setBusStopLocater, passengerLocater }) => {
    let nearestBusStopData = {
        bsid: null,
        title: null,
        distance: null,
        location: null
    }
    const map = useContext(MapContext)
    const [token, setToken] = useState()
    const [filteredBusStop, setFilteredBusStop] = useState([])
    const [randomPosition, setRandomPosition] = useState(randomCoordinate)
    const [searchPass, setSearchPass] = useState(false)
    const [nearestBusStop, SetNearestBusStop] = useState(nearestBusStopData)


    useEffect(() => {
        async function searchForNearest() {
            if (busStopLocater.length !== 0 && (passengerLocater.lat !== undefined || passengerLocater.lng !== undefined)) {

                const start = { coordinate: [passengerLocater.lat, passengerLocater.lng] }
                //const start = { coordinate: [randomPosition.lat, randomPosition.lng] }; // mock-up location
                const newMarker = new window.google.maps.Marker({
                    position: {
                        lat: randomPosition.lat,
                        lng: randomPosition.lng,
                    },
                    map,

                });

                console.log(busStopLocater)
                const temp = await busStopLocater.sort(
                    (a, b) => displacementDistance(start, a) - displacementDistance(start, b)
                ).slice(0, 5)
                setFilteredBusStop(temp)

                //console.log(temp);
                console.log(filteredBusStop)
                console.log(temp)
                if (temp || filteredBusStop) {
                    /* const data = await findNearestBusStop(
                        filteredBusStop,
                        { lat: start.coordinate[0], lng: start.coordinate[1] },
                        nearestBusStop,
                        map
                    ); */
                    ///testDirectionToBusStop(start, temp[0], map)
                    //SetNearestBusStop(data)
                    console.log(nearestBusStop)
                }

                //console.log(nearestBusStops); // if this value still null we will use nearestbusstop by displacement

            }
        }
        searchForNearest();
        if (nearestBusStop.bsid != null) {
            
            console.log(nearestBusStop)
        }else if(filteredBusStop.length > 0){
            createNearestByDisplacement()
        }
    }, [passengerLocater, map, busStopLocater, nearestBusStop]);


    


    const createNearestByDisplacement = () => {
        if (filteredBusStop) {
            console.log("create by displacement")
            const icon = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
            const lastNearest = filteredBusStop[0]

            console.log(lastNearest)

            if (lastNearest.coordinate[0] > lastNearest.coordinate[1]) {
                var temp = lastNearest.coordinate[0]
                lastNearest.coordinate[0] = lastNearest.coordinate[1]
                lastNearest.coordinate[1] = temp
            }

            const newMarker = new window.google.maps.Marker({
                position: {
                    lat: lastNearest.coordinate[0], lng: lastNearest.coordinate[1]
                },
                map,
                icon: icon
            });
        }

    }

    const createNearestByRoute = () => {
        console.log("create by route")
        if (nearestBusStop.bsid != null) {
            console.log(nearestBusStop)
            const icon = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
            const lastNearest = BusLocaterMarker.find(item => item.bsid === nearestBusStop.bsid);

            if (lastNearest.coordinate[0] > lastNearest.coordinate[1]) {
                var temp = lastNearest.coordinate[0]
                lastNearest.coordinate[0] = lastNearest.coordinate[1]
                lastNearest.coordinate[1] = temp
            }

            const newMarker = new window.google.maps.Marker({
                position: {
                    lat: lastNearest.coordinate[0], lng: lastNearest.coordinate[1]
                },
                map,
                icon: icon
            });
        } else {
            console.error("nearestBusStop.bsid is null")
        }

    }

    const createNearestMarkers = (bsList) => {
        console.log("create blue nearest" + bsList.length)
        console.log(bsList)
        const icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        //console.log(busStopLocater);

        return bsList.map(stop => {

            if (stop.coordinate[0] > stop.coordinate[1]) {
                var temp = stop.coordinate[0]
                stop.coordinate[0] = stop.coordinate[1]
                stop.coordinate[1] = temp
            }

            return (
                <Marker
                    position={{ lat: stop.coordinate[0], lng: stop.coordinate[1] }}
                    key={stop.bsid}
                    icon={icon}
                ></Marker>

            )
        });

    }

    return (
        <>
            <Marker
                position={randomPosition}
                key={"center"}
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            ></Marker>

            {createNearestMarkers(filteredBusStop)}
        </>
    )
}

export default NearestBusStopMarker

function randomCoordinate() {
    // Define the boundary
    const north = 14.079376;
    const south = 14.065274;
    const west = 100.592141;
    const east = 100.618250;

    // Generate random latitude and longitude within the boundary
    const latitude = Math.random() * (north - south) + south;
    const longitude = Math.random() * (east - west) + west;

    return { lat: latitude, lng: longitude };
}

const tempFindNearest = (filteredList, passengerLocater, map) => {
    const startcoor = { lat: passengerLocater.lat, lng: passengerLocater.lng };
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
    });

    //find available location
    let availableLocations = getLocations(filteredList[0])
    console.log(availableLocations)


}

async function getLocations(coords) {
    const geocoder = new window.google.maps.Geocoder();
    const directionsService = new window.google.maps.DirectionsService();
    const locations = [];

    console.log(coords)
    const latlng = new window.google.maps.LatLng(coords.coordinate[0], coords.coordinate[1]);

    try {
        const result = await new Promise((resolve, reject) => {
            geocoder.geocode({ location: latlng }, (results, status) => {
                if (status === "OK") {
                    resolve(results[0]);
                } else {
                    reject(new Error(`Geocoder failed due to: ${status}`));
                }
            });
        });

        const address = result.formatted_address;

        const nearbySearch = await new Promise((resolve, reject) => {
            const request = {
                location: latlng,
                radius: 5000, // Search within 5km radius
                type: "point_of_interest", // Search for nearby points of interest
            };
            const placesService = new window.google.maps.places.PlacesService(document.createElement("div"));
            placesService.nearbySearch(request, (results, status) => {
                if (status === "OK") {
                    resolve(results);
                } else {
                    reject(new Error(`Nearby search failed due to: ${status}`));
                }
            });
        });

        let nearbyLocation = null;

        for (const place of nearbySearch) {
            const directionsRequest = {
                origin: latlng,
                destination: place.geometry.location,
                travelMode: "DRIVING",
            };

            const directionsResult = await new Promise((resolve, reject) => {
                directionsService.route(directionsRequest, (result, status) => {
                    if (status === "OK") {
                        resolve(result);
                    } else {
                        reject(new Error(`Directions request failed due to: ${status}`));
                    }
                });
            });

            if (directionsResult.routes.length > 0) {
                nearbyLocation = place.vicinity;
                break;
            }
        }

        locations.push({
            bsid: coords.bsid,
            address: nearbyLocation || address,
        });
    } catch (error) {
        console.error(error);
        locations.push({
            bsid: coords.bsid,
            address: null,
        });
    }


    return locations;
}

const testDirectionToBusStop = async (start, stop, map) => { // get accessible location of both
    console.log("IN TEST stop:" + stop)
    console.log(stop)
    //const startcoor = { lat: start.coordinate[0], lng: start.coordinate[1] };
    /* const stopcoor = { lat: stop.coordinate[0], lng: stop.coordinate[1], }; */
    const startcoor = new window.google.maps.LatLng(start.coordinate[0], start.coordinate[1]);
    const stopcoor = new window.google.maps.LatLng(stop.coordinate[0], stop.coordinate[1]);

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
    });
    console.log(startcoor)
    console.log(startcoor.lat())
    console.log(stopcoor)


    const request =  {
        origin: await accessibleLocation(startcoor.lat(), startcoor.lng(), map),
        destination: await accessibleLocation(stopcoor.lat(), stopcoor.lng(), map),
        travelMode: window.google.maps.TravelMode.WALKING,
    };

    setTimeout(function() {
        // your code to be executed after 500 ms
        console.log(request)
      }, 2000);
    

    //must wait for request
    directionsService.route(request, (result, status) => {
        console.log(request)
        console.log("status")
        console.log(status)
        if (status === window.google.maps.DirectionsStatus.OK || status === "OK") {
            const distance = result.routes[0].legs[0].distance.value;

            directionsRenderer.setDirections(result); // display the route

            console.log("in TEST direction is ok")
        } else {
            console.error("in TEST directionsService status error status: " + status)
        }
        const startMarker = new window.google.maps.Marker({
            position: {
                /* lat: startcoor.lat(), lng: startcoor.lng() */
                lat: request.origin.lat(), lat: request.origin.lng()
            },
            map,
            title: "origin",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        });
    
        const endMarker = new window.google.maps.Marker({
            position: {
                /* lat: stopcoor.lat(), lng: stopcoor.lng() */
                lat: request.destination.lat(), lat: request.destination.lng()
            },
            map,
            title: "end",
            icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
        });
    });

    
}

const findNearestBusStop = (bsList, passengerLocater, nearestBusStop, map) => {
    const startcoor = { lat: passengerLocater.lat, lng: passengerLocater.lng };
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
        map: map,
        //suppressMarkers: true, // don't display the default markers
    });

    console.log("call findNearestBusStop bsList:" + bsList.length)

    const useoldone = (str) => {
        console.log("use this as origin: " + str)
        return (str)
    }

    bsList.forEach((stop) => { //แก้ด้วยการหาตำแหน่งที่เป็นไปได้ สำหรับป้ายรถเมล์ที่ ผู้โดยสารจะเดินมาถึงโดยการใช้ place
        let stopcoor = { lat: stop.coordinate[1], lng: stop.coordinate[0] };
        const request = {
            origin: accessibleLocation(startcoor.lat, startcoor.lng, map) ? accessibleLocation(startcoor.lat, startcoor.lng, map) : useoldone(startcoor),
            destination: accessibleLocation(stopcoor.lat, stopcoor.lng, map) ? accessibleLocation(stopcoor.lat, stopcoor.lng, map) : useoldone(stopcoor),
            travelMode: window.google.maps.TravelMode.WALKING,
        };



        directionsService.route(request, (result, status) => {
            console.log("status")
            console.log(status)
            if (status === window.google.maps.DirectionsStatus.OK || status === "OK") {
                const distance = result.routes[0].legs[0].distance.value;
                console.log("distance")
                console.log(distance)
                if (nearestBusStop.distance == null || distance < nearestBusStop.distance) {
                    nearestBusStop.bsid = stop.bsid;
                    nearestBusStop.title = stop.title;
                    nearestBusStop.distance = distance;
                    nearestBusStop.location = stopcoor;

                    directionsRenderer.setDirections(result); // display the route
                }
            } else {
                console.error("directionsService status error status: " + status)
            }
        });
    });

    return nearestBusStop;
};

function displacementDistance(start, end) {
    const [lat1, lng1] = start.coordinate;
    const [lat2, lng2] = end.coordinate;
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

async function accessibleLocation(lat, lng, map) {
    let count = 0
    console.log("call accessibleLocation origin -> lat:" + lat + " lng:" + lng)
    let alternativeLocation = null

    const service = new window.google.maps.DirectionsService();
    const originalLocation = new window.google.maps.LatLng(lat, lng);
    const radius = 100; // in meters

    const options = {
        location: originalLocation,
        radius: radius,
        types: ['street', 'bus_station',], // you can change the type based on your use case
        avoid: ['highways'],
    };

    const placesService = new window.google.maps.places.PlacesService(map);


    // Search for nearby places
    placesService.nearbySearch(options, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            // Iterate over nearby places and check if they are reachable
            console.log("available place result: " + results.length)
            for (let i = 0; i < results.length; i++) {
                count += 1
                //const place = results[i];
                const place = results[0];
                const location = place.geometry.location;
                const request = {
                    origin: originalLocation,
                    destination: location,
                    travelMode: 'WALKING' // you can change the mode based on your use case
                };

                // Check if the place is reachable
                service.route(request, (result, status) => {
                    if (status === 'OK') {
                        // Found a reachable place, set the location

                        alternativeLocation = location;

                        if (alternativeLocation) {
                            const newMarker = new window.google.maps.Marker({
                                position: {
                                    lat: alternativeLocation.lat(), lng: alternativeLocation.lng()
                                },
                                map,
                                icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                            });
                        }

                        console.log("found alternative location")
                        console.log(alternativeLocation.lat())
                        return alternativeLocation

                    } else {
                        console.log(request)
                        console.error("direction not ok in accessibleLocation" + status)
                        return alternativeLocation
                    }
                });
            }

            //new marker to replace



        } else {
            console.log("place not OK: " + status)
            console.log("alternativeLocation is:" + alternativeLocation)
            console.log("count: " + count)
            return alternativeLocation
            
        }

    });




}

function accessibleLocation1(lat, lng, map) {
    let nearestAlternativeLocation = null;
    let nearestDistance = Number.MAX_VALUE;

    if (map != undefined) {
        const service = new window.google.maps.DirectionsService();
        const originalLocation = new window.google.maps.LatLng(lat, lng);
        const radius = 10; // in meters
        const options = {
            location: originalLocation,
            radius: radius,
            types: ['routes'] // you can change the type based on your use case
        };
        const placesService = new window.google.maps.places.PlacesService(map);

        // Search for nearby places
        placesService.nearbySearch(options, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {


                // Iterate over nearby places and check if they are reachable
                console.log("range: " + results.length)
                for (let i = 0; i < results.length; i++) {
                    const place = results[i];
                    console.log(place)
                    const location = place.geometry.location;
                    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(originalLocation, location);

                    if (distance < nearestDistance) {
                        const request = {
                            origin: originalLocation,
                            destination: location,
                            travelMode: 'WALKING' // you can change the mode based on your use case
                        };

                        // Check if the place is reachable
                        service.route(request, (result, status) => {
                            if (status === 'OK') {
                                // Found a reachable place that is nearer, update the nearest alternative location
                                nearestAlternativeLocation = location;
                                nearestDistance = distance;

                                // Draw new marker for the nearest alternative location
                                console.log("DRAW" + originalLocation + "new" + nearestAlternativeLocation)
                                const newMarker = new window.google.maps.Marker({
                                    position: nearestAlternativeLocation,
                                    map: map,
                                    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                                });
                            }
                        });
                    }
                }
            } else {
                console.log("Place search failed with status: " + status);
            }
        });

        return nearestAlternativeLocation;
    } else {
        return null;
    }
}

const getDirectionDistance = async (start, end) => {
    if (typeof start.lat !== 'number' || typeof start.lng !== 'number' ||
        typeof end.lat !== 'number' || typeof end.lng !== 'number') {
        console.error('Error: start and end parameters must have lat and lng properties that are numbers this value is:');
        console.log(typeof start.lat)
        console.log(typeof start.lng)
        console.log(typeof end.lat)
        console.log(typeof end.lng)
        return null;
    }

    const startPoint = new window.google.maps.LatLng(start.lat, start.lng);
    const endPoint = new window.google.maps.LatLng(end.lat, end.lng);

    const directionsService = new window.google.maps.DirectionsService();

    // Define the request parameters
    const request = {
        origin: startPoint,
        destination: endPoint,
        travelMode: window.google.maps.TravelMode.WALKING
    };

    /* // Call the DirectionsService to get the route
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

            //console.log(`The distance in the north direction is ${distance} meters`);
            return distance;
        } else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
            //console.error('Error: Directions request returned no results');
            return null;
        } else {
            //console.error(`Error: ${status}`);
            return null;
        }
    }); */
    const directions = await new Promise((resolve, reject) => {
        directionsService.route(request, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                resolve(result);
            } else if (status === window.google.maps.DirectionsStatus.ZERO_RESULTS) {
                resolve(null);
            } else {
                reject(status);
            }
        });
    });

    if (!directions) {
        // Handle the case where there are no results
        return null;
    }

    // Get the distance in the desired direction
    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        startPoint,
        new window.google.maps.LatLng(
            startPoint.lat() + 0.1, // Change the latitude in the desired direction
            startPoint.lng() // Keep the longitude the same
        )
    );

    console.log(`The distance in the north direction is ${distance} meters`);
    return distance;
};
