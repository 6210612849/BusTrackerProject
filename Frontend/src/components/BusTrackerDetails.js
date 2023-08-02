
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState, useImperativeHandle } from 'react'
import { createTask } from '../graphql/mutations'
import { listTasks, listBustrackers } from '../graphql/queries'
const BusTrackerDetails = () => {

    // useImperativeHandle(ref, () => ({
    //     log() {
    //         console.log("child function");
    //     }
    // }));

    const [Bustrackers, setBustrackers] = useState([''])
    useEffect(() => {
        fetchBustrackers()
        console.log("what")
    }, [])

    async function fetchBustrackers() {
        try {
            const BustrackersData = await API.graphql(graphqlOperation(listBustrackers));
            const Bustrackers = BustrackersData.data.listBustrackers.items

            Bustrackers.map(obj => {
                if (obj.data) {
                    obj.data = JSON.parse(obj.data)
                }


            })
            setBustrackers(Bustrackers)

        } catch (err) { console.log('error fetching listBustrackers ', err) }

    }

    return (
        <div>
            {
                Bustrackers.map((test, index) => (
                    <div key={index}>
                        <p>
                            device : {test.uuid}
                        </p>
                        <p>
                            latitude :
                            {test.data.latitude}
                        </p>
                        <p>
                            longitude :
                            {test.data.longitude}
                        </p>


                    </div>
                ))
            }
            test
        </div >
    )

};

export default BusTrackerDetails;