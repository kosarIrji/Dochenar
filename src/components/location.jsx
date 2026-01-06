/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Details from "../components/config/details.json";
import { LocateIcon } from "lucide-react";

const windowHeight = window.innerWidth;

function Location() {
  const imageAlt = `محله ${Details.alley.name} در سال ۲۰۲۵`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=""
    >
      <motion.img
        src={
          windowHeight < 500
            ? "./images/location-sm.png"
            : "./images/location.jpg"
        }
        loading="lazy"
        alt="محله  بلوار در سال ۲۰۲۵"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl w-[100%] h-[100%] mx-auto object-cover shadow-md   "
      />

      {windowHeight < 500 ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl shadow-sm p-5 mt-2 border lg:col-span-3 bg-white/50 backdrop-blur-md"
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            موقعیت {Details.alley.name}{" "}
            <span>
              <LocateIcon size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            موقعیت مکانی محله دوچنار در بخش مرکزی شهر واقع شده ؛ این محله از
            شمال با خیابان طالقانی غربی ، میدان شهید و چهاراه امیریه و از جنوب
            به خیابان امام خمینی غربی و میدان کارگر و میدان فردوسی متنهی میشود و
            با محلات شریعتی ،جاجرمی ، فردوسی ، میرزارضا کرمانی همجوار میباشد.
          </p>
        </motion.div>
      ) : (
        ""
      )}
    </motion.section>
  );
}
export default Location;
