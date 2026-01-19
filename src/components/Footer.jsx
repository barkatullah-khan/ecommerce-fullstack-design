import React from "react";
const Footer =()=>{
    return(



        
<footer className="w-full bg-white border-t border-[#DEE2E7]">
  {/* TOP SECTION: Links and Branding */}
  <div className="max-w-[1180px] mx-auto px-4 py-10">
    <div className="flex flex-col gap-8">
      
      {/* 1. Brand & Socials Column */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-500 p-1 rounded-lg">
             <img src="/logo-colored.png" alt="Brand" className="w-30 h-12 invert" />
          </div>
          {/* <span className="text-[#0D6EFD] text-2xl font-bold">Brand</span> */}
        </div>
        <p className="text-[#505050] text-base leading-normal mb-6 max-w-[280px]">
          Best information about the company goes here but now lorem ipsum is dummy text.
        </p>
        
        {/* Social Icons Row */}
        <div className="flex gap-3">
  {[
    { id: 1, img: "/facebook3.png", alt: "Facebook" },
    { id: 2, img: "/twiter.png", alt: "Twitter" },
    { id: 3, img: "/linkdin.png", alt: "LinkedIn" },
    { id: 4, img: "/insta.png", alt: "Instagram" },
    { id: 5, img: "/youtube.png", alt: "YouTube" },
  ].map((social) => (
    <div 
      key={social.id} 
      className="w-8 h-8 bg-[#BDC4CD] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0D6EFD] transition-colors group"
    >
      <img 
        src={social.img} 
        alt={social.alt} 
        className="w-5 h-5 object-contain brightness-0 invert opacity-100"
        onError={(e) => {
          e.target.style.display = 'none'; // Hides broken images
        }}
      />
    </div>
  ))}
</div>
      </div>

      {/* 2. Links Sections (Rows on Mobile, Columns on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="font-semibold text-[#1C1C1C] mb-3 text-center lg:text-left">About</h4>
          <ul className="text-[#8B96A5] flex flex-wrap justify-center lg:flex-col lg:items-start gap-x-4 gap-y-2 text-base">
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Find store</li>
            <li className="hover:text-blue-600 cursor-pointer">Categories</li>
            <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Partnership Section */}
        <div>
          <h4 className="font-semibold text-[#1C1C1C] mb-3 text-center lg:text-left">Partnership</h4>
          <ul className="text-[#8B96A5] flex flex-wrap justify-center lg:flex-col lg:items-start gap-x-4 gap-y-2 text-base">
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Find store</li>
            <li className="hover:text-blue-600 cursor-pointer">Categories</li>
            <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="font-semibold text-[#1C1C1C] mb-3 text-center lg:text-left">Information</h4>
          <ul className="text-[#8B96A5] flex flex-wrap justify-center lg:flex-col lg:items-start gap-x-4 gap-y-2 text-base">
            <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-600 cursor-pointer">Money Refund</li>
            <li className="hover:text-blue-600 cursor-pointer">Shipping</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Get App Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h4 className="font-semibold text-[#1C1C1C] mb-3">Get app</h4>
          <div className="flex flex-row lg:flex-col gap-2">
            <img src="/Group.png" alt="App Store" className="w-[124px] h-auto cursor-pointer" />
            <img src="/market-button.png" alt="Google Play" className="w-[124px] h-auto cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  {/* BOTTOM BAR (Fixed Row Layout) */}
<div className="w-full bg-[#EFF2F4] border-t border-[#DEE2E7] h-[68px] flex items-center">
  <div className="max-w-[1180px] mx-auto px-4 w-full flex flex-row justify-between items-center">
    
    {/* Copyright: whitespace-nowrap prevents it from breaking into two lines */}
    <p className="text-[#606060] text-sm md:text-base whitespace-nowrap">
      © 2023 Ecommerce.
    </p>
    
    {/* Language/Flag: shrink-0 ensures this side doesn't get squeezed */}
    <div className="flex items-center gap-2 cursor-pointer shrink-0">
      <img src="/us-flag.png" alt="Flag" className="w-5 h-3 md:w-6 md:h-4" />
      <span className="text-[#606060] text-sm md:text-base">English</span>
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

  </div>
</div>
</footer>

    )
}

export default Footer;  