import React from 'react'
import { prospectingList } from './common/Helper'
import arrow from '../assets/images/svg/arrow-green.svg'

const Prospecting = () => {
    return (
        <div className='px-4'>
            <div className='bg-purple-green p-1 mx-auto xl:mt-[120px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 shadow-green-large max-w-[1340px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-32'>
                <div className='max-w-[1340px] mx-auto bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-32 py-12 md:py-16 lg:py-20'>
                    <h2 className='992:text-4xl md:text-3xl text-2xl text-center mx-auto text-black font-lulo !leading-120 max-w-[487px]'>Prospecting on auto-pilot</h2>
                    <p className='text-lg sm:text-xl md:text-2xl font-bold font-proxima-bold mb-14 pb-1 text-black mt-3.5 !leading-122 text-center mx-auto'>Find buyers while you sleep</p>
                    <div className='grid sm:grid-cols-2 992:grid-cols-3 max-w-[1140px] mx-auto'>
                        {prospectingList.map((obj, index) => (
                            <div key={index} className={` ${index === 2 ? "justify-end mt-10 992:mt-0" : index === 1 ? "justify-center mt-10 sm:mt-0" : ""} flex max-992:justify-center items-start relative`}>
                                <img src={arrow} alt='green arrow' className={`${index === 2 ? "hidden" : index === 1 ? "absolute end-[-50px] max-992:hidden top-[70px]" : index === 0 ? "end-[-20px] hidden sm:block 992:end-0 absolute top-[70px]" : ""}`} />
                                <div className={` ${index === 0 ? "max-w-[298px] max-sm:gap-4" : index === 1 ? "max-w-[315px]" : index === 2 ? "max-w-[263px]" : ""} flex flex-col items-center justify-center sm:gap-8 gap-6 md:gap-[38px]`}>
                                    <img src={obj.img} alt="img-icon" className='max-xl:size-[90px]' />
                                    <p className='992:text-2xl sm:text-xl text-lg text-dark-brown text-center font-semibold font-proxima-semibold !leading-122'>{obj.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prospecting;
