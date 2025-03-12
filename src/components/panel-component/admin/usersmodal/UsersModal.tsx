import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    id: number;
    name: string;
    userId: string;
    gender: string;
    mobile: string;
    email: string;
  } | null;
}

export default function UsersModal({ isOpen, onClose, user }: UserModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-orange-500">اطلاعات کاربران</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-medium mb-4">اطلاعات حساب کاربری</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  شماره موبایل
                </label>
                <input
                  type="tel"
                  defaultValue={user?.mobile}
                  className="w-full p-2 border rounded-md"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  رمز کاربری
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 border rounded-md"
                    defaultValue="••••"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  >
                    <Eye className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">اطلاعات شخصی</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  نام
                </label>
                <input
                  type="text"
                  defaultValue={user?.name.split(' ')[0]}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  defaultValue={user?.name.split(' ')[1]}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  جنسیت
                </label>
                <select className="w-full p-2 border rounded-md" defaultValue={user?.gender}>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  تاریخ تولد
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="p-2 border rounded-md">
                    <option>روز</option>
                  </select>
                  <select className="p-2 border rounded-md">
                    <option>ماه</option>
                  </select>
                  <select className="p-2 border rounded-md">
                    <option>سال</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  کد ملی
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ایمیل
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full p-2 border rounded-md"
                  dir="ltr"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-medium mb-4">اطلاعات شخصی</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  شماره شبا
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l-md"
                    dir="ltr"
                  />
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-r-md">
                    IR
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  شماره کارت
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  شماره حساب
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  dir="ltr"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}