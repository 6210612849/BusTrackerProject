import React, { useState, useContext, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import UserLocaterMarker from "./UserLocaterMarker";
import { MapContext, HeatmapLayer, Marker, Polyline } from "@react-google-maps/api";
import BusStopLocaterMarker from "./BusStopLocaterMarker";
import BusLocaterMarker from "./BusLocaterMarker";
import NearestBusStopMarker from "./NearestBusStopMarker";
//import SelectedRoute from "./selectedRoute";

import BusDirection from "./BusDirection";
import "./mapContainerStyle.css"

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import InfoModal from "./Modal/InfoModal";
import CreateRoutePolyline from "./CreateRoutePolyline";
import MarkerModal from "./Modal/MarkerModal";

import HeatMapComponent from "./HeatMapComponent";
import { red } from "@mui/material/colors";
// import CircleSlide from "../prettyComponents/CircleSlide";
// import TopDropdownButton from "../prettyComponents/TopDropDownButton";
// import StickyFooter from "../prettyComponents/StickyFooter";
//import HomeNav from "../home/HomeNav";
const mapContainerStyle = {
    width: "100%",
    height: "70vh",

    /* max-height: "80%", */
};

const heatmapbuttonStyle = {
    width: "100%",
    minwidth: "30%",
    height: "60px",

};
const CENTER = { lat: 14.071780, lng: 100.606732 }
const TU_BONDS = {

    north: 14.088540,
    south: 14.054454,
    west: 100.590749,
    east: 100.618673,

};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    restriction: {
        latLngBounds: TU_BONDS,
        strictBounds: false,
    },
    styles: [{
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
    ]
};

/* const MapContext = React.createContext(null); */

function MapContainer() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBrV7n1MkZBw9hM17XLnRSRmYoQxcY-X2g", //first's API
        libraries: ['places', 'visualization', 'places'],
    });

    const [map, setMap] = useState(null);
    const [isOverQueryLimit, setIsOverQueryLimit] = useState(false)
    const [mapCenter, setMapCenter] = useState(CENTER)
    const [token, setToken] = useState()

    const [passengerLocater, setPassengerLocater] = useState({});


    const [nearestBusStop, setNearestBusStop] = useState({})

    const [busStopsList, setBusStopsList] = useState([]);

    //show heatmap
    const [showHeatmap, setShowHeatmap] = useState(false)

    //busStop
    const [busStopLocater, setBusStopLocater] = useState([])
    const [showMarkerInfo, setShowMarkerInfo] = useState(false)
    const [selectedBusStop, setSelectedBusStop] = useState()
    const [currentMarkerInfo, setCurrentMarkerInfo] = useState()
    const [findNearestBusStop, setFindNearestBusStop] = useState()

    const [busLocater, setBusLocater] = useState([])
    const [selectedBusLocaters, setSelectedBusLocaters] = useState([])
    const [selectedBus, setSelectedBus] = useState()

    const [showBusLocater, setShowBusLocater] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [arrivalTime, setArrivalTime] = useState()

    //route selection
    const [lineColor, setLineColor] = useState("")
    const [routesData, setRoutesData] = useState([])
    const [selectedRoute, setSelectedRoute] = useState();
    const [displayPolyline, setDisplayPolyline] = useState()

    //const [randomcoor, setRandomcoor] = useState()


    const onMapLoad = (map) => {
        setMap(map);
    };


    const handleChangeCenter = () => {
        if (mapCenter == CENTER) {
            setMapCenter(passengerLocater)
        } else {
            setMapCenter(CENTER)
        }
    }

    const handleClickBusLocater = () => {
        setShowBusLocater(!showBusLocater);
    };
    const handleClickBusStopMarker = (info) => {
        setShowMarkerInfo(true)
        console.log("info", info)
        setCurrentMarkerInfo(info)
    }
    const handleCloseMarkerInfo = () => { setShowMarkerInfo(false) }
    const handleCloseModal = () => { setShowModal(false) }
    const handleClickArrivalModal = () => { setShowModal(!showModal) }

    const handleSelectBusStop = (bs) => {
        setSelectedBusStop(bs)
        console.log("selectedBusStop", selectedBusStop)
    }

    const handleSelectColor = (e) => {
        console.log("change color to", e)
        setLineColor(e)
    }

    const updateArrivalTime = (newTime) => {
        setArrivalTime(newTime)
        console.log("newArrival", arrivalTime)
    }
    const updateBusLocater = (newBusLocater) => {
        setBusLocater(newBusLocater)
    }
    const updateSelectedBusLocaters = (newElem) => {
        //setSelectedBusLocaters([...selectedBusLocaters, newElem])
        console.log("heheheh")
        setSelectedBusLocaters(newElem)
    }

    const handleToggleShowHeatmap = () => {
        setShowHeatmap(!showHeatmap)
    }

    const handleFindNearestBusStop = () => {
        setFindNearestBusStop(!findNearestBusStop)
    }

    useEffect(() => {
        getStatusAPI().then(res => {
            setIsOverQueryLimit(!(res.isAvalible))
        })
    }, []);

    const createDirection = (start, destination) => {
        return new Promise(async (resolve, reject) => {
            try {
                const DirectionsService = new window.google.maps.DirectionsService();

                DirectionsService.route(
                    {
                        origin: start,
                        destination: destination,
                        travelMode: window.google.maps.TravelMode.DRIVING,
                        unitSystem: window.google.maps.UnitSystem.METRIC,
                    },
                    (result, status) => {
                        if (status === window.google.maps.DirectionsStatus.OK) {

                            const legs = result.routes[0].legs;
                            const travelTimeInSeconds = legs.reduce((total, leg) => total + leg.duration.value, 0);
                            const travelTimeInMinutes = Math.round(travelTimeInSeconds / 60);

                            console.log(result.routes[0].legs[0].duration); //ได้ระยะเวลา
                            console.log(result.routes[0].legs[0]);

                            console.log("return duration", travelTimeInMinutes);
                            resolve(travelTimeInMinutes);
                        } else if (status === "OVER_QUERY_LIMIT") {
                            // in future must update used in eachday + 1
                            updateStatusAPI({ apiid: 1, isAvalible: false }).then((res) => {
                                console.log("setDirectionAPI status: false")
                            })
                            setIsOverQueryLimit(true)
                        } else {
                            console.error(`error fetching directions ${result}`);
                            resolve(null);
                        }
                    }
                );
                //resolve(0)
            } catch (error) {
                console.error(error)
                reject(error)
            }
        })
    }

    useEffect(() => {
        if (lineColor != undefined) {
            const fetchData = () => {
                console.log("call fetchData")
                return new Promise(async (resolve, reject) => {
                    try {
                        const tokenData = await fetchBustrackerToken();
                        setToken(tokenData);
                        const busRouteData = await fetchStopBusRoutes(tokenData);
                        //setRouteData(busRouteData)
                        console.log("tokenData", tokenData)
                        console.log("busRouteData", busRouteData)

                        resolve(busRouteData); // resolve the promise after all the async operations are complete
                    } catch (error) {
                        console.error(error);
                        reject(error); // reject the promise if there's an error
                    }
                });
            };
            fetchData().then((selected) => {
                console.log("selected", selected)
                setRoutesData(selected)
                console.log("routeData", routesData)
            })
        }
    }, [map]);

    useEffect(() => {
        //clear selected
    }, [selectedRoute])

    useEffect(() => {
        if (lineColor != "") {
            const temp = routesData.find((route) => {
                if (route.line === lineColor) {
                    return route
                }
            })
            console.log("this is temp", temp)

            setSelectedRoute(temp)
            console.log("color", lineColor)

            handleSelectBusStop(null)

            console.log("slroute", selectedRoute)

        }

    }, [lineColor])

    useEffect(() => {
        if (selectedBus) {
            updateArrivalTime(selectedBus.duration)
        }

    }, [selectedBus])

    useEffect(() => {
        if (selectedBusLocaters.length > 0 && selectedBusStop) {
            const destination = { lat: selectedBusStop.lat, lng: selectedBusStop.lng }


            async function calculateMinIndex() {
                return new Promise(async (resolve, reject) => {
                    try {
                        const tempArr = []
                        /* for (const i of selectedBusLocaters) {
                            tempArr.push(await createDirection({ lat: i.lat, lng: i.lng }, destination))
                        } */
                        //must find nearest bus and resolve it
                        const minIndex = tempArr.indexOf(Math.min(...tempArr));
                        resolve({ minIndex: minIndex, duration: tempArr[minIndex] })
                    } catch (error) {
                        console.error("error calculateMinIndex", error)
                        reject(null)
                    }
                })
            }

            calculateMinIndex().then((result) => {
                console.log("calculated res", result)
                setSelectedBus({ bus: selectedBusLocaters[result.minIndex], duration: result.duration })
                //updateArrivalTime(result.duration)
            }).catch((error) => {
                console.error("error in calculateMinIndex", error)
            })

            /* console.log("time", createDirection({ lat: selectedBusLocaters[0].lat, lng: selectedBusLocaters[0].lng }, destination))
 */
            console.log("selectedBusStop yay", selectedBusStop)
            //console.log("nearestBus yay", tempNearestBus)

        }
    }, [selectedBusLocaters, selectedBusStop])

    useEffect(() => {
        if (selectedBus) {
            const destination = { lat: selectedBusStop.lat, lng: selectedBusStop.lng }
            createDirection({ lat: selectedBusLocaters[0].lat, lng: selectedBusLocaters[0].lng }, destination).then((res) => updateArrivalTime(res)) //mock-up arrival time  must selectBus before this
            //createDirection(selectedBus, destination).then((res) => updateArrivalTime(res)) real code
            //handleClickArrivalModal()
        }

    }, [showModal,])


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    if (isOverQueryLimit) return (
        <div>
            <h1>OVER_QUERY_LIMIT</h1>
            <p>กรุณาติดต่อเจ้าหน้าที่</p>
        </div>
    )

    return (
        <div>
            {/* {<p>random: {randomcoor}</p>} */}



            <div class="mapContainer">
                <MapContext.Provider value={map}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={mapCenter}
                        zoom={18}
                        onLoad={onMapLoad}
                        options={options}
                        onError={(e) => console.error("Error loading map", e)}
                    >
                        <UserLocaterMarker passengerLocater={passengerLocater} setPassengerLocater={setPassengerLocater} />
                        {lineColor && showBusLocater && <BusLocaterMarker
                            busLocater={busLocater}
                            setBusLocater={updateBusLocater}
                            selectedRoute={selectedRoute}
                            selectedBusLocaters={selectedBusLocaters}
                            setSelectedBusLocaters={updateSelectedBusLocaters} />}

                        {/* ตรงนี้จะต้องเป็น condition ที่จะเลือกว่าจะแสดงป้ายทั้งหมด หรือเฉพาะสายที่เลือก */}
                        {(lineColor == "") && <BusStopLocaterMarker busStopLocater={busStopLocater} setBusStopLocater={setBusStopLocater} />}

                        {/* this is selectedBusStopRouteMarker */}
                        {(lineColor != "") && selectedRoute && selectedRoute.lineData.map((stop) => {

                            var myIcon = ""
                            switch (lineColor) {
                                case "red":
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/red.png"
                                    break;
                                case "yellow":
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/yellow.png"
                                    break;
                                case "green":
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/green.png"
                                    break;
                                case "purple":
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/purple.png"
                                    break;
                                case "blue":
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/blue.png"
                                    break;
                                default:
                                    myIcon = "https://supersonixzdata.s3.ap-southeast-1.amazonaws.com/home/Banner/black.png"
                                    break;
                            }
                            const icon = { url: myIcon, scaledSize: new window.google.maps.Size(30, 30), }
                            return (
                                <>
                                    <Marker
                                        position={{ lat: stop.value.lat, lng: stop.value.lng }}
                                        key={stop.value.bsid}
                                        icon={icon}
                                        onClick={() => handleClickBusStopMarker(stop)}
                                    ></Marker>
                                </>
                            )
                        })}

                        {selectedBusStop && <Marker
                            position={{ lat: selectedBusStop.lat, lng: selectedBusStop.lng }}
                            key={selectedBusStop.bsid}
                            icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                        ></Marker>}

                        {(selectedRoute && selectedRoute.lineData.length > 0 && lineColor != "") && <CreateRoutePolyline showRoute={true} coordinates={selectedRoute.lineData} color={lineColor} />}

                        <HeatMapComponent showHeatmap={showHeatmap} heatmapColor={red}></HeatMapComponent>
                        {console.log("hIII", selectedRoute)}
                        {console.log("selectedBusLOcaters", selectedBusLocaters)}
                        {console.log("selectedBus", selectedBus)}
                        {console.log("selectedRoute", selectedRoute)}
                        {console.log("selectedBusStop yaya", selectedBusStop)}
                    </GoogleMap>
                </MapContext.Provider>
            </div>

            <div class="menu">
                <div class="busOptions">
                    <DropdownButton
                        alignRight
                        title={(lineColor === "") ? "please select route" : lineColor}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelectColor}
                    >
                        <Dropdown.Item eventKey="green">green</Dropdown.Item>
                        <Dropdown.Item eventKey="yellow">yellow</Dropdown.Item>
                        <Dropdown.Item eventKey="red">red</Dropdown.Item>
                        <Dropdown.Item eventKey="purple">purple</Dropdown.Item>
                        <Dropdown.Item eventKey="blue">blue</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="" >{lineColor ? "disable line route" : ""}</Dropdown.Item>

                    </DropdownButton>
                </div>
                {(lineColor != "") && selectedBusStop && <button onClick={handleClickBusLocater} style={heatmapbuttonStyle}>{showBusLocater ? "turn off bus" : "show bus"}</button>}
                {showBusLocater && <button onClick={handleClickArrivalModal} style={heatmapbuttonStyle}>{"show predicted arrivalTime"}</button>}
                {<button onClick={handleChangeCenter} style={heatmapbuttonStyle}>{mapCenter == CENTER ? "set center to passenger" : "set center to default"}</button>}
                {selectedRoute && <button
                    onClick={() => searchForNearest(selectedRoute, passengerLocater, handleSelectBusStop)}
                    style={heatmapbuttonStyle}>
                    search nearest bus stop
                </button>}

                {showModal && arrivalTime && <InfoModal show={showModal} setShow={handleCloseModal} arrivalTime={arrivalTime}></InfoModal>}
                {showMarkerInfo && currentMarkerInfo && <MarkerModal info={currentMarkerInfo} show={showMarkerInfo} setShowClose={handleCloseMarkerInfo} setSelectedBusStop={handleSelectBusStop} />}

                {/* <button onClick={() => console.log("arrival Time", arrivalTime, "bus", selectedBus)}>click me</button> */}
                {/* <button onClick={handleToggleShowHeatmap}>toggle heatmap {showHeatmap ? "true" : "false"}</button> */}

            </div>





        </div>
    );
}

export default MapContainer;

async function searchForNearest(bsList, currentPassengerLocation, callback) {
    if (bsList)
        console.log("call searchForNearest")
    console.log("bsList", bsList)
    console.log("currentPassengerLocation", currentPassengerLocation)
    const start = { coordinate: [currentPassengerLocation.lat, currentPassengerLocation.lng] }


    const test = mergeSortDisplacement(bsList.lineData, currentPassengerLocation.lat, currentPassengerLocation.lng)
    console.log("testtamp", test)

    callback(test[0].value) //must return key, use for find bus with progress


    function merge(left, right, starLat, starLng) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            const leftDistance = Math.sqrt(
                Math.pow(starLat - left[leftIndex].value.lat, 2) + Math.pow(starLng - left[leftIndex].value.lng, 2)
            );
            const rightDistance = Math.sqrt(
                Math.pow(starLat - right[rightIndex].value.lat, 2) + Math.pow(starLng - right[rightIndex].value.lng, 2)
            );

            if (leftDistance < rightDistance) {
                result.push(left[leftIndex++]);
            } else {
                result.push(right[rightIndex++]);
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    function mergeSortDisplacement(array, starLat, starLng) {
        if (array.length <= 1) {
            return array;
        }

        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return merge(
            mergeSortDisplacement(left, starLat, starLng),
            mergeSortDisplacement(right, starLat, starLng),
            starLat,
            starLng
        );
    }

}

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



async function fetchBustrackerToken() {
    const response = await fetch('https://api.supersonixz.in.th/session', {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    console.log("new tokenData");
    return tokenData;
}

async function fetchStopBusRoutes(token) {
    if (!token) {
        throw new Error("Token is undefined");
    }
    const body = { token: token, password: 'aaa' }
    const queryParams = new URLSearchParams(body);

    /* const response = await fetch('https://api.supersonixz.in.th/listAllListLineBusStops?' + queryParams.toString(), {
        method: 'GET',
    }); */
    const response = await fetch('https://api.supersonixz.in.th/listAllListLineBusStops', {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const busStopData = await response.json();
    //console.log(busStopData.data.listBusStops.items);
    return busStopData;
}

async function getStatusAPI() { //check directionAPI status
    try {
        const response = await fetch('https://api.supersonixz.in.th/getStatusAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ apiid: 1 })
        });

        const data = await response.json();
        console.log("directionAPI data", data)

        return data
    } catch (error) {
        console.error(error);
    }
}

async function updateStatusAPI(updatedData) { //check directionAPI status
    try {
        const response = await fetch('https://api.supersonixz.in.th/updateStatusAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        const data = await response.json();
        console.log("directionAPI data", data)

        return data
    } catch (error) {
        console.error(error);
    }
}