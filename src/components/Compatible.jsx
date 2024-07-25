import React from 'react'
import { compatibleList } from './common/Helper'

const Compatible = () => {
    return (
        <div className='xl:mt-[146px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 px-4 relative'>
            <div className="size-[192px] left-[-96px] absolute bg-light-green blur-[130px] animate-pulse top-0"></div>
            <div className='max-w-[829px] mx-auto'>
                <h2 className='font-lulo mb-10 sm:mb-14 md:mb-[60px] text-center font-bold 992:text-4xl md:text-3xl text-2xl  !leading-120 text-white uppercase'>COMPATIBLE WITH</h2>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {compatibleList.map((obj, index) => {
                        return (
                            <div key={index} className='max-sm:max-w-[300px] max-sm:mx-auto'>
                                <img src={obj.img} alt="img links" className={`${index === 0 ? "max-md:max-w-[141px] max-sm:max-w-[128px]" : index === 1 ? "max-md:max-w-[108px] max-sm:max-w-[97.7px]" : index === 2 ? "max-md:max-w-[210px] max-sm:max-w-[190px]" : ""} `} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Compatible