import React, { useState, useEffect } from "react";
import { Eye, Edit, Plus } from "lucide-react";
import BlogModal from "@/components/panel-component/admin/blogsmodals/BlogModal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";

interface Destination {
  id: string; // تغییر به string بر اساس نمونه خروجی API
  name: string;
  context?: string | null; // اضافه کردن context که ممکن است null باشد
  qas?: string | null; // اضافه کردن qas که ممکن است null باشد
  image?: string; // اضافه کردن برای سازگاری با جدول
  code?: string; // اضافه کردن برای سازگاری با جدول
  category?: string; // اضافه کردن برای سازگاری با جدول
  visits?: string; // اضافه کردن برای سازگاری با جدول
}

export default function BlogManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]); // state برای ذخیره داده‌های API

  // فراخوانی API با axios
  useEffect(() => {
    axios
      .get("https://109.230.200.230:2222/api/Admins/Blog")
      .then((response) => {
        console.log("پاسخ API:", response.data);
        setDestinations(response.data); // ذخیره داده‌ها در state
      })
      .catch((error) => {
        console.error("خطا در فراخوانی API:", error);
        // در صورت خطا، داده‌های پیش‌فرض یا خالی می‌گذاریم
        setDestinations([]);
      });
  }, []);

  const handleEdit = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedDestination(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-4 px-4 border-b border-[#E0E0E0]">
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">
          مدیریت وبلاگ ها
        </h1>
      </div>
      <div className="rounded-lg overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <select className="p-2 border rounded-md w-[262px]">
            <option>وبلاگ</option>
          </select>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 text-[#4A90E2] px-4 py-2 text-lg font-xbold "
          >
            <Plus className="h-4 w-4" />
            افزودن مقاله
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full " dir="rtl">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  ردیف
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  عکس
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  نام ویلاژ
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  کد ویلاژ
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  دسته بندی
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  تعداد بازدید
                </th>
                <th className="px-6 py-3 text-right text-base font-xbold">
                  ادیت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {destinations.map((destination, index) => (
                <tr key={destination.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1} {/* ردیف به صورت پویا از index */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {destination.image ? (
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-10 w-14 object-cover rounded"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {destination.name || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {destination.code || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {destination.category || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {destination.visits || "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(destination)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t">
          <div className="flex items-center justify-end gap-4">
            <p className="text-sm text-gray-700">صفحه ۱ از ۱۰</p>
            <div className="flex">
              <button className="px-3 py-1 text-sm border border-[#4A90E2] rounded-r-lg ">
                <MdKeyboardArrowRight size={20} fill="#4A90E2" />
              </button>
              <button className="px-3 py-1 text-sm border border-[#4A90E2] rounded-l-lg">
                <MdKeyboardArrowLeft size={20} fill="#4A90E2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={
          selectedDestination
            ? {
                name: selectedDestination.name,
                code: selectedDestination.code || "",
                description: selectedDestination.context || "",
                images: selectedDestination.image ? [selectedDestination.image] : [],
              }
            : undefined
        }
      />
    </>
  );
}