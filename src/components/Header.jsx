// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      
      {/* MAIN HEADER WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
        
        {/* ------------------------- */}
        {/* LOGO (Responsive) */}
        {/* ------------------------- */}
       
       <div className="flex items-center gap-3 shrink-0">
    
    {/* Hamburger Menu - Only shows on mobile/tablet (<1024px) */}
    <img 
      src="/menu.png" 
      alt="menu" 
      className="w-6 h-6 lg:hidden cursor-pointer" 
    />

    {/* Logo Container */}
    <div className="flex items-center ml-8">
      <img
        src="/assets/Layout/Brand/logo-colored.png"
        alt="Logo"
        className="w-[116px] md:w-[150px] h-auto object-contain" 
      />
    </div>

  </div>

        {/* ------------------------- */}
        {/* SEARCH BAR */}
        {/* On mobile: full width under logo */}
        {/* ------------------------- */}
        <div className="h-10 hidden lg:flex items-center border border-blue-600 rounded-lg overflow-hidden w-[665px] shrink-0">
          <input
            type="text"
            placeholder="Search"
            className="w-[421px] p-2 text-sm focus:outline-none"
          />

          <div className=" w-[145px] border-l-2 border-blue-600 px-2 border-r  text-black text-sm flex items-center cursor-pointer">
            All category <span className="ml-1 text-xs">▼</span>
          </div>

          <button className= "w-[100px] bg-blue-600 py-2 h-full  text-white  px-6 font-semibold hover:bg-opacity-90">
            Search
          </button>
        </div>

        {/* ------------------------- */}
        {/* USER ICONS (Responsive) */}
        {/* Hidden on small screens */}
        {/* ------------------------- */}
        {/* 1. Main Container: Removed 'hidden' so it shows on mobile. Added 'gap-5' for the spacing. */}
<div className="flex items-center justify-end text-xs text-gray-700 w-auto mr-8 md:w-[228px] shrink-0 gap-5">

  {/* PROFILE: Always visible */}
  <div className="text-center hover:text-primary cursor-pointer mx-auto">
    <img src="/Profile.png" className="w-6 h-6 mx-auto mb-1" alt="Profile" />
    <span className="hidden md:block">Profile</span> {/* Text hidden on mobile to save space */}
  </div>

  {/* MESSAGE: Hidden on mobile, shown on medium screens (md) */}
  <div className="hidden md:block text-center hover:text-primary cursor-pointer">
    <img src="/message.png" className="w-6 h-6 mx-auto mb-1" alt="Message" />
    Message
  </div>

  {/* ORDERS: Hidden on mobile, shown on medium screens (md) */}
  <div className="hidden md:block text-center hover:text-primary cursor-pointer">
    <img src="/Order.png" className="w-6 h-6 mx-auto mb-1" alt="Orders" />
    Orders
  </div>

  {/* CART: Always visible */}
  <div className="text-center hover:text-primary cursor-pointer">
    <img src="/Cart.png" className="w-6 h-6 mx-auto mb-1" alt="Cart" />
    <span className="hidden md:block">My cart</span> {/* Text hidden on mobile like the image */}
  </div>
  
</div>

       
        

      </div>

      {/* MOBILE SEARCH BAR (Below Header) */}
      <div className="px-4 pb-3 lg:hidden">
        <div className="flex items-center border border-blue-600 rounded-lg overflow-hidden w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 text-sm focus:outline-none"
          />

          <button className="bg-blue-600 text-white px-4 py-2">
            Search
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
