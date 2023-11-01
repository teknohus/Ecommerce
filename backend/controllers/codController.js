// // const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
// // const cod = require('../models/paymentModel');
// // const ErrorHandler = require('../utils/errorHandler');


// // exports.processCODPayment = asyncErrorHandler(async (req, res, next) => {
// //     try {
// //         const { amount, email, phoneNo } = req.body;
          
// //                 const result = await cod.create({
// //                   email: email,
// //                   amount: amount,
// //                   phoneNo: phoneNo
// //                 });
// //                 console.log(result);


// //     res.status(200).json({ success: true, message: "Cash on Delivery order placed successfully!" });



// //     } catch (error) {
// //         console.log("COD Failed!");
// //     }
// // });

// // // const CODPayment = async (data) => {
// // //     try {
// // //         await cod.create(data);
// // //     } catch (error) {
// // //         console.log("COD Failed!");
// // //     }
// // // }


// const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
// const COD = require('../models/paymentModel');
// const { v4: uuidv4 } = require('uuid');

// exports.processCODPayment = asyncErrorHandler(async (req, res, next) => {
//     try {
//         const { amount, email, phoneNo } = req.body;

//         const result = await COD.create({
//             orderId: generateUniqueOrderId(), // Generate a unique order ID (you can use a UUID library for this)
//             amount: amount,
//             email: email,
//             phoneNo: phoneNo
//         });
        
//         console.log(result);
        
//         res.status(200).json({ success: true, message: "Cash on Delivery order placed successfully!" });
//     } catch (error) {
//         console.error(error);
//         return next(new ErrorHandler("Failed to process Cash on Delivery payment.", 500));
//     }
// });



// function generateUniqueOrderId() {
//     // Generate a unique order ID using the uuid library
//     const orderId = uuidv4();
//     return orderId;
// }




// const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
// const cod = require('../models/paymentModel');
// const ErrorHandler = require('../utils/errorHandler');

// exports.processCODPayment = asyncErrorHandler(async (req, res, next) => {
//     const { amount, email, phoneNo } = req.body;

//     try {
//         // Prepare all required fields for the payment document
//         const paymentData = {
//             txnDate: new Date(), // You can set the transaction date to the current date/time
//             refundAmt: 0, // Assuming no refund for COD payment
//             paymentMode: 'COD', // Payment mode is Cash on Delivery
//             mid: 'COD', // Merchant ID for Cash on Delivery
//             bankName: 'Cash', // Bank name for COD payment
//             gatewayName: 'COD', // Gateway name for COD payment
//             txnType: 'COD', // Transaction type for COD payment
//             txnAmount: amount, // Transaction amount for COD payment
//             bankTxnId: 'COD123', // Bank transaction ID for COD payment (you can generate a unique ID)
//             txnId: 'COD123', // Transaction ID for COD payment (you can generate a unique ID)
//             resultInfo: {
//                 resultStatus: 'success', // Assuming the payment is successful for demonstration purposes
//                 resultCode: '200',
//                 resultMsg: 'Payment successful.'
//             },
//             email: email,
//             phoneNo: phoneNo,
//         };

//         // Save the payment document to the database
//         const newCODPayment = await cod.create(paymentData);

//         res.status(200).json({ success: true, message: "Cash on Delivery order placed successfully!", payment: newCODPayment });
//     } catch (error) {
//         return next(new ErrorHandler("Failed to process Cash on Delivery payment.", 500));
//     }
// });


const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const cod = require('../models/paymentModel');
const ErrorHandler = require('../utils/errorHandler');

exports.processCODPayment = asyncErrorHandler(async (req, res, next) => {
    const { amount, email, phoneNo } = req.body;
    
        try {
            const paymentData = {

        // Prepare all required fields for the payment document
            txnDate: new Date(),
            txnAmount: amount,
            resultInfo: {
                resultStatus: 'success',
                resultCode: '200',
            },
            email: email,
            phoneNo: phoneNo,
        };

        // Save the payment document to the database
        const newCODPayment = await cod.create(paymentData);

        res.status(200).json({ success: true, message: "Cash on Delivery order placed successfully!", payment: newCODPayment });
    } catch (error) {
        return next(new ErrorHandler("Failed to process Cash on Delivery payment.", 500));
    }
});

