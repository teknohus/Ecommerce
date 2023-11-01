// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PriceSidebar from "./PriceSidebar";
// import { clearErrors } from "../../actions/orderAction";
// import { useSnackbar } from "notistack";
// import { post } from "../../utils/paytmForm";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import MetaData from "../Layouts/MetaData";

// const Payment = () => {
//   const dispatch = useDispatch();
//   // const navigate = useNavigate();
//   const { enqueueSnackbar } = useSnackbar();
//   // const stripe = useStripe();
//   // const elements = useElements();
//   // const paymentBtn = useRef(null);

//   const [payDisable, setPayDisable] = useState(false);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const paymentData = {
//     amount: Math.round(totalPrice),
//     email: user.email,
//     phoneNo: shippingInfo.phoneNo,
//   };

//   // const order = {
//   //     shippingInfo,
//   //     orderItems: cartItems,
//   //     totalPrice,
//   // }

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     // paymentBtn.current.disabled = true;
//     setPayDisable(true);

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const { data } = await axios.post(
//         "/api/v1/payment/process",
//         paymentData,
//         config
//       );

//       let info = {
//         action: "",
//         params: data.paytmParams,
//       };

//       post(info);

//       // if (!stripe || !elements) return;

//       // const result = await stripe.confirmCardPayment(client_secret, {
//       //     payment_method: {
//       //         card: elements.getElement(CardNumberElement),
//       //         billing_details: {
//       //             name: user.name,
//       //             email: user.email,
//       //             address: {
//       //                 line1: shippingInfo.address,
//       //                 city: shippingInfo.city,
//       //                 country: shippingInfo.country,
//       //                 state: shippingInfo.state,
//       //                 postal_code: shippingInfo.pincode,
//       //             },
//       //         },
//       //     },
//       // });

//       // if (result.error) {
//       //     paymentBtn.current.disabled = false;
//       //     enqueueSnackbar(result.error.message, { variant: "error" });
//       // } else {
//       //     if (result.paymentIntent.status === "succeeded") {

//       //         order.paymentInfo = {
//       //             id: result.paymentIntent.id,
//       //             status: result.paymentIntent.status,
//       //         };

//       //         dispatch(newOrder(order));
//       //         dispatch(emptyCart());

//       //         navigate("/order/success");
//       //     } else {
//       //         enqueueSnackbar("Processing Payment Failed!", { variant: "error" });
//       //     }
//       // }
//     } catch (error) {
//       // paymentBtn.current.disabled = false;
//       setPayDisable(false);
//       enqueueSnackbar(error, { variant: "error" });
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       dispatch(clearErrors());
//       enqueueSnackbar(error, { variant: "error" });
//     }
//   }, [dispatch, error, enqueueSnackbar]);

//   return (
//     <>
//       <MetaData title="Flipkart: Secure Payment | Paytm" />

//       <main className="w-full mt-20">
//         {/* <!-- row --> */}
//         <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
//           {/* <!-- cart column --> */}
//           <div className="flex-1">
//             <Stepper activeStep={3}>
//               <div className="w-full bg-white">
//                 <form
//                   onSubmit={(e) => submitHandler(e)}
//                   autoComplete="off"
//                   className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
//                 >
//                   {/* <form > */}
//                   <FormControl>
//                     <RadioGroup
//                       aria-labelledby="payment-radio-group"
//                       defaultValue="paytm"
//                       name="payment-radio-button"
//                     >
//                       <FormControlLabel
//                         value="paytm"
//                         control={<Radio />}
//                         label={
//                           <div className="flex items-center gap-4">
//                             {/* <img draggable="false" className="h-6 w-6 object-contain" src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png" alt="Paytm Logo" /> */}
//                             <span>Paytm</span>
//                           </div>
//                         }
//                       />
//                     </RadioGroup>
//                   </FormControl>

//                   <input
//                     type="submit"
//                     value={`Pay ₹${totalPrice.toLocaleString()}`}
//                     disabled={payDisable ? true : false}
//                     className={`${
//                       payDisable
//                         ? "bg-primary-grey cursor-not-allowed"
//                         : "bg-primary-orange cursor-pointer"
//                     } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
//                   />
//                   {/* <input type='button' /> */}
//                 </form>

//                 {/* stripe form */}
//                 {/* <form onSubmit={(e) => submitHandler(e)} autoComplete="off" className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-8 my-4">
//                                 <div>
//                                     <CardNumberElement />
//                                 </div>
//                                 <div>
//                                     <CardExpiryElement />
//                                 </div>
//                                 <div>
//                                     <CardCvcElement />
//                                 </div>
//                                 <input ref={paymentBtn} type="submit" value="Pay" className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none cursor-pointer" />
//                             </form> */}
//                 {/* stripe form */}
//               </div>
//             </Stepper>
//           </div>

//           <PriceSidebar cartItems={cartItems} />
//         </div>
//       </main>
//     </>
//   );
// };

// export default Payment;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors } from "../../actions/orderAction";
// import { useSnackbar } from "notistack";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import MetaData from "../Layouts/MetaData";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// import React from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const Payment = () => {
//   const initialOptions = {
//     // clientId: "test",
//     clientId: "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK",
//     currency: "USD",
//     intent: "capture",
//   };

//   return (
//     <main main className="w-full mt-20">
//       <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
//       <PayPalScriptProvider options={initialOptions}>
//         <PayPalButtons />
//       </PayPalScriptProvider>
//       </div>
//     </main>
//   );
// };
// export default Payment;



// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const Payment = () => {
//   const [amount, setAmount] = useState(100); // Initial amount, you can set it to any default value

//   const initialOptions = {
//     clientId: "AcUcKbsRtJZJX10yR7z7F4ntYorTgbJKTtk5TX5_NVYBVlloQgs60xBWwtgelV7ybIYGQFvluUfEIyAK",
//     currency: "USD",
//     intent: "capture",
//   };

//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: amount, // Set the amount dynamically
//           },
//         },
//       ],
//     });
//   };

//   return (
//     <main className="w-full mt-20">
//       <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
//         <PayPalScriptProvider options={initialOptions}>
//           <PayPalButtons createOrder={createOrder} onApprove={(data, actions) => {/* Handle approval logic here */}} />
//         </PayPalScriptProvider>
//       </div>
//     </main>
//   );
// };

// export default Payment;






// Work //


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors } from "../../actions/orderAction";
// import { useSnackbar } from "notistack";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import MetaData from "../Layouts/MetaData";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Payment = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { enqueueSnackbar } = useSnackbar();
//   const [payDisable, setPayDisable] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal"); // Default payment method
//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const paymentData = {
//     amount: Math.round(totalPrice),
//     email: user.email,
//     phoneNo: shippingInfo.phoneNo,
//     paymentMethod: selectedPaymentMethod,
//   };
//   // console.log(paymentData);


//   const orderDetailsString = localStorage.getItem('shippingInfo');
//   const orderDetailsString2 = localStorage.getItem('cartItems');

// // Parse the JSON string back to an object
// const retrievedOrderDetails = JSON.parse(orderDetailsString);
// const retrievedOrderDetails2 = JSON.parse(orderDetailsString2);

// // Now, `retrievedOrderDetails` contains the order details as an object
// console.log(retrievedOrderDetails);
// // console.log(retrievedOrderDetails1);
// console.log(retrievedOrderDetails2);
// // console.log(retrievedOrderDetails3);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setPayDisable(true);

//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       let response;

//       if (selectedPaymentMethod === "paypal") {
//         navigate("/process/payment/paypal");
//         // response = await axios.post("/process/payment", paymentData, config);
//         response = await axios.post("http://localhost:4000/ordernew", {
//           orderDetails: retrievedOrderDetails,
//           cartItems: retrievedOrderDetails2
//           },paymentData ,config);
//         console.log(response);
//       } else {
//         response = await axios.post("/payment/cod", paymentData, config);
//       }
//       if (response.data.success) {
//         // Payment was successful
//         enqueueSnackbar("Payment Successful!", { variant: "success" });
//         navigate("/orders/success");
//         // Reset the payment form or clear the cart if needed
//         // Example: dispatch(clearCart());
//       } else {
//         // Payment was not successful
//         enqueueSnackbar("Payment Failed. Please try again.", {
//           variant: "error",
//         });
//       }
//     } catch (error) {
//       setPayDisable(false);
//       enqueueSnackbar(error.message, { variant: "error" });
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       dispatch(clearErrors());
//       enqueueSnackbar(error, { variant: "error" });
//     }
//   }, [dispatch, error, enqueueSnackbar]);

//   return (
//     <>
//       <MetaData title="Flipkart: Secure Payment | Paytm" />
//       <main className="w-full mt-20">
//         <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
//           <div className="flex-1">
//             <form
//               onSubmit={(e) => submitHandler(e)}
//               autoComplete="off"
//               className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
//             >
//               <FormControl>
//                 <RadioGroup
//                   aria-labelledby="payment-radio-group"
//                   value={selectedPaymentMethod}
//                   onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//                   name="payment-radio-button"
//                 >
//                   <FormControlLabel
//                     value="paypal"
//                     control={<Radio />}
//                     label="Paypal"
//                   />
//                   <FormControlLabel
//                     value="cod"
//                     control={<Radio />}
//                     label="Cash on Delivery"
//                   />
//                 </RadioGroup>
//               </FormControl>
//               <input
//                 type="submit"
//                 value={`Pay ₹${totalPrice.toLocaleString()}`}
//                 disabled={payDisable}
//                 className={`${
//                   payDisable
//                     ? "bg-primary-grey cursor-not-allowed"
//                     : "bg-primary-orange cursor-pointer"
//                 } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
//               />
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Payment;



// End //




import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../actions/orderAction";
import { useSnackbar } from "notistack";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MetaData from "../Layouts/MetaData";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [payDisable, setPayDisable] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal"); // Default payment method
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderDetails = {
    shippingInfo: {
      address: shippingInfo.address,
      city: shippingInfo.city,
      state: shippingInfo.state,
      country: shippingInfo.country,
      pincode: shippingInfo.pincode,
      phoneNo: shippingInfo.phoneNo,
    },
    cartItems: cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      product: item._id,
    })),
    userId: user._id,
  };

  const paymentData = {
    paidAt: new Date(),
    phoneNo: shippingInfo.phoneNo,
    paymentMethod: selectedPaymentMethod,
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    setPayDisable(true);
  
    try {
      const paymentStatus = selectedPaymentMethod === "paypal" ? "paid" : "nopaid";
      const paymentMethod = selectedPaymentMethod === "Cash on Delivery" ? "cash on delivery" : selectedPaymentMethod;

  
      // const response = await axios.post("http://localhost:4000/ordernew", {
      const response = await axios.post("/ordernew", {
        orderDetails,
        paymentData: {
          ...paymentData,
          method: paymentMethod, 
          status: paymentStatus 
        },
      });
  
      if (response.data.success) {
        if (selectedPaymentMethod === "paypal") {
          window.location.href = "/process/payment/paypal";
          // await axios.post("http://localhost:4000/payment1", {
          await axios.post("/payment1", {
            paymentId: paymentData.paymentId,
            status: "paid",
            paymentMethod: "paypal",
          });
        } else {
          await axios.post("/payment1", {
            status: "nopaid",
            paymentMethod: "cash on delivery",
          });
        }
  
        enqueueSnackbar("Order Place Successful!", { variant: "success" });
        navigate("/orders/success");
      } else {
        // Payment was not successful
        enqueueSnackbar("Payment Failed. Please try again.", {
          variant: "error",
        });
      }
    } catch (error) {
      setPayDisable(false);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  





  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Flipkart: Secure Payment | Paytm" />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <form
              onSubmit={(e) => submitHandler(e)}
              autoComplete="off"
              className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="payment-radio-group"
                  value={selectedPaymentMethod}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  name="payment-radio-button"
                >
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="Paypal"
                  />
                  <FormControlLabel
                    value="Cash on Delivery"
                    control={<Radio />}
                    label="Cash on Delivery"
                  />
                </RadioGroup>
              </FormControl>
              <input
                type="submit"
                value={`Pay ₹${totalPrice.toLocaleString()}`}
                disabled={payDisable}
                className={`${
                  payDisable
                    ? "bg-primary-grey cursor-not-allowed"
                    : "bg-primary-orange cursor-pointer"
                } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;










// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../../actions/orderAction";
// import { useSnackbar } from "notistack";
// import { useNavigate } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";

// const Payment = () => {
//   const initialOptions = {
//     // clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
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

//   const calculateTotalPrice = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   const totalPrice = calculateTotalPrice();

//   const handlePaymentSuccess = async (details, data) => {
//     // Handle successful payment details here
//     console.log("Payment Successful Details:", details);
//     try {
//       // Make an API call to process the payment on your server
//       const response = await axios.post("/payment/process", {
//         amount: Math.round(totalPrice),
//         email: user.email,
//         phoneNo: shippingInfo.phoneNo,
//         paymentMethod: "paypal",
//       });

//       if (response.data.success) {
//         enqueueSnackbar("Payment Successful!", { variant: "success" });
//         navigate("/orders/success");
//         dispatch(clearCart());
//       } else {
//         enqueueSnackbar("Payment Failed. Please try again.", { variant: "error" });
//       }
//     } catch (error) {
//       enqueueSnackbar(error.message, { variant: "error" });
//     }
//   };

//   return (
//     <main className="w-full mt-20">
//       <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
//         <PayPalScriptProvider options={initialOptions}>
//           <PayPalButtons
//             createOrder={(data, actions) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: Math.round(totalPrice).toString(),
//                     },
//                   },
//                 ],
//               });
//             }}
//             onApprove={handlePaymentSuccess}
//           />
//         </PayPalScriptProvider>
//       </div>
//     </main>
//   );
// };

// export default Payment;
