"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMapPin, FiUser, FiCalendar } from "react-icons/fi";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

interface FormData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
}

function SearchTour() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [origin, destination] = watch(["origin", "destination"]);

  const handleSwap = () => {
    setValue("origin", destination);
    setValue("destination", origin);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="hidden 2xl:flex flex-col justify-center gap-4 bg-[#fbfbfb]/70 p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 backdrop-blur-lg">
      <div className="border-b-2 border-white pb-4 text-xl font-xmedium ">
        تورهای سفارشی
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-around gap-4  w-full"
      >
        <div className="flex items-center justify-center">
          <div className="flex items-center bg-white px-4 py-2 rounded-l-none rounded-r-lg  w-full max-w-[150px]">
            <FiMapPin className="text-orange-500 mr-2" />
            <input
              {...register("origin", { required: "لطفاً مبدا را وارد کنید" })}
              type="text"
              placeholder="مبدا (شهر)"
              className="w-full border-none outline-none text-gray-700"
            />
            {errors.origin && (
              <span className="text-red-500 text-sm">
                {errors.origin.message}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleSwap}
            className="p-[10px] bg-white transition-colors"
            title="جابجایی مبدا و مقصد"
          >
            <MdOutlineSwapHorizontalCircle
              size={20}
              className="text-orange-500"
            />
          </button>

          <div className="flex items-center bg-white px-4 py-2 rounded-r-none rounded-l-lg  w-full max-w-[150px]">
            <FiMapPin className="text-orange-500 mr-2" />
            <input
              {...register("destination", {
                required: "لطفاً مقصد را وارد کنید",
              })}
              type="text"
              placeholder="مقصد (شهر)"
              className="w-full border-none outline-none text-gray-700"
            />
            {errors.destination && (
              <span className="text-red-500 text-sm">
                {errors.destination.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center text-black ">
          <div className="flex items-center bg-white px-4 py-2 rounded-r-lg  shadow-sm w-full max-w-[150px]">
            <FiCalendar className="text-orange-500 mr-2" />
            <input
              {...register("departureDate", {
                required: "لطفاً تاریخ رفت را وارد کنید",
              })}
              type="text" 
              placeholder="تاریخ رفت"
              className="w-full border-none outline-none text-gray-700"
            />
            {errors.departureDate && (
              <span className="text-red-500 text-sm">
                {errors.departureDate.message}
              </span>
            )}
          </div>

          <div className="flex items-center bg-white px-4 py-2 rounded-l-lg border-r-[1px] border-[#FF8C42] shadow-sm w-full max-w-[150px]">
            <FiCalendar className="text-orange-500 mr-2" />
            <input
              {...register("returnDate")}
              type="text"
              placeholder="تاریخ برگشت" 
              className="w-full border-none outline-none text-gray-700"
            />
          </div>
        </div>

        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full max-w-[150px]">
          <FiUser className="text-orange-500 mr-2" />
          <input
            {...register("passengers", {
              required: "لطفاً تعداد مسافران را وارد کنید",
            })}
            type="number"
            placeholder="مسافران"
            min="1"
            className="w-full border-none outline-none text-gray-700"
          />
          {errors.passengers && (
            <span className="text-red-500 text-sm">
              {errors.passengers.message}
            </span>
          )}
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

export default SearchTour;
