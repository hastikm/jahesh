import Card from "../section/Card";
import rounded from '../assets/vector/rounded.svg';

const Competitions = () => {
  return (
    <>
      <div className="relative py-20 bg-white overflow-hidden"> 
        <div className="max-w-[1000px] mx-auto px-4 md:px-0 relative">
          <div className="flex items-center justify-start mb-10 relative">
            <img 
              width={900}
              src={rounded} 
              alt="circle" 
              className="absolute top-[-11rem] left-[9rem] lg:top-[-23rem]  lg:left-[33rem] md:top-[-19rem] md:left-[22rem] z-0 "
            />
            <h1 className="font-extrabold mr-16 mt-[-8px]  md:mt-5 lg:mr-16">مسابقه های فعال</h1>
          </div>          
          <div className="grid grid-cols-1 gap-6 relative z-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <button className="block mx-auto mt-10 mb-20 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-50 transition duration-150">
        مشاهده همه مسابقه ها
      </button>
    </>
  );
};

export default Competitions;
