// Add SDK credentials
// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
const mercadopago = new MercadoPago('TEST-544d6e49-0ac3-4de9-a3cb-04f9877fe0ca', {
  locale: 'es-AR' // The most common are: 'pt-BR', 'es-AR' and 'en-US'
});

// Handle call to backend and generate preference.
document.getElementById("checkout-btn").addEventListener("click", function () {

  $('#checkout-btn').attr("disabled", true);

  const orderData = [];

  carrito.productos.forEach(obra => {
    orderData.push({
      quantity: obra.cantidad,
      description: obra.nombre,
      price: obra.precio
    })
  })

  
  updatePrice(orderData);

  fetch("/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (preference) {
      createCheckoutButton(preference.id);

      $(".shopping-cart").fadeOut(500);
      setTimeout(() => {
        $(".container_payment").show(500).fadeIn();
      }, 500);
    })
    .catch(function () {
      alert("Unexpected error");
      $('#checkout-btn').attr("disabled", false);
    });
});

// Create preference when click on checkout button
function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  mercadopago.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '#button-checkout', // Class name where the payment button will be displayed
      label: 'Pagar', // Change the payment button text (optional)
    }
  });
}

// Handle price update
function updatePrice(orderData) {

  let acumulador = ``;
  orderData.forEach(obra => {
    acumulador += `
    <h2 class="title"><b>Titulo Obra:</b> ${obra.description}</h2>
                    <div class="item">
                        <span class="price" id="summary-price"> <b>Subtotal:</b> $${obra.price * obra.quantity}</span>
                        <p class="item-name">Cantidad: <span id="summary-quantity">${obra.quantity}</span></p>
                    </div>    
    `;
  })

  acumulador += `<div class="total"><b>Total:</b><span class="price" id="summary-total">$${carrito.calcularTotal()}</span></div>`;
  document.getElementById('products').innerHTML = acumulador;
}