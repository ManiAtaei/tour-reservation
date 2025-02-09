import React from 'react'
import DataCart from './dashbord-component/DataCart'
import DataCart2 from './dashbord-component/Datacart2'
import ChartData from './dashbord-component/ChartData'


function Dashbord() {
  return (
    <div>
        <div className='pt-4 px-4 border-b border-[#E0E0E0]'>
            <h1 className='text-3xl font-xbold text-[#FF8C42] pb-4'>داشبورد</h1>
        </div>

        <div>
          <DataCart />
        </div>

        <div>
          <DataCart2 />
        </div>

        <div className='px-4 mt-5' >
          <ChartData />
        </div>
    </div>

  )
}


export default Dashbord