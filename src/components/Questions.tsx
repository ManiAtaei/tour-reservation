import React from 'react'

function Questions() {
    return (
        <div className='mt-10 flex flex-col w-full justify-center gap-8 items-center md:flex-row-reverse'>

            <div className='hidden lg:block  flex items-center justify-center w-[850px] h-[266px]'>
                <img className='mx-auto scale-125' src="/q.png" alt="" />
            </div>

            <div className='flex flex-col gap-2 w-full '>

                <div className='font-xbold text-2xl mb-6'>
                    سوالات متداول
                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium border-b flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            چه مدارکی برای ثبت‌نام در تورهای داخلی نیاز است؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium border-b flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            چه مدارکی برای ثبت‌نام در تورهای داخلی نیاز است؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200 bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium border-b flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            چه مدارکی برای ثبت‌نام در تورهای داخلی نیاز است؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200 bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-base font-medium border-b flex items-center gap-4 ">
                        <div>
                            <img src="/nav-icon/soal.png" alt="" />
                        </div>

                        <div>
                            چه مدارکی برای ثبت‌نام در تورهای داخلی نیاز است؟
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Questions




