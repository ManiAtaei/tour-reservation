"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FiMapPin, FiUser, FiCalendar } from "react-icons/fi";


interface FormData {
  name: string;
  email: string;
}

function SearchTour() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data : FormData) => {
    console.log("Form Data: ", data);
  };


  return (
    <div className="hidden 2xl:flex flex-col justify-center gap-4 bg-[#fbfbfb]/70 p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 backdrop-blur-lg">

      <div className="border-b-2 pb-4">
        تورهای سفارشی
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between gap-4 w-full"
      >
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[200px]">
          <FiMapPin className="text-orange-500 mr-2" />
          <input
            {...register("origin", { required: "لطفاً مبدا را وارد کنید" })}
            type="text"
            placeholder="مبدا (شهر)"
            className="w-full border-none outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[200px]">
          <FiMapPin className="text-orange-500 mr-2" />
          <input
            {...register("destination", { required: "لطفاً مقصد را وارد کنید" })}
            type="text"
            placeholder="مقصد (شهر)"
            className="w-full border-none outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[150px]">
          <FiCalendar className="text-orange-500 mr-2" />
          <input
            {...register("departureDate", {
              required: "لطفاً تاریخ رفت را وارد کنید",
            })}
            type="date"
             
            className="w-full border-none outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[150px]">
          <FiCalendar className="text-orange-500 mr-2" />
          <input
            {...register("returnDate")}
            type="date"
            className="w-full border-none outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[150px]">
          <FiUser className="text-orange-500 mr-2" />
          <input
            {...register("passengers", { required: "لطفاً تعداد مسافران را وارد کنید" })}
            type="number"
            placeholder="مسافران"
            min="1"
            className="w-full border-none outline-none text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-[#5DAF6E] text-white py-2 px-20 rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          جستجو
        </button>
      </form>


    </div>
  );
}

export default SearchTour