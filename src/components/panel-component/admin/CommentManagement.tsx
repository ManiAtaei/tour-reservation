import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import ComentModal from '@/components/panel-component/admin/comentmodal/ComentModal';

interface HotelComment {
  id: number;
  hotel: string;
  stars: number;
  city: string;
  commentCount: number;
  userRating: number;
}

const hotelComments: HotelComment[] = [
  {
    id: 1,
    hotel: 'هتل هما',
    stars: 4,
    city: 'شیراز',
    commentCount: 12,
    userRating: 4.5
  },
  {
    id: 2,
    hotel: 'هتل گلدن',
    stars: 5,
    city: 'سئول',
    commentCount: 32,
    userRating: 3.5
  },
];

export default function CommentManagement() {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderStars = (count: number) => {
    return '⭐'.repeat(count);
  };

  return (
    <>
      <div className="pt-4 px-4 border-b border-[#E0E0E0]">
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">
        مدیریت نظرات
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5">
        <div className="p-4 flex justify-between items-center border-b">
          <select className="p-2 border rounded-md">
            <option>هتل</option>
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
                  هتل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ستاره هتل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  شهر هتل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تعداد نظرات
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  امتیاز کاربر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ادیت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {hotelComments.map((comment) => (
                <tr key={comment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {comment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {comment.hotel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {renderStars(comment.stars)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {comment.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {comment.commentCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {comment.userRating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => {
                        setSelectedHotel(comment.hotel);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-500 hover:text-blue-700"
                    >
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

      <ComentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hotelName={selectedHotel}
      />
    </>
  );
}