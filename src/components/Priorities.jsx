import React from "react";

export default function Priorities() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 my-8 rounded-2xl">
      <div className="w-full  max-w-4xl p-4 grid grid-cols-4 lg:grid-cols-2  gap-4">
        {/* Box 1 */}
        <div className="bg-gray-200 rounded-xl shadow p-6 flex flex-col items-center w-full min-w-[160px] max-w-full">
          <h2 className="text-lg font-bold mb-2 text-gray-800">عنوان اول</h2>
          <p className="text-gray-600 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه اول اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 2 */}
        <div className="bg-gray-300 rounded-xl shadow p-6 flex flex-col items-center w-full min-w-[160px] max-w-full">
          <h2 className="text-lg font-bold mb-2 text-gray-900">عنوان دوم</h2>
          <p className="text-gray-700 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه دوم اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 3 */}
        <div className="bg-gray-400 rounded-xl shadow p-6 flex flex-col items-center w-full min-w-[160px] max-w-full">
          <h2 className="text-lg font-bold mb-2 text-gray-900">عنوان سوم</h2>
          <p className="text-gray-800 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه سوم اینجاست. اطلاعات یا توضیحات مورد نظر را اینجا
            قرار دهید.
          </p>
        </div>
        {/* Box 4 */}
        <div className="bg-gray-500 rounded-xl shadow p-6 flex flex-col items-center w-full min-w-[160px] max-w-full">
          <h2 className="text-lg font-bold mb-2 text-white">عنوان چهارم</h2>
          <p className="text-gray-100 text-center md:mt-5  text-sm sm:text-xl">
            متن مربوط به جعبه چهارم اینجاست. اطلاعات یا توضیحات مورد نظر را
            اینجا قرار دهید.
          </p>
        </div>
      </div>
    </div>
  );
}
