class Tienda {
    constructor() {
        this.carrito = [];
        this.catalogo = [];
        this.formasDePago = ['MercadoPago', 'Transefencia', 'Debito', 'Credito', 'Efectivo'];
        this.totalCarrito = 0;
    }

    cargarCatalago() {
        const URL_OBRAS_DE_ARTE = '../js/ObrasDeArte.json';
        $.getJSON(URL_OBRAS_DE_ARTE, (respuesta, estado) => {
            if (estado === "success") {
                for (const obra of respuesta) {
                    this.catalogo.push(new ObraDeArte(obra));
                    this.mostrarCard(this.catalogo[this.catalogo.length - 1]);
                }
            }
        });
    }
    mostrarCard(obra) {
        let div = document.getElementById('div-row');
        let contenedor = document.createElement("div");
        contenedor.className = 'col-10 col-md-10 col-lg-6 m-auto';
        contenedor.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-5">
                                            <img src="${obra.ruta}" class="card-img" alt="...">
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title">${obra.nombre}</h5>
                                                <p class="card-text">${obra.tipoObra}</p>
                                                <p class="card-text">${obra.tecnicaAplicada}</p>
                                                <p class="card-text">$${obra.precio}</p>
                                                <button id=${obra.idObra} onclick="miTienda.agregarAlCarrito(${obra.idObra})"
                                                data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar a carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
        div.appendChild(contenedor);
    }
    agregarAlCarrito(id) {
        let obraAAgregar = this.catalogo.find(obra => obra.idObra === id);
        let obraEnCarrito = this.carrito.find(obra => obra.idObra === obraAAgregar.idObra) || obraAAgregar;
        obraEnCarrito.cantidad ? obraEnCarrito.cantidad++ : obraEnCarrito.cantidad = 1;

        if (obraEnCarrito.cantidad === 1) this.carrito.push(obraEnCarrito);
        this.totalCarrito++;
        localStorage.carrito = JSON.stringify(this.carrito);
        localStorage.totalCarrito = this.totalCarrito;
        this.actualizarCantidadProductos();

    }
    actualizarCantidadProductos() {
        document.getElementById("total-carrito").innerHTML = `${this.totalCarrito}`;
    }


    ordenarPrecioMayorMenor() {
        this.catalogo.sort((producto1, producto2) => producto2.precio - producto1.precio);
    }
    ordenarPrecioMenorMayor() {
        this.catalogo.sort((producto1, producto2) => producto1.precio - producto2.precio);
    }
}

