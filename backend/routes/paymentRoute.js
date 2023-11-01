const express = require('express');
// const { processPayment, paytmResponse, getPaymentStatus } = require('../controllers/paymentController');
// const { create, success, err , getPaymentStatus, payment } = require('../controllers/paymentController');
// const { payment , createOrder, captureOrder, generateAccessToken } = require('../controllers/paymentController');
const { processPayPalPayment, paypalResponse, check, createNewOrder } = require('../controllers/paymentController');
// const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

// router.route('/payment/process').post(processPayment);
// router.route('/payment/process').post(processPayPalPayment);
router.post('/payment/process' , processPayPalPayment);
router.post('/payment1'  , check);
// router.post('/order/new1', createNewOrder);
router.post('/ordernew', createNewOrder);


// app.get('/specific-route', (req, res) => {
//   // Logic for your route
//   return res.json({ help: "hhhh" });
// });
// router.get('/payment2' ,check1);
// router.route('/payment/process').get( create);
// router.route('/payment/process').post( create);
// router.route('/payment/paypals').post(paypalResponse);

// router.route('/payment/pay').post(payment) 


// router.route('/payment/paypal').post(payment) 

// router.route('/process/payment').post(payment) 


// router.route('/payment/process').get(isAuthenticatedUser, create);
// router.route('/payment/success').get(success);
// router.route('/payment/err').get(err);
// router.route('/stripeapikey').get(isAuthenticatedUser, sendStripeApiKey);


// router.route('/callback').post(paytmResponse);

// router.route('/payment/status/:id').get(isAuthenticatedUser, getPaymentStatus);


// router.route("/api/orders").post( async (req, res) => {
//     try {
//       // use the cart information passed from the front-end to calculate the order amount detals
//     //   const { cart } = req.body;
//     //   const { jsonResponse, httpStatusCode } = await createOrder(cart);
//       const order = await paypal.createOrder(req.body);
//     //   res.status(httpStatusCode).json(jsonResponse);
//       res.json(order);
//     } catch (error) {
//       console.error("Failed to create order:", error);
//       res.status(500).json({ error: "Failed to create order." });
//     }
//   });
  
// router.route("/api/orders/:orderID/capture").post( async (req, res) => {
//     try {
//       const { orderID } = req.params;
//       const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
//       res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//       console.error("Failed to create order:", error);
//       res.status(500).json({ error: "Failed to capture order." });
//     }
//   });


// For Testing PayPAl //

// const { processPayPalPayment, paypalResponse } = require('../controllers/paymentController');

// router.route('/my-server/create-paypal-order').post(processPayPalPayment); // Initiate PayPal payment
// router.route('/payment/process').post(isAuthenticatedUser,processPayPalPayment); // Initiate PayPal payment
// router.route('/payment/process').post(processPayPalPayment); // Initiate PayPal payment
// router.route('/payment/process').post(processPayPalPayment); // Initiate PayPal payment
// router.route('/payment/success').get( paypalResponse); // PayPal success callback
// router.route('/orders/success').get( paypalResponse); // PayPal success callback



// const express = require('express');
// const { captureOrder, createOrder } = require('../controllers/paymentController');
// const { isAuthenticatedUser , generateAccessToken } = require('../middlewares/auth');

// const router = express.Router();
// // router.route('/order/success').get(isAuthenticatedUser, paypalResponse); // PayPal success callback


// router.route("/my-server/create-paypal-order").post( async (req, res) => {
//     try {
//       // use the cart information passed from the front-end to calculate the order amount detals
//       const { cart } = req.body;
//       const { jsonResponse, httpStatusCode } = await createOrder(cart);
//       res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//       console.error("Failed to create order:", error);
//       res.status(500).json({ error: "Failed to create order." });
//     }
//   });
    
// //   app.post("/api/orders/:orderID/capture", async (req, res) => {
//   router.route("/api/orders/:orderID/capture").post( async (req, res) => {
// //   app.post("/my-server/capture-paypal-order", async (req, res) => {
//     try {
//       const { orderID } = req.params;
//       const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
//       res.status(httpStatusCode).json(jsonResponse);
//     } catch (error) {
//       console.error("Failed to create order:", error);
//       res.status(500).json({ error: "Failed to capture order." });
//     }
//   });





// module.exports = router;






module.exports = router;