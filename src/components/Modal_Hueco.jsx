import { useState, useEffect } from "react";
export default function Modal({ direccion, categoria, comentarios, modalID }) {
    const [bgColor, setBgColor] = useState("")
    useEffect(() => {

        if (!categoria) return;

        switch (categoria) {
            case "grande":
                setBgColor("bg-danger")
                break;
            case "mediano":
                setBgColor("bg-verde") //revisar colores
                break;
            case "pequeño":
                setBgColor("bg-info")
                break;
            default:
                setBgColor("bg-secondary");
        }

    }, [categoria])
    const encodedAddress = encodeURIComponent(direccion);


    return (


        <>
            <button type="button" className="btn rounded btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalID}`} >
                Ver más
            </button>

            <div className="modal fade" id={modalID} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*<div className="modal-header">*/}
                        <div className=" d-flex justify-content-between align-items-center ps-5 pt-4 ">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            <div class="flex-grow-1 d-flex justify-content-center">
                                <h3 class="modal-title text-center">
                                    {direccion}
                                    <span className={`ms-4 me-4 badge ${bgColor}`}>{categoria}</span>
                                </h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-stretch">
                                {/* Columna con mapa y botón */}
                                <div className="col d-flex flex-column">
                                    <p><b>Observaciones: </b>{comentarios}</p>
                                    <div id="img-container" className="flex-grow-1">
                                        <iframe
                                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.2433352760974!2d-76.53057582642577!3d3.404313951534037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6b52d3b25c3%3A0x580cf00cd5df2137!2s${encodedAddress}%2C%20Comuna%2017%2C%20Cali%2C%20Valle%20del%20Cauca!5e1!3m2!1ses!2sco!4v1754886502844!5m2!1ses!2sco`}
                                            width="100% "
                                            height="100%"
                                            style={{ border: 0, minHeight: "200px" }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>

                                    <div className="text-center mt-3">
                                        <button type="button" className="btn btn-secondary btn-sm">
                                            ¿Hueco tapado?
                                        </button>
                                    </div>
                                </div>

                            </div>



                            <div class="text-center mt-4">
                                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>


                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div >

        </>
    )
}