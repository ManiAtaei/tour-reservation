import React from 'react'

function DataCart() {
  const cartData = [
    {
      title: 'تعداد کاربران',
      value: '۱۰,۰۰۰ نفر',
      change: '۲۰٪ بیشتر از هفته گذشته',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF8C42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'تعداد تور ها',
      value: '۱۰۰,۰۰۰ تور',
      change: '۵٪ بیشتر از هفته گذشته',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF8C42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: 'فروش کل',
      value: '۱۵,۰۰۰,۰۰۰ تومان',
      change: 'افزایش از ماه گذشته ',
      icon: null
    }
  ]

  return (
    <div className='mt-10 '>
      <div className=' flex justify-between gap-4 px-4'>
        {cartData.map((item, index) => (
          <div key={index} className='bg-white rounded-lg p-4 shadow-md w-[450px]'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-4'>
                <h3 className='text-base font-xbold text-[#424242]'>{item.title}</h3>
                <p className='text-3xl font-xmedium  mt-2'>{item.value}</p>
                {item.change && <p className='text-sm font-xregular mt-1'>{item.change}</p>}
              </div>
              {item.icon && (
                <div className='bg-[#FF8C42]/10 p-3 rounded-full'>
                  {item.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataCart