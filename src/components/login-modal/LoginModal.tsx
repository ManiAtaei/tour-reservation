import React from "react";
import { useForm } from "react-hook-form";
import { PiInfo } from "react-icons/pi";


const LoginModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg px-10 py-10 w-[462px] h-[400px] shadow-lg relative flex flex-col 
      justify-center">

        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-red-500 text-2xl font-bold"
        >
          ✕
        </button>


        <div className="border-b-2 border-[#EFF7F0] pb-2">
          <h2 className="text-center text-xl font-xbold text-[#4A90E2] mb-4 ">
            ورود یا ثبت نام
          </h2>
        </div>

        <form className="px-14 mt-10 flex flex-col justify-around" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              placeholder="شماره موبایل"
              {...register("phone", {
                required: "شماره موبایل الزامی است",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره موبایل معتبر وارد کنید",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md transition-all ${errors.phone
                  ? "border-red-500"
                  : "border-gray-300 focus:border-orange-500"
                }`}
            />


            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>


          <div className="flex gap-2">
            <PiInfo />

            <p className="text-xs font-xmedium text-right mb-4">
              استفاده از درنا به معنی پذیرش{" "}
              <a href="#" className="text-[#FF8C42] underline">
                قوانین و مقررات
              </a>{" "}
              این سرویس است.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 
            text-sm font-xbold"
          >
            تایید و دریافت کد
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 text-sm font-xbold">
              ورود با کلمه عبور
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
