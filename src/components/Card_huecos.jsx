import Modal from "./Modal_Hueco"
import { useEffect, useState } from "react"
export default function Card_huecos({ hueco }) {
    const [bgColor, setBgColor] = useState("")
    let url_staticIMG = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-87.0186,32.4055,14/500x300?access_token=pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw
`
    useEffect(() => {
        switch (hueco.categoria) {
            case "pequeño":
                setBgColor("bg-info")
                break;
            case "mediano":
                setBgColor("bg-warning")
                break;
            case "grande":
                setBgColor("bg-danger")
                break;

            default:
                break;
        }
    }, [])

    function obtenerParteFinal(direccion) {
        if (!direccion) return "";
        const partes = direccion.split("#");
        return partes.length > 1 ? partes[1].trim() : "";
    }


    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <div class="card-header"><h3>Hueco</h3></div>
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">
                                {hueco.direccion}
                                {/* {libro.titulo.replaceAll("_", " ")} */}
                            </h5>
                        </div>
                        <div className="">
                            {/*Pensarlo como una capsula con color*/}
                            <p className="card-text text-secondary">
                                <span class={`badge ${bgColor}`}>{hueco.categoria}</span>

                                {/* {libro.generos.join(", ")} */}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row rounded mt-2">
                        <Modal
                            _id={hueco._id}
                            direccion={hueco.direccion}
                            categoria={hueco.categoria}
                            comentarios={hueco.observaciones}
                            modalID={`modal-${obtenerParteFinal(hueco.direccion)}`}

                        //  direccion={libro.portada}
                        // categoria={libro.autor.replaceAll("_", " ")}
                        // comentarios={5555}
                        // modalID={`modal-${libro.titulo}`}
                        />
                    </div>

                </div>
            </div>

        </>
    )
}