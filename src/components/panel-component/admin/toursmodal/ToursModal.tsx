import { X, Upload } from 'lucide-react';
import { useState } from 'react';

interface AddTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToursModal = ({ isOpen, onClose }: AddTourModalProps) => {
  const [tourType, setTourType] = useState('تور تفریحی');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">اطلاعات تور</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-6">
            {/* Tour Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع تور</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2.5"
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
              >
                <option>تور تفریحی</option>
                <option>تور تاریخی</option>
                <option>تور طبیعت گردی</option>
              </select>
            </div>

            {/* Tour Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم تور</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2.5"
                placeholder="نام تور را وارد کنید"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Origin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مبدا</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5">
                  <option>تهران</option>
                  <option>مشهد</option>
                  <option>اصفهان</option>
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">مقصد</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5">
                  <option>کیش</option>
                  <option>مشهد</option>
                  <option>استانبول</option>
                </select>
              </div>

              {/* Tour Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">دسته بندی تور</label>
                <select className="w-full border border-gray-300 rounded-lg p-2.5">
                  <option>داخلی</option>
                  <option>خارجی</option>
                </select>
              </div>
            </div>

            {/* Departure and Return Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ رفت</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>روز</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>ماه</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>سال</option>
                    {[1402, 1403, 1404].map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">تاریخ برگشت</label>
                <div className="grid grid-cols-3 gap-2">
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>روز</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>ماه</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="border border-gray-300 rounded-lg p-2.5">
                    <option>سال</option>
                    {[1402, 1403, 1404].map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Price and Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">قیمت</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5"
                  placeholder="قیمت را وارد کنید"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ظرفیت</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-2.5"
                  placeholder="ظرفیت را وارد کنید"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">آپلود عکس تور</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-500 mb-1">عکس خود را اینجا رها کنید</p>
                  <p className="text-xs text-gray-400">یا</p>
                  <button type="button" className="mt-2 text-sm text-blue-500 hover:text-blue-600">
                    از کامپیوتر انتخاب کنید
                  </button>
                  <p className="text-xs text-gray-400 mt-2">حداکثر سایز: 2MB (JPG یا PNG)</p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            ادامه
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToursModal;