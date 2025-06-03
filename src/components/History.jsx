/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Details from "../config/details.json";
function History() {
  return (
    <section className="my-7 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
      <h3 className="sm:text-xlg  w-full   text-3xl  font-modam font-extrabold text-center  sm:text-3xl md:text-lg text-[#4F7C6B] mb-4 leading-snug ">
        تاریخچه محله {Details.alley.name}
      </h3>

      <p className="md:leading-loose font-modam text-gray-800 text-justify text-sm sm:text-xs md:text-base  mb-10">
        {Details.history}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-2">
        {[
          { year: "۱۳۸۵", src: "./images/1385.jpg" },
          { year: "۱۴۰۴ ", src: "./images/1404.jpg" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}>
            <img
              src={item.src}
              alt={`محله ${Details.alley.name} در سال ${item.year}`}
              className="rounded-xl shadow-md w-full md:max-w-[600px]  object-cover"
            />
            <p className="text-center  mt-3 text-gray-500 sm:sm text-sm md:text-base leading-relaxed">
              محله {Details.alley.name} - سال {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
