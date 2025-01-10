import React from 'react'

function CoreCart() {
    return (
        <div className="mt-12 px-6 py-4 bg-white rounded-md">
            <div className=" px-[38px] py-[41px] bg-[#EFF7F066]/40 rounded-l-lg flex flex-col lg:flex-row  gap-4">
                <div className="flex flex-col items-start gap-4 justify-between lg:w-[40%]">

                    <div className='flex justify-between gap-4 flex-col'>
                        <div className="md:hidden">
                            <img src="/select-slide/main.png" alt="" />
                        </div>


                        <h2 className="text-[26px] font-xbold text-[#FF8C42]">
                            کره جنوبی
                        </h2>

                        <h2 className="text-[20px] font-xbold">
                            شهر: سئول
                        </h2>

                        <p className="font-xregular text-[16px]">
                            گردشگران می‌توانند هماهنگی متمایز بین میراث فرهنگی تاریخی و فرهنگ مدرن را در کرده تجربه کنند.
                        </p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <p className="font-xregular text-[16px] flex items-center">
                            شروع قیمت از <p className="text-[#4A90E2]">18.000.000</p> تومان
                        </p>

                        <button className=" w-full 2xl:w-3/4 bg-[#5DAF6E] text-white rounded-lg py-2">
                            انتخاب تور
                        </button>
                    </div>

                </div>

                <div className="hidden md:flex gap-4 w-full lg:w-[60%] flex-col lg:flex-row justify-end lg:gap-20">
                    <div className="w-full lg:h-[310px] lg:w-[508px]">

                        <img className="w-full h-full bg-cover" src="/select-slide/main.png" alt="ssss" />

                    </div>

                    <div className="flex flex-row lg:flex-col justify-between  ">
                        <div >
                            <img src="/select-slide/1.png" alt="" />
                        </div>

                        <div>
                            <img src="/select-slide/2.png" alt="" />
                        </div>

                        <div>
                            <img src="/select-slide/3.png" alt="" />
                        </div>

                        <div>
                            <img src="/select-slide/4.png" alt="" />
                        </div>

                        <div className='lg:hidden'>
                            <img src="/select-slide/4.png" alt="" />
                        </div>

                        <div className='lg:hidden'>
                            <img src="/select-slide/4.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoreCart