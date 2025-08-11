export default function Reportar() {
    return (
        <>
            <section id="reportar_dad">
                <div class="d-flex justify-content-center align-items-center m-4 ps-4 pe-4 ">
                    <div id="form_dad" class="col m-4">
                        <form class="p-4 border rounded-3 bg-light shadow-sm">

                            <h4 class="mb-4 text-primary text-center fw-bold">Reporta ese crater, ve!</h4>

                            <div class="mb-3">
                                <label for="nombre" class="form-label fw-semibold">Direccion</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Escribí la dirección del hueco" />
                            </div>

                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="categoria" class="form-label fw-semibold">Categoría</label>
                                    <select class="form-select" id="categoria" name="categoria" required>
                                        <option value="">Selecciona una categoría</option>
                                        <option value="grande">Grande</option>
                                        <option value="mediano">Mediano</option>
                                        <option value="pequeno">Pequeño</option>
                                    </select>
                                </div>

                            </div>

                            <div class="mb-3">
                                <label for="Observaciones" class="form-label fw-semibold">Descripción</label>
                                <textarea class="form-control" id="descripcion" rows="3" placeholder="Cuentanos ..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Enviar reporte</button>

                        </form>
                    </div>
                    <div class="col m-4 text-center">
                        <div class="container">
                            <h1>Muchas gracias, oís!</h1>
                            <p>Este granito de arena aporta a nuestra ciudad. Juntos podremos mejorar nuestra Cali bella </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}