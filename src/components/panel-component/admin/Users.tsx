"use client"
import React, { useState } from 'react';
import { Edit, Trash } from 'lucide-react';
// import UserModal from './UserModal';
import UsersModal from './usersmodal/UsersModal';

interface User {
  id: number;
  name: string;
  userId: string;
  gender: string;
  mobile: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'کاوه راد',
    userId: '65740',
    gender: 'مرد',
    mobile: '09123456789',
    email: 'kave.rad@gmail.com'
  },
  {
    id: 2,
    name: 'سارا نیا',
    userId: '74740',
    gender: 'زن',
    mobile: '09125633333',
    email: 'sara@gmail.com'
  },
];

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-4 px-4 border-b border-[#E0E0E0]">
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">
          کاربران
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200" dir="rtl">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ردیف
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  نام کاربر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  کد کاربر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  جنسیت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  شماره موبایل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ایمیل
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ادیت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                    {user.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
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

      <UsersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </>
  );
}