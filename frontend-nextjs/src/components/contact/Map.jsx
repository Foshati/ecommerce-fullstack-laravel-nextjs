"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // Ensure this is applied

export default function Map() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      document.getElementById("contact-map").innerHTML =
        "<div id='map' style='height: 345px'></div>";

      var map = L.map("map").setView([35.700105, 51.400394], 14);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      L.marker([35.700105, 51.400394], {
        icon: L.icon({
          popupAnchor: [12, 6],
          iconUrl: "images/map/marker-icon.png",
          shadowUrl: "images/map/marker-shadow.png",
        }),
      })
        .addTo(map)
        .bindPopup("<b>Foshati</b>")
        .openPopup();
    }
  }, []);

  return <div id="contact-map"></div>;
}



