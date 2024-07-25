import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { brandsList } from './common/Helper';

const Brands = () => {
    return (
        <div className='px-4'>
            <div className='bg-purple-green p-1 mx-auto xl:mt-[108.59px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 shadow-green-large max-w-[1340px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-32'>
                <div className='max-w-[1340px] mx-auto bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-32 py-12 md:py-16 lg:py-20 xl:py-[106px]'>
                    <h2 className='992:text-4xl px-3 md:text-3xl text-2xl text-center mx-auto text-black font-lulo !leading-120'>Brands That Trust Us</h2>
                    <div className='max-w-[1172px] px-4 mx-auto brands mt-10'>
                        <Swiper
                            modules={[A11y, Autoplay]}
                            centeredSlides={true}
                            slidesPerView={1.2}
                            roundLengths={true}
                            spaceBetween={20}
                            loop={true}
                            scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            speed={2000}
                            breakpoints={{
                                450: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                        >
                            {brandsList.map((obj, index) => (
                                <SwiperSlide key={index}>
                                    <div className='shadow-small-black rounded-md border border-black border-opacity-20 min-h-[120px] sm:min-h-[167px] flex justify-center items-center'>
                                        <img src={obj.img} alt="img brand" className={` ${index === 1 || 4 ? "max-w-[178px]" : ""} max-576:scale-75 576:scale-90 md:scale-100`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands;
