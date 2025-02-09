import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Datacart2() {
  const chartData = [
    { name: "کنسلی رزرو", value: 44 },
    { name: "ثبت رزرو", value: 56 },
  ];

  const COLORS = ["#FF8C42", "#5DAF6E"];

  const popularDestinations = [
    {
      title: "جزیره کیش",
      image: "/destinations/kish.jpg",
      count: "۲۰۰۰۰ رزرو",
    },
    {
      title: "تور مشهد",
      image: "/destinations/mashhad.jpg",
      count: "۱۵۰۰۰ رزرو",
    },
    {
      title: "تور دبی",
      image: "/destinations/dubai.jpg",
      count: "۱۲۰۰۰ رزرو",
    },
  ];

  const bestSellers = [
    {
      title: "تور کیش ۳ روزه",
      price: "۲,۵۰۰,۰۰۰ تومان",
      sales: "۱۲۰ فروش",
    },
    {
      title: "تور مشهد ۴ روزه",
      price: "۱,۸۰۰,۰۰۰ تومان",
      sales: "۹۵ فروش",
    },
    {
      title: "تور دبی ۵ روزه",
      price: "۸,۵۰۰,۰۰۰ تومان",
      sales: "۸۰ فروش",
    },
  ];

  return (
    <div className="mt-8 px-4">
      <div className="flex justify-between gap-4">
        <div className="bg-white rounded-lg p-6 shadow-md w-[450px]">
          <h3 className="text-lg font-xbold mb-4">آنالیز رزروها</h3>
          <div className="">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span className="text-sm">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md w-[450px]">
          <div className="flex items-center justify-center border-b-2 pb-1 border-[#FFDCC6]">
            <h3 className="text-lg font-xbold mb-4">پربازدیدترین  وبلاگ</h3>
          </div>

          <div className="space-y-4">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <span className="font-xmedium">{destination.title}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {destination.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md w-[450px]">
          <div className="flex items-center justify-center border-b-2 pb-1 border-[#FFDCC6]">
            <h3 className="text-lg font-xbold mb-4">پرفروش‌ترین تورها</h3>
          </div>
          <div className="space-y-4">
            {bestSellers.map((tour, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex flex-col">
                  <span className="font-xmedium">{tour.title}</span>
                  <span className="text-sm text-gray-600">{tour.price}</span>
                </div>
                <span className="text-sm text-[#5DAF6E]">{tour.sales}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datacart2;
