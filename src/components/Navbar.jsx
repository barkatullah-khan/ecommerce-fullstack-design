// src/components/Navbar.jsx

// 1. Accept the props from HomePage
// src/components/Navbar.jsx

export default function Navbar({ setSelectedCategory, selectedCategory }) {
  return (
    <nav className="hidden lg:flex w-full h-14 bg-white items-center border-b border-[#E3E8EE]">
      <div className="max-w-[1180px] mx-auto w-full flex items-center justify-between ">

        {/* LEFT SIDE: NAV LIST */}
        <ul className="flex gap-6 items-center">

          {/* All Category */}
          <li 
            onClick={() => setSelectedCategory("all")}
            className={`cursor-pointer font-medium flex items-center gap-2 transition-colors hover:text-blue-600 
              ${selectedCategory === "all" ? "text-blue-600" : "text-[#1C1C1C]"}`}
          >
            <img src="/menu.png" alt="menu" className="w-5 h-5" />
            <span className="leading-[22px]">All category</span>
          </li>

          {/* Hot Offers */}
          <li 
            onClick={() => setSelectedCategory("deals")}
            className={`cursor-pointer font-medium text-[16px] leading-[22px] transition-colors hover:text-blue-600 
              ${selectedCategory === "deals" ? "text-blue-600" : "text-[#1C1C1C]"}`}
          >
            Hot offers
          </li>

          {/* Electronics */}
          <li 
            onClick={() => setSelectedCategory("electronics")}
            className={`cursor-pointer font-medium text-[16px] leading-[22px] transition-colors hover:text-blue-600 
              ${selectedCategory === "electronics" ? "text-blue-600" : "text-[#1C1C1C]"}`}
          >
            Electronics
          </li>

          {/* Home */}
          <li 
            onClick={() => setSelectedCategory("home")}
            className={`cursor-pointer font-medium text-[16px] leading-[22px] transition-colors hover:text-blue-600 
              ${selectedCategory === "home" ? "text-blue-600" : "text-[#1C1C1C]"}`}
          >
            Home
          </li>

          <li className="cursor-pointer font-medium text-[16px] leading-[22px] text-[#1C1C1C] hover:text-blue-600">
            Projects
          </li>

          <li className="cursor-pointer font-medium text-[16px] flex items-center gap-1 text-[#1C1C1C] hover:text-blue-600">
            <span>Help</span>
            <img src="/expand_more.png" alt="Help" className="w-4 h-4 opacity-60" />
          </li>

        </ul>

        {/* RIGHT SIDE: SETTINGS (Remains the same) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center text-[#1C1C1C] cursor-pointer font-medium text-[16px]">
            <span>English, USD</span>
            <img src="/expand_more.png" alt="expand" className="w-4 h-4 ml-1 opacity-60" />
          </div>

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