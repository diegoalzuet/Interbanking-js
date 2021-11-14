class Carrito {
    constructor() {
        this.productos = [];
    }

    mostrarCarrito() {
        let acumulador = ``;
        this.productos.forEach(obra => {
            acumulador += `<tr>
                            <th scope="row">${obra.idObra}</th>
                            <td>${obra.nombre}</td>
                            <td>${obra.cantidad}</td>
                            <td>$${obra.precio}</td>
                            <td>$${obra.precio * obra.cantidad}</td>
                            <td> <a onclick="carrito.borrarProductoDelCarrito(${obra.idObra})"> <i class="fas fa-trash-alt"></i></a></td>
                        </tr>`;
        });
        acumulador += `<tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td>Total Carrito</td>
                        <td>$${this.calcularTotal()}</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td><button id="checkout-btn" class="btn rounded">Pagar</button></td>
                        <td><button class="btn rounded" onclick="carrito.vaciarCarrito()">Vaciar Carrito</button></td>
                    </tr>`;
        document.getElementById("table-body").innerHTML = acumulador;
    }
    calcularTotal() {
        let total = 0;
        this.productos.forEach(obra => { total += obra.precio * obra.cantidad })
        return total;
    }

    borrarProductoDelCarrito(id) {

        const indice = this.productos.findIndex(obra => obra.idObra === id);
        if (indice >= 0) {
            let obraABorrar = this.productos.splice(indice, 1);
            localStorage.totalCarrito= JSON.stringify(JSON.parse(localStorage.totalCarrito)-obraABorrar[0].cantidad);
            this.productos.length > 0 ? localStorage.carrito = JSON.stringify(this.productos) : this.vaciarCarrito();
            location.reload();
        }
    }
    vaciarCarrito() {
        localStorage.clear();
        location.reload();
    }
}

const carrito = new Carrito();
if (localStorage.carrito) {
    carrito.productos = JSON.parse(localStorage.carrito);
    carrito.mostrarCarrito();
}
