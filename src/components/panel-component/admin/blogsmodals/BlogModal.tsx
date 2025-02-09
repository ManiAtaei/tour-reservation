import React, { useState } from 'react';
import { X, Plus, Upload } from 'lucide-react';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    name: string;
    code: string;
    description: string;
    questions: string[];
    images: string[];
  };
}

export default function DestinationModal({ isOpen, onClose, initialData }: DestinationModalProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    code: initialData?.code || '',
    description: initialData?.description || '',
    questions: initialData?.questions || ['', ''],
    images: initialData?.images || ['', '']
  });

  if (!isOpen) return null;

  const addImage = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const addQuestion = () => {
    setFormData(prev => ({
      ...prev,
      questions: [...prev.questions, '']
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-orange-500">مقاله</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">اطلاعات مقاله</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="اسم مقاله"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="کد اول"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
              <textarea
                placeholder="متن کلی"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2 border rounded-md h-32 resize-none"
              />
            </div>

            <div className="mt-4 space-y-4">
              {formData.images.map((_, index) => (
                <div key={`image-${index}`} className="border-2 border-dashed rounded-lg p-4">
                  <div className="flex items-center justify-center h-32 bg-gray-50">
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">آپلود عکس مقاله</p>
                      <p className="text-xs text-gray-400">حداکثر سایز عکس 2MB می باشد</p>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={addImage}
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                افزودن عکس
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">سوالات ویلاژ</h3>
            <div className="space-y-4">
              {formData.questions.map((question, index) => (
                <input
                  key={`question-${index}`}
                  type="text"
                  placeholder={`سوال ${index + 1}`}
                  value={question}
                  onChange={(e) => {
                    const newQuestions = [...formData.questions];
                    newQuestions[index] = e.target.value;
                    setFormData({ ...formData, questions: newQuestions });
                  }}
                  className="w-full p-2 border rounded-md"
                />
              ))}
              <button
                onClick={addQuestion}
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                افزودن سوال
              </button>
            </div>
          </div>

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