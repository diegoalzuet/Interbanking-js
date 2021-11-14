new universalParallax().init({
    speed: 20.0
});

$("#btn-mas-menos").click(() => {
    $("#mas-obras").toggle("slow", function () {

        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aca").offset().top
        });

        let boton = document.getElementById('btn-mas-menos');
        if (boton.innerHTML == '<i class="fas fs-1 fa-angle-double-down flecha"></i>') {
            boton.innerHTML = '<i class="fas fs-1 fa-angle-double-up flecha"></i>';
        }
        else {
            boton.innerHTML = '<i class="fas fs-1 fa-angle-double-down flecha"></i>';
        }
    });
}
);

$(".imagen-modal").click((e) => {
    console.log(e.target.src)
    let imagen = document.getElementById("imagen-en-modal");
    imagen.src = e.target.src;
})