import SummaryChart from "./SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Details from "../config/details.json";
export default function Summary() {
  return (
    <section className="relative my-7 bg-[var(--box)] rounded-3xl shadow-lg px-6 py-6 sm:p-2 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" col-span-2 md:col-span-1 text-gray-700 sm:p-2 p-6 ">
        <h3 className="sm:text-xlg  w-full   text-3xl  font-modam font-bold text-center  sm:text-xl md:text-lg text-[#4F7C6B] mb-4 leading-snug ">
          جمع بندی
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-xs md:text-base w-full text-justify md:leading-loose">
          {Details.conclusion}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1">
        <SummaryChart />
      </motion.div>
    </section>
  );
}
