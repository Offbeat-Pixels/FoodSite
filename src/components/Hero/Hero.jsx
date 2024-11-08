import React from "react";
// import FoodPng from "/src/assets/food/food.webp";
// import Spoon from "/src/assets/food/spoon.webp";
// import Leaf from "/src/assets/food/leaf.webp";
// import Banana from "/src/assets/food/banana.webp";
// import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import Banner from "/src/assets/food/service_1.webp";

// export const SlideUp = (delay) => {
//   return {
//     hidden: {
//       x: "-100%",
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         delay: parseFloat(delay), // Ensure the delay is treated as a number
//         ease: "easeOut",
//       },
//     },
//   };
// };

const Hero = () => {
  return (
    <section className="mt-2 mx-auto  md:w-[90vw] md:h-[80vh] overflow-hidden  ">
      <video
        src="magnet-food.webm"
        alt="banner-video"
        autoPlay
        className="object-cover rounded-2xl w-full h-full "
      />
      {/* <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 
          place-content-center justify-between z-10 relative"
      > */}
      {/* text Content here */}
      {/*
          <div>
             <motion.h1
              initial="hidden"
              whileInView="show"
              variants={SlideUp(0.5)}
              className="relative text-4xl lg:text-7xl xl:text-8xl  font-bold uppercase text-outline text-transparent"
            >
              Magnet Foods
              <img
                src={Leaf}
                alt=""
                className="absolute w-[50px] top-[-40px] right-0  md:right-[100px]"
              />
            </motion.h1> */}
      {/* <motion.h1
              initial="hidden"
              whileInView="show"
              variants={SlideUp(1)}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              FoodSite
            </motion.h1> */}
      {/* <motion.p
              initial="hidden"
              whileInView="show"
              variants={SlideUp(1.5)}
              className="text-sm"
            >
              Welcome to Magnet Foods, where we deliver An Experience with a
              Difference. We are a dependable, satisfaction-oriented provider of
              catering Operations for industrial units and events. We understand
              that celebrations are an integral part of our culture, and our aim
              is to make each one grand and special.
            </motion.p> */}

      {/* <motion.button
              initial="hidden"
              whileInView="show"
              variants={SlideUp(2)}
              className="btn-primary inline-block  "
            > */}
      {/* <IoCartOutline className=" inline mr-2 " /> */}
      {/* <Link to="/about">About US</Link>
            </motion.button> 
          </div>
          */}

      {/* image section */}
      {/* <div className="relative flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={FoodPng}
              alt=""
              className="w-[450px] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 120, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 75, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Spoon}
              alt=""
              className="w-[350px] absolute bottom-[120px] -left-16 rotate-[75deg] img-shadow"
            />
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Banana}
              alt=""
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
            />
          </div> */}
      {/* </div> */}

      {/* Background Yellow */}
      {/* <motion.div
          initial={{ opacity: 0, rotate: 60, x: 200, y: 100 }}
          whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
        ></motion.div> */}
    </section>
  );
};

export default Hero;
