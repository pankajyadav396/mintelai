import React from 'react'
import { KnowList } from './common/Helper'

const DidYouKnow = () => {
    return (
        <div className='relative z-10 bg-black lg:mt-20 md:mt-16 mt-14 '>
            <div className="size-[192px] right-[-142px] absolute bg-light-green blur-[130px] animate-pulse top-[390px]"></div>
            <div className='text-center mt-0.5'>
                <h2 className='font-lulo font-bold 992:text-4xl md:text-3xl text-2xl !leading-120 text-white uppercase'>Did you know?</h2>
                <p className='font-bold text-lg sm:text-xl md:text-2xl font-proxima-bold leading-122 mt-3.5 mb-10 sm:mb-12 md:mb-14 pb-1 text-white'>Salespeople suffer, instead of selling</p>
            </div>
            <div className='max-w-[1140px] mx-auto px-4 flex items-center justify-center '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]'>
                    {KnowList.map((obj, index) => {
                        return (
                            <div key={index} className={` ${index === 1 ? "lg:min-h-[296px] lg:bg-dark-green p-0 shadow-xs-green" : ""} bg-light-green p-[1px] my-auto lg:hover:h-[296px] max-md:max-w-[450px] mx-auto max-lg:min-h-[260px] hover:duration-300 duration-300 group lg:h-[239px] bg-opacity-20 rounded-xl shadow-small-green`} >
                                <div className={` ${index === 1 ? "lg:bg-dark-green lg:py-8 bg-black1 lg:shadow-grey-green" : "bg-black1"} group-hover:shadow-grey-green group-hover:bg-dark-green duration-300 max-lg:min-h-[260px] h-full w-full rounded-xl gap-5 xl:py-8 py-4 lg:px-10 px-4 flex flex-col items-center justify-center`}>
                                    <span className={`${index === 1 ? "size-16 lg:size-[72px]" : ""} size-16 duration-300`}>{obj.icon}</span>
                                    <h3 className={`${index == 1 ? "lg:text-xxl text-2xl" : ""} md:text-2xl text-xl lg:group-hover:text-xxl duration-300 font-proxima-semibold text-center font-semibold text-white`}>{obj.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DidYouKnow