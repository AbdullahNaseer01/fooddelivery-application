'use client'
import { useEffect, useState } from 'react';
import { db } from '../../../../firebase/firebaseConfig';
import { useAuth } from '../../../../firebase/Auth';
import { useProductData } from '../ProductDataContext/ProductDataContext';
import { collection, onSnapshot, doc } from 'firebase/firestore';

const OrderDetails = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Order Invoice</h3>
        <button onClick={handleToggleDetails} className="text-blue-500 focus:outline-none">
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <p className="font-medium text-gray-700">Order ID:</p>
            </div>
            <div className="col-span-1">
              <p className="text-gray-900 text-[8px] mr-auto ">{order.id}</p>
            </div>
          </div>
          <hr className="my-4" />
          <h4 className="font-medium text-gray-700">Order Items</h4>
          <ul className="mt-2 divide-y divide-gray-200">
            {order.orderItems.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">Product Title: {item.productData.title}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="mt-4">
            <h4 className="font-medium text-gray-700">Payment Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <p className="font-medium text-gray-700">Payment Option:</p>
              </div>
              <div className="col-span-1">
                <p className="text-gray-900">{order.paymentOption}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Page = () => {
  const { authUser } = useAuth();
  const { setCustomerCartData } = useProductData();
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (authUser) {
        try {
          const userProfileRef = doc(db, `profile-${authUser.uid}`, 'user-profile');
          const orderCollectionRef = collection(userProfileRef, 'user-order');

          // Subscribe to order changes using onSnapshot
          const unsubscribe = onSnapshot(orderCollectionRef, (snapshot) => {
            const userOrders = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setOrders(userOrders);
          });

          // Don't forget to unsubscribe when the component unmounts
          return () => unsubscribe();
        } catch (error) {
          console.error('Error fetching orders:', error);
          // Handle errors gracefully, e.g., display an error message to the user
        } finally {
          setLoading(false);
        }
      }
    };

    fetchOrders();
  }, [authUser]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <img
          className="w-16 h-16 mx-auto mb-4 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMUo9VNkorpDwaYq_j_UHy_B1kZSma7r-ZhJuZ7raeQ&s"
          alt="User Avatar"
        />
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">User Profile</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
          {authUser ? `Welcome, ${authUser.username}!` : 'Please log in to view your profile.'}
        </p>
      </div>
      {authUser && (
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{authUser.username}</dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{authUser.email}</dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Orders</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button
                  onClick={() => setShowOrders(!showOrders)}
                  className="text-blue-500 focus:outline-none"
                >
                  {showOrders ? 'Hide Orders' : 'Show Orders'}
                </button>
                {showOrders && orders.length > 0 ? (
                  <ul className="">
                    {orders.map((order) => (
                      <OrderDetails key={order.id} order={order} />
                    ))}
                  </ul>
                ) : (
                  <p>see details</p>
                )}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
};

export default Page;

