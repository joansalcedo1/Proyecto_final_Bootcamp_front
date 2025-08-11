import Card_huecos from "./Card_huecos"
import { useEffect,useState } from "react"
import { fetchDb } from "../services/fetchDb"

export default function Huecos(){
    const [huecos,setHuecos] = useState([])
    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetchDb()
                if(data){
                    setHuecos(data)
                }else{
                    console.log("No existen huecos que mostrar")
                }
            } catch (error) {
                console.log("Error haciendo fetch de hueco: ",error)
            }   
        }
        fetchData()
    },[])
    console.log(huecos)
    return(
        <>
        <section id="Huecos_dad" className="m-5 text-center">
            <h2 className="m-3">Revisalos todos, vé</h2>
            <div className="container border p-3">
                <div className="row">
                    {huecos.map((hueco,i)=>(
                        <Card_huecos
                        key={i}
                        hueco={hueco}
                        />
                    ))}
                    
                </div>

            </div>
        </section>
        </>
    )
}