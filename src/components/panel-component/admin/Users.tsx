"use client";
import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
// import UserModal from './UserModal';
import UsersModal from "./usersmodal/UsersModal";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
    name: "کاوه راد",
    userId: "65740",
    gender: "مرد",
    mobile: "09123456789",
    email: "kave.rad@gmail.com",
  },
  {
    id: 2,
    name: "سارا نیا",
    userId: "74740",
    gender: "زن",
    mobile: "09125633333",
    email: "sara@gmail.com",
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
        <h1 className="text-3xl font-xbold text-[#FF8C42] pb-4">کاربران</h1>
      </div>
      <div className="bg-white rounded-lg  overflow-hidden mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full" dir="rtl">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  ردیف
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  نام کاربر
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  کد کاربر
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  جنسیت
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  شماره موبایل
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
                  ایمیل
                </th>
                <th className="px-6 py-3 text-right font-xbold text-base ">
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

      <UsersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </>
  );
}
