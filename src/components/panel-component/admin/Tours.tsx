/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Edit2 } from "lucide-react";
import ToursModal from "@/components/panel-component/admin/toursmodal/ToursModal";
import ToursModalAdd from "@/components/panel-component/admin/toursmodal/ToursModalAdd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

// Updated interface to match API response
interface Tour {
  status: boolean;
  id: string;
  title: string;
  origin: number;
  destination: number;
  tripCategories: number;
  departureDate: string;
  returnDate: string;
  capacity: number;
  cost: number;
  hotels: any[];
}

function Tours() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [tours, setTours] = useState<Tour[]>([]); // State to hold API data

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://109.230.200.230:2222/api/Tour"
        );
        console.log("API Response:", response.data);
        setTours(response.data); // Set the API data to state
      } catch (error) {
        console.error("Error fetching tours:", error);
        setTours([]); // Set empty array in case of error
      }
    };

    fetchTours();
  }, []);

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
              <select className="p-2 border rounded-md w-[262px]">
                <option>تور</option>
              </select>
            </div>
            <button
              className="flex items-center gap-2 text-[#4A90E2] px-4 py-2 text-lg font-xbold"
              onClick={openAddModal}
            >
              <Plus size={24} />
              <span>افزودن تور</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b-2">
                  <tr className="bg-[#FFFFFF] text-right text-base font-xbold">
                    <th className="px-6 py-3">ردیف</th>
                    <th className="px-6 py-3">عکس</th>
                    <th className="px-6 py-3">نام تور</th>
                    <th className="px-6 py-3">کد تور</th>
                    <th className="px-6 py-3">دسته بندی</th>
                    <th className="px-6 py-3">ظرفیت</th>
                    <th className="px-6 py-3">تعداد رزرو</th>
                    <th className="px-6 py-3">قیمت</th>
                    <th className="px-6 py-3">ادیت</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tours.map((tour, index) => (
                    <tr key={tour.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {index + 1} {/* Using index + 1 for row number */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src="-" // No image in API
                          alt={tour.title}
                          className="w-12 h-12 rounded-lg object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/48"; // Fallback image
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.id.split("-")[0]}{" "}
                        {/* Using first part of UUID as code */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.tripCategories === 0 ? "-" : tour.tripCategories}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.capacity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        - {/* No reservation data in API */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.cost.toLocaleString()} تومان
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
              <div className="flex items-center justify-end gap-4">
                <p className="text-sm text-gray-700">صفحه ۱ از ۱۰</p>
                <div className="flex">
                  <button className="px-3 py-1 text-sm border border-[#4A90E2] rounded-r-lg ">
                    <MdKeyboardArrowRight size={20} fill="#4A90E2" />
                  </button>

                  <button className="px-3 py-1 text-sm border border-[#4A90E2]  rounded-l-lg">
                    <MdKeyboardArrowLeft size={20} fill="#4A90E2" />
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
    </div>
  );
}

export default Tours;
