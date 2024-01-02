// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../../../firebase/Auth';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';
// import Loading from '@/app/(client)/components/Loading';

// const Page = () => {
//   const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
//   const router = useRouter();  

//   if (isLoading) {
//     return <Loading/>
//   }

//   return (
//     <div>
//       {isAdmin ? (
//         <p>Welcome, {authUser?.email}! This is the admin page.</p>
//       ) : (
//         <p>You dont have permission to access this page. Redirecting...</p>
//       )}
//     </div>

//   );
// };

// export default Page;



"use client"
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { useRouter } from 'next/navigation'; // Import router for redirection
import { toast } from 'react-toastify';
import Loading from '@/app/(client)/components/Loading';

const AdminPage = () => {
  const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
  const router = useRouter(); // Access router for client-side navigation

  useEffect(() => {
    if (!isLoading && authUser) {
      const isAuthorized = admins.includes(authUser.email); // Check if user's email is in the admins array
      setAdmin(isAuthorized);

      if (!isAuthorized) {
        toast.error('Unauthorized access to admin page');
        router.push('/'); // Redirect to home page if not authorized
      }
    }
  }, [authUser, isLoading, admins, router]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {isAdmin ? (
        <p>Welcome, {authUser?.email}! This is the admin page.</p>
      ) : (
        <p>You don't have permission to access this page. Redirecting...</p>
      )}
    </div>
  );
};

export default AdminPage;
