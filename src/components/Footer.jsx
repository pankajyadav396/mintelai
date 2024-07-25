import linked from '../assets/images/svg/linked-in-footer.svg'
import aws from '../assets/images/svg/aws-start-up.svg'
import microsoft from '../assets/images/svg/microsoft-start-up.svg'
import google from '../assets/images/svg/google-start-up.svg'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='xl:mt-[100px] lg:mt-24 md:mt-20 sm:mt-16 mt-14 relative'>
            <div className="size-[192px] right-[-142px] absolute bg-light-green blur-[130px] animate-pulse top-0"></div>
            <div className='max-w-[1172px] pb-14 mb-1 px-4 mx-auto'>
                <div className="flex flex-col 992:flex-row items-center justify-center 992:justify-between max-992:gap-8">
                    <div className="992:w-[447px] w-full">
                        <h2 className='font-lulo font-bold max-992:mx-auto max-992:text-center 992:text-4xl md:text-3xl text-2xl max-w-[321px] 992:mb-8 mb-5 md:mb-6 !leading-148 text-white uppercase'>Stay in the Know</h2>
                        <p className='font-semibold text-2xl max-992:text-center font-proxima-semibold !leading-122 mt-3.5 text-white mb-4'>Join the waiting list</p>
                        <form className='flex max-w-[446px] max-992:mx-auto justify-between rounded-4 relative z-[3] pl-4 border h-[52px] border-white border-opacity-25'>
                            <input type="text" placeholder='Enter your business email' required className='bg-transparent focus:outline-none text-white font-normal font-proxima-normal w-[60%] placeholder:text-white placeholder:font-proxima-normal placeholder:text-base' />
                            <button className='font-normal border border-white border-opacity-25 border-l-0  m-[-1px] flex items-center justify-cente font-proxima-normal rounded-4 text-nowrap text-white py-2.5 px-10 sm:p-[16.5px_47px] bg-light-green'>Sign Up</button>
                        </form>
                    </div>
                    <div className='992:w-[447px] w-full max-992:flex items-center justify-center flex-col'>
                        <p className='font-semibold leading-122 text-white sm:text-xl font-proxima-semibold mb-3 md:text-2xl'>Follow Us</p>
                        <img src={linked} alt="linked in img" className=' mb-4 992:mb-8' />
                        <p className='font-semibold leading-122 text-white sm:text-xl font-proxima-semibold md:text-2xl mb-[15px]'>Backed by</p>
                        <div className='flex gap-4 flex-wrap items-center justify-center'>
                            <img src={google} alt="google" className='hover:scale-90 duration-300 cursor-pointer' />
                            <img src={microsoft} alt="microsoft" className='hover:scale-90 duration-300 cursor-pointer' />
                            <img src={aws} alt="aws" className='hover:scale-90 duration-300 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-white bg-opacity-25 w-full'></div>
            <p className='text-lg font-normal text-white text-center font-proxima-normal py-4 leading-122'>© All Rights Reserved <span className='font-[poppins]'> {currentYear} |</span> Mintel AI</p>
        </div>
    )
}

export default Footer