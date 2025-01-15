import React from 'react'

function Activity() {
    return (
        <div className='w-[904px]'>
            <div>
                <img src="/about-us/2.svg" alt="img" />
            </div>

            <div className='mt-3 bg-white py-6 px-8'>
                <div className='border-b border-[#E5E5E5]'>
                    <p className='text-[20px] font-xbold pb-2'>
                        فعالیت درنا
                    </p>
                </div>

                <div className='mt-4 text-[#424242] text-[18px] font-xmedium '>
                    <p>
                        وب‌سایت گردشگری دورنا با هدف ایجاد تجربه‌ای ساده، یکپارچه و دلپذیر برای کاربران، فعالیت‌های متنوعی را ارائه می‌دهد :
                    </p>
                </div>

                <div className='mt-2'>
                    

                    <div>
                        <ol className='list-decimal mt-3 text-[#424242] text-[18px] font-xmedium pr-4' >
                            <li>امکان مقایسه اسان تور ها
                            </li>
                            <li>تنوع بالا در انتخاب تور</li>
                            <li>فراهم کردن بهترین امکانات برای مسافران</li>
                            <li> ایجاد فضای امن برای کاربران و ارائه خدمات معتبر</li>
                            <li>معرفی مکان‌های دیدنی، راهنماهای سفر و اطلاعات فرهنگی</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity