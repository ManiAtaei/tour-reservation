import React from 'react'

const iconf = [
    { id: 1, link: '/footer-icon/instagram.png' },
    { id: 2, link: '/footer-icon/whatsapp.svg' },
    { id: 3, link: '/footer-icon/facebook.png' },
    { id: 4, link: '/footer-icon/youtube.png' },
]

const ulitem = [
    { id: 1, text: "درباره ما" },
    { id: 2, text: "تماس باما" },
    { id: 3, text: "سوالات پرتکرار" },
    { id: 4, text: "قوانین" },
    { id: 5, text: "شرایط لغو" },
    { id: 6, text: "وبلاگ" },
]

const namad = [
    { id: 1, icon: "/namad/enamd.svg" },
    { id: 2, icon: "/namad/samandehi 1.svg" },
    { id: 3, icon: "/namad/3.svg" }
]

function Footer() {
    return (
        <footer className=' max-w-full  2xl:px-[200px] bg-[#F9F9F9] mx-auto flex flex-col gap-4 shadow-custom-soft     '>
            <div className="border-b pt-6">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img src="/d3.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[18px] font-xmedium '>شرکت مسافرتی درنا</p>
                            <p className='text-[16px] font-xmedium text-[#757575]'>آنجا که سفر آغاز می‌شود، درنا در کنار شماست</p>
                        </div>
                    </div>

                    <div className='flex gap-[18px] flex-wrap'>
                        {iconf.map((icon) => (
                            <img key={icon.id} src={icon.link} alt="icon" />
                        ))}
                    </div>
                </div>
            </div>

            <div className='pr-4 flex gap-[272px]'>
                <div>
                    <ul>
                        <li className='text-[#5DAF6E] text-[18px] font-xbold border-b-2 border-orange-500 w-[30px]'>
                            درنا
                        </li>

                        {
                            ulitem.map((text) => (
                                <li key={text.id} className='font-xregular text-[16px] mt-5'>
                                    {text.text}
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className='flex flex-col gap-[72px] py-[69px]'>
                    <div className='flex flex-col gap-[22px]'>
                        <div>
                            <p className='text-[18px] font-xregular'>
                                تلفن پشتیبانی:  ۲۲۴۵۸۴۳۲-۰۲۱
                            </p>
                        </div>

                        <div>
                            <p className='text-[18px] font-xregular'>
                                دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-4'>
                            {
                                namad.map((icon) => (
                                    <img key={icon.id} src={icon.icon} alt="" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t py-[30px] pr-4'>
                <p className='text-[12px] font-xregular'>
                    کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت مسافرتی دورنا می‌باشد
                </p>
            </div>

        </footer>
    )
}

export default Footer