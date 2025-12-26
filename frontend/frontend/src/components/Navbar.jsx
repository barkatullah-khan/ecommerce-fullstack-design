export default function Navbar() {
  return (
    <nav className="w-full h-14 bg-white flex items-center px-6 border-b">
      {/* LEFT: NAV LIST */}
      <ul className="flex gap-6 w-[620px] h-6 relative left-[130px] items-center text-[#1C1C1C]">
        <li className="cursor-pointer font-medium flex items-center gap-2">
    <img src="/menu.png" alt="menu" className="w-4 h-4" />
    {/* <span >All Category</span> */} All Category
  </li>
<li
  className="cursor-pointer w-[77px] h-[22px] font-inter font-medium  text-[16px] leading-[22px] text-[#1C1C1C] flex items-center"
>
  Hot offers
</li>



        <li
  className="cursor-pointer w-[79px] h-[22px] font-inter font-medium text-[16px] leading-[22px] text-[#1C1C1C] flex items-center"
>
  Gift boxes
</li>

        <li className="cursor-pointer w-[77px] h-[22px] font-inter font-medium text-[16px] leading-[22px] text-[#1C1C1C] flex items-center">
  Projects
</li>

<li className="cursor-pointer w-[87px] h-[22px] font-inter font-medium text-[16px] leading-[22px] text-[#1C1C1C] flex items-center">
  Menu item
</li>

       <li className="cursor-pointer w-[61px] font-medium h-[24px] flex items-center">
        <span className="mr-1">Help</span>
  <img
    src="/expand_more.png"   // your exported PNG
    alt="Help"
    className="w-4 h-4"
  />
</li>

      </ul>

      {/* RIGHT: PAYMENT + SHIP TO */}
      <div className="flex items-center gap-10 ml-auto">
        
        {/* Payment Section */}
        <div className="w-[124px] h-6 flex items-center text-[#1C1C1C] cursor-pointer">
          <span className="text-sm">English, USD</span>
          <img src="/expand_more.png" alt="Expmand more" className="w-4" />
        </div>

        {/* Ship To */}
        <div className="w-[115px] h-6 flex items-center text-[#1C1C1C] cursor-pointer">
          <span className="text-sm mr-1">Ship to</span>
          <img src="/icon.png" alt="icon"  className="w-4 h-4 mr-1"/>
          <img src="/expand_more.png" alt="Expand more" className="w-4 h-4 " />
        </div>

      </div>
    </nav>
  );
}
