import React, { useEffect } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import worldGeoJSON from "../utils/lowResolution.json";

function DisplayMap({ setDetails }) {
  //eslint-disable-next-line
  function fetchDetails(name) {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,population,area,subregion,region,languages,capital,currencies,timezones,flags,independent`
    )
      .then((res) => res.json())
      .then((resp) => {
        if (name === "India") {
       return   setDetails(resp.splice(1, 2));
        }
        setDetails(resp.splice(0, 1));
      })
      .catch((error) => console.log(error));
  }

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    // color: 'black',
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = "white";
    const name = country.properties.admin;
    layer.bindPopup(`${name}`);
    layer.on({
      click: () => {
        handleCountryClick(name);
      },
    });
  };

  const handleCountryClick = (name) => {
    if (sessionStorage.getItem("country") === name) return;
    fetchDetails(name);
    sessionStorage.setItem("country", name);
  };

  return (
    <MapContainer
      style={{ height: "90vh", width: "70%" }}
      zoom={2}
      center={[20, 20]}
    >
      <GeoJSON
        style={mapStyle}
        data={worldGeoJSON.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}

export default DisplayMap;
