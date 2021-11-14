class ObraDeArte {
    // constructor(id, nombre, tipoObra, tecnicaAplicada, precio) {
    //     this.idObra = id;
    //     this.nombre = nombre;
    //     this.tipoObra = tipoObra;
    //     this.tecnicaAplicada = tecnicaAplicada;
    //     this.precio = precio;
    // }

    constructor(obj){
        this.idObra = obj.idObra;
        this.nombre = obj.nombre;
        this.tipoObra = obj.tipoObra;
        this.tecnicaAplicada = obj.tecnicaAplicada;
        this.precio = parseFloat(obj.precio);
        this.ruta = obj.rutaImg;
    }
    //INICIALIZA CON VALORES ALEATORIOS EL CATALOGO DE OBRAS A VENDER
    // agregarAlDOM() {
    //     let div = document.getElementById('div-row');
    //     let contenedor = document.createElement("div");
    //     contenedor.className = 'col-10 col-md-10 col-lg-6 m-auto';
    //     contenedor.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
    //                                 <div class="row no-gutters">
    //                                     <div class="col-md-5">
    //                                         <img src="${this.ruta}" class="card-img" alt="...">
    //                                     </div>
    //                                     <div class="col-md-7">
    //                                         <div class="card-body">
    //                                             <h5 class="card-title">${this.nombre}</h5>
    //                                             <p class="card-text">${this.tipoObra}</p>
    //                                             <p class="card-text">${this.tecnicaAplicada}</p>
    //                                             <p class="card-text">$${this.precio}</p>
    //                                             <button id=${this.idObra} onclick="miTienda.agregarAlCarrito(${this.idObra})"
    //                                             data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar a carrito</button>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>`;
    //     div.appendChild(contenedor);
    // }
}
