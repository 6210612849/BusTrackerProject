import { createContext } from 'react';

export const BusTrackersContext = createContext([]);
export const BusStopsContext = createContext([]);
export const MapContext = createContext({
    map: null,
    userLocation: { lat: null, lng: null },
    selectedBusRoute: {
        color: "",
        busStops: [],
        nearestBus: {
            uuid: null,
            location: { lat: null, lng: null }
        },
        nearestBusStop: {
            bsid: "",
            title: "",
            location: { lat: null, lng: null }
        }
    },


});