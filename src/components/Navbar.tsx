"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginModal from "@/components/login-modal/LoginModal";
import Image from "next/image";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const menuhandler = () => setMenu(!menu);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        setMenu(false);
    }, [pathname]);

    const navItem = pathname.includes("/blogs")
        ? [
            { name: "خانه", url: "/blogs", icon: "/nav-icon/1.svg" },
            { name: "ایران گردی", url: "/blogs/iran-tour", icon: "/nav-icon/2.svg" },
            { name: "جهان گردی", url: "/blogs/iran-tour", icon: "/nav-icon/3.svg" },
        ]
        : [
            { name: "تور های داخلی", url: "/#", icon: "/nav-icon/1.svg" },
            { name: "تور های خارجی", url: "/#", icon: "/nav-icon/2.svg" },
            { name: "وب لاگ", url: "/blogs", icon: "/nav-icon/3.svg" },
            { name: "درباره ما", url: "/about-us", icon: "/nav-icon/4.svg" },
        ];

    return (
        <nav className="flex flex-row-reverse items-center justify-between bg-[#f9f9f9] px-6 py-[7px] w-full fixed top-0 left-0 z-50 shadow-custom-soft">
            {menu && (
                <div
                    onClick={menuhandler}
                    className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
                ></div>
            )}

            <button
                onClick={menuhandler}
                className="btn btn-square bg-zinc-300 z-50 md:hidden"
            >
                {menu ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                )}
            </button>

            <div className="hidden md:block">
                <button
                    onClick={openModal}
                    className="btn bg-[#5DAF6E] w-[154px] text-white flex flex-row-reverse items-center gap-2 hover:bg-[#50965e]"
                >
                    <div className="text-base font-xregular">ورود / ثبت نام</div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </div>
                </button>
            </div>

            <div className="flex items-center gap-7">
                <Link href={"/"}>
                    <Image src="/nav-icon/nav-logo.svg" alt="logo" width={100} height={40} />
                </Link>
                <div className="hidden md:flex gap-4 p-2 text-black">
                    <ul className="flex items-center justify-center gap-4">
                        {navItem.map((item, index) => (
                            <li key={index} className="p-2 text-base font-xregular">
                                <Link
                                    href={item.url}
                                    className="flex flex-row-reverse gap-3 items-center hover:text-green-500 hover:underline"
                                >
                                    {item.name}
                                    <Image
                                        src={item.icon}
                                        className="w-6 h-6 hidden lg:block hover:text-green-500"
                                        alt={`${item.name} icon`}
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>   
                </div>
            </div>

            {/* لیست منوی موبایل */}
            <div
                className={`bg-white w-[320px] h-screen fixed top-0 right-0 z-50 transition-all duration-300 ease-in-out p-8 border flex flex-col gap-8 ${menu ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b pb-4">
                    <button onClick={menuhandler} className="btn btn-square bg-zinc-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col gap-4">
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="flex gap-4 items-center hover:text-green-500 hover:underline"
                                href={item.url}
                            >
                                {item.name}
                                <Image
                                    src={item.icon}
                                    alt={`${item.name} icon`}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
}

export default Navbar;
