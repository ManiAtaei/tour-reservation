import Container from '@/components/Container'
import React from 'react'
import Bigbaner from '@/components/Bigbaner'
import Blogscart from '@/app/blogs/component/Blogscart'


function page() {
    return (
        <div className='bg-white mt-[6.4rem]'>
            <Container>

                <div>
                    <div className='pt-8'>
                        <div>
                            <div className='flex items-center gap-2  text-[18px]'>
                                <p className='text-[#757575] font-xregular'>خانه</p>
                                <p>/</p>
                                <p className='text-[#5B5B5B] text-[18px] font-xregular'> ایران گردی</p>
                            </div>
                        </div>
                        <Blogscart />
                    </div>

                    <div className='flex mt-[60px]'>
                        <div className='w-[70%]'>
                            <div className='w-full flex'>

                                <div className='w-1/2 flex flex-col  justify-center'>
                                    <div className='w-full'>
                                        <img src="/blog-main/iran-tour/1.png" alt="" />
                                    </div>
                                    <div className='w-full  bg-[#FFE8D93D]/20'>
                                        <p className='px-6 py py-3 max-w-[400px]'>
                                            تخت جمشید در شهر باستانی پارسه یکی از شهرهای باستانی ایران قرار داشته است که طی سالیان، پیوسته پایتخت تشریفاتی هخامنشی بوده است.
                                        </p>
                                    </div>
                                </div>

                                <div className='w-1/2 flex flex-col  justify-center'>
                                    <div className='w-full'>
                                        <img src="/blog-main/iran-tour/1.png" alt="" />
                                    </div>
                                    <div className='w-full  bg-[#FFE8D93D]/20'>
                                        <p className='px-6 py py-3 max-w-[400px]'>
                                            تخت جمشید در شهر باستانی پارسه یکی از شهرهای باستانی ایران قرار داشته است که طی سالیان، پیوسته پایتخت تشریفاتی هخامنشی بوده است.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page