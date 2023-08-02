import React, { useEffect, useState, useRef } from 'react'
import { Button, Container } from 'react-bootstrap';
import HomeContent from './HomeContent';
import HomeNav from './HomeNav';

import { Skeleton, Box } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
const Home = () => {
    const [apiStatus, setApiStatus] = useState(null)
    const loadStatus = async () => {
        const test = await fetchStatusAPI()
        console.log(test)
        setApiStatus(test)
    }

    useEffect(() => {
        loadStatus()
    }, [])

    return (
        <div>
            <HomeNav Console={true} toggleDrawer={null}></HomeNav>

            <Container>

                <div className='bg-gradient-light'>
                    <div className='display-3 mt-5'> Supersonixz.in.th
                        <img className='mx-1' src='https://i0.wp.com/bandbblog.com/wp-content/uploads/2018/08/IMG_4385.gif?fit=720%2C390&ssl=1' width={"150px"} rounded  ></img>
                    </div>
                    <hr className='pt-9'></hr>

                </div>

                <Container style={{ "background-color": "#e9ecef" }}>
                    <div className='display-3'>
                        สวัสดีครับ
                    </div>

                    <div className='my-5 display-6'>
                        ทางเว็บทางเรามีการจำกัดการใช้งาน เนื่องจากต้องควบคุมค่าใช้จ่าย ดังนั้นหากใช้งานไม่ได้หมายถึงโค้วตาในแต่ละนาที/ชั่วโมงนั่นครบตามกำหนด โดยจะรีทุกๆ 1ชั่วโมง
                        ขอภัยมา ณ ที่นี้
                        หากต้องการสอบถามกรุณาติดต่ออีเมลล์ด่านล่า
                        กดที่ Map
                        <Button href='map'>
                            MAP
                        </Button>

                    </div>
                    <Box>

                        {apiStatus === null ? <Skeleton variant="rectangular" width={200} height={100} /> : apiStatus.map((index, key) => {

                            return <div key={key}>
                                <span className="mx-2">
                                    API Status
                                    <span style={{ marginLeft: "10px" }}>
                                        {apiStatus[key].des}
                                    </span>
                                </span>
                                <span>
                                    สถาณะ
                                    <span style={{ marginLeft: "10px" }}>
                                        {apiStatus[key].isAvalible === true ? <CheckBoxIcon fontSize='64' /> : <CheckBoxOutlineBlankIcon />}
                                    </span>

                                </span>
                            </div>

                        })}

                    </Box>
                </Container>
                <p>

                </p>
            </Container>
        </div>
    )

}
export default Home;
async function fetchStatusAPI() {
    const response = await fetch('https://api.supersonixz.in.th/listAllStatusAPI', {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    //console.log("busstop", response, response.json())
    const tempdata = await response.json();
    //console.log(busStopData);
    return tempdata

}
