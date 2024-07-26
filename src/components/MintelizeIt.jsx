import React from 'react'
import { mintelizeList, timeList } from './common/Helper'
import { Timer } from './common/SvgIcons'
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MintelizeIt = () => {
    return (
        <div className='xl:mt-[142px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 relative'>
            <div className="px-4 max-w-[1180px] mx-auto">
                <div className="size-[192px] right-[-142px] absolute bg-light-green blur-[130px] animate-pulse top-[250px]"></div>
                <h2 className='font-lulo mb-10 sm:mb-14 md:mb-[60px] text-center font-bold 992:text-4xl md:text-3xl text-2xl !leading-120 text-white'>Mintelize It</h2>
                <div className='flex items-center justify-center'>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-6 576:grid-cols-2'>
                        {mintelizeList.map((obj, index) => {
                            return (
                                <div key={index} className={`${index === 3 ? "max-xl:relative max-xl:left-[107%] max-lg:left-0 max-xl:translate-x-0" : "" } bg-light-green max-sm:max-w-[346px] sm:w-full mx-auto bg-opacity-20 !max-h-[562px] min-h-[350px] duration-300 group p-[1px] hover:bg-opacity-100 rounded-md shadow-small-green`}>
                                    <div key={index} className='h-full relative group-hover:shadow-box-green bg-black duration-300 group-hover:bg-theme-green rounded-md py-8 px-5'>
                                        <div className='bg-light-green h-0 w-full group-hover:h-1.5 duration-300 absolute bottom-0 left-0 rounded-bl-md rounded-br-md z-[1]'></div>
                                        <div className='flex flex-col gap-8 items-center justify-center text-center'>
                                            <span>{obj.icon}</span>
                                            <div className='flex flex-col gap-2.5'>
                                                <p className='text-white font-bold text-xxl font-proxima-bold leading-122'>{obj.title}</p>
                                                <div className={`${index === 0 ? "block" : "hidden"} h-[72px] max-w-[209px] mx-auto overflow-hidden rounded-xl border-white border items-center border-opacity-30 px-8 flex gap-3`}>
                                                    <span><Timer /></span>
                                                    <div className='h-[98px] mt-0.5 p-2.5 overflow-hidden'>
                                                        <div className='h-[728px] mentilize'>
                                                            <Swiper
                                                                key={index}
                                                                modules={[A11y, Autoplay]}
                                                                slidesPerView={1}
                                                                centeredSlides={true}
                                                                loop={true}
                                                                autoplay={{
                                                                    delay: 2000,
                                                                    disableOnInteraction: false,
                                                                }}
                                                                speed={1000}

                                                                direction='vertical'
                                                            >
                                                                {timeList.map((obj, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <p className='text-white self-justify mt-3 text-2xxl font-proxima-semibold text-nowrap font-semibold'>{obj.time}</p>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='text-grey-white font-normal font-proxima-normal text-lg sm:text-xl 992:text-2xl !leading-150'>{obj.description} <span className='font-bold text-white'>{obj.data}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MintelizeIt