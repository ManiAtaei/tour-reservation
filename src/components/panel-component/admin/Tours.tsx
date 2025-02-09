/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Plus, Edit2 } from 'lucide-react';
import ToursModal from '@/components/panel-component/admin/toursmodal/ToursModal'
import ToursModalAdd from '@/components/panel-component/admin/toursmodal/ToursModalAdd'

interface Tour {
  id: number;
  name: string;
}

const tours = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d',
    name: 'تور روسیه',
    code: '65740',
    category: 'تور گردشگری',
    capacity: 100,
    reservations: 60,
    price: '۲۰,۰۰۰,۰۰۰',
  },
 
];

function Tours() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const openEditModal = (tour: Tour) => {
    setSelectedTour(tour);
    setIsEditModalOpen(true);
  };

  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div>
      <div className="pt-4 px-4 border-b border-[#E0E0E0]">
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">
          مدیریت تورها
        </h1>
      </div>

      <div className="p-6">
        <div className="mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                مدیریت تورها
              </h1>
            </div>
            <button
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={openAddModal}
            >
              <Plus className="w-5 h-5" />
              <span>افزودن تور</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-right">
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      ردیف
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      عکس
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      نام تور
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      کد تور
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      دسته بندی
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      ظرفیت
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      تعداد رزرو
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      قیمت
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500">
                      ادیت
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.capacity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.reservations}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.price} تومان
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-blue-500 hover:text-blue-600"
                          onClick={() => openEditModal(tour)}
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">صفحه ۱ از ۱۰</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                    قبلی
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                    بعدی
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isAddModalOpen && (
        <ToursModalAdd isOpen={isAddModalOpen} onClose={closeModals} />
      )}

      {isEditModalOpen && selectedTour && (
        <ToursModal
          isOpen={isEditModalOpen}
          onClose={closeModals}
          selectedTour={selectedTour}
        />
      )}
    </div >
  );
}

export default Tours;