import React from 'react'
import { installList } from './common/Helper'

const Installation = () => {
    return (
        <div className='xl:mt-[142px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 max-w-[1180px] mx-auto px-4'>
            <h2 className='font-lulo mb-10 max-w-[706px] mx-auto sm:mb-14 md:mb-[60px] text-center font-bold 992:text-4xl md:text-3xl text-2xl !leading-148 text-white'>One-click install on any crm & sep</h2>
            <div className='flex flex-wrap justify-center items-center gap-6'>
                {installList.map((obj, index) => {
                    return (
                        <div className='images' key={index}>
                            <a href={obj.href} target='_blank'><img src={obj.img} alt="img installList" className='rounded-200 border-opacity-20 max-w-[170px] max-sm:max-w-[150px] border border-light-green shadow-green-xl hover:scale-90 duration-200' />
                            </a>
                        </div>
                    )
                })}
            </div>
            <p className='text-lg sm:text-xl text-center lg:mb-24 md:mb-20 sm:mb-16 mb-14 xl:mb-100 md:text-2xl font-proxima-bold font-bold text-white mt-11 !leading-122'>+25 other GTM systems</p>

        </div>
    )
}

export default Installation