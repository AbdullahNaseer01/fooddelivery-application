// // // "use client"
// // // import React, { useEffect, useState } from 'react';
// // // import { useAuth } from '../../../../firebase/Auth';
// // // import { useRouter } from 'next/navigation'; // Import router for redirection
// // // import { toast } from 'react-toastify';
// // // import Loading from '@/app/(client)/components/Loading';

// // // const AdminPage = () => {
// // //   const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
// // //   const router = useRouter(); // Access router for client-side navigation

// // //   useEffect(() => {
// // //     if (!isLoading && authUser) {
// // //       const isAuthorized = admins.includes(authUser.email); // Check if user's email is in the admins array
// // //       setAdmin(isAuthorized);

// // //       if (!isAuthorized) {
// // //         toast.error('Unauthorized access to admin page');
// // //         router.push('/'); // Redirect to home page if not authorized
// // //       }
// // //     }
// // //   }, [authUser, isLoading, admins, router]);

// // //   if (isLoading) {
// // //     return <Loading />;
// // //   }

// // //   return (
// // //     <div>
// // //       {isAdmin ? (
// // //         <p>Welcome, {authUser?.email}! This is the admin page.</p>
// // //       ) : (
// // //         <p>You don't have permission to access this page. Redirecting...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AdminPage;










// // "use client"
// // import React, { useEffect, useState } from 'react';
// // import { useAuth } from '../../../../firebase/Auth';
// // import { useRouter } from 'next/navigation'; // Import router for redirection
// // import { toast } from 'react-toastify';
// // import Loading from '@/app/(client)/components/Loading';

// // const AdminPage = () => {
// //   const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
// //   const router = useRouter(); // Access router for client-side navigation

// //   useEffect(() => {
// //     if (!isLoading && authUser) {
// //       const isAuthorized = admins.includes(authUser.email); // Check if user's email is in the admins array
// //       setAdmin(isAuthorized);

// //       if (!isAuthorized) {
// //         toast.error('Unauthorized access to admin page');
// //         router.push('/'); // Redirect to home page if not authorized
// //       }
// //     }
// //   }, [authUser, isLoading, admins, router]);

// //   if (isLoading) {
// //     return <Loading />;
// //   }

// //   return (
// //     <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto  min-h-screen">
// // <div className="container items-center px-4 py-8 m-auto mt-5">
// //   <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
// //     <ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-center lg:justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
// //       <li>
// //         <button className="px-4 py-2 bg-indigo-500 rounded-full text-sm text-gray-100 hover:bg-indigo-700 hover:text-gray-200">
// //           30 days
// //         </button>
// //       </li>
// //       <li>
// //         <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
// //           90 days
// //         </button>
// //       </li>
// //       <li>
// //         <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
// //           6 months
// //         </button>
// //       </li>
// //       <li>
// //         <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
// //           12 months
// //         </button>
// //       </li>
// //     </ul>
// //     <div className="w-full p-2 lg:w-1/4 md:w-1/2">
// //       <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
// //         <div className="flex flex-row justify-between items-center">
// //           <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 group-hover:text-gray-50"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
// //                 clipRule="evenodd"
// //               />
// //               <path
// //                 fillRule="evenodd"
// //                 d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </div>
// //           <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //             12%
// //           </div>
// //         </div>
// //         <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
// //           42
// //         </h1>
// //         <div className="flex flex-row justify-between group-hover:text-gray-200">
// //           <p>Registered Students</p>
// //           <span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="w-full p-2 lg:w-1/4 md:w-1/2">
// //       <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
// //         <div className="flex flex-row justify-between items-center">
// //           <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 group-hover:text-gray-50"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
// //             </svg>
// //           </div>
// //           <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //             12%
// //           </div>
// //         </div>
// //         <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
// //           10
// //         </h1>
// //         <div className="flex flex-row justify-between group-hover:text-gray-200">
// //           <p>Courses Available</p>
// //           <span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="w-full p-2 lg:w-1/4 md:w-1/2">
// //       <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
// //         <div className="flex flex-row justify-between items-center">
// //           <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 group-hover:text-gray-50"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
// //               <path
// //                 fillRule="evenodd"
// //                 d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </div>
// //           <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //             12%
// //           </div>
// //         </div>
// //         <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
// //           9
// //         </h1>
// //         <div className="flex flex-row justify-between group-hover:text-gray-200">
// //           <p>Total Absent Students</p>
// //           <span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="w-full p-2 lg:w-1/4 md:w-1/2">
// //       <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
// //         <div className="flex flex-row justify-between items-center">
// //           <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 group-hover:text-gray-50"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </div>
// //           <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //               strokeWidth={2}
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
// //               />
// //             </svg>
// //             12%
// //           </div>
// //         </div>
// //         <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
// //           30
// //         </h1>
// //         <div className="flex flex-row justify-between group-hover:text-gray-200">
// //           <p>Present Students Today</p>
// //           <span>
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
// //               viewBox="0 0 20 20"
// //               fill="currentColor"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>


// // </main>
// //   );
// // };

// // export default AdminPage;





// "use client"
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../../../firebase/Auth';
// import { db } from '../../../../firebase/firebaseConfig';
// import { collection, onSnapshot } from 'firebase/firestore';
// import Loading from '../../(client)/components/Loading';

// const OrdersTable = ({ orders, onShowDetails }) => {
//   return (
//     <table className="min-w-full bg-white border border-gray-300">
//       <thead>
//         <tr>
//           <th className="border p-3 text-left">Order ID</th>
//           <th className="border p-3 text-left">Customer Name</th>
//           <th className="border p-3 text-left">Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <tr key={order.id}>
//             <td className="border p-3">{order.id}</td>
//             <td className="border p-3">{order.customerName}</td>
//             <td className="border p-3">
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => onShowDetails(order)}
//               >
//                 Show Details
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const OrderDetails = ({ order, onClose }) => {
//   return (
//     <div className="p-4 border bg-white">
//       <p className="text-lg font-bold mb-2">Order ID: {order.id}</p>
//       <p className="text-lg font-bold mb-2">customerName: {order.customerName}</p>
//       <p className="text-lg font-bold mb-2">phone: {order.phone}</p>
//       {/* <p className="text-lg font-bold mb-2">orderItems: {order.orderItems}</p> */}



//       {/* Add more details as needed */}
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   );
// };

// const AdminDashboard = () => {
//   const { authUser } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (authUser) {
//         try {
//           const ordersCollectionRef = collection(db, 'orders');
//           const unsubscribe = onSnapshot(ordersCollectionRef, (snapshot) => {
//             const ordersData = snapshot.docs.map((doc) => ({
//               id: doc.id,
//               ...doc.data(),
//             }));
//             setOrders(ordersData);
//             setLoading(false);
//           });

//           return () => unsubscribe(); // Unsubscribe when the component unmounts
//         } catch (error) {
//           console.error('Error fetching orders:', error);
//           setLoading(false);
//         }
//       }
//     };

//     fetchOrders();
//   }, [authUser]);

//   const handleShowDetails = (order) => {
//     setSelectedOrder(order);
//   };

//   const handleCloseDetails = () => {
//     setSelectedOrder(null);
//   };

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto  min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <OrdersTable orders={orders} onShowDetails={handleShowDetails} />
//       {selectedOrder && (
//         <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
//       )}
//     </main>


//   );
// };

// export default AdminDashboard;








"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { db } from '../../../../firebase/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Loading from '../../(client)/components/Loading';

const OrdersTable = ({ orders, onShowDetails }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="border p-3 text-left">Order ID</th>
          <th className="border p-3 text-left">Customer Name</th>
          <th className="border p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td className="border p-3">{order.id}</td>
            <td className="border p-3">{order.customerName}</td>
            <td className="border p-3">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => onShowDetails(order)}
              >
                Show Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const OrderDetails = ({ order, onClose }) => {
  return (
    <div className="p-4 border bg-white">
      <p className="text-lg font-bold mb-2">Order ID: {order.id}</p>
      <p className="text-lg font-bold mb-2">Customer Name: {order.customerName}</p>
      <p className="text-lg font-bold mb-2">Phone: {order.phone}</p>

      {/* Display order items */}
      <div className="mb-4">
        <p className="text-lg font-bold mb-2">Order Items:</p>
        <ul>
          {order.orderItems.map((item, index) => (
            <li key={index}>
              <p>{item.productData.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.productData.price}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>

      {/* Add more details as needed */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

const AdminDashboard = () => {
  const { authUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (authUser) {
        try {
          const ordersCollectionRef = collection(db, 'orders');
          const unsubscribe = onSnapshot(ordersCollectionRef, (snapshot) => {
            const ordersData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setOrders(ordersData);
            setLoading(false);
          });

          return () => unsubscribe(); // Unsubscribe when the component unmounts
        } catch (error) {
          console.error('Error fetching orders:', error);
          setLoading(false);
        }
      }
    };

    fetchOrders();
  }, [authUser]);
  useEffect(() => {
    const fetchproducts = async () => {
      if (authUser) {
        try {
          const productCollectionRef = collection(db, 'products');
          const unsubscribe = onSnapshot(productCollectionRef, (snapshot) => {
            const productData = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setProducts(productData);
            setLoading(false);
          });

          return () => unsubscribe(); // Unsubscribe when the component unmounts
        } catch (error) {
          console.error('Error fetching orders:', error);
          setLoading(false);
        }
      }
    };

    fetchproducts();
  }, [authUser]);

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto  min-h-screen">
      <div className="container items-center px-4 py-8 m-auto mt-5">
        <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
          <ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-center lg:justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
            <li>
              <button className="px-4 py-2 bg-indigo-500 rounded-full text-sm text-gray-100 hover:bg-indigo-700 hover:text-gray-200">
                30 days
              </button>
            </li>
            <li>
              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
                90 days
              </button>
            </li>
            <li>
              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
                6 months
              </button>
            </li>
            <li>
              <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
                12 months
              </button>
            </li>
          </ul>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  12%
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                {orders.length}
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Total Orders</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
                <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  12%
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                {products.length}
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Total Products</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  12%
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                9
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Total Absent Students</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4 md:w-1/2">
            <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
              <div className="flex flex-row justify-between items-center">
                <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:text-gray-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-green-500 group-hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  12%
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                30
              </h1>
              <div className="flex flex-row justify-between group-hover:text-gray-200">
                <p>Present Students Today</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600 group-hover:text-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <OrdersTable orders={orders} onShowDetails={handleShowDetails} />
      {selectedOrder && (
        <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
      )}

    </main>
    // <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto  min-h-screen">
    // <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
    // <OrdersTable orders={orders} onShowDetails={handleShowDetails} />
    // {selectedOrder && (
    //   <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
    // )}
    // </main>
  );
};

export default AdminDashboard;
