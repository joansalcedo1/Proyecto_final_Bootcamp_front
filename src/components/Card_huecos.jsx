import Modal from "./Modal_Hueco"
export default function Card_huecos() {
    
    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <img src={`${/*libro.portada*/"portada"}`} class="card-img-top card-header" style={{ height: "200px" }} alt="..." />
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">
                                Cra. 85d #28
                                {/* {libro.titulo.replaceAll("_", " ")} */}
                            </h5>
                        </div>
                        <div className="">
                            {/*Pensarlo como una capsula con color*/}
                            <p className="card-text text-secondary">
                                      <span class="badge bg-danger">Grande</span>

                                {/* {libro.generos.join(", ")} */}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row rounded mt-2">
                        <Modal
                        direccion={"Cra. 85d #28"}
                        categoria={"grande"}
                        comentarios={"Es un hueco de 1.5 milimetros hay que tener mucho cuidado"}
                        modalID={`modal-cra85`}
                        
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