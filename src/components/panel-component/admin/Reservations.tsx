import React from 'react';
import { Edit } from 'lucide-react';

interface Tour {
  id: number;
  image: string;
  name: string;
  country: string;
  category: string;
  capacity: number;
  reservedDays: number;
  cancelledCount: number;
  price: string;
}

const tours: Tour[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d",
    name: "تور روسیه",
    country: "65740",
    category: "تورگردشگری",
    capacity: 100,
    reservedDays: 60,
    cancelledCount: 20,
    price: "20,000,000 تومان"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    name: "تور فرانسه",
    country: "87740",
    category: "تورگردشگری",
    capacity: 100,
    reservedDays: 54,
    cancelledCount: 31,
    price: "80,000,000 تومان"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    name: "تور تایلند",
    country: "31740",
    category: "تور طبیعت گردی",
    capacity: 200,
    reservedDays: 60,
    cancelledCount: 70,
    price: "40,000,000 تومان"
  }
];

export default function Reservations() {
  return (
    <>
      <div className="pt-4 px-4 border-b border-[#E0E0E0]">
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">
          رزروها
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5">

        <div className="p-4 flex justify-between items-center border-b">
          <select className="p-2 border rounded-md">
            <option>تورها</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" dir="rtl">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ردیف
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  عکس
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نام تور
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  کشور
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  دسته بندی
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ظرفیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تعداد رزرو
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تعداد کنسلی
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  قیمت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ادیت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tours.map((tour) => (
                <tr key={tour.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="h-10 w-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {tour.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.capacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.reservedDays}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tour.cancelledCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                    {tour.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t flex justify-between items-center">
          <div className="text-sm text-gray-500">
            صفحه ۱ از ۲۰
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50">&lt;</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}