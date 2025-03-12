import React from 'react';
import { LineChart, TrendingDown, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  amount: string;
  trend: number;
  color: 'green' | 'orange' | 'red';
}

const StatCard = ({ title, amount, trend, color }: StatCardProps) => {
  const colorClasses = {
    green: 'text-green-500',
    orange: 'text-orange-500',
    red: 'text-red-500'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
          <p className="text-2xl font-semibold">{amount}</p>
        </div>
        <div className={`rounded-full p-2 ${color === 'green' ? 'bg-green-100' : color === 'orange' ? 'bg-orange-100' : 'bg-red-100'}`}>
          {trend > 0 ? (
            <TrendingUp className={`h-6 w-6 ${colorClasses[color]}`} />
          ) : (
            <TrendingDown className={`h-6 w-6 ${colorClasses[color]}`} />
          )}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">۲۰٪ افزایش از ماه گذشته</p>
    </div>
  );
};

interface Payment {
  id: number;
  city: string;
  code: string;
  date: string;
  amount: string;
  status: 'پرداخت شده' | 'پرداخت نشده';
}

const payments: Payment[] = [
  {
    id: 1,
    city: 'شیراز',
    code: '65740',
    date: '1402/10/8',
    amount: '2,000,000 تومان',
    status: 'پرداخت شده'
  },
  {
    id: 2,
    city: 'تبریز',
    code: '32730',
    date: '1402/10/5',
    amount: '5,000,000 تومان',
    status: 'پرداخت نشده'
  },
  {
    id: 3,
    city: 'فرانسه',
    code: '87540',
    date: '1402/10/8',
    amount: '3,000,000 تومان',
    status: 'پرداخت نشده'
  },
  
  
];

const monthlyData = [
  10000000, 12000000, 15000000, 11000000, 13000000, 16000000,
  14000000, 17000000, 13000000, 15000000, 18000000, 16000000
];

export default function FinancialManagement() {
  return (
    <div className="space-y-8" dir="rtl">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="فروش کل"
          amount="15,000,000 تومان"
          trend={20}
          color="orange"
        />
        <StatCard
          title="تعداد پرداختی"
          amount="15,000,000"
          trend={15}
          color="green"
        />
        <StatCard
          title="تعداد رزرفی"
          amount="3,000,000"
          trend={-10}
          color="red"
        />
      </div>

      {/* Sales Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">آنالیز فروش</h3>
          <select className="p-2 border rounded-md">
            <option>فروردین</option>
            {/* Add more months */}
          </select>
        </div>
        <div className="h-64 relative">
          {/* Chart Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <LineChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">نمودار فروش</span>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ردیف
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  شهر
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  کد ثبت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تاریخ پرداخت
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  مبلغ
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  وضعیت پرداخت
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      payment.status === 'پرداخت شده'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status}
                    </span>
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
    </div>
  );
}