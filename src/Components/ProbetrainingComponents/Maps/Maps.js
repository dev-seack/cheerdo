import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Maps.css";

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      locations: [
        {
          LngLat: [7.479247, 51.507849],
          address:
            "Sporthalle Gertrud Bäumer Realschule Erwinstr. Ecke Schaeffelstr., Dortmund"
        },
        {
          LngLat: [7.468413, 51.522468],
          address: "Diesterweg Grundschule Dortmund"
        },
        {
          LngLat: [7.459639, 51.526682],
          address: "Helmholtz Gymnasium Dortmund"
        },
        {
          LngLat: [7.4560178, 51.5289028],
          address: "Goethestr. 20, Dortmund"
        },
        {
          LngLat: [7.4357137, 51.4796415],
          address: "Eierkamp, Mira Lobe Schule, Dortmund"
        }
      ]
    };
  }

  createMap() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGV2LWxlZ2FydGkiLCJhIjoiY2p0cmp6NndhMG9nZjN5azBhMXA5ZG4zNCJ9.ZSY-cBZVHrVhslvkbO3Xnw";
    let map = new mapboxgl.Map({
      container: "MapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.479247, 51.507849], // starting position
      zoom: 11 // starting zoom
    });
    this.setState({ map });

    // create DOM element for the marker
    this.state.locations.forEach((loc, index) => {
      let el = document.createElement("div");
      el.id = "marker" + index;
      el.classList.add("marker");
      // create the popup
      let popup = new mapboxgl.Popup({ offset: 25 }).setText(loc.address);

      let marker = new mapboxgl.Marker(el)
        .setLngLat(loc.LngLat)
        .setPopup(popup); // sets a popup on this marker
      marker.addTo(map);
    });

    return map;
  }

  createMarker() {}

  componentDidMount() {
    let map = this.createMap();
    map.addControl(new mapboxgl.NavigationControl());
  }

  render() {
    return <div id="MapContainer" />;
  }
}

export { MapComponent };
