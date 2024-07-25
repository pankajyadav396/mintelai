import logo from "../assets/images/svg/logo.svg"
import gif from "../assets/images/png/gif-header.gif"
const Header = () => {
    return (
        <div className="pt-[31px] bg-black relative max-h-[1001px]">
            <div className="size-[192px] right-[-142px] absolute z-[3] bg-light-green blur-[130px] animate-pulse top-[303px]"></div>
            <div className="size-[192px] left-[-142px] hidden md:block absolute z-[3] bg-light-green blur-[130px] animate-pulse top-[538px]"></div>
            <div className="max-w-[1140px] px-4 mx-auto">
                <img src={logo} alt="logo" className="max-w-[150px] sm:max-w-[200px]" />
                <div className="text-center max-w-[854px] mx-auto lg:pt-24 md:pt-20 pt-16 -mt-1">
                    <h1 className="uppercase md:mb-8 sm:mb-6 mb-5 font-bold font-lulo md:text-5xl sm:text-4xl text-3xl lg:text-5xxl !leading-120 text-white">Stop searching start closing</h1>
                    <p className="font-proxima-bold md:text-2xl text-xl leading-122 sm:mb-6 mb-5 md:mb-8 text-white font-bold">Helping salespeople connect to their key decision makers, automatically.</p>
                    <button className="bg-light-green text-white rounded-lg hover:bg-white hover:text-light-green duration-300 hover:outline hover:outline-1 outline-light-green py-4 px-[29px] font-proxima-normal font-normal text-base leading-122">Early Access</button>
                    <div className="relative z-[2] lg:h-[550px] h-[330px] 430:h-[400px] sm:h-[450px] overflow-hidden">
                        <div className="mx-auto relative lg:max-w-[530px] overflow-hidden md:max-w-[450px] max-w-[330px] 430:max-w-[400px] ">
                            <span className="absolute z-[1] bg-light-green lg:h-[550px] h-[400px] sm:h-[500px] lg:w-[530px] w-[320px] 430:w-[400px] md:w-[450px] left-0 mix-blend-color"></span>
                            <img src={gif} alt="img" className="lg:w-[530px] md:w-[450px] 430:w-[400px] xl:scale-110 xl:mt-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header