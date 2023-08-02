
import SideNavbar from '../SideNavbar'
import React, { useEffect, useState, useRef, useCallback, } from 'react'

import { Container, ListItem, Skeleton, Box, ListItemText, ListItemIcon } from '@mui/material';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const IotMain = () => {
    const [token, setToken] = useState()
    const [value, setValue] = useState('');
    const [busLocater, setBusLocater] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        SettingIntervalAll(value)

    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
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

            <Container>

                <button onClick={() => setStatusOffAll()}>
                    setStatusOffAll
                </button>
                <button onClick={() => setStatusOnAll()}>
                    setStatusOnAll
                </button>

                <form onSubmit={handleSubmit}>
                    <label>
                        Enter a interval All :
                        <input type="number" value={value} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>



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
                                        <div className='display-7  justify-content-between ' >
                                            <PermDeviceInformationIcon fontSize='20px' />


                                            <span className="mx-2">
                                                เครื่องที่
                                                <span style={{ marginLeft: "10px" }}>
                                                    {busLocater[key].uuid}
                                                </span>
                                            </span>
                                            <span>
                                                สถานะ
                                                <span style={{ marginLeft: "10px" }}>
                                                    {busLocater[key].status === 'true' ? <CheckBoxIcon fontSize='64' /> : <CheckBoxOutlineBlankIcon />}
                                                </span>
                                                <span>
                                                    LAT : {busLocater[key].lat} ||
                                                    lng : {busLocater[key].lng}
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                </ListItemText>
                            </ListItem></div>

                        })}


                    </div>

                </div>

            </Container>
        </div>
    )
}
export default IotMain;
async function setStatusOffAll() {
    const response = await fetch('https://api.supersonixz.in.th/iot/setStatusOffAll', {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    console.log(tokenData);

}

async function setStatusOnAll() {
    const response = await fetch('https://api.supersonixz.in.th/iot/setStatusOnAll', {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    console.log(tokenData);

}

async function SettingIntervalAll(myTime) {
    const response = await fetch('https://api.supersonixz.in.th/iot/SettingIntervalAll', {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ timeInterval: myTime })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tokenData = await response.text();
    console.log(tokenData);

}

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