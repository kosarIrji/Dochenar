import React from "react";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center bg-[var(--box)] my-8 py-5 rounded-2xl">
      <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[#4F7C6B] mb-4 leading-snug  ">
        اولویت های سرمایه گذاری
      </h3>
      {/* itmes container */}
      <div className="w-full p-4 flex flex-col lg:flex-row gap-4 justify-evenly xl:justify-center">
        {/* Box 1 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#B1B2B9" }}>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            مشارکت در ساخت و نوساز
          </h2>
          <p className="text-gray-600 text-center md:mt-5  text-sm sm:text-xl">
            بسیار مناسب، به‌ویژه در ملک ‌های فرسوده و زمین ‌های بایر.
          </p>
        </div>
        {/* Box 2 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#272E36" }}>
          <h2 className="text-lg font-bold mb-2 text-white">
            مشارکت در ساخت نوساز
          </h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            روند رو به رشد ساخت ‌و ساز، نشان از بازار فعال و پرپتانسیل دارد.
          </p>
        </div>
        {/* Box 3 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#F0E9E6" }}>
          <h2 className="text-lg font-bold mb-2 text-gray-900">
            خرید ملک نوساز
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-sm sm:text-xl">
            به دلیل تقاضای فزاینده و دسترسی مناسب، می‌تواند بازدهی قابل توجهی در
            کوتاه‌مدت داشته باشد.
          </p>
        </div>
        {/* Box 4 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#5B5D62" }}>
          <h2 className="text-lg font-bold mb-2 text-white">
            ریسک سرمایه گذاری
          </h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            متوسط رو به پایین؛ به‌خاطر وجود بافت فرسوده آماده نوسازی و روند رو
            به رشد ساخت‌وساز.
          </p>
        </div>
      </div>
    </div>
  );
}
