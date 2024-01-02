'use client'
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { doc, setDoc, collection, getDoc, addDoc, query, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import { useAuth } from '../../../../firebase/Auth';
import { useProductData } from '../ProductDataContext/ProductDataContext';


const CheckoutForm = ({ setCheckoutFormPopup }) => {
  const { authUser } = useAuth();
  const { customerCartData, showOrderSuccess, setShowOrderSuccess, newOrder, setNewOrder } = useProductData();

  const [orderItems, setOrderItems] = useState([])
  const [checkOutFormData, setCheckOutFormData] = useState({
    customerName: '',
    email: '',
    Address: '',
    phone: '',
    paymentOption: 1, // Default payment option
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckOutFormData({
      ...checkOutFormData,
      [name]: value,
    });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   const { customerName, email, Address, phone, paymentOption } = checkOutFormData;

  //   if (!customerName || !email || !Address || !phone || !paymentOption) {
  //     toast.error("All fields are required");
  //     return;
  //   }

  //   // Create an object for the order data
  //   const orderData = {
  //     customerName: checkOutFormData.customerName,
  //     street: checkOutFormData.Address,
  //     phone: checkOutFormData.phone,
  //     email: checkOutFormData.email,
  //     paymentOption: checkOutFormData.paymentOption,
  //     orderItems: customerCartData
  //     // Add more fields as needed for the order (e.g., orderDate, etc.)
  //   };
  //   if (authUser) {
  //     try {
  //       // Reference to the user's profile document
  //       const userProfileRef = doc(db, `profile-${authUser.uid}`, "user-profile");

  //       // Check if the user-profile document exists
  //       const userProfileDoc = await getDoc(userProfileRef);

  //       if (userProfileDoc.exists()) {
  //         // User profile exists, you can proceed to create the order
  //         const orderCollectionRef = collection(userProfileRef, "user-order");
  //         const orderDocRef = await addDoc(orderCollectionRef, orderData);

  //         // The rest of your code to update the order with cart items and clear the cart

  //         toast.success("Order created successfully.");
  //         console.log("Order created successfully. Order ID: ", orderDocRef.id);
  //       } else {
  //         console.error("User profile does not exist. Please create a profile first.");
  //         toast.error("User profile does not exist. Please create a profile first.");
  //       }
  //     } catch (error) {
  //       console.error("Error creating order:", error);
  //       toast.error("Error creating order. Please try again later.");
  //     }
  //   } else {
  //     console.log("User not authenticated. Please log in first.");
  //     toast.warning("Please log in first to create an order.");
  //   }

  // };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   const { customerName, email, Address, phone, paymentOption } = checkOutFormData;

  //   if (!customerName || !email || !Address || !phone || !paymentOption) {
  //     toast.error("All fields are required");
  //     return;
  //   }

  //   // Create an object for the order data
  //   const orderData = {
  //     customerName: checkOutFormData.customerName,
  //     street: checkOutFormData.Address,
  //     phone: checkOutFormData.phone,
  //     email: checkOutFormData.email,
  //     paymentOption: checkOutFormData.paymentOption,
  //     orderItems: customerCartData,
  //     // Add more fields as needed for the order (e.g., orderDate, etc.)
  //   };

  //   if (authUser) {
  //     try {
  //       // Reference to the user's profile document
  //       const userProfileRef = doc(db, `profile-${authUser.uid}`, "user-profile");

  //       // Check if the user-profile document exists
  //       const userProfileDoc = await getDoc(userProfileRef);

  //       if (userProfileDoc.exists()) {
  //         // User profile exists, you can proceed to create the order
  //         const orderCollectionRef = collection(userProfileRef, "user-order");
  //         const orderDocRef = await addDoc(orderCollectionRef, orderData);

  //         // The rest of your code to update the order with cart items and clear the cart

  //         toast.success("Order created successfully.");
  //         console.log("Order created successfully. Order ID: ", orderDocRef.id);
  //       } else {
  //         // User profile does not exist, so create it
  //         const userProfileData = {
  //           // Define the data for the user profile, e.g., user information
  //           // You can extract this from the form or use default values
  //         };
  //         await setDoc(userProfileRef, userProfileData);

  //         // Now that the user profile is created, proceed to create the order
  //         const orderCollectionRef = collection(userProfileRef, "user-order");
  //         const orderDocRef = await addDoc(orderCollectionRef, orderData);

  //         // The rest of your code to update the order with cart items and clear the cart

  //         toast.success("Order created successfully.");
  //         console.log("Order created successfully. Order ID: ", orderDocRef.id);
  //       }
  //     } catch (error) {
  //       console.error("Error creating order:", error);
  //       toast.error("Error creating order. Please try again later.");
  //     }
  //   } else {
  //     console.log("User not authenticated. Please log in first.");
  //     toast.warning("Please log in first to create an order.");
  //   }
  // };

  const clearCartItems = async () => {
    console.log('clear cart items ')
    if (authUser) {
      try {
        const cartRef = collection(db, `cart-${authUser.uid}`);

        // Get all documents in the user's cart
        const cartQuerySnapshot = await getDocs(cartRef);

        // Loop through and delete each cart item document
        cartQuerySnapshot.forEach(async (cartItemDoc) => {
          const cartItemDocRef = doc(db, `cart-${authUser.uid}`, cartItemDoc.id);

          // Delete the cart item document from the cart
          await deleteDoc(cartItemDocRef);
        });

        // Display a message or trigger any necessary actions
        toast.success("Cart cleared successfully.");
      } catch (error) {
        console.error("Error clearing cart:", error);
        toast.error("Error clearing the cart. Please try again later.");
      }
    } else {
      console.log("Login first to clear the cart.");
      toast.warning("Please log in first to clear the cart.");
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { customerName, email, Address, phone, paymentOption } = checkOutFormData;

    if (!customerName || !email || !Address || !phone || !paymentOption) {
      toast.error("All fields are required");
      return;
    }

    // Create an object for the order data
    const orderData = {
      customerName: checkOutFormData.customerName,
      street: checkOutFormData.Address,
      phone: checkOutFormData.phone,
      email: checkOutFormData.email,
      paymentOption: checkOutFormData.paymentOption,
      orderItems: customerCartData,
      // Add more fields as needed for the order (e.g., orderDate, etc.)
    };

    if (authUser) {
      try {
        // Reference to the user's profile document
        const userProfileRef = doc(db, `profile-${authUser.uid}`, "user-profile");

        // Check if the user-profile document exists
        const userProfileDoc = await getDoc(userProfileRef);

        if (userProfileDoc.exists()) {
          // User profile exists, you can proceed to create the order
          const orderCollectionRef = collection(userProfileRef, "user-order");
          const orderDocRef = await addDoc(orderCollectionRef, orderData);

          // Clear the cart items here
          // Assuming you have a function to clear the cart
          clearCartItems();

          setNewOrder(orderDocRef.id)
          toast.success(`Order created successfully.  ${orderDocRef.id}`);
          console.log("Order created successfully. Order ID: ", orderDocRef.id);
          setShowOrderSuccess(true);

          // Set a timer to hide the component after a specific time (e.g., 5 seconds)
          setTimeout(() => {
            setShowOrderSuccess(false);
          }, 15000); // 15000 milliseconds (15 seconds)

        } else {
          // User profile does not exist, so create it
          const userProfileData = {
            // Define the data for the user profile, e.g., user information
            // You can extract this from the form or use default values
          };
          await setDoc(userProfileRef, userProfileData);

          // Now that the user profile is created, proceed to create the order
          const orderCollectionRef = collection(userProfileRef, "user-order");
          const orderDocRef = await addDoc(orderCollectionRef, orderData);

          // Clear the cart items here
          // Assuming you have a function to clear the cart
          clearCartItems();

          toast.success(`Order created successfully.  ${orderDocRef.id}`);
          console.log("Order created successfully. Order ID: ", orderDocRef.id);
        }
      } catch (error) {
        console.error("Error creating order:", error);
        toast.error("Error creating order. Please try again later.");
      }
    } else {
      console.log("User not authenticated. Please log in first.");
      toast.warning("Please log in first to create an order.");
    }
  };







  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .-z-1 {\n    z-index: -1;\n  }\n\n  .origin-0 {\n    transform-origin: 0%;\n  }\n\n  input:focus ~ label,\n  input:not(:placeholder-shown) ~ label,\n  textarea:focus ~ label,\n  textarea:not(:placeholder-shown) ~ label,\n  select:focus ~ label,\n  select:not([value='']):valid ~ label {\n    /* @apply transform; scale-75; -translate-y-6; */\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))\n      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-scale-x: 0.75;\n    --tw-scale-y: 0.75;\n    --tw-translate-y: -1.5rem;\n  }\n\n  input:focus ~ label,\n  select:focus ~ label {\n    /* @apply text-black; left-0; */\n    --tw-text-opacity: 1;\n    color: rgba(0, 0, 0, var(--tw-text-opacity));\n    left: 0px;\n  }\n"
        }}
      />
      <div className="flex items-center justify-center h-screen fixed inset-0  z-50">
        <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
          <h1 className="text-2xl font-bold mb-8">Please Fill out the Information Correctly Our Team Contact You for Order Confirmation</h1>
          <form id="form" onSubmit={handleFormSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="customerName"
                value={checkOutFormData.customerName}
                onChange={handleChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                value={checkOutFormData.email}
                onChange={handleChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                value={checkOutFormData.Address}
                onChange={handleChange}
                name="Address"
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="Address"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter your Home Adress
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="number"
                name="phone"
                value={checkOutFormData.phone}
                onChange={handleChange}
                required
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="phone"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter your phone Number
              </label>
            </div>

            <fieldset className="relative z-0 w-full p-px mb-5">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Choose payment option
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={1}
                    checked={checkOutFormData.paymentOption === 1}
                    onChange={handleChange}
                    defaultValue={1}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Cash on Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={2}
                    checked={checkOutFormData.paymentOption === 2}
                    onChange={handleChange}
                    defaultValue={2}
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Pay Online
                </label>
              </div>
            </fieldset>
            <button
              id="button"
              type="submit"
              onClick={handleFormSubmit}
              className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              All Set
            </button>
            <button
              onClick={() => setCheckoutFormPopup(false)}
              type="button"
              className="w-full px-6 py-3 mt-3 text-lg transition-all duration-150 ease-linear rounded-lg shadow outline-none"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>

  )
}

export default CheckoutForm