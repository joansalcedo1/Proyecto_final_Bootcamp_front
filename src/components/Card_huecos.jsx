import Modal from "./ModalConfirm"
export default function Card_huecos() {
    
    return (
        <>
            <div class="card m-2" style={{ width: "12rem" }}>
                <img src={`${/*libro.portada*/"portada"}`} class="card-img-top card-header" style={{ height: "200px" }} alt="..." />
                <div class="card-body ">
                    <div className="row ">
                        <div>
                            <h5 className="card-title">
                                Cra 53 #15-56
                                {/* {libro.titulo.replaceAll("_", " ")} */}
                            </h5>
                        </div>
                        <div className="">
                            {/*Pensarlo como una capsula con color*/}
                            <p className="card-text rounded-3 text-center bg-info text-secondary">
                                Grande
                                {/* {libro.generos.join(", ")} */}
                            </p>
                        </div>
                    </div>
                    <div className="bg-secondary row rounded mt-2">
                        <Modal
                        titulo={"cra 53 #15-56"}
                        info={"grande"}
                    
                        modalID={"modal-cra53"}
                        type={false}
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