import { useEffect, useState } from "react"
import { Marker } from "@react-google-maps/api"

const refreshBusLocaterInterval = 5000;

const BusLocaterMarker = ({ busLocater, setBusLocater, selectedRoute, selectBusLocaters, setSelectedBusLocaters }) => {
    const [token, setToken] = useState()
    const [filteredBusLocaters, setFilteredBusLocaters] = useState([])
    const [busLocaterData, setBusLocaterData] = useState()
    const [busLocaterProgresses, setBusLocaterProgresses] = useState()
    const [isTokenExpired, setIsTokenExpired] = useState(true)

    useEffect(() => {
        fetchBustrackerToken().then(token => {
            console.log("set new token")
            setToken(token)
        })
        fetchBusLocaterProgresses().then(progress => setBusLocaterProgresses(progress))
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (token) {
                //fetchBusLocater(token).then(busLocater => setBusLocater(busLocater))
                fetchBusLocater(token).then(data => {
                    if (data != "token is expired") {
                        fetchBustrackerToken().then(token => {
                            console.log("set new token")
                            setToken(token)
                        })
                    }
                    console.log("setBusLocater")
                    setBusLocaterData(data)
                    //setBusLocater(data)
                })
            } else {

            }
        }, refreshBusLocaterInterval);

        return () => clearInterval(intervalId)
    }, [token])

    

    useEffect(() => {
        if (busLocaterData && busLocaterProgresses && selectedRoute) {
            console.log("in condition")

            async function createArr() {
                return new Promise(async (resolve, reject) => {
                    try {
                        const arr = []
                        const tempArr = await busLocaterProgresses.filter((prog) => prog.lineID === selectedRoute.lid)
                        tempArr.forEach(elem => { //ทุกคัน
                            busLocaterData.forEach((bus) => {
                                if (elem.lid == bus.uuid) {
                                    const tempElem = {
                                        uuid: bus.uuid,
                                        lat: bus.lat,
                                        lng: bus.lng,
                                        timestamp: bus.timeStamp,
                                        status: bus.status,
                                        isActive: elem.isActive,
                                        lineID: elem.lineID,
                                        progress: elem.progress
                                    }
                                    arr.push(tempElem)
                                    //setSelectedBusLocaters(tempElem)
                                    //handleAddNewFiltered(tempElem)
                                }
                            })
                        })
                        resolve(arr)
                    } catch (error) {
                        reject(error)
                    }

                })

            }
            createArr().then((res) => {
                //console.log("arr", arr)

                setFilteredBusLocaters(res)
                //setSelectedBusLocaters(filteredBusLocaters)
                console.log("filtered", filteredBusLocaters)
            })

            //setSelectedBusLocaters(arr)


        }
    }, [busLocaterData, selectedRoute, busLocaterProgresses])

    useEffect(() => {
        console.log("setSlectBu0ssssssssssssss", filteredBusLocaters)
        setSelectedBusLocaters(filteredBusLocaters)

    }, [filteredBusLocaters])

    const handleAddNewFiltered = (newElem) => {
        setFilteredBusLocaters([...filteredBusLocaters, newElem])
    }


    const createBusLocater = (arr) => {
        if (arr.length > 0) {
            try {
                console.log("call createBusLocater");
                const icon = {
                    /* url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png", */
                    url:
                        "https://cdn.discordapp.com/attachments/1088821299662569512/1088821323163254816/bus.png",
                    scaledSize: new window.google.maps.Size(20, 20),
                };
                console.log("data status", busLocaterData)
                console.log("progress", busLocaterProgresses)
                console.log("route", selectedRoute)

                //create new bsList

                //setSelectedBusLocaters(arr)

                return arr.map((bus) => {
                    console.log("this is filtered", bus)

                    return (
                        <Marker
                            position={{ lat: bus.lat, lng: bus.lng }}
                            key={bus.uuid}
                            icon={icon}
                        ></Marker>
                    );
                });
            } catch (error) {
                console.error("Error creating bus locater marker: ", error);
                return null; // Return null in case of an error
            }
        } else {
            return null
        }



    };

    // if (selectedBusLocaters && selectedBusLocaters[0].lineID === selectedRoute.lid) {
    //     return null
    // } else {
    return (
        <>
            {createBusLocater(filteredBusLocaters)}
        </>
    )
    // }



}

export default BusLocaterMarker;

async function fetchBustrackerToken() {
    console.log("call fetch token");
    try {
        const response = await fetch('https://api.supersonixz.in.th/session', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

        return data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log(`HTTP error! status: ${error.response.status}`);
        }
    }
}

async function fetchBusLocaterProgresses() {
    console.log("call fetch listAllLocaterProgresses");
    try {
        const response = await fetch('https://api.supersonixz.in.th/listAllLocatorProgresses', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log(`HTTP error! status: ${error.response.status}`);
        }
    }
}

async function fetchBusLocater(token) {
    if (token !== undefined) {
        const body = { token: token, password: 'aaa' }
        const queryParams = new URLSearchParams(body);

        try {
            const response = await fetch('https://api.supersonixz.in.th/listAllBusTrackers?' + queryParams.toString(), {
                method: 'GET',
                /* headers: {
                    token: token,
                    password: 'aaa'
                }, */
                /* body: JSON.stringify({
                    body
                }) */
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("bus from fetch", data)

            return data;
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.log(`HTTP error! status: ${error.response.status}`);
            }
            return "token is expired"
        }
    }


}
