import React from 'react'

function History() {
    return (
        <div className='w-[904px]'>
            <div>
                <img src="/about-us/1.svg" alt="History Image" />
            </div>

            <div className='mt-3 bg-white py-6 px-8'>
                <div className='border-b border-[#E5E5E5]'>
                    <p className='text-[20px] font-xbold pb-2'>
                        تاریخچه درنا
                    </p>
                </div>

                <div className='mt-4 text-[#424242] text-[18px] font-xmedium '>
                    <p>
                        وب‌سایت گردشگری درنا در سال ۱۴۰۲ با هدف ارتقای دسترسی کاربران به خدمات گردشگری و اطلاعات سفر راه‌اندازی شد. این پروژه توسط تیمی از متخصصان طراحی، توسعه و بازاریابی، بر پایه شناخت دقیق از نیازهای مسافران ایرانی و فناوری‌های روز دنیا، به وجود آمد.
                    </p>
                    <p>
                        ایده‌ی اصلی دورنا در پاسخ به چالش‌های موجود در بازار گردشگری ایران، مانند پراکندگی اطلاعات و دشواری دسترسی به خدمات یکپارچه، شکل گرفت. با توجه به این نیازها، وب‌سایت دورنا طراحی شد تا مرجعی جامع و قابل اعتماد برای کاربران باشد و تمامی خدمات گردشگری از جمله رزرو تور، اقامتگاه و بلیت را در یک پلتفرم ارائه دهد.
                    </p>
                </div>

                <div className='mt-5'>
                    <div className='text-[#424242] text-lg font-xbold'>
                        اهداف
                    </div>

                    <div>
                        <ul className='list-disc mt-3 text-[#424242] text-[18px] font-xmedium pr-4'>
                            <li>امکان مقایسه آسان تورها</li>
                            <li>تنوع بالا در انتخاب تور</li>
                            <li>فراهم کردن بهترین امکانات برای مسافران</li>
                            <li>ایجاد فضای امن برای کاربران و ارائه خدمات معتبر</li>
                            <li>معرفی مکان‌های دیدنی، راهنماهای سفر و اطلاعات فرهنگی</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
