const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-7530553767055497-111102-d4d83f195fcc80f9b2377d5880f9d273-42182673",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("../../client"));


app.post("/create_preference", (req, res) => {

	let preference = {
		items: [],

		back_urls: {
			"success": "http://localhost:8080/paginas/tienda.html",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: "approved",
	};

	for (obra of req.body) {
		preference.items.push({
			title: obra.description,
			unit_price: Number(obra.price),
			quantity: Number(obra.quantity),

		})
	}
	
	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});
