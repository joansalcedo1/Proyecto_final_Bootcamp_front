import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"

export default function MapBoxGeneral() {

    let direcciones = ["cra 53 #15-56", "Cra. 85d #28","Cl. 14 #7306","Cl. 14 #48a-05"]
    //Configuraciones del mapa
    const ancho = "100%"
    const largo = 400
    //coordenadas que el mapa va a renderizar como markers
    const [coords, setCoords] = useState([])

    useEffect(() => {
        //se llama a la funcion convertirCoords: API de mapbox 
        const fetchData = async () => {
            try {
                //array de las direcciones convertidas en coordenadas 
                const nuevaCoords = []
                //tipo de for llamado "for...of" que permite usar el await
                for (let direc of direcciones) {
                    const data = await convertirCoords(direc);
                    if (data) {
                        //se egraga cada coordenada al array si realmente se pudo convertir
                        nuevaCoords.push(data)
                    } else {
                        console.log("data está vacío desde mapbox Example");
                    }
                }
                //seteo local de las coordenadas
                setCoords(nuevaCoords);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    //console.log("desde mapBox General", coords)
    //se utiliza para el initial view del mapa 
    const [lng0, lat0] = coords[0] || [-76.53, 3.40];

    return (
        <Map
            initialViewState={{
                longitude: lng0,
                latitude: lat0,
                zoom: 13
            }}
            style={{ width: ancho, height: largo }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw"
        >
            {/* Se utiliza un map para lograr recorrer todas las nuevas direcciones en forma de coordenadas
            y mostrar todos los markers. Cada marker tiene un indice propio
             */}

            {
                coords.map(([lng, lat], index) => (
                    <Marker
                        key={index}
                        longitude={lng}
                        latitude={lat}
                        color="red" // Puedes cambiar el color del marker aquí
                    />
                ))
            }
        </Map >
    );
}
