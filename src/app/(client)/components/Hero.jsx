// import Image from "next/image";
// import { BsArrowRight } from "react-icons/bs";

// const Hero = () => {
//   return (
//     <div className="container pt-8">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
//         <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="../images/alex-haney-CAhjZmVk5H4-unsplash.jpg"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
//             <p className="text-2xl hidden sm:block">Spend Less Eat well</p>
//             <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
//               Best Deals
//             </h2>
//             <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
//               450
//             </div>
//             <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
//               Shop Now <BsArrowRight />
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <img
//             className="w-full h-full object-cover rounded-lg"

//             src="../images/hero__2.webp"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
//             <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
//             <p className="text-gray-500 text-xl pt-4">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
//               999
//             </div>
//             <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
//               Shop Now <BsArrowRight />
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="../images/1675438905.webp"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
//             <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pasta</h2>
//             <p className="text-gray-500 text-xl pt-4">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
//               499
//             </div>
//             <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
//               Shop Now <BsArrowRight />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;









import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  const firstImageArray = [
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const secondImageArray = [
    "https://media.istockphoto.com/id/840902892/photo/burger-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=jnzHKrfS0eLZm5NCEnWzF77QbLYUK8kCCOpNlAu9rWU=",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/06/04/11/55/burger-6309618_1280.jpg",
  ];

  const thirdImageArray = [
    "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_1280.jpg",
    'https://cdn.pixabay.com/photo/2017/06/14/15/18/cherries-2402449_1280.jpg',
    "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(0);
  const [thirdImageIndex, setThirdImageIndex] = useState(0);

  useEffect(() => {
    const firstImageInterval = setInterval(() => {
      setFirstImageIndex((prevIndex) =>
        prevIndex === firstImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const secondImageInterval = setInterval(() => {
      setSecondImageIndex((prevIndex) =>
        prevIndex === secondImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    const thirdImageInterval = setInterval(() => {
      setThirdImageIndex((prevIndex) =>
        prevIndex === thirdImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(firstImageInterval);
      clearInterval(secondImageInterval);
      clearInterval(thirdImageInterval);
    };
  }, []);

  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <div className="w-full h-[300px] sm:h-[425px] lg:h-[631px] object-cover rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={firstImageArray[firstImageIndex]}
              alt="hero image"
            />
          </div>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            {/* Content for first image */}
            <p className="text-2xl hidden sm:block">100% originial ingredients</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-orange-500	">
              Best Pizza Deals in Town
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-[300px] sm:h-[425px] lg:h-[300px] object-cover rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={secondImageArray[secondImageIndex]}
              alt="hero image"
            />
          </div>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            {/* Content for second image */}
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500	">Best Yummy Burgers</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $25
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              order Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-[300px] sm:h-[425px] lg:h-[300px] object-cover rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={thirdImageArray[thirdImageIndex]}
              alt="hero image"
            />
          </div>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            {/* Content for third image */}
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500	">Best Yummy salads</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $10
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
