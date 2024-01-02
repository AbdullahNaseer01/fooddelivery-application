'use client'
import React from "react";
import AdminTables from "@/app/(admin)/adminComponents/AdminTables";
import ProdctsForm from "@/app/(admin)/adminComponents/AddProdctsForm";
import { AdminContextProvider } from "@/app/(admin)/Adminlogic/Logic";
const page = () => {
  // const {formData} = AdminContextProvider()
  return (
    <>
      <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto bg-slate-400 min-h-screen">
        <ProdctsForm />
      </main>
    </>
  );
};

export default page;
