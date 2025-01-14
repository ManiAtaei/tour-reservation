import Container from '@/components/Container'
import React from 'react'
import Blogscart from './component/Blogscart'
import Bigbaner from '@/components/Bigbaner'

function page() {
    return (
        <div className='w-full mt-[6.5rem] bg-[#bg-white] mb-[83px] '>
            <div className='flex flex-col md:flex-row md:gap-[14px] mx-auto items-center justify-center '>
                <div>
                    <img src="/blog-main/efel.svg" alt="" />
                </div>

                <div className='flex md:flex-col md:gap-[6px]'>
                    <div>
                        <img src="/blog-main/jamshid.svg" alt="" />
                    </div>

                    <div>
                        <img src="/blog-main/london-b.svg" alt="" />
                    </div>
                </div>




            </div>


            <div className=' 2xl:px-[250px] mt-9' >
                <div className=''>
                    <div>
                        <p className='text-base xl:text-6 font-xbold'>
                            جدیدترین مطالب
                        </p>

                        <Blogscart />
                    </div>
                </div>

                <Bigbaner />

                <div className=''>
                    <div>
                        <p className='text-base xl:text-6 font-xbold mt-12'>
                            پر بازدید ترین ها

                        </p>

                        <Blogscart />
                    </div>
                </div>



                <Bigbaner />


            </div>


        </div>
    )
}

export default page