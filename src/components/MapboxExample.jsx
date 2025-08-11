import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"

export default function MyMap() {
  const [coords, setCoords] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await convertirCoords("cra56 #15-56")
        if (data) {
          setCoords(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, []);
  console.log("desde mapBoxxxExample", coords)
  return (
    <Map
      initialViewState={{
        longitude: coords?.[0] || -76.53,
        latitude: coords?.[1] || 3.40,
        zoom: 14
      }}
      style={{ width: '100%', height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw"
    >
      {coords && (
        <Marker longitude={coords[0]} latitude={coords[1]} />
      )}
      <Marker longitude={-76.53} latitude={3.40} />
      <Marker longitude={-76.529} latitude={3.40} />

    </Map>
  );
}
