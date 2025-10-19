import pic1 from '../../src/assets/pic1.svg'
import earth from '../assets/icon/earth.svg'
import sug from '../assets/icon/sug.svg'
import like from '../assets/icon/like.svg'
import gift from '../assets/icon/gift.svg'
import rec from '../assets/icon/rec.svg'

const EventSteps = () => {
  return (
    <>
      <div className="max-w-[1600px] flex flex-col lg:flex-row justify-between pt-36 border-b-2 pb-32 mx-auto">

        {/* بخش راست */}
        <section className="flex flex-col lg:flex-row items-center lg:items-start px-6 lg:pr-44">
          <img src={pic1} alt="pic1" className="hidden lg:block" />
          <div className="text-center lg:text-right">
            <img src={rec} className=' sm:hidden relative right-24' />
            <h1 className="font-extrabold text-[2.2rem] pt-10 lg:pt-32 ">روند برگزاری مسابقه</h1>
            <p className="pt-3 text-gray-500">ثبت‌نام کن، پروژه‌ خودتو رو ارسال کن و منتظر اعلام نتایج باش!</p>
          </div>
        </section>

        {/* بخش چپ */}
        <section className="pt-14 lg:pr-32 flex flex-col gap-10 px-6 ">
          {[
            { img: earth, title: 'انتشار عمومی مسابقه' },
            { img: sug, title: 'ارسال پروژه‌ها' },
            { img: like, title: 'رأی‌دهی و بررسی' },
            { img: gift, title: 'اعلام برندگان' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-evenly items-start lg:items-start gap-6"
            >
              <div className="flex flex-col items-center">
                <img src={item.img} alt="icon" className="w-20" />
                {index !== 3 && <div className="w-[2px] h-32 bg-gray-400 mt-2"></div>}
              </div>

              <div className="flex flex-col space-y-6 text-center lg:text-right">
                <p className="font-extrabold text-[1.5rem]">{item.title}</p>
                <p className="text-gray-500">
                  پس از ایجاد و طی مراحل بررسی و... مسابقه خود را بصورت عمومی با کاربران به اشتراک بگذارید.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت.
                </p>
              </div>

              
            </div>
          ))}
        </section>




      </div>
    </>
  );
};

export default EventSteps;
