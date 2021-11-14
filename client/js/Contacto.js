

$("#formulario-mensaje").submit(function(e){
    e.preventDefault();
   console.log(`Mensaje de ${$("#input-nombre").val()} enviado. Mensaje:${$("#txt-area-mensaje").val()}`);
   alert(`Gracias ${$("#input-nombre").val()} por tu mensaje. Podes ver el mensaje enviado por consola`); 
   $("#formulario-mensaje")[0].reset();
})
