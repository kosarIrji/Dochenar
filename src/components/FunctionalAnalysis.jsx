import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

import { ChartColumn } from "lucide-react";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg-grid-cols-3 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2 col-span-3  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          دوچنار: تجارت، سکونت، خدمات
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله دوچنار با ساختاری{" "}
          <span className="bg-gray-400">تجاری–مسکونی</span> و
          <strong className="text-purple-800"> موقعیتی مرکزی</strong> در بافت
          شهری، یکی از کانون‌های اصلی فعالیت اقتصادی بجنورد به‌شمار می‌رود.
          تمرکز بالای مغازه‌ها، پاساژها و واحدهای تجاری در امتداد{" "}
          <strong className="text-green-800">
            خیابان‌های اصلی و حتی کوچه‌های داخلی
          </strong>
          ، این محله را به بخشی فعال از بازار اصلی شهر تبدیل کرده است. ین تنوع
          در کاربری‌ها، فضای محله را در تمام ساعات روز پویا نگه داشته و نقش مهمی
          در هویت اقتصادی آن ایفا می‌کند.
        </p>
        {/* باکس ۲: واقعیت آماری */}
        <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
          <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
            <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
              <ChartColumn size={22} className="text-[var(--sidebar)]" />
              واقعیت آماری
            </span>
            <strong> کاربری تجاری:</strong>
            <br />
            تعداد: 463 پلاک / مساحت: 45,862.96 مترمربع
            <br />
            <strong> کاربری مسکونی:</strong>
            <br />
            تعداد: 399 پلاک / مساحت: 86,608.73 مترمربع
          </p>
        </div>
        <p className="md:leading-loose text-center  whitespace-pre-line lg:leading-loose font-modam   text-base  ">
          <strong>
            “ تعداد املاک تجاری از املاک مسکونی بیشتر است، اما مجموع مساحت املاک
            مسکونی تقریباً دو برابر مساحت تجاری است.”
          </strong>
         
          از نظر خدمات، محله دوچنار یکی از محله‌های نسبتاً کامل بجنورد است. وجود
          درمانگاه، مطب‌های خصوصی، مدارس، مهدکودک، مسجد، حسینیه و<strong className="text-blue-800"> پارکینگ عمومی،
      </strong>    در کنار فعالیت های تجاری (بازر) باعث شده تا بیشتر نیازهای روزمره
          ساکنان و شهروندان به‌خوبی برطرف شود.{" "}
        </p>
      </div>
      <div className="col-span-3 lg:col-span-1 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-3 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
