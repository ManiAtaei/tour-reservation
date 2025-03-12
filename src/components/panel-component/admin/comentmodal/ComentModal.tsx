import React, { useState } from 'react';
import { X, Edit } from 'lucide-react';

interface CommentReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string | null;
}

interface UserComment {
  id: number;
  user: string;
  date: string;
  score: number;
  status: 'تایید شده' | 'رد شده';
}

const sampleComments: UserComment[] = [
  {
    id: 1,
    user: 'کیوان راد',
    date: '1402/12/10',
    score: 5,
    status: 'تایید شده'
  },
  {
    id: 2,
    user: 'علی راد',
    date: '1402/12/13',
    score: 5,
    status: 'رد شده'
  },
];

interface RatingCategory {
  title: string;
  items: number[];
}

const ratingCategories: RatingCategory[] = [
  {
    title: 'خدمات',
    items: [5, 4, 3, 2, 1]
  },
  {
    title: 'برخورد کارمندی',
    items: [5, 4, 3, 2, 1]
  },
  {
    title: 'نظافت و تمیزی',
    items: [5, 4, 3, 2, 1]
  }
];

export default function ComentModal({ isOpen, onClose, hotelName }: CommentReviewModalProps) {
  const [selectedComment, setSelectedComment] = useState<UserComment | null>(null);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleCommentClick = (comment: UserComment) => {
    setSelectedComment(comment);
  };

  const handleRatingSelect = (category: string, value: number) => {
    setRatings(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" dir="rtl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-orange-500">نظر کاربر</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {!selectedComment ? (
          <div className="space-y-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">ردیف</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">نام کاربر</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">تاریخ ارسال</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">امتیاز</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">وضعیت</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">ادیت</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sampleComments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{comment.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comment.score}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        comment.status === 'تایید شده' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {comment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleCommentClick(comment)}
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
        ) : (
          <div className="space-y-6">
            {ratingCategories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="font-medium">{category.title}</h3>
                <div className="flex gap-2">
                  {category.items.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRatingSelect(category.title, value)}
                      className={`w-8 h-8 rounded-full border ${
                        ratings[category.title] === value
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 hover:border-orange-500'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-2">
              <h3 className="font-medium">نظر کاربر</h3>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border rounded-md h-32 resize-none"
                placeholder="هتل بسیار تمیز و مرتب بود..."
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedComment(null)}
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                بازگشت
              </button>
              <button
                onClick={() => {
                  setSelectedComment(null);
                  onClose();
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                تایید
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}