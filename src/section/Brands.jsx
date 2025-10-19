import img1 from '../assets/cup.svg'

import googleLogo from '../assets/brand/google.svg';
import filatioLogo from '../assets/brand/fla.svg';
import irancellLogo from '../assets/brand/irancel.svg';
import digikalaLogo from '../assets/brand/Digikala.svg';
import FidiboLogo from '../assets/brand/Fidibo.svg';
import snappLogo from '../assets/brand/snap.svg';
import avalLogo from '../assets/brand/hamrah.svg';
import alibabaLogo from '../assets/brand/alibaba.svg';
import { FaArrowLeft } from "react-icons/fa";

const allBrands = [
    { src: googleLogo, alt: 'Google' },
    { src: filatioLogo, alt: 'Filatio' },
    { src: irancellLogo, alt: 'Irancell' },
    { src: digikalaLogo, alt: 'Digikala' },
    { src: googleLogo, alt: 'Google' }, 
    { src: avalLogo, alt: 'Aval' },
    { src: irancellLogo, alt: 'Irancell' },
    
    { src: avalLogo, alt: 'Aval' },
    { src: snappLogo, alt: 'Snapp' },
    { src: alibabaLogo, alt: 'Alibaba' },
    { src: FidiboLogo, alt: 'Vidio' },
];

const Brands = () => {
  return (
    <div className=' pb-24 pt-20'>
    <h1 className='flex justify-center text-[1.5rem] font-extrabold text-gray-800 text-center mb-12'>
          شرکت‌ها و برندهایی که مسابقه ایجاد کرده‌اند
          </h1>
          
          <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
            {allBrands.map((brand, index) => ( <div 
                 key={index} 
               className="flex justify-center items-center opacity-70 hover:opacity-100 transition duration-300"
             >
       
          <img src={brand.src} alt={brand.alt} className="h-8 md:h-10 w-auto object-contain" />
          </div>
          ))}
          </div>

       {/* section */}

       <hr className='mt-12 mb-6 max-w-7xl mx-auto' /> 
        <section className='flex flex-col md:flex-row justify-center md:justify-between max-w-lg mx-auto pt-6 px-4 md:px-0'>

              <h2 className='text-gray-500 order-2 md:order-1 mt-4 md:mt-0 text-center md:text-right'>
              و بیش از 200 شرکت دیگر
              </h2>
              <a 
              href="#" 
              className='text-black hover:text-blue-800 flex items-center justify-center order-1 md:order-2'
              >
              مشاهده همه شرکت‌ها<FaArrowLeft className='pr-2' />
              
              </a>
          </section>
           <div className="hidden lg:flex justify-center items-center pt-48 relative">
  <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#49B3F3] via-[#E12A80] to-[#1004A4] opacity-10 blur-2xl rounded-3xl"></div>
  <img 
    src={img1} 
    alt="img1"
    className="relative rounded-3xl z-10"
  />
</div>

            

    </div>
  )
}

export default Brands
