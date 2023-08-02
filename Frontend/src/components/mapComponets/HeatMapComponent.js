import { HeatmapLayer, MapContext } from '@react-google-maps/api';
import { useEffect, useState, useContext, useRef } from 'react';

const HeatMapComponent = ({ showHeatmap, heatmapColor }) => {
    const map = useContext(MapContext)
    const [heatmapData, setHeatmapData] = useState([]);
    const [previousHeatmap, setPreviousHeatmap] = useState(null);
    const heatmapRef = useRef();

    const loadHotzone = async () => {
        try {
            const hotzoneData = await fetchHotzoneData(20);
            const heatmapDataList = hotzoneData.map((coor) => ({
                location: new window.google.maps.LatLng(coor.lat, coor.long),
                //location: randomCoordinate(),
                weight: 2,
            }));
            console.log("loadHeatmap")
            setHeatmapData(heatmapDataList);

        } catch (error) {
            console.error('Error loading hotzone data:', error);
        }
    };

    useEffect(() => {
        loadHotzone()
        
    }, []);

    const heatmapOptions = {
        radius: 20,
        opacity: 0.6,
        //gradient: heatmapColor,
        //visible: showHeatmap
    };

    const onHeatmapLoad = (hm) => {
        if (previousHeatmap) {
          previousHeatmap.setMap(null);
        }
        setPreviousHeatmap(hm);
        heatmapRef.current = hm;
      };

    return showHeatmap &&  heatmapData.length > 0 ? (
        <>
            <HeatmapLayer
                key="heatmap"
                data={heatmapData}
                options={heatmapOptions}
                onLoad={(heatmapLayer) => {onHeatmapLoad(heatmapLayer)}}
                onUnmount={(heatmapLayer) => {heatmapLayer.setMap(map)}}
            />
            {console.log("heatmapData",heatmapData)}
        </>

    ): null;
};

export default HeatMapComponent;


function randomCoordinate() {
    // Define the boundary
    const north = 14.079376;
    const south = 14.065274;
    const west = 100.592141;
    const east = 100.618250;

    // Generate random latitude and longitude within the boundary
    const latitude = Math.random() * (north - south) + south;
    const longitude = Math.random() * (east - west) + west;

    console.log("random", latitude, longitude)
    return { lat: latitude, lng: longitude };
}

async function fetchHotzoneData(day) {
    try {
        const response = await fetch('https://api.supersonixz.in.th/listHotZoneByDay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ day: day })
        });

        const data = await response.json();
        console.log("data", data)

        return data
    } catch (error) {
        console.error(error);
    }
}


