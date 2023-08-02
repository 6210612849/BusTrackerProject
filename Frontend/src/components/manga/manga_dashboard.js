
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import { listMangaDashboards, getMangaDashboard } from '../../graphql/queries'
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import MyDashboardBox from './medal/mangaDashboard'
import MyHeadDashboard from './medal/head/manga'

const MangaDashboard = () => {

    const [mangaDashData, setMangaDashData] = useState([])
    async function fetchMangaDashboard() {
        try {
            const tempMangaDashData = await API.graphql(graphqlOperation(listMangaDashboards));

            setMangaDashData(tempMangaDashData.data.listMangaDashboards.items)
            console.log('com')

        } catch (err) { console.log('error fetching manga ', err) }
    }
    useEffect(() => {
        fetchMangaDashboard()
        window.addEventListener('resize', handleResize)


    }, [])

    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });


    function handleResize() {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)


    }





    return (
        // < div >

        //     <p >manga</p>
        //     {mangaDashData.map((dashboard, index) => (
        //         <div key={dashboard.umid ? dashboard.id : index}>

        //             <img src={dashboard.picture} width={"100px"} ></img>
        //             <p >{dashboard.title}</p>
        //             <p >{dashboard.picture}</p>


        //         </div>
        //     )
        //     )
        //     }

        // </div >
        // <div ref={targetRef}>
        //     <p>{dimensions.width}</p>
        //     <p>{dimensions.height}</p>
        //     {/* <MyHeadDashboard  >

        //     </MyHeadDashboard> */}
        // </div>
        <div >
            <MyHeadDashboard myWidth={dimensions.width} myHeight={dimensions.height}>

            </MyHeadDashboard>
            {dimensions.width}
            {dimensions.height}
        </div>

    );

}

export default MangaDashboard;