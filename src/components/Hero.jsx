import MapboxExample from "./MapboxExample"
import convertirCoords from "../services/geoCoding.js";
import { useEffect, useState } from "react"
export default function Hero() {
    const [coords, setCoords] = useState(null)
    let arrayP = ["40", "10"]
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await convertirCoords()
                if (data) {
                    setCoords(data)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        
    }, []);
    return (
        <>
            <section class="m-4 mt-5 ">
                <div class="row p-4 shadow rounded-3 mb-4">
                    <div class="col d-flex align-items-center px-4 py-5 my-5">
                        <div class="container m-2 text-center ">
                            <h2 className="p-2">¿Hay muchos huecos por tu cuadra, ve? </h2>
                            <div class="m-3 p-2 h6">
                                <h7>Reportalos y ayudemos a llevar un recuento de todos los craters que dañan nuestros vehiculos</h7>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg btn-block font-weight-bold">Reportalo!!</button>
                        </div>
                    </div>
                    <div id="carousel_dad" class="col">
                        <div className="container ">
                            <div id="carouselExample" class="carousel slide ">
                                <div class="carousel-inner">
                                    <div class="carousel-item active rounded-3">
                                        <img src="https://www.laopinion.co/sites/default/files/2021-05/Invasi%C3%B3n-de-huecos-en-las-calles-de-Cucutaprados-del-este-prados-del-este-2.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://personeriacali.gov.co/wp-content/uploads/2022/08/cali-huecos-768x462.jpg" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item rounded-3">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QkKQkNB8wRsnYMBcM2HOB0saTjihZ5xjew&s" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>Si estás cansado de esto, reporta!</p>
                        </div>
                    </div>
                </div>
                <div className="text-center container">
                    <h1>MAPA AQUI</h1>
                    <div>
                        <MapboxExample/>
                    </div>
                    {/* <img class="img-fluid img" src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(-74.5,40),pin-l+0000ff(-75,39)/74.5,40,9/800x600?access_token=pk.eyJ1Ijoic2ViMTAxMSIsImEiOiJjbWUydDVxZnUwdHV4Mmtwa3Q0b2FmdWFiIn0.4-Hb5WmIe21pLf3-clWYnw`} alt="" /> */}
                </div>
            </section>
        </>
    )
}