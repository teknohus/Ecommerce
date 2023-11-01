// // import React from "react";
// // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// // const PayPalButton = () => {
// //     const handlePayment = () => {
// //       // Set up PayPal configuration
// //       paypal.Button.render({
// //         env: 'sandbox',
// //         client: {
// //           sandbox: 'YOUR_SANDBOX_CLIENT_ID',
// //           production: 'YOUR_PRODUCTION_CLIENT_ID',
// //         },
// //         payment: function() {
// //           // Set up payment details
// //           return paypal.rest.payment.create('YOUR_PAYMENT_JSON');
// //         },
// //         commit: true,
// //         onAuthorize: function(data) {
// //           // Handle successful payment here
// //         },
// //       }, '#paypal-button');
// //     };

// //   const initialOptions = {
// //     clientId: "test",
// //     currency: "USD",
// //     intent: "capture",
// //   };

// //   return (
// //     <div>
// //       {/* <button onClick={handlePayment}>Pay with PayPal</button> */}

// //       <PayPalScriptProvider options={{ clientId: "test" }}>
// //         <PayPalButtons style={{ layout: "horizontal" }} />
// //       </PayPalScriptProvider>
// //     </div>
// //   );
// // };

// // export default PayPalButton;

// // import React, { useEffect, useState } from "react";
// // import { clearCart } from "../../actions/orderAction";
// // import { useSnackbar } from "notistack";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // import { useSelector } from "react-redux";
// // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // import { useState } from "react";

// // const Paypal = () => {
// //   const initialOptions = {
// //     // clientId: "test",
// //     clientId:
// //       "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK",
// //     currency: "USD",
// //     intent: "capture",
// //   };

// //  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
// //   const { user } = useSelector((state) => state.user);
// //   const { error } = useSelector((state) => state.newOrder);
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// //   const calculateTotalPrice = () => {
// //     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   };

// //   const totalPrice = calculateTotalPrice();

//   // const URL = 'http://localhost:4000'

// //   const createOrder = (data) => {

// //     // Order is created on the server and the order id is returned
// //     return fetch(`${URL}/my-server/create-paypal-order`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       // use the "body" param to optionally pass additional order information
// //       // like product skus and quantities
// //       body: JSON.stringify({
// //         paymentData : {
// //           amount: Math.round(totalPrice),
// //           email: user.email,
// //           phoneNo: shippingInfo.phoneNo,
// //           paymentMethod: selectedPaymentMethod,
// //         },
// //       }),
// //     })
// //       .then((response) => response.json())
// //       .then((order) => order.id);
// //   };

// //   const onApprove = (data) => {
// //     // Order is captured on the server and the response is returned to the browser
// //     return fetch(`${URL}/my-server/capture-paypal-order`, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         orderID: data.orderID,
// //       }),
// //     }).then((response) => response.json());
// //   };

// //   return (
// //     <main main className="w-full mt-20">
// //       <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
// //         <PayPalScriptProvider options={initialOptions}>
// //           <PayPalButtons
// //             createOrder={(data) => createOrder(data)}
// //             onApprove={(data) => onApprove(data)}
// //           />
// //         </PayPalScriptProvider>
// //       </div>
// //     </main>
// //   );
// // };
// // export default Paypal;

// // import React, { useEffect, useRef } from 'react';

// // const PayPal = ({ amount, onSuccess, onCancel }) => {
// //   const paypalRef = useRef();

// //   useEffect(() => {
// //     window.paypal.Buttons({
// //       createOrder: (data, actions) => {
// //         return actions.order.create({
// //           purchase_units: [
// //             {
// //               amount: {
// //                 value: amount,
// //                 currency_code: 'USD', // Change currency as needed
// //               },
// //             },
// //           ],
// //         });
// //       },
// //       onApprove: async (data, actions) => {
// //         const order = await actions.order.capture();
// //         onSuccess(order);
// //       },
// //       onCancel: (data) => {
// //         onCancel(data);
// //       },
// //     }).render(paypalRef.current);
// //   }, [amount, onSuccess, onCancel]);

// //   return <div ref={paypalRef}></div>;
// // };

// // export default PayPal;

// // import React, { useEffect, useRef, useState } from 'react';

// // const PayPal = ({ amount, onSuccess, onCancel }) => {

// //   // const clientid = "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK"

// //   const [isSdkReady, setIsSdkReady] = useState(false);
// //   const paypalRef = useRef();

// //   useEffect(() => {
// //     const script = document.createElement('script');
// //     // script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID`;
// //     script.src = `https://www.paypal.com/sdk/js?client-id=AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK`;
// //     script.async = true;
// //     script.onload = () => setIsSdkReady(true);
// //     document.body.appendChild(script);

// //     return () => {
// //       document.body.removeChild(script);
// //     };
// //   }, []);

// //   if (!isSdkReady) {
// //     return null; // Render nothing until the SDK is loaded
// //   }

// //   // ... rest of your PayPalButton component logic ...
// // };
// // In this code, the useEffect hook loads the PayPal SDK script and sets isSdkReady to true once it's loaded. The PayPalButton component will only render if the SDK is ready.

// // Make sure you replace YOUR_PAYPAL_CLIENT_ID with your actual PayPal Client ID.

// // By following these steps, you can ensure that the PayPal JavaScript SDK is properly loaded and initialized before attempting to use it in your React components.

// // import React, { useEffect, useRef } from 'react';

// // const PayPal = ({ amount, onSuccess, onCancel }) => {
// //   const paypalRef = useRef();

// //   useEffect(() => {
// //     window.paypal.Buttons({
// //       createOrder: (data, actions) => {
// //         return actions.order.create({
// //           purchase_units: [
// //             {
// //               amount: {
// //                 value: amount,
// //                 currency_code: 'USD', // Change currency as needed
// //               },
// //             },
// //           ],
// //         });
// //       },
// //       onApprove: async (data, actions) => {
// //         const order = await actions.order.capture();
// //         onSuccess(order);
// //       },
// //       onCancel: (data) => {
// //         onCancel(data);
// //       },
// //     }).render(paypalRef.current);
// //   }, [amount, onSuccess, onCancel]);

// //   return <div ref={paypalRef}></div>;
// // };

// // export default PayPal;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors } from "../../actions/orderAction";
// import { useSnackbar } from "notistack";
// import { useNavigate } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// const Paypal = () => {
//   const initialOptions = {
//     // clientId: "test",
//     clientId: 'AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK',
//     currency: "USD",
//     intent: "capture",
//   };

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { enqueueSnackbar } = useSnackbar();
//   const [payDisable, setPayDisable] = useState(false);
//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   const totalPrice = calculateTotalPrice();

//   useEffect(() => {
//     // Your existing code for processing payment
//     const processPayment = async () => {
//       setPayDisable(true);
//       const paymentData = {
//         amount: Math.round(totalPrice),
//         email: user.email,
//         phoneNo: shippingInfo.phoneNo,
//         paymentMethod: "paypal",
//       };
//       try {
//         // Make your API call to process PayPal payment here
//         // ...
//         // If payment is successful, navigate to the success page
//         // If payment fails, show an error snackbar and enable the payment button



// Payment //

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions/cartAction";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";


const Paypal = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [payDisable, setPayDisable] = useState(false);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);




  const calculateTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();

  useEffect(() => {
    const processPayment = async () => {
      setPayDisable(true);
      const paymentData = {
        amount: Math.round(totalPrice),
        email: user.email,
        phoneNo: shippingInfo.phoneNo,
        paymentMethod: "paypal",
      };
      try {

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await axios.post(
          // "http://localhost:4000/payment/process",
          "/payment/process",
          paymentData,
          config
        );
        if (response.data.success) {
          enqueueSnackbar("Payment Successful!", { variant: "success" });
          dispatch(clearCart());
        }
      } catch (error) {
        setPayDisable(false);
        enqueueSnackbar(error.message, { variant: "error" });
      }
    };

    if (payDisable) {
      processPayment();
    }
  }, [totalPrice, user, shippingInfo, payDisable, enqueueSnackbar]);

  return (
    <main main className="w-full mt-20">
      <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
        <PayPalScriptProvider
          options={{
            clientId:
            "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK",
          }}
        >
          {/* <PayPalButtons /> */}

          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: Math.round(totalPrice).toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              // Handle approval logic, capture the funds from the transaction if necessary
              return actions.order.capture().then(function (details) {
                const response1 = axios.post(
                  "http://localhost:4000/payment1",
                  data
                );

                console.log("Capture successful:", details);
                console.log("Capture :", response1);
                navigate("/orders/success");
              });
            }}
            />
            {/* dispatch(clearCart()); */}
        </PayPalScriptProvider>
      </div>
    </main>
  );
};
export default Paypal;
