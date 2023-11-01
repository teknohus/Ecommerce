// const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
// const https = require('https');
// const Payment = require('../models/paymentModel');
// const ErrorHandler = require('../utils/errorHandler');
// const { v4: uuidv4 } = require('uuid');
// const paypal = require('paypal-rest-sdk'); // Import PayPal SDK

// paypal.configure({
//   'mode': 'sandbox', // Use 'sandbox' for testing and 'live' for production
//   // 'client_id': 'YOUR_PAYPAL_CLIENT_ID',
//   client_id: 'AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK',
//   // 'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'
  
//   client_secret: 'EC65PuCy87lQbfWR8SzCpv37wqS7UFbhWUCOaPb2lmvT-qCCT-NljfXe6_NZdp8_ghHmZaLcfyXotgeu',



// });

// // Process Payment
// exports.processPayment = asyncErrorHandler(async (req, res, next) => {
//   const { amount, email, phoneNo } = req.body;

//   const paymentData = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal'
//     },
//     redirect_urls: {
//       return_url: `https://${req.get("host")}/api/v1/success`, // Redirect URL after successful payment
//       cancel_url: `https://${req.get("host")}/api/v1/cancel` // Redirect URL after payment cancellation
//     },
//     transactions: [{
//       amount: {
//         total: amount,
//         currency: 'USD' // Change currency as needed
//       },
//       description: 'Payment description here.'
//     }]
//   };

//   paypal.payment.create(paymentData, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       for (let i = 0; i < payment.links.length; i++) {
//         if (payment.links[i].rel === 'approval_url') {
//           res.status(200).json({
//             approval_url: payment.links[i].href
//           });
//         }
//       }
//     }
//   });
// });

// // PayPal Callback
// exports.paypalResponse = asyncErrorHandler(async (req, res, next) => {
//   const paymentId = req.query.paymentId;
//   const payerId = { payer_id: req.query.PayerID };

//   paypal.payment.execute(paymentId, payerId, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       // Payment successful, handle the payment response as needed
//       const paymentInfo = {
//         transactionId: payment.id,
//         status: payment.state,
//         // Add more payment details as needed
//       };

//       // Save paymentInfo to your database
//       addPayment(paymentInfo);

//       // Redirect or send response to the client
//       res.redirect(`https://${req.get("host")}/success`);
//     }
//   });
// });

// const addPayment = async (data) => {
//   try {
//     await Payment.create(data);
//   } catch (error) {
//     console.log("Payment Failed!");
//   }
// };

// exports.getPaymentStatus = asyncErrorHandler(async (req, res, next) => {
//   // Implement logic to retrieve payment status from your database based on orderId or transactionId
//   // Return the payment status in the response
// });


// Latest On Work //


// paypal.configure({
//   'mode': 'sandbox', // Use 'sandbox' for testing and 'live' for production
//   // 'client_id': 'YOUR_PAYPAL_CLIENT_ID',
//   // 'client_secret': 'YOUR_PAYPAL_CLIENT_SECRET'


//   client_id: 'AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK',
//   client_secret: 'EC65PuCy87lQbfWR8SzCpv37wqS7UFbhWUCOaPb2lmvT-qCCT-NljfXe6_NZdp8_ghHmZaLcfyXotgeu',



// });

const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const Payment = require('../models/paymentModel');
const paypal = require('paypal-rest-sdk'); // Import PayPal SDK



// // Process PayPal Payment
exports.processPayPalPayment = asyncErrorHandler(async (req, res, next) => {
  const { amount, email, phoneNo } = req.body;

  const paymentData = {
    // intent: 'sale',
    intent: 'capture',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: `https://${req.get("host")}payment/success`, // Redirect URL after successful payment
      // return_url: `http://localhost:3000/orders`, // Redirect URL after successful payment
      cancel_url: `https://${req.get("host")}/payment/cancel` // Redirect URL after payment cancellation
    },
    transactions: [{
      amount: {
        total: amount,
        email:email,
        phoneNo: phoneNo,
        currency: 'USD' // Change currency as needed
      },
      description: 'Payment description here.'
    }]
  };

  paypal.payment.create(paymentData, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.status(200).json({
            approval_url: payment.links[i].href
          });
        }
      }
    }
  });


});


// // PayPal Callback
// exports.paypalResponse = asyncErrorHandler(async (req, res, next) => {
//   return 1;
//   const paymentId = req.query.paymentId;
//   const payerId = { payer_id: req.query.PayerID };

//   paypal.payment.execute(paymentId, payerId, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       // Payment successful, handle the payment response as needed
//       const paymentInfo = {
//         transactionId: payment.id,
//         status: payment.state,
//         // Add more payment details as needed
//       };

//       // Save paymentInfo to your database
//       addPayment(paymentInfo);

//       // Redirect or send response to the client
//       res.redirect(`https://${req.get("host")}/payment/success`);
//     }
//   });
// });

// const addPayment = async (data) => {
//   try {
//     // Create a new Payment document and save it to the database
//     const payment = new Payment(data);
//     const res = await payment.save();
//   } catch (error) {
//     console.log("Payment Failed!", error);
//   }
// };



// End //

// const { json } = require('body-parser');
// const Payment = require('../models/paymentModel');





 
// const { name } = req.body;



// exports.paypalResponse = asyncErrorHandler(async (req, res, next) => {
  // return 1;
//   exports.check =async (req,res) => {
//   try {
//       // const paymentId = {id: req.query.id};
//       // const paymentId = { id: req.data.id};
//       // const paymentId = { id: req.data.id};
//       const orderId = { id: req.body.orderID};
//       const payerId = { id: req.body.payerID};
//       const paymentId = { id: req.body.paymentID};

//       // const payerId = { payer_id: req.query.PayerID };
//       // const payerId = { payer_id: req.payer};
//       console.log(payerId , orderId , paymentId);
    
//       paypal.payment.execute(paymentId, payerId, orderId, function (error, payment) {
//         if (error) {
//           throw error;
//         } else {
//           // Payment successful, handle the payment response as needed
//           const paymentInfo = {
//             bankTxnId: paymentId,
//             orderId: orderId,
//             payerId: payerId
//             // status: payment.state,
//             // Add more payment details as needed
            
//           };
    
//         //   // Save paymentInfo to your database
//           addPayment(paymentInfo);

//           // res.json({ "return": 'success' });
//           res.json({ "return": paymentId });
    
//         //   // Redirect or send response to the client
//         //   // res.res(`https://${req.get("host")}/payment/success`);
//         }

//       // });
//     });
    
//     const addPayment = async (data) => {
//       try {
//         // Create a new Payment document and save it to the database
//         const payment = new Payment(data);
//         const res = await payment.save();
//         res.json({ "return": 'success' });
//       } catch (error) {
//         console.log("Payment Failed!", error);
//       }
//     };

//   // const result = await Payment.create({
//   //   name: name,
//   // });


//   // const token = JWT.sign({ name: result.name});
//     // res.json({ user: result, token: token });
//     // res.json({ 'ggg': 'fffd' });
  


// } catch (error) {
//   console.log('Error' , error);
  
// }


// }



// const Order = require('../models/orderModel');


exports.check = async (req, res) => {
  try {
    const orderId = req.body.orderID;
    const payerId = req.body.payerID;
    const paymentId = req.body.paymentID;
    const paymentSource = req.body.paymentSource
    // const paypalStatus = req.body.status;

     const paymentInfo = {
          bankTxnId: paymentId, // Assuming payment.id is the bank transaction ID
          orderId: orderId,
          payerId: payerId,
          bankName: paymentSource

        };

        // console.log(paymentInfo);

        // Save paymentInfo to your database
        addPayment(paymentInfo, res);


        // const  {shippingInfo, cartItems } = req.body;

        // console.log(shippingInfo);


        // const orderData = {
        //   shippingInfo,
        //   orderItems: cartItems,
          
        // };

        // console.log(orderData);

        // const orderData = req.body.orderDetails; // Assuming order details are present in req.body.orderDetails
        // const orderData = req.body.orderDetails; // Assuming order details are present in req.body.orderDetails
        // const order = new Order();
        // await order.save();

        // console.log(orderData);


      // }
    // });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
  }
};

const addPayment = async (data, res) => {
  try {
    // Create a new Payment document and save it to the database
    const payment = new Payment(data);
    await payment.save();
    // const { orderDetails } = req.body;
    // const orderDetails = req.body.orderDetails;
    // console.log(orderDetails);
    res.json({ "return": 'success' }); // Send a success response to the client
  } catch (error) {
    console.log("Payment Failed!", error);
    res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
  }
};



// Server-side code
const Order = require('../models/orderModel');

// exports.createNewOrder = async (req, res) => {
//   try {
//     // console.log("Here")
//     const { orderDetails, paymentData } = req.body;

//   //   // Handle orderDetails and paymentData as needed
//   //   // Create new Order document and save it to the database

//   // const paymentInfo = {
//   //   bankTxnId: paymentId, // Assuming payment.id is the bank transaction ID
//   //   orderId: orderId,
//   //   payerId: payerId,
//   //   bankName: paymentSource

//   // };
    
//     const order = new Order({
//       shippingInfo: orderDetails.shippingInfo,
//       cartItems: orderDetails.cartItems,
//       // ... other order-related data
//     });

//     console.log('Order Details:', orderDetails);
//     console.log('Payment Data:', paymentData);
//     // console.log('Payment info:', paymentInfo);


//    await order.save();

//   //   // Handle paymentData as needed
//   //   // Save payment information to Payment model

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };






// const Order = require('../models/orderModel');

exports.createNewOrder = async (req, res) => {
  try {
    const { orderDetails, paymentData } = req.body;

    const order = new Order({
      shippingInfo: orderDetails.shippingInfo,
      orderItems: orderDetails.cartItems,
      user: orderDetails.userId, // Assuming you have a user ID in orderDetails
      paymentInfo: {
        id: paymentData.paymentId,
        status: paymentData.status,
      },
      paidAt: paymentData.paidAt, // Assuming you have payment timestamp in paymentData
      totalPrice: orderDetails.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      // Set other fields accordingly based on your data
    });

    await order.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};








// PAyPal //


// // // configure paypal with the credentials you got when you created your paypal app
// // paypal.configure({
// //     'mode': 'sandbox', //sandbox or live 
// //     'client_id': 'YOUR_CLIENT_ID_HERE', // please provide your client id here 
// //     'client_secret': 'YOUR_CLIENT_SECRET_HERE' // provide your client secret here 
// //   });
  
  
// //   // set public directory to serve static html files 
   
  
  
// //   // redirect to store when user hits http://localhost:3000
// //   app.get('/' , (req , res) => {
// //       res.redirect('/index.html'); 
// //   })
  
// //   // start payment process 
// //   app.get('/buy' , ( req , res ) => {
// //       // create payment object 
// //       var payment = {
// //               "intent": "authorize",
// //       "payer": {
// //           "payment_method": "paypal"
// //       },
// //       "redirect_urls": {
// //           "return_url": "http://127.0.0.1:3000/success",
// //           "cancel_url": "http://127.0.0.1:3000/err"
// //       },
// //       "transactions": [{
// //           "amount": {
// //               "total": 39.00,
// //               "currency": "USD"
// //           },
// //           "description": " a book on mean stack "
// //       }]
// //       }
      
      
// //       // call the create Pay method 
// //       createPay( payment ) 
// //           .then( ( transaction ) => {
// //               var id = transaction.id; 
// //               var links = transaction.links;
// //               var counter = links.length; 
// //               while( counter -- ) {
// //                   if ( links[counter].method == 'REDIRECT') {
// //                       // redirect to paypal where user approves the transaction 
// //                       return res.redirect( links[counter].href )
// //                   }
// //               }
// //           })
// //           .catch( ( err ) => { 
// //               console.log( err ); 
// //               res.redirect('/err');
// //           });
// //   });


// //   // success page 
// // app.get('/success' , (req ,res ) => {
// //     console.log(req.query); 
// //     res.redirect('/success.html'); 
// // })

// // // error page 
// // app.get('/err' , (req , res) => {
// //     console.log(req.query); 
// //     res.redirect('/err.html'); 
// // })


// helper functions 
// exports.createPay = ( payment ) => {
//     return new Promise( ( resolve , reject ) => {
//         paypal.payment.create( payment , function( err , payment ) {
//          if ( err ) {
//              reject(err); 
//          }
//         else {
//             resolve(payment); 
//         }
//         }); 
//     });
// }				




// // const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
// // const https = require('https');
// // const Payment = require('../models/paymentModel');
// // const ErrorHandler = require('../utils/errorHandler');
// // const { v4: uuidv4 } = require('uuid');
// // const paypal = require('paypal-rest-sdk'); // Import the PayPal SDK
// // const path = require('path');
// // const express = require('express'); // Import Express framework
// // const app = express(); // Create an Express app instance

// // // // Configure PayPal with your credentials
// // // paypal.configure({
// // //     'mode': 'sandbox', // Change to 'live' for production
// // //     'client_id': 'YOUR_CLIENT_ID_HERE', // Provide your PayPal client ID
// // //     'client_secret': 'YOUR_CLIENT_SECRET_HERE' // Provide your PayPal client secret
// // // });

// // // // Start the payment process
// // // // app.get('/buy', (req, res) => {
// // // exports.create = (req, res) => {
// // //     // Create payment object
// // //     var payment = {
// // //         "intent": "authorize",
// // //         "payer": {
// // //             "payment_method": "paypal"
// // //         },
// // //         "redirect_urls": {
// // //             "return_url": "http://127.0.0.1:3000/success",
// // //             "cancel_url": "http://127.0.0.1:3000/err"
// // //         },
// // //         "transactions": [{
// // //             "amount": {
// // //                 "total": 39.00,
// // //                 "currency": "USD"
// // //             },
// // //             "description": "a book on mean stack"
// // //         }]
// // //     };

// // //     // Call the createPay method
// // //     createPay(payment)
// // //         .then((transaction) => {
// // //             var id = transaction.id;
// // //             var links = transaction.links;
// // //             var counter = links.length;
// // //             while (counter--) {
// // //                 if (links[counter].method == 'REDIRECT') {
// // //                     // Redirect to PayPal where the user approves the transaction
// // //                     return res.redirect(links[counter].href);
// // //                 }
// // //             }
// // //         })
// // //         .catch((err) => {
// // //             console.log(err);
// // //             res.redirect('/err');
// // //         });
// // // };

// // // // Success page
// // // // app.get('/success', (req, res) => {
// // // exports.success = (req, res) => {
// // //     console.log(req.query);
// // //     res.redirect('/success');
// // // };

// // // // Error page
// // // // app.get('/err', (req, res) => {
// // // exports.err = (req, res) => {
// // //     console.log(req.query);
// // //     res.redirect('/err');
// // // };

// // // // Helper function to create a payment
// // // exports.createPay = (payment) => {
// // //     return new Promise((resolve, reject) => {
// // //         paypal.payment.create(payment, function (err, payment) {
// // //             if (err) {
// // //                 reject(err);
// // //             } else {
// // //                 resolve(payment);
// // //             }
// // //         });
// // //     });
// // // };







// // // const paypal = require('paypal-rest-sdk');

// // paypal.configure({
// //     'mode': 'sandbox', // Change to 'live' for production
// //     'client_id': 'YOUR_CLIENT_ID_HERE', // Provide your PayPal client ID
// //     'client_secret': 'YOUR_CLIENT_SECRET_HERE' // Provide your PayPal client secret
// // });

// // exports.create = (req, res) => {
// //     var payment = {
// //         "intent": "authorize",
// //         "payer": {
// //             "payment_method": "paypal"
// //         },
// //         "redirect_urls": {
// //             "return_url": "http://127.0.0.1:3000/success",
// //             "cancel_url": "http://127.0.0.1:3000/err"
// //         },
// //         "transactions": [{
// //             "amount": {
// //                 "total": 39.00,
// //                 "currency": "USD"
// //             },
// //             "description": "a book on mean stack"
// //         }]
// //     };

// //     createPay(payment)
// //         .then((transaction) => {
// //             var links = transaction.links;
// //             var redirectUrl;
// //             for (let i = 0; i < links.length; i++) {
// //                 if (links[i].method === 'REDIRECT') {
// //                     redirectUrl = links[i].href;
// //                     break;
// //                 }
// //             }
// //             res.redirect(redirectUrl);
// //         })
// //         .catch((err) => {
// //             console.error(err);
// //             res.redirect('/err');
// //         });
// // };

// // exports.success = (req, res) => {
// //     console.log(req.query);
// //     res.redirect('/success');
// // };

// // exports.err = (req, res) => {
// //     console.log(req.query);
// //     res.redirect('/err');
// // };

// // function createPay(payment) {
// //     return new Promise((resolve, reject) => {
// //         paypal.payment.create(payment, (err, payment) => {
// //             if (err) {
// //                 reject(err);
// //             } else {
// //                 resolve(payment);
// //             }
// //         });
// //     });
// // }



// // exports.getPaymentStatus = asyncErrorHandler(async (req, res, next) => {

// //     const payment = await Payment.findOne({ orderId: req.params.id });

// //     if (!payment) {
// //         return next(new ErrorHandler("Payment Details Not Found", 404));
// //     }

// //     const txn = {
// //         id: payment.txnId,
// //         status: payment.resultInfo.resultStatus,
// //     }

// //     res.status(200).json({
// //         success: true,
// //         txn,
// //     });
// // });




// // const express = require('express');

// const Payment = require('../models/paymentModel');
// const paypal = require('paypal-rest-sdk');

// // Set up PayPal configuration
// paypal.configure({
//   mode: 'sandbox',
//   // client_id: 'YOUR_SANDBOX_CLIENT_ID',
//   client_id: 'AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK',
//   // client_secret: 'YOUR_SANDBOX_CLIENT_SECRET',
//   client_secret: 'EC65PuCy87lQbfWR8SzCpv37wqS7UFbhWUCOaPb2lmvT-qCCT-NljfXe6_NZdp8_ghHmZaLcfyXotgeu',
// });

// // Route for processing payments
// // router.post('/pay', (req, res) => {
// exports.payment = (req, res) => {
//   // const paymentData = {
//   //   intent: 'sale',
//   //   payer: {
//   //     payment_method: 'paypal',
//   //   },
//   //   transactions: [
//   //     {
//   //       amount: {
//   //         // total: '10.00',
//   //         total: amount,
//   //         currency: 'USD',
//   //       },
//   //     },
//   //   ],
//   //   redirect_urls: {
//   //     // return_url: 'http://localhost:3000/success',
//   //     return_url: 'http://localhost:3000//orders/success',
//   //     cancel_url: 'http://localhost:3000/cancel',
//   //   },
//   // };


//   const paymentData = req.body

//   paypal.payment.create(paymentData, async function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       for (let i = 0; i < payment.links.length; i++) {
//         if (payment.links[i].rel === 'approval_url') {
//           // Store payment data in MongoDB before sending the approval URL as a response
//           try {
//             await Payment.create({
//               paymentId: payment.id,
//               payerId: payment.payer.payer_info.payer_id,
//               amount: payment.transactions[0].amount.total,
//               currency: payment.transactions[0].amount.currency,
//               status: payment.state,
//               // Add more fields if needed
//             });
  
//             // Send the approval URL as a response
//             res.send(payment.links[i].href);
//           } catch (error) {
//             console.error("Error storing payment data:", error);
//             res.status(500).send("Internal Server Error");
//           }
//           break;
//         }
//       }
//     }
//   });
  





// };

// module.exports = router;






// Test //




// import express from "express";
// import fetch from "node-fetch";
// import "dotenv/config";
// import path from "path";

// // const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8888 } = process.env;
// const PAYPAL_CLIENT_ID =  "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK"
// const PAYPAL_CLIENT_SECRET = 'EC65PuCy87lQbfWR8SzCpv37wqS7UFbhWUCOaPb2lmvT-qCCT-NljfXe6_NZdp8_ghHmZaLcfyXotgeu'
// const base = "https://api-m.sandbox.paypal.com";
// // const app = express();

// // host static files
// // app.use(express.static("client"));

// // // parse post params sent in body in json format
// // app.use(express.json());

// /**
//  * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
//  *  https://developer.paypal.com/api/rest/authentication
//  */
// // const generateAccessToken = async () => {
//   exports.generateAccessToken = async () => {
//   try {
//     if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
//       throw new Error("MISSING_API_CREDENTIALS");
//     }
//     const auth = Buffer.from(
//       PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
//     ).toString("base64");
//     const response = await fetch(`${base}/v1/oauth2/token`, {
//       method: "POST",
//       body: "grant_type=client_credentials",
//       headers: {
//         Authorization: `Basic ${auth}`,
//       },
//     });

//     const data = await response.json();
//     return data.access_token;
//   } catch (error) {
//     console.error("Failed to generate Access Token:", error);
//   }
// };

// /**
//  * Create an order to start the transaction.
//  * https://developer.paypal.com/docs/api/orders/v2/#orders_create
//  */
// // const createOrder = async (data) => {
//   exports.createOrder = async (data) => {
//   // use the cart information passed from the front-end to calculate the purchase unit details
//   console.log(
//     "shopping cart information passed from the frontend createOrder() callback:",
//     data,
//   );

//   const accessToken = await generateAccessToken();
//   const url = `${base}/v2/checkout/orders`;
//   const payload = {
//     intent: "CAPTURE",
//     purchase_units: [
//       {
//         amount: {
//           currency_code: "USD",
//           // value: "100.00",
//           value: data.amount.value,
//         },
//       },
//     ],
//   };

//   const response = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//       // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
//       // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
//       // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
//     },
//     method: "POST",
//     body: JSON.stringify(payload),
//   });

//   return handleResponse(response);
// };

// /**
//  * Capture payment for the created order to complete the transaction.
//  * https://developer.paypal.com/docs/api/orders/v2/#orders_capture
//  */
// // const captureOrder = async (orderID) => {
//   exports.captureOrder = async (orderID) => {
//   const accessToken = await generateAccessToken();
//   const url = `${base}/v2/checkout/orders/${orderID}/capture`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//       // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
//       // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
//       // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
//     },
//   });

//   return handleResponse(response);
// };

// async function handleResponse(response) {
//   try {
//     const jsonResponse = await response.json();
//     return {
//       jsonResponse,
//       httpStatusCode: response.status,
//     };
//   } catch (err) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }
// }

// app.post("/api/orders", async (req, res) => {
//   try {
//     // use the cart information passed from the front-end to calculate the order amount detals
//     const { cart } = req.body;
//     const { jsonResponse, httpStatusCode } = await createOrder(cart);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to create order:", error);
//     res.status(500).json({ error: "Failed to create order." });
//   }
// });

// app.post("/api/orders/:orderID/capture", async (req, res) => {
//   try {
//     const { orderID } = req.params;
//     const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to create order:", error);
//     res.status(500).json({ error: "Failed to capture order." });
//   }
// });

// // serve index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./client/checkout.html"));
// });