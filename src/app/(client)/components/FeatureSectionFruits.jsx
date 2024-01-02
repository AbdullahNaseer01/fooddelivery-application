// import React from "react";
// import ProductCard from "./ProductCard";

// const data = [
//   { id: 0, img: "../images/product__1.webp", name: "Dried Mango", price: "$500" },
//   { id: 1, img: "../images/product__2.webp", name: "Crunchy Crisps", price: "$300" },
//   { id: 2, img: "../images/product__3.webp", name: "Jewel Cranberries", price: "$200" },
//   { id: 3, img: "../images/product__4.webp", name: "Almond organic", price: "$100" },
// ];

// const FeatureSectionFruits = () => {
//   return (
//     <div className="container pt-16">
//       <div className="lg:flex justify-between items-center">
//         <div>
//           <h3 className="font-medium text-2xl">Burgers and Fries</h3>
//           <p className="text-gray-600 mt-2">
//           Burgers and Fries best deals in best prices
//           </p>
//         </div>

//         <div className="space-x-4 mt-8 lg:mt-0">
//           <button className="feature_btn">Burgers</button>
//           <button className="text-gray-600 hover:text-accent">
//             Fries
//           </button>
//           <button className="text-gray-600 hover:text-accent">
//             Souces
//           </button>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
//         <div>
//           <img
//             className="w-full h-full object-cover"
//             src="../images/feature__1.webp"
//             alt="banner"
//           />
//         </div>

//         {data.map((el) => (
//           <ProductCard
//             key={el.id}
//             img={el.img}
//             name={el.name}
//             price={el.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureSectionFruits;



import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";

const FeatureSectionBurgers = () => {
  const [burgerData, setBurgerData] = useState([]);

  useEffect(() => {
    const fetchBurgerData = async () => {
      const category = "fruits"; // Replace with the desired category
      const productsRef = collection(db, "products");
      const burgerQuery = query(productsRef, where("category", "==", category));

      const unsubscribe = onSnapshot(burgerQuery, (snapshot) => {
        const burgers = [];
        snapshot.forEach((doc) => {
          burgers.push({ id: doc.id, ...doc.data() });
        });
        setBurgerData(burgers);
      });

      // Don't forget to unsubscribe when the component unmounts
      return () => unsubscribe();
    };

    fetchBurgerData();
  }, []);

  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Burgers and Fries</h3>
          <p className="text-gray-600 mt-2">Burgers and Fries best deals in best prices</p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Burgers</button>
          <button className="text-gray-600 hover:text-accent">Fries</button>
          <button className="text-gray-600 hover:text-accent">Sauces</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src="../images/feature__1.webp" alt="banner" />
        </div>

        {burgerData.map((burger) => (
          <div key={burger.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={burger.img} alt={burger.name} className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">{burger.title}</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">${burger.price}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">${burger.price}</p>
                </del>
                <div className="ml-auto">
                  <svg
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add your addToCart logic here
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSectionBurgers;
