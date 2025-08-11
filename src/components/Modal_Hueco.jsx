import { useState } from "react";
export default function Modal({ direccion,categoria, comentarios, modalID }) {
    const [bgColor, setBgColor] = useState("")
    function handleBgCategoriaColor(){
        switch (categoria.text) {
            case "grande":
                setBgColor("bg-danger")
                break;
            case "mediano":
                setBgColor("bg-verde") //revisar colores
                break;
            case "pequeño":
                setBgColor("bg-info")
                break;
        }
    }
    handleBgCategoriaColor()
    console.log(categoria)
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
                                <h3 class="modal-title">Hueco</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <p>
                                        <b>Direccion </b>{direccion}
                                    </p>
                                    
                                    <p class={bgColor}>
                                        <b>Categoria </b>{categoria}
                                    </p>
                                    <p>
                                        <b>Observaciones </b>{comentarios}
                                    </p>
                                </div>
                                 <div className="col">
                                    <div id="img-container">
                                        {/* <img src={img} alt={titulo} className="img-fluid" />*/}
                                        <div className="border">espacio mapa</div>
                                        <div className="text-center">
                                            <button type="button" class="btn btn-primary btn-block font-weight-bold">¿Hueco tapado?</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mb-2">
                                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>


                        {/*<div className="modal-footer">*/}

                    </div>
                </div>
            </div>

        </>
    )
}