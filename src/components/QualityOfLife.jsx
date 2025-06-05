/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "./charts/QualityOfLifeChart";
import Details from "../config/details.json";
export default function QualityOfLife() {
  const data = [
    [93, 91, 96, 98, 90], //میرزاکوچکخان
    [93, 93, 96, 96, 91], //bsij
    [88, 86, 100, 94, 88], //bolvar
    [100, 100, 80, 97, 84], //dochenar
    [96, 93, 95, 91, 98], //jomhori
    [82, 81, 88, 89, 79], //mosala
  ];

  const names = ["میرزاکوچکخان", Details.alley.name];
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative  bg-[var(--box)] rounded-3xl shadow-lg px-6 py-12 border border-gray-200 col-span-2 md:col-span-1 text-gray-700 h-[100%]">
          <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[var(--main)] mb-4 leading-snug  ">
            کیفیت زندگی محله {Details.alley.name}
          </h3>
          <p className="text-gray-700 leading-relaxed  text-sm sm:text-xs md:text-base w-full text-justify md:leading-loose">
            <br />
            🔐 امنیت: {Details.qualities.security}
            <br />
            🎉 سرزندگی اجتماعی: {Details.qualities.vitality}
            <br />
            🚍 دسترسی به خدمات: {Details.qualities.accessability}
            <br />
            🏘️ کیفیت کالبدی: {Details.qualities.quality}
            <br />
            🌱 فضای سبز و آسایش: {Details.qualities.greenSpace}
          </p>
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 md:col-span-1  h-full">
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
