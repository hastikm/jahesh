import content from '../assets/Content.svg';
import num1 from '../assets/icon/num1.svg';
import num2 from '../assets/icon/num2.svg';
import num3 from '../assets/icon/num3.svg';
import num4 from '../assets/icon/num4.svg';
import hero2 from '../assets/hero2.png';
import vector112 from '../assets/vector/112.svg';
import icon3 from '../assets/icon/icon3.svg'

const Benefits = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between pt-28 py-9 border-b-2 pb-40">

        {/* ستون متن و آیکون‌ها */}
        <section className="w-full md:w-1/2 pr-0 md:pr-28">
          <h1
            className="font-dana w-80 px-6 py-4 bg-slate-300 rounded-3xl text-[1.2rem] mb-8
                       relative top-[-120px] md:w-full md:top-0 md:bg-transparent md:rounded-none md:text-[1.8rem]"
          >
            ویژگی و مزیت های بخش نوآوری باز
          </h1>

          <div className="grid grid-cols-1 px-5 lg:grid-cols-2 gap-8">

            {/* 1 */}
            <div className="pt-8">
              <section className='flex flex-row lg:flex-none '>
              <img src={num1} alt="icon1" />
              <h2 className="font-extrabold text-[1.3rem] pt-6">
                برگزاری و اجرای مسابقات بزرگ
              </h2>
              </section>
              <p className="pt-2 text-[0.90rem] text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، 
                و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

            {/* 2 */}
            <div className="pt-8">
              <section className='flex flex-row justify-between sm:flex-none sm:justify-normal  '>
              <img src={num2} alt="icon2" className='order-2 sm:order-1' />
              <h2 className="font-extrabold text-[1.3rem] pt-6 order-1 sm:order-2">
                ارتباط با جامعه ایی بزرگ
              </h2>
              </section>
              <p className="pt-2 text-[0.90rem] text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، 
                و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

            {/* 3 */}
            <div className="pt-8">
              <section className='flex flex-row lg:flex-none lg:mt-12 '>
              <img src={num3} alt="icon3" />
              <h2 className="font-extrabold text-[1.3rem] pt-6">
                یافتن بهترین راه حل ها
              </h2>
              </section>
              <p className="pt-2 text-[0.90rem] text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، 
                و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

            {/* 4 */}
            <div className="pt-8">
              <section className='flex flex-row justify-between  sm:flex-none sm:justify-normal lg:mt-9  '>
              <img src={num4} alt="icon4"  className='order-2 sm:order-1'/>
              <h2 className="font-extrabold text-[1.3rem] pt-6 order-1 sm:order-2">
                کشف افراد توانمند و ارتباط با آنها
              </h2>
              </section>
              <p className="pt-2 text-[0.90rem] text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ,
                و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

          </div>
        </section>

        <section className="w-full md:w-1/2 flex justify-center items-center mb-10">
          <img src={content} alt="benefits icon" />
        </section>

      </div>

      <section className="lg:hidden flex-col lg:flex-row justify-evenly items-center font-peyda max-w-[1500px] gap-8 pb-4 mx-auto relative">
        <div className="hidden lg:flex justify-end">
          <img src={vector112} alt="vector112" className="absolute right-60 top-[-5rem]" />
        </div>

        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <img
            src={hero2}
            alt="HeroImage"
            className="mx-auto w-full lg:w-[424px] h-auto"
          />
        </div>

        <div className="w-full lg:w-[536px] h-auto text-[0.75rem] p-6">
           <img src={icon3} className='relative top-[-170px] left-[-200px] z-10 sm:hidden' />
          <h1 className="relative w-60 top-[-200px] bg-slate-100 rounded-xl px-4 lg:bg-none lg:top-0 lg:p-4 text-[1.6rem] font-extrabold mr-0 lg:mr-20">
            توضیح درباره نوآوری باز جهش
          </h1>
          <p className="p-3 text-[1.1rem] text-gray-500 mr-0 lg:mr-20">
            به گفته یکی از افشاگران باسابقه، کابل درون جعبه مدل‌های آیفون ۱۵ می‌تواند به سرعت انتقال USB 2.0 محدود شود. او ادعا می‌کند که این کابل‌ها دارای سرعت انتقال داده USB 2.0 هستند که حداکثر به ۴۸۰ مگابایت بر ثانیه می‌رسد و مشابه لایتنینگ است. مدل‌های پرو آیفون ۱۵ ممکن است بتوانند با یک کابل تاندربولت جداگانه، از سرعت انتقال سریع‌تر تاندربولت پشتیبانی کنند. این یعنی افرادی که آیفون ۱۵ پرو یا آیفون ۱۵ پرو مکس (اولترا) را خریداری می‌کنند، باید کابل جداگانه و اضافی بخرند تا شاهد سرعت بیشتر آن گوشی‌ها باشند.
          </p>
        </div>
      </section>
    </>
  );
};

export default Benefits;
