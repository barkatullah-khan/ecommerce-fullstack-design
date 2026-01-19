export default function Navbar() {
  return (
    // h-14 is exactly 56px. Added a very subtle border color.
    <nav className="hidden lg:flex w-full h-14 bg-white items-center border-b border-[#E3E8EE]">
      
      {/* Centered Container to match the Header alignment */}
      <div className="max-w-[1180px] mx-auto w-full  flex items-center justify-between ">

        {/* LEFT SIDE: NAV LIST */}
        <ul className="flex gap-6 items-center text-[#1C1C1C]">

          {/* All Category with Hamburger */}
          <li className="cursor-pointer font-medium flex items-center gap-2 hover:text-blue-600 transition-colors">
            <img src="/menu.png" alt="menu" className="w-5 h-5" />
            <span className="leading-[22px]">All category</span>
          </li>

          <li className="cursor-pointer font-medium text-[16px] leading-[22px] hover:text-blue-600">
            Hot offers
          </li>

          <li className="cursor-pointer font-medium text-[16px] leading-[22px] hover:text-blue-600">
            Gift boxes
          </li>

          <li className="cursor-pointer font-medium text-[16px] leading-[22px] hover:text-blue-600">
            Projects
          </li>

          <li className="cursor-pointer font-medium text-[16px] leading-[22px] hover:text-blue-600">
            Menu item
          </li>

          {/* Help with Dropdown */}
          <li className="cursor-pointer font-medium text-[16px] flex items-center gap-1 hover:text-blue-600">
            <span>Help</span>
            <img src="/expand_more.png" alt="Help" className="w-4 h-4 opacity-60" />
          </li>

        </ul>

        {/* RIGHT SIDE: SETTINGS */}
        <div className="flex items-center gap-6">

          {/* Language/Currency */}
          <div className="flex items-center text-[#1C1C1C] cursor-pointer font-medium text-[16px]">
            <span>English, USD</span>
            <img src="/expand_more.png" alt="expand" className="w-4 h-4 ml-1 opacity-60" />
          </div>

          {/* Shipping To */}
          <div className="flex items-center text-[#1C1C1C] cursor-pointer font-medium text-[16px]">
            <span className="mr-2">Ship to</span>
            <img src="/icon.png" alt="flag" className="w-6 h-4 object-contain rounded-sm" />
            <img src="/expand_more.png" alt="expand" className="w-4 h-4 ml-1 opacity-60" />
          </div>

        </div>
      </div>
    </nav>
  );
}