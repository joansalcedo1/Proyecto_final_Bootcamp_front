import { Link } from "react-router-dom";

function Header() {
    /*
    <div class="container-fluid ">
                        <div class="navbar-brand mb-0 h1 mx-auto"><h1>Hueco founder</h1></div>
                    </div>
                    <div class=""> 
                        <div></div>
                    </div>
    */
    return (
        <>
            <header id="Header_dad" className="">
                <nav class="navbar text-white bg-dark">

                    <div class="container d-flex justify-content-between align-items-center">
                        <Link className="text-white text-decoration-none" to={`/reportar`}>
                            <div className="ps-4 pe-4 text-center "><h5>Reportar</h5></div>
                        </Link>
                        <Link className="text-white text-decoration-none" to={"/"}>
                            <div className="navbar-brand mb-0 h1 text-white mx-auto"><h1>Cali Hueco Founder</h1></div>
                        </Link>
                        <Link className="text-white text-decoration-none" to={"/misReportes"}>
                        <div className="pe-4 ps-4"><h5>Mis reportes</h5></div>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header