import arrowLogo from '../assets/icon/arrowLogo.svg'
import Logo from '../assets/icon/Logo.svg'
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import icon33 from '../assets/icon/icon33.svg'
import { FaArrowLeft } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='w-full h-[220px]  bg-[#F2F5F7] font-peyda flex flex-col md:flex-row justify-between items-center'>


       {/* section 1 */}
      <section className='pr-32 py-4'>
          
       <div>
         <div className='flex flex-col lg:flex-row gap-4'>
          <img src={arrowLogo} className='hidden lg:block' />
         <h1 className=' mt-2 font-extrabold'>خبرنامه جهش</h1>
         </div>

        <p className='text-gray-400 text-[15px]'>با عضویت در خبرنامه جهش از جدید‌ترین مطالب ‌دنیای کسب‌و‌کار، استارت‌آپ و سرمایه‌گذاری را دریافت کنید.</p>
       </div>

      </section>


     {/* section 2 */}
    <section className="mt-10 ml-40 flex items-center gap-4 pb-7">
  <div className=" relative inline-block rounded-lg p-[2px] bg-[linear-gradient(90deg,#49B3F3,#1004A4,#C72D58)] mr-36 lg:mr-0">
    <input
      type="text"
      placeholder="ایمیل خود را وارد کنید"
      className=" py-2 px-7 w-64 rounded-lg bg-white text-black outline-none border-none focus:outline-none"
    />
  </div>
  <button className="px-5 py-2 rounded-lg bg-[#070707] text-white font-medium hover:bg-[#1906d1] transition-all">
    عضویت
  </button>
</section>

      
    </div>

    {/* footer sectin */}
    <footer className="relative">
 
  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#49B3F3,#1004A4,#C72D58)]"></div>

  <div className="font-peyda flex flex-col md:flex-row justify-around mr-20 md:mr-0 border-b-2">
    {/* row1 */}
    <section className="mt-14">
      <img src={Logo} alt="logo" />
      <p className="text-gray-400">
        جهش، خاکی حاصل‌خیز برای رشد رویاهای جسورانه افرادیست <br />
        که بهبود را از دریچه نوآوری و نوآفرینی می‌جویند. ما در جهش<br />
        از بطن چالش‌ها جوانه می‌زنیم و ذهنمان محدود به مرز جغرافیایی<br />
        مشخصی نیست.
      </p>
    </section>

    {/* row2 */}
    <section className="mt-14 text-gray-500 hidden lg:flex flex-col sm:flex-row gap-10 md:gap-16 text-[15px]">
      {/* ستون 1 */}
      <div className='hidden xl:block'>
        <h1 className="text-[#9f9f9f] mb-3 border-r-2 px-2">مجموعه‌های جهش</h1>
        <div className="grid grid-cols-2 gap-x-12">
          <div className="space-y-1">
            <p>جهش مدیا</p>
            <p>جهش آکادمی</p>
            <p>جهش پارک</p>
          </div>
          <div className="space-y-1">
            <p>نوآوری باز</p>
            <p>سرمایه‌گذاری</p>
            <p>رویدادها</p>
          </div>
        </div>
      </div>

      {/* ستون 2 */}
      <div >
        <h1 className="text-[#9f9f9f] mb-3 border-r-2 px-2">دسترسی سریع</h1>
        <div className="space-y-1 mt-4">
          <p>درباره ما</p>
          <p>تماس با ما</p>
          <p>معرفی</p>
        </div>
      </div>
    </section>

    {/* row3 */}
    <section className="mt-14 mb-11 text-gray-400 space-y-3 mr-2 md:mr-0 relative">
      <span className="absolute right-0 w-[2px] h-[10px]  rounded-full"></span>
      <span className="pl-3 border-r-2 px-2">راه‌های ارتباطی</span>

      <p className="flex items-center gap-2">
        <MdOutlineLocalPhone className="text-[#9f9f9f] text-lg" /> ۰۲۱۸۸۸۱۴۰۱۵
      </p>

      <p className="flex items-center gap-2">
        <MdOutlineEmail className="text-[#6f6f6f] text-lg" /> info [at] Jahesh.co
      </p>

      <p className="flex items-center gap-2">
        <IoLocationOutline className="text-[#6f6f6f] text-lg" /> تهران، میدان
        فردوسی، خیابان سمیه، خیابان موسوی، پلاک ۴۷
      </p>
    </section>
  </div>
  

            <section className="flex flex-col lg:flex-row lg:justify-around items-center gap-6 pb-6">
  <div className="main1 flex flex-col lg:flex-row items-center gap-4">
    
    <div className="flex items-center gap-4 text-gray-400 text-2xl border-b-2 py-4 ">
      <FaInstagram className='hover:opacity-50' />
      <IoLogoLinkedin className='hover:opacity-50'/>
      <BsTelegram className='hover:opacity-50'/>
      <SlSocialYoutube className='hover:opacity-50'/>
    </div>

    
    <div>
      <p className="text-gray-400 border-r-2 px-3">
        کلیه حقوق مادی و معنوی این سایت متعلق به جهش است.
      </p>
    </div>
  </div>

  <div className="main2">
    <img src={icon33} alt="icon33" />
  </div>
</section>

</footer>

   <button className="rounded-lg mx-auto py-3 mt-10 mb-3 bottom-5 right-5 flex items-center justify-center gap-2 bg-black text-white px-40 unded-lg text-sm font-bold shadow-md hover:bg-gray-800 transition md:hidden z-50">
  ایجاد مسابقه
  <FaArrowLeft  className="text-white text-lg" />
</button>


    </>
  )
}

export default Footer
