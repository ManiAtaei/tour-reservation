import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToursModalAdd: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hotels, setHotels] = useState([{ id: 1 }]);

  const addHotel = () => {
    setHotels([...hotels, { id: hotels.length + 1 }]);
  };

  const removeHotel = (id: number) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  if (!isOpen) return null;

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-orange-500">اطلاعات تور</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="اسم تور"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <select className="w-full p-2 border rounded-md">
            <option value="">مبدا</option>
          </select>
        </div>
        <div>
          <select className="w-full p-2 border rounded-md">
            <option value="">مقصد</option>
          </select>
        </div>
        <div>
          <select className="w-full p-2 border rounded-md">
            <option value="">دسته بندی تور</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">تاریخ رفت</label>
          <div className="grid grid-cols-3 gap-2">
            <select className="p-2 border rounded-md"><option>روز</option></select>
            <select className="p-2 border rounded-md"><option>ماه</option></select>
            <select className="p-2 border rounded-md"><option>سال</option></select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">تاریخ برگشت</label>
          <div className="grid grid-cols-3 gap-2">
            <select className="p-2 border rounded-md"><option>روز</option></select>
            <select className="p-2 border rounded-md"><option>ماه</option></select>
            <select className="p-2 border rounded-md"><option>سال</option></select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          ادامه
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-orange-500">انتخاب هتل</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      {hotels.map((hotel) => (
        <div key={hotel.id} className="border p-4 rounded-md relative">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => removeHotel(hotel.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input
              type="text"
              placeholder="اسم هتل"
              className="w-full p-2 border rounded-md"
            />
            <select className="w-full p-2 border rounded-md">
              <option value="">ستاره هتل</option>
            </select>
            <select className="w-full p-2 border rounded-md">
              <option value="">امکانات</option>
            </select>
          </div>
          
          <div className="mt-4">
            <input
              type="text"
              placeholder="آدرس"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addHotel}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        <Plus className="h-5 w-5 mr-1" /> افزودن هتل
      </button>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(1)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          بازگشت
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          ادامه
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-orange-500">اطلاعات وسیله نقلیه</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6">
        {['رفت', 'برگشت'].map((direction, index) => (
          <div key={direction} className="border p-4 rounded-md">
            <h3 className="font-semibold mb-4">{`پرواز ${direction}`}</h3>
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full p-2 border rounded-md">
                <option value="">شرکت هواپیمایی</option>
              </select>
              <input
                type="text"
                placeholder="ساعت پرواز"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="شماره پرواز"
                className="w-full p-2 border rounded-md"
              />
              <select className="w-full p-2 border rounded-md">
                <option value="">فرودگاه</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option value="">نوع کابین</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option value="">نوع هواپیما</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          بازگشت
        </button>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          ثبت
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default ToursModalAdd;