import React from 'react'

function Bigbaner() {
    return (
        <div className="mt-8 w-full flex flex-col md:flex-row-reverse h-[328px]">
            <div className="w-full h-full bg-[#FFD1B3] flex items-center justify-center gap-4 flex-col py-10 rounded-t-lg md:w-[450px] md:rounded-l md:rounded-t-none md:rounded-l-lg  ">
                <p className="font-xbold text-[32px]">
                    کاخ دروازه ملل
                </p>

                <p className="font-xbold text-[16px]">
                    ارگ پادشاهی هخامنشی
                </p>


                <button className='btn bg-[#5DAF6E] text-white border-none text-sm font-xbold w-1/2 py-2 rounded-lg mt-8'>
                    مشاهده مقاله
                </button>

            </div>

            <div className="h-full w-full hidden md:block">
                <img src="/banner/kakh.png" alt="" className="rounded-b md:rounded-r-l md:rounded-none h-full w-full " />
            </div>



        </div>
    )
}

export default Bigbaner