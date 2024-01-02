"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import CartCountBadge from './CartCountBadge';
import { useAuth } from '../../../../firebase/Auth';
import LoginModel from './LoginModel';
import RegisterModel from './RegisterModel';
import { useProductData } from '../ProductDataContext/ProductDataContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {
    signOut,
    authUser,
    isLoading,
    handleLoginButtonClick,
    setLoginModalOpen,
    isLoginModalOpen,
    handleSignupButtonClick,
    isRegisterModalOpen,
    setRegisterModalOpen,
  } = useAuth();

  const { customerCartData, setCustomerCartData } = useProductData();

  const [showSignOutConfirmation, setShowSignOutConfirmation] = useState(false);

  const handleSignOut = () => {
    if (authUser) {
      setShowSignOutConfirmation(true);
    } else {
      console.log('No user authenticated.'); // Add appropriate error handling
    }
  };

  const confirmSignOut = () => {
    signOut();
    setCustomerCartData([]);
    setShowSignOutConfirmation(false);
    toast.success("logout successful")
  };

  const cancelSignOut = () => {
    setShowSignOutConfirmation(false);
  };

  return (
    <>
      <div className="container block">
        <div className="flex justify-between items-center pt-8">
          <Link href="/">
            <img className="h-7 cursor-pointer" src="/logo.svg" alt="Logo" />
          </Link>

          <div className="relative w-full max-w-[500px] hidden sm:block">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
            />
            <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>

          <div className="flex gap-4">
            {isLoading || (!isLoading && !authUser) ? (
              <>
                <div className="text-xs rounded-xl border-2 icon__wrapper" onClick={handleLoginButtonClick}>
                  Login
                </div>
                <div className="text-xs rounded-xl border-2 icon__wrapper" onClick={handleSignupButtonClick}>
                  Register
                </div>
              </>
            ) : (
              <>
                <Link href="/profile">
                  <div className="text-xl cursor-pointer icon__wrapper">
                    <AiOutlineUser />
                  </div>
                </Link>
                <div onClick={handleSignOut} className="text-xs cursor-pointer icon__wrapper">
                  SignOut
                </div>
              </>
            )}
            <Link href="/cart">
              <div className="icon__wrapper relative cursor-pointer">
                <AiOutlineShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isLoginModalOpen && <LoginModel closeModal={() => setLoginModalOpen(false)} />}
      {isRegisterModalOpen && <RegisterModel closeModal={() => setLoginModalOpen(false)} />}

      {/* Sign Out Confirmation Modal */}
      {showSignOutConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md">
            <p>Are you sure you want to sign out?</p>
            <div className="flex justify-end mt-4">
              <button onClick={confirmSignOut} className="mr-4 text-blue-500">
                Yes
              </button>
              <button onClick={cancelSignOut} className="text-gray-500">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
