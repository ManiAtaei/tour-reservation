import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'

const url = [
    {id : 1 , text : "تاریخچه درنا" , url : '/#' },
    {id : 2 , text : "تاریخچه درنا" , url : '/#' },
    {id : 3 , text : "تاریخچه درنا" , url : '/#' },
    {id : 4 , text : "تاریخچه درنا" , url : '/#' },
]

export default function page() {
  return (
   <Container>
    <div className='mt-[6.2rem]'>
        <div className='flex '>
            <div className='w-[286px]'>
                {
                    url.map((item) => (
                        <div key={item.id}>
                            <Link href={item.url}>
                            
                            </Link>
                        </div>
                    ) )
                }
            </div>
        </div>
    </div>
   </Container>
  )
}
