import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import MapContainer from "./mapComponets/MapContainer";
import HomeNav from "./home/HomeNav";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px"
};
const center = {
  lat: 40.712776,
  lng: -74.005974
};
const options = {
  disableDefaultUI: true,
  zoomControl: true
};

function Map() {


  return (
    <div>

      <HomeNav Console={true} toggleDrawer={null}></HomeNav>

      <MapContainer />
    </div>
  );
}

export default Map;
