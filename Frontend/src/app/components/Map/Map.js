import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Map.module.scss";
import cx from "classnames";

function Map({ coords, token, style, zoom }) {
	const mapRef = useRef();
	mapboxgl.accessToken = token;
	const map = useRef(null);

	useEffect(() => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapRef.current,
			style,
			center: [coords.lon, coords.lat],
			zoom: zoom,
		});

		const el = document.createElement("div");
		el.innerHTML = `<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="49" cy="49" r="48.5" stroke="#FDE000" stroke-dasharray="8 8"/><circle cx="49" cy="49" r="11" fill="#FDE000"/></svg>`;
		el.className = "marker";
		new mapboxgl.Marker(el).setLngLat([coords.lon, coords.lat]).addTo(map.current);
	});

	return <div ref={mapRef} className={cx(styles.section)}></div>;
}

export default Map;
