import React from "react";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center bg-gray-100 my-8 py-5 rounded-2xl">
      <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[#4F7C6B] mb-4 leading-snug  ">
        چرا هومینکس
      </h3>
      {/* itmes container */}
      <div className="w-full p-4 flex flex-col lg:flex-row gap-4 justify-evenly xl:justify-center">
        {/* Box 1 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#B1B2B9" }}>
          <h2 className="text-lg font-bold mb-2 text-gray-800">عنوان اول</h2>
          <p className="text-gray-600 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه اول اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 2 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#272E36" }}>
          <h2 className="text-lg font-bold mb-2 text-white">عنوان دوم</h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه دوم اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 3 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#F0E9E6" }}>
          <h2 className="text-lg font-bold mb-2 text-gray-900">عنوان سوم</h2>
          <p className="text-gray-800 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه سوم اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 4 */}
        <div
          className="rounded-xl shadow p-6 flex flex-col items-center w-full max-w-2xl"
          style={{ backgroundColor: "#5B5D62" }}>
          <h2 className="text-lg font-bold mb-2 text-white">عنوان چهارم</h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه چهارم اینجاست. اطلاعات یا توضیحات مورد نظر را
            اینجا قرار دهید.
          </p>
        </div>
      </div>
    </div>
  );
}
