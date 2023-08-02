import React, { useEffect, useState, useRef, useCallback, } from 'react'
import SideNavbar from '../SideNavbar'
import { Container, ListItem, Skeleton, Box, ListItemText, ListItemIcon } from '@mui/material';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const ConsoleOverview = () => {
    const [token, setToken] = useState()
    const [busLocater, setBusLocater] = useState(null)
    console.log(busLocater)

    // useEffect(() => {


    //     const tokenData = await fetchBustrackerToken();
    //     setToken(tokenData);
    //     const busTrackerData = fetchStopBusTracker(tokenData);

    //     setBusLocater(busTrackerData);
    //     console.log(busLocater)

    // }, [])



    useEffect(() => {
        const callBusTracker = async () => {

            const tokenData = await fetchBustrackerToken();
            setToken(tokenData);
            const busTrackerData = await fetchStopBusTracker(tokenData);

            setBusLocater(busTrackerData)
        }


        callBusTracker()
    }, [])
    return (
        <div>
            <SideNavbar></SideNavbar>

            <Container sx={{ marginY: "70px" }}>
                <div>
                    <div className='display-3 mt-3 mb-5 '> Overview </div>
                    <hr />
                </div>
                <div style={{ "background-color": "#e9ecef" }} >
                    {/* {busLocater.map((index, key) => {
                        <div>

                            {busLocater[0].uuid}
                        </div>
                    })} */}
                    <div>

                        {busLocater === null ? <Skeleton variant="rectangular" width={900} height={300} /> : busLocater.map((index, key) => {


                            return <div><ListItem disablePadding sx={{
                                marginTop
                                    : "20px"
                            }}> <ListItemText>

                                    <span>
                                        <div className='display-5  justify-content-between ' >
                                            <PermDeviceInformationIcon fontSize='20px' />


                                            <span className="mx-2">
                                                เครื่องที่
                                                <span style={{ marginLeft: "10px" }}>
                                                    {busLocater[key].uuid}
                                                </span>
                                            </span>
                                            <span>
                                                สถาณะ
                                                <span style={{ marginLeft: "10px" }}>
                                                    {busLocater[key].status === 'true' ? <CheckBoxIcon fontSize='64' /> : <CheckBoxOutlineBlankIcon />}
                                                </span>

                                            </span>
                                        </div>
                                    </span>
                                </ListItemText>
                            </ListItem></div>

                        })}


                    </div>

                </div>
            </Container >
        </div >
    )


}
export default ConsoleOverview;

async function fetchBustrackerToken() {
    const response = await fetch('https://api.supersonixz.in.th/session?', {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    //console.log(tokenData);
    return tokenData;
}

async function fetchStopBusTracker(token) {
    if (!token) {
        throw new Error("Token is undefined");
    }
    const body = { token: token, password: 'aaa' }
    const queryParams = new URLSearchParams(body);

    const response = await fetch('https://api.supersonixz.in.th/listAllBusTrackers?' + queryParams.toString(), {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const busStopData = await response.json();

    //console.log(busStopData.data.listBusStops.items);
    return busStopData;
}
