import React from "react";
import Company1 from "/src/assets/food/Brand_1.png";
import Company2 from "/src/assets/food/Brand_2.png";
import Company3 from "/src/assets/food/Brand_3.png";
import Company4 from "/src/assets/food/Brand_4.png";
import { motion } from "framer-motion";
import { SlideUp } from "/src/components/Hero/Hero";
import styled from "styled-components";
const BrandsData = [
  {
    id: 1,
    name: "Chimes Café ",
    img: Company1,
    description:
      "Chimes Café is the brand under which we run restaurants in army cantonments. Keeping up with the traditions of fine dining in Army",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Drool Ah ",
    img: Company2,
    description:
      "Drool Ah is the café brand based on QSR model. Menu of café is set in a manner to cut across the age barrier. Fusion food is the USP of this brand.",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Ace Caterers ",
    img: Company3,
    description:
      "Ace Caterers is the Industrial Catering brand that operates industrial canteens. Under this brand consulting on setting-up of kitchens is also provided.",
    delay: 1.2,
  },
  {
    id: 4,
    name: "Magnet Foods ",
    img: Company4,
    description:
      "Magnet Foods is the brand under which events are taken up – corporate, weddings, get-togethers oesaurhdrfughsdusdofusdouf etc. ",
    delay: 1.2,
  },
];

const Brands = () => {
  return (
    <StyledWrapper className="bg-[#3f6e40] mt-0 px-20">
      {/* Heading Section */}
      <motion.h3
        variants={SlideUp(0)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold text-white uppercase py-4 text-center"
      >
        Our Brands
      </motion.h3>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-0 mx-auto justify-items-center  p-2">
        {BrandsData.map((item) => {
          return (
            <motion.div
              key={item.id}
              variants={SlideUp(item.delay)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-xl text-center p-2"
            >
              <div className="flex justify-between items-stretch max-w-[500px] w-[500px] h-[200px] bg-gray-300  rounded-xl ">
                <div className="w-1/2">
                  {/* Image container */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full rounded-3xl  img-shadow group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-between  text-left">
                  {/* Text container */}
                  <div>
                    <h3 className="text-xl font-semibold text-red-300">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default Brands;
