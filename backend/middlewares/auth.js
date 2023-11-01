const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const asyncErrorHandler = require('./asyncErrorHandler');


JWT_SECRET='WFFWf15115U842UGUBWF81EE858UYBY51BGBJ5E51Q'

exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please Login to Access", 401))
    }

    const decodedData = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403));
        }
        next();
    }
}




// exports.generateAccessToken = async () => {
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




// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');
// const ErrorHandler = require('../utils/errorHandler');
// const asyncErrorHandler = require('./asyncErrorHandler');
// const fetch = require('node-fetch');

// const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env; // Get your PayPal credentials from environment variables

// const JWT_SECRET = 'WFFWf15115U842UGUBWF81EE858UYBY51BGBJ5E51Q';
// const base = 'https://api.sandbox.paypal.com'; // Use the PayPal sandbox API endpoint for testing

// exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
//     const { token } = req.cookies;

//     if (!token) {
//         return next(new ErrorHandler("Please Login to Access", 401));
//     }

//     const decodedData = jwt.verify(token, JWT_SECRET);
//     req.user = await User.findById(decodedData.id);
//     next();
// });

// exports.generateAccessToken = async () => {
//     try {
//         if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
//             throw new Error("MISSING_API_CREDENTIALS");
//         }
//         const auth = Buffer.from(
//             PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET
//         ).toString("base64");
//         const response = await fetch(`${base}/v1/oauth2/token`, {
//             method: "POST",
//             body: "grant_type=client_credentials",
//             headers: {
//                 Authorization: `Basic ${auth}`,
//                 "Content-Type": "application/x-www-form-urlencoded",
//             },
//         });

//         const data = await response.json();
//         return data.access_token;
//     } catch (error) {
//         console.error("Failed to generate Access Token:", error);
//         throw new Error("Failed to generate Access Token");
//     }
// };
