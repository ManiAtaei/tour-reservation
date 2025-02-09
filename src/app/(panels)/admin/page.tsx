"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  Map,
  Building2,
  MessageSquare,
  Calendar,
  Users as UsersIcon,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Dashbord from "@/components/panel-component/admin/Dashbord";
import Tours from "@/components/panel-component/admin/Tours";
import BlogManagement from "@/components/panel-component/admin/BlogManagement";
import CommentManagement from "@/components/panel-component/admin/CommentManagement";
import Reservations from "@/components/panel-component/admin/Reservations";
import Users from "@/components/panel-component/admin/Users";
import FinancialManagement from "@/components/panel-component/admin/FinancialManagement";

const ComponentMap = {
  Dashboard :  Dashbord,
  Tours :  Tours,
  BlogManagement :  BlogManagement,
  CommentManagement :  CommentManagement,
  Reservations :  Reservations,
  Users :  Users,
  FinancialManagement :  FinancialManagement,

};

export default function App() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "داشبورد", component: "Dashboard" },
    { icon: <Map size={20} />, label: "تورها", component: "Tours" },
    { icon: <Building2 size={20} />, label: "مدیریت وبلاگ", component: "BlogManagement" },
    { icon: <MessageSquare size={20} />, label: "مدیریت نظرات", component: "CommentManagement" },
    { icon: <Calendar size={20} />, label: "رزروها", component: "Reservations" },
    { icon: <UsersIcon size={20} />, label: "کاربران", component: "Users" },
    { icon: <Wallet size={20} />, label: "مدیریت مالی", component: "FinancialManagement" },
  ];

  const ActiveComponent = ComponentMap[activeComponent as keyof typeof ComponentMap];

  return (
    <div className="flex bg-[#F9F9F9]">
      <aside className="w-[207px] min-h-screen bg-white border-l">
        <div className="">
          <div className="flex items-center justify-center pt-4">
            <Image src="/logo-main.svg" alt="logo" width={111} height={95} />
          </div>

          <nav className="space-y-1 mt-2">
            {menuItems.map((item) => (
              <div
                key={item.component}
                onClick={() => setActiveComponent(item.component)}
                className={`flex items-center gap-3 px-4 py-4 transition-colors border-b-2 cursor-pointer ${
                  activeComponent === item.component ? "text-[#5DAF6E] font-xbold text-lg" : ""
                }`}
              >
                <span>{item.icon}</span>
                <span className="text-base font-xmedium">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-4">
        <ActiveComponent />
      </main>
    </div>
  );
}