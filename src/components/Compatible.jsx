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
                                <img src={obj.img} alt="img links" className='max-sm:scale-[80%] sm:scale-90 md:scale-100' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Compatible