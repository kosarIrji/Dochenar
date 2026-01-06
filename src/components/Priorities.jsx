import React from "react";
import { TrendingUp } from "lucide-react";
import Details from "../components/config/details.json";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        اولویت های سرمایه گذاری محله {Details.alley.name}
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full   flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t  from-yellow-100  to-yellow-200 ">
          <h2 className="text-lg   font-bold mb-2 text-gray-800">
            مشارکت در ساخت و نوسازی:
          </h2>

          <p className="text-gray-600 text-center md:mt-5  text-base">
            گزینه‌ای بسیار مناسب،{" "}
            <strong>به‌ویژه در املاک فرسوده و زمین‌های بایر</strong> که پتانسیل
            بالایی برای توسعه دارند.
          </p>
        </div>
        {/* Box 2 */}
        <div className="rounded-xl shadow p-4 flex flex-col   items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]    bg-gradient-to-t from-orange-900 via-orange-800 to-orange-700">
          <h2 className="text-lg  font-bold mb-2 text-white">
            {" "}
            خرید ملک نوساز:
          </h2>
          <p className="text-white text-center md:mt-5  text-base">
            روند پرشتاب ساخت‌وساز، بازار فعالی را رقم زده است؛{" "}
            <strong>پیش‌خرید واحدهای در حال ساخت یا خرید املاک نوساز</strong>،
            از گزینه‌های سودآور به شمار می‌آید.
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t from-orange-50  to-orange-100">
          <h2 className="text-lg  font-bold mb-2 text-gray-900">
            خرید ملک تجاری یا اداری :{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-base">
            به دلیل
            <strong> موقعیت مرکزی، رونق اقتصادی و حضور پررنگ مردم</strong> در
            محله، سرمایه‌گذاری در املاک تجاری و اداری توجیه‌پذیر و آینده‌دار
            است.{" "}
          </p>
        </div>
      </div>
        <div className=" bg-white/40 mt-2 w-full flex border-r-4 border-green-800 shadow-md mb-1 pt-1 p-2 ">
          <p className="text-gray-800   text-center  text-base">
            <strong className="text-green-900 w-full flex gap-2">
              <FaMoneyBillWave size={20} />
              ریسک سرمایه‌گذاری :متوسط ؛{" "}
            </strong>
            <span>
              به دلیل <strong>قیمت بالای زمین</strong> نیازمند سرمایه اولیه قابل‌توجهی است، اما
              به‌دلیل موقعیت مرکزی، تقاضای بالا و روند نوسازی فعال، بازدهی
              بالایی دارد .
            </span>
          </p>
        </div>
    </div>
  );
}
