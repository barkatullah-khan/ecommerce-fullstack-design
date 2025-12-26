// src/components/Header.jsx
import React from 'react';
// Note: In a real project, you would import SVG icons (like Cart, Profile, etc.) here.

const Header = () => {
  return (
    // The main header container, spanning the full width
    <header className="w-full h-[86px] border-b">




      {/* 2. MAIN BAR: Logo, Search Bar, & User Icons */}
      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* NEW CODE */}
          {/* Logo/Branding: Set to 150px width and 46px height */}
          {/* w-[150px] and h-[46px] are JIT classes to match the Figma spec precisely */}
          <div className="mr-8 flex-shrink-0">
            <img
              src="/assets/Layout/Brand/logo-colored.png" // !!! CHANGE THIS TO YOUR ACTUAL LOGO FILE PATH !!!
              alt="eCom Brand Logo"
              className="w-[150px] h-[46px]" // Applying the exact Figma dimensions
            />
          </div>

          {/* Search Bar (Prominent in design, hidden on small mobile) */}
          {/* Search Bar (Accurate to Figma: Input | Category | Search Button) */}
          {/* w-[421px] sets the precise width, and the inner py-2 achieves the 40px height. */}
          <div className="flex-shrink-0 flex items-center border border-blue-600 rounded-lg overflow-hidden w-[421px]">

            {/* 1. Search Input */}
            {/* Input Field goes here */}
            <input
              type="text"
              placeholder="Search"
              name="search_query"
              // p-2 padding helps achieve the 40px height
              className="w-full p-2 text-base focus:outline-none flex-grow"
            />

            {/* 2. Category Dropdown: The Separator element */}
            {/* It has a border and is aligned vertically in the center */}
            <div className="border-l border-r border-gray-300 px-3 py-2 text-gray-500 flex items-center flex-shrink-0 cursor-pointer">
              All category <span className='ml-1 text-xs'>▼</span>
            </div>

            {/* 3. Search Button */}
            <button className="bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-opacity-90 transition-colors flex-shrink-0 h-full">
              Search
            </button>

          </div>
          {/* User Icons (Cart, Profile) */}
          {/* 4. User Actions (4 Icon/Text pairs - Profile, Message, Orders, My cart) */}
          {/* w-[228px] sets the required total width for the block. */}
          <div className="flex items-center justify-between text-xs text-gray-700 flex-shrink-0 w-[228px]">

            
            {/* Profile */}
<div className="text-center hover:text-primary  cursor-pointer w-1/4">
  <img src="/Profile.png" alt="Profile" className="w-6 h-6 mx-auto mb-1" />
  Profile
</div>

{/* Message */}
<div className="text-center hover:text-primary cursor-pointer w-1/4">
  <img src="/message.png" alt="Message" className="w-6 h-6 mx-auto mb-1" />
  Message
</div>

{/* Orders */}
<div className="text-center hover:text-primary cursor-pointer w-1/4">
  <img src="/Order.png" alt="Orders" className="w-6 h-6 mx-auto mb-1" />
  Orders
</div>



{/* Cart */}
<div className="text-center hover:text-primary cursor-pointer w-1/4">
  <img src="/Cart.png" alt="Cart" className="w-6 h-6 mx-auto mb-1" />
  My cart
</div>

          </div>
        </div>
      </div>


      


    </header>
  );
};

export default Header;