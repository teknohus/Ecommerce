const express = require('express');
// const  fetch = ("node-fetch");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');
// const dotenv = require('dotenv')

// const dotenv = require('dotenv');
// dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    // credentials: true,
}));

const PAYPAL_CLIENT_ID = 'AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK'

const PAYPAL_CLIENT_SECRET = 'EC65PuCy87lQbfWR8SzCpv37wqS7UFbhWUCOaPb2lmvT-qCCT-NljfXe6_NZdp8_ghHmZaLcfyXotgeu'

const base = "https://api-m.sandbox.paypal.com";


// app.use('/', express.static(path.join(__dirname, 'public')));

// console.log("here: ", 'development')
// config
// if (process.env.NODE_ENV !== 'production') {
    
// if ('development' !== 'production') {
//     dotenv.config({ path: 'backend/config/config.env' });
//     // require('dotenv').config({ path: 'backend/config/config.env' });
// }


app.use(express.static("client"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


const user = require('./routes/userRoute');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');
const cod = require('./routes/codRoutes');

// app.use('/api/v1', user);
// app.use('/api/v1', product);
// app.use('/api/v1', order);
// app.use('/api/v1', payment);


app.use('/', user);
app.use('/', product);
app.use('/', order);
app.use('/', payment);
app.use('/', cod);



// const generateAccessToken = async () => {
//     try {
//       if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
//         throw new Error("MISSING_API_CREDENTIALS");
//       }
//       const auth = Buffer.from(
//         PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
//       ).toString("base64");
//       const response = await fetch(`${base}/v1/oauth2/token`, {
//         method: "POST",
//         body: "grant_type=client_credentials",
//         headers: {
//           Authorization: `Basic ${auth}`,
//         },
//       });
      
//       const data = await response.json();
//       return data.access_token;
//     } catch (error) {
//       console.error("Failed to generate Access Token:", error);
//     }
//   };



  // const createOrder = async (data) => {
  //   // use the cart information passed from the front-end to calculate the purchase unit details
  //   console.log(
  //   //   "shopping cart information passed from the frontend createOrder() callback:",
  //   //   cart,
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
  //           // value: data.amount.value,
  //           value: data.paymentData.value,
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



  // const captureOrder = async (orderID) => {
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


  // app.post("/my-server/create-paypal-order", async (req, res) => {
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
    
//   app.post("/api/orders/:orderID/capture", async (req, res) => {
  // app.post("/my-server/capture-paypal-order", async (req, res) => {
  //   try {
  //     const { orderID } = req.params;
  //     const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
  //     res.status(httpStatusCode).json(jsonResponse);
  //   } catch (error) {
  //     console.error("Failed to create order:", error);
  //     res.status(500).json({ error: "Failed to capture order." });
  //   }
  // });








// deployment
// __dirname = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/frontend/build')))

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     });
// } else {
//     app.get('/', (req, res) => {
//         res.send('Server is Running! 🚀');
//     });
// }

// error middleware
app.use(errorMiddleware);

module.exports = app;