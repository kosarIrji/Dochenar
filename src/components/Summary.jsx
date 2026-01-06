import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="relative my-3 border px-5 pt-3 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
        دوچنار؛ محله‌ای قدیمی و با ارزش در بجنورد
        <Clipboard size={38} />
      </h3>

      <p className="md:leading-loose lg:leading-loose font-modam text-justify text-base ">
        دوچنار با سابقه تاریخی و موقعیت مرکزی خود، یکی از شلوغ‌ترین محله‌های
        بجنورد با عملکرد تجاری-مسکونی است که دسترسی خوبی به خیابان‌های اصلی دارد
        و بخشی از بازار اصلی شهر محسوب می‌شود. ساختار محله تلفیقی از بافت فرسوده
        و نوسازی‌های رو به رشد است. حضور گسترده کاربری‌های تجاری، خدمات درمانی،
        آموزشی و حمل‌ونقل عمومی، محیطی پویا و مناسب برای زندگی شهری فراهم کرده
        است. <br />
        اگرچه مشکلاتی مانند ترافیک سنگین و ناهماهنگی ساختمان‌ها وجود دارد،
        دوچنار همچنان محله‌ای فعال، امن و اقتصادی برای سکونت و فعالیت باقی مانده
        است.{" "}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
