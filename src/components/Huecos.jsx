import Card_huecos from "./Card_huecos"
export default function Huecos(){
    return(
        <>
        <section id="Huecos_dad" className="m-5 text-center">
            <h2 className="m-3">Revisalos todos, ve</h2>
            <div className="container border p-3">
                <div className="row">
                    <Card_huecos/>
                </div>

            </div>
        </section>
        </>
    )
}