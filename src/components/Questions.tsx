import React from 'react'

function Questions() {
    return (
        <div className='mt-10 flex flex-col w-full justify-center gap-8 items-center md:flex-row-reverse'>

            <div className='hidden lg:block  flex items-center justify-center w-[850px] h-[266px]'>
                <img className='mx-auto scale-125' src="/q.png" alt="" />
            </div>

            <div className='flex flex-col gap-4 w-full '>

                <div className='font-xbold text-2xl mb-6'>
                    آیا می‌توانم تور داخلی را تغییر یا لغو کنم؟

                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white shadow-custom-soft">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium  flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            برای ثبت‌نام در تورهای داخلی، شما نیاز به کارت شناسایی معتبر (کارت ملی یا شناسنامه) .
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>برای ثبت‌نام در تورهای داخلی، شما نیاز به کارت شناسایی معتبر (کارت ملی یا شناسنامه) .</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white shadow-custom-soft">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium  flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            آیا می‌توانم تور داخلی را تغییر یا لغو کنم؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>بله، در صورتی که تور هنوز آغاز نشده باشد، شما می‌توانید رزرو خود را تغییر یا لغو کنید .</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white shadow-custom-soft">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium  flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            هزینه تورهای داخلی شامل چه مواردی می‌شود؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>
                            هزینه‌های تورهای داخلی معمولاً شامل حمل‌ونقل، اقامت، غذا (در صورتی که ذکر شده باشد)
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white shadow-custom-soft">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium  flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            چه مدارکی برای ثبت‌نام در تورهای خارجی نیاز است؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>برای ثبت‌نام در تورهای داخلی، شما نیاز به کارت شناسایی معتبر (کارت ملی یا شناسنامه) .</p>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Questions




