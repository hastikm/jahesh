import React from 'react'


const UnderNav = () => {
  return (
    <div className="border-b-2 py-4 font-dana z-40 h-[80px] overflow-x-auto no-scrollbar relative bg-white">
      <div className="max-w-[1000px] mx-auto flex px-6 text-[1.1rem]">
        <ul className="flex gap-12 whitespace-nowrap">
          <li className="font-bold text-[1.2rem] flex-shrink-0">نوآوری باز</li>
          <li className="menu-item flex-shrink-0">لیست مسابقه ها</li>
          <li className="menu-item active flex-shrink-0">مسابقه های فعال</li>
          <li className="menu-item flex-shrink-0">مسابقه درحال رای گیری</li>
          <li className="menu-item flex-shrink-0">لیست شرکت ها</li>
        </ul>
      </div>
    </div>
  )
}


export default UnderNav