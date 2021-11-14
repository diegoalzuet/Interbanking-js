
const miTienda = new Tienda();
miTienda.cargarCatalago();

if (localStorage.carrito){
    miTienda.carrito = JSON.parse(localStorage.carrito);
    miTienda.totalCarrito=JSON.parse(localStorage.totalCarrito);
    miTienda.actualizarCantidadProductos();
}

let select = document.getElementById("select-ordenar");
select.addEventListener('change', function(e){
    switch(e.target.value){
        case '1': 
        miTienda.ordenarPrecioMayorMenor();
        borrarCatalagoEnDOM();
        miTienda.catalogo.forEach(obra => miTienda.mostrarCard(obra));
        break;
        case '2': 
        miTienda.ordenarPrecioMenorMayor();
        borrarCatalagoEnDOM();
        miTienda.catalogo.forEach(obra => miTienda.mostrarCard(obra));
        break;
    }
})

let checkFiltros = document.getElementsByName("check-filtros");
let filtrado = miTienda.catalogo;

checkFiltros.forEach(check => check.addEventListener('click',function(){
    if(!check.checked) filtrado=miTienda.catalogo;
    filtrar();
    borrarCatalagoEnDOM();
    filtrado.forEach(obra => miTienda.mostrarCard(obra));
}))

function filtrar(){
    checkFiltros.forEach(check => {
        if(check.checked)
            filtrado = filtrado.filter(obra => obra.tipoObra===check.value || obra.tecnicaAplicada===check.value);        
    });
}
function borrarCatalagoEnDOM(){
    let div = document.getElementById('div-row');
    div.innerHTML= '';
}
