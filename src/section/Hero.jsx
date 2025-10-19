import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.svg'
import vector111 from '../assets/vector/vector111.svg'
import vector112 from '../assets/vector/112.svg'
import { FaArrowLeft } from "react-icons/fa";

const Hero = () => {
  return (
    <>

      <section className='flex flex-col-reverse lg:flex-row justify-between font-peyda max-w-[1500px] mx-auto font-peyda16 relative border-b-2 lg:border-none'>

     <div className='w-full md:mr-36 md:items-start lg:w-[536px] h-auto text-[0.75rem] py-10 lg:py-52 z-20 text-center md:text-right'> 
<h1 className="
  text-[2rem] font-extrabold pb-3
  relative top-[-130px]      
  backdrop-blur-xl text-white w-44 mx-auto bg-white/30  
  rounded-lg px-4 py-2
  md:relative md:top-0 md:backdrop-blur-none md:text-black md:w-auto md:mx-0 md:bg-transparent
">
  نوآوری باز
</h1>

 <p className='text-[1.4rem] font-bold relative top-[-100px] md:relative md:top-0'>هیچ محدودیتی در نوآوری وجود ندارد</p>
 <p className='py-8 text-[1.1rem] text-gray-500 relative top-[-100px] md:relative md:top-0'>با ایجاد مسابقه بهترین راه حل ها را برای چالش هایتان کشف و اجرا کنید.</p>

 <button className='hidden lg:flex items-center justify-center bg-[#21242C] text-white px-10 py-3 rounded-lg text-lg font-bold shadow-lg transition-colors duration-300 hover:bg-[#343a40] '>
ایجاد مسابقه 
 <FaArrowLeft className='mr-3' />
 </button>
 </div>

       
        <div className=' w-full mt-[-5.5rem] lg:w-auto mb-6 lg:mb-0 z-0'>
          <img 
            src={hero3} 
            alt="HeroImage" 
            className="w-full lg:w-[50rem] h-auto mx-auto" 
          />

          <div className='hidden lg:flex justify-end'>
            <img src={vector111} alt="vector11"/> 
          </div>
        </div>
      </section>


      <section className='hidden lg:flex flex-col lg:flex-row justify-evenly items-center font-peyda max-w-[1500px] gap-8 pb-4 mx-auto relative  '>

        <div className='hidden lg:flex justify-end'>
          <img src={vector112} alt="vector112" className='absolute right-[11.2rem] top-[-5rem]'/> 
        </div>

        <div className='w-full lg:w-auto mb-6 lg:mb-0'>
          <img 
            src={hero2} 
            alt="HeroImage" 
            className="mx-auto w-full lg:w-[424px] h-auto" 
          />
        </div>

        <div className='w-full lg:w-[536px] h-auto text-[0.75rem] p-6'>
          <h1 className='p-4 text-[1.6rem] font-extrabold mr-0 lg:mr-20'>توضیح درباره نوآوری باز جهش</h1>
          <p className='p-3 text-[1.1rem] text-gray-500 mr-0 lg:mr-20'>
            به گفته یکی از افشاگران باسابقه، کابل درون جعبه مدل‌های آیفون ۱۵ می‌تواند به سرعت انتقال USB 2.0 محدود شود. او ادعا می‌کند که این کابل‌ها دارای سرعت انتقال داده USB 2.0 هستند که حداکثر به ۴۸۰ مگابایت بر ثانیه می‌رسد و مشابه لایتنینگ است. مدل‌های پرو آیفون ۱۵ ممکن است بتوانند با یک کابل تاندربولت جداگانه، از سرعت انتقال سریع‌تر تاندربولت پشتیبانی کنند. این یعنی افرادی که آیفون ۱۵ پرو یا آیفون ۱۵ پرو مکس (اولترا) را خریداری می‌کنند، باید کابل جداگانه و اضافی بخرند تا شاهد سرعت بیشتر آن گوشی‌ها باشند.
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
