import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PiInfo } from "react-icons/pi";
import Loginid from "./Loginid";

interface IFormInput {
  phone: string;
  verificationCode?: string;
  password?: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [timer, setTimer] = useState<number>(120);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0 && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, timer]);

  const handleCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...verificationCode];
    newCode[index] = e.target.value;
    setVerificationCode(newCode);

    if (e.target.value && index < 3) {
      const nextInput = document.getElementById(
        `code-${index + 1}`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (currentStep === 1) {
      setCurrentStep(2);
      setIsTimerRunning(true);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      onClose();
    }
  };

  const handleEditPhone = () => {
    setCurrentStep(1);
    setTimer(120);
    setIsTimerRunning(false);
  };

  const handleResendCode = () => {
    setTimer(120);
    setIsTimerRunning(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg px-10 py-10 w-[462px] h-[400px] shadow-lg relative flex flex-col justify-center">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-red-500 text-2xl font-bold"
        >
          ✕
        </button>

        <div className="border-b-2 border-[#EFF7F0] pb-2">
          <h2 className="text-center text-xl font-xbold text-[#4A90E2] mb-4">
            {showPasswordLogin
              ? "ورود با کلمه عبور"
              : currentStep === 1
              ? "ورود یا ثبت نام"
              : currentStep === 2
              ? "تایید کد پیامکی"
              : "کلمه عبور انتخاب کنید"}
          </h2>
        </div>

        {showPasswordLogin ? (
          <div className="px-14 mt-10">
            <Loginid />
            <button
              onClick={() => setShowPasswordLogin(false)}
              className="w-full text-[#4A90E2] font-xbold text-sm mt-4 text-center"
            >
              ورود با کد یکبار مصرف
            </button>
          </div>
        ) : (
          <form
            className="px-14 mt-10 flex flex-col justify-around"
            onSubmit={handleSubmit(onSubmit)}
          >
            {currentStep === 1 && (
              <>
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
                    className={`w-full px-4 py-2 border rounded-md transition-all ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <PiInfo />
                  <p className="text-xs font-xmedium text-right mb-4">
                    استفاده از درنا به معنی پذیرش{" "}
                    <Link href={"/laws"} className="text-[#FF8C42] underline">
                      قوانین و مقررات
                    </Link>{" "}
                    این سرویس است.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm font-xbold"
                >
                  تایید و دریافت کد
                </button>

                <div 
                  onClick={() => setShowPasswordLogin(true)}
                  className="text-[#4A90E2] font-xbold text-sm mt-4 text-center cursor-pointer"
                >
                  ورود با کلمه عبور
                </div>
              </>
            )}

            {currentStep === 2 && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-base font-xregular mb-4">
                  کد ۴ رقمی برای شما ارسال شد.
                </p>

                <button
                  type="button"
                  onClick={handleEditPhone}
                  className="text-blue-500 text-sm mb-4 font-xmedium"
                >
                  اصلاح شماره تلفن
                </button>

                <div className="flex gap-2">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`code-${index}`}
                      value={digit}
                      onChange={(e) => handleCodeChange(e, index)}
                      maxLength={1}
                      className={`w-1/4 px-4 py-2 border rounded-md text-center transition-all ${
                        errors.verificationCode
                          ? "border-red-500"
                          : "border-gray-300 focus:border-orange-500"
                      }`}
                      placeholder="-"
                    />
                  ))}
                </div>

                <p className="text-sm mt-4">{`ارسال مجدد کد بعد از ${Math.floor(
                  timer / 60
                )}:${timer % 60}`}</p>

                {timer === 0 && (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm font-xbold mt-2"
                  >
                    ارسال مجدد کد
                  </button>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm font-xbold mt-4"
                >
                  تایید کد
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-base font-xregular mb-4">
                  برای حساب کاربری خود کلمه عبور انتخاب کنید.
                </p>

                <div className="mb-4 w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder="رمز کاربری"
                    {...register("password", {
                      required: "کلمه عبور الزامی است",
                      minLength: {
                        value: 6,
                        message: "کلمه عبور باید حداقل ۶ کاراکتر باشد",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-md transition-all ${
                      errors.password
                        ? "border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    }`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm font-xbold"
                >
                  ثبت نام در درنا
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
