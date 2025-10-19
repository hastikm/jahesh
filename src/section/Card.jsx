import { LuBuilding2 } from "react-icons/lu";
import { HiArrowLeft } from "react-icons/hi";
import { FaUsers } from 'react-icons/fa';
import item from '../assets/item.png';

const Card = () => {
    return (
        // flex-col در موبایل، flex-row-reverse در دسکتاپ
        <div className="mx-auto font-peyda p-4 w-full">
            <div className="bg-white rounded-lg shadow-xl w-full md:w-[870px] h-auto flex flex-col md:flex-row-reverse text-right overflow-hidden">

                {/* === ۱. ستون اطلاعات اصلی (در موبایل بالا / در دسکتاپ سمت راست) === */}
                {/* order-1 در موبایل، order-2 در دسکتاپ */}
                <div className="w-full md:w-[65%] p-4 sm:p-6 flex flex-col justify-between order-1 md:order-2">
                    
                    {/* ردیف بالا: نام شرکت (همکاران سیستم) / کارشناسی شرکت */}
                    <div className="flex justify-between items-center mb-3">
                        
                        {/* 1.1. همکاران سیستم و لوگو (نمایش فقط در موبایل) */}
                        <div className="flex items-center md:hidden">
                            <span className="ml-2 font-bold text-base text-gray-700 whitespace-nowrap">همکاران سیستم</span>
                            <img src={item} alt="لوگوی شرکت" className="w-6 h-6" />
                        </div>

                        {/* 1.2. کارشناسی توسط شرکت (نمایش فقط در دسکتاپ) - بازگشت به حالت اولیه */}
                        <div className="hidden md:flex justify-start items-center gap-2 text-sm text-gray-500">
                             <LuBuilding2 className="text-lg text-gray-400" />
                             <span>کارشناسی توسط شرکت</span>
                        </div>
                    </div>

                    {/* عنوان مسابقه */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 leading-relaxed">
                        مسابقه حل چالش کدنویسی همکاران سیستم به زبان پایتون
                    </h3>

                    {/* خلاصه توضیحات (نمایش فقط در دسکتاپ) - بازگشت به حالت اولیه */}
                    <p className="hidden md:block relative text-gray-600 text-sm leading-relaxed line-clamp-3 pb-4 border-b-2 border-l-0">
                        به گفته یکی از افشاگران باسابقه، کابل درون جعبه مدل‌های آیفون ۱۵ می‌تواند به سرعت انتقال USB 2.0 محدود شود. او ادعا می‌کند که این کابل‌ها دارای سرعت انتقال داده USB 2.0 هستند که حداکثر...
                    </p>
                    
                    {/* لوگوی شرکت در پایین (نمایش فقط در دسکتاپ) - بازگشت به حالت اولیه */}
                    <div className="hidden md:flex justify-start mt-4 items-center">
                        <img src={item} alt="item" className="w-6 h-6" />
                        <span className="mr-2 font-extrabold text-sm md:text-base">همکاران سیستم</span>
                    </div>
                </div>

               
                <div className=" w-full md:w-[35%] p-4 sm:p-6 bg-[#ffffff] text-black flex flex-col items-center justify-center text-center md:border-r-2 border-r-0 order-2 md:order-1 ">
                    
          
                    <div className="flex flex-row text-[15px] justify-between lg:flex-col items-center w-full mb-4   border-b-4 md:border-none">
                        <p className="text-base text-gray-600 font-bold whitespace-nowrap mb-6">
                            ۴ روز ۲۳ ساعت ۲۴ دقیقه
                        </p>
                        <p className="text-base text-[#3d87ff] font-medium flex-col mt-3md:mt-0  mb-6">
                            درحال دریافت پیشنهادها
                        </p>
                    </div>

                   
                    <div className="flex justify-between items-center w-full mt-3 md:mt-0 ">
                        
                        
                        <button className="flex items-center justify-center mr-2 
                                           bg-[#21242C] text-white 
                                           px-4 py-2 
                                           rounded-xl 
                                           text-base font-bold 
                                           shadow-lg 
                                           transition-colors duration-200 
                                           hover:bg-[#343a40] 
                                           whitespace-nowrap lg:mr-12">
                            مشاهده مسابقه
                            <HiArrowLeft className="mr-2 text-lg" />
                        </button>

                   
                        <div className="flex items-center text-gray-500 font-bold text-sm md:hidden">
                            رأی گیری مردمی
                            <FaUsers className="mr-1 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;