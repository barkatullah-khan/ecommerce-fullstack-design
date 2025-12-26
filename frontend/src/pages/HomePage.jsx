// src/pages/HomePage.jsx
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import React from 'react';
// Correct path to your main CSS file
import '../App.css'; 

const HomePage = () => {
  return (
    // Base layout container: uses custom background color
    <div className="min-h-screen bg-gray-100 relative">
      
     <Header/>
     <Navbar/>
    

      {/* Main Content Area: Centered and limited width */}
      <main className="max-w-7xl mx-auto  lg:px-8 py-6">


{/* === Hero / Main Banner Section === */}
<div className="mx-auto w-full max-w-[1180px] h-[400px] bg-white rounded-lg shadow mb-3 
                flex flex-col md:flex-row items-center justify-between px-6">

  {/* Left Side Section (Hidden on mobile) */}
  <div className="hidden lg:block w-full md:w-[250px] h-[360px] bg-white rounded-lg py-4 mr-1">
    <p className="px-3 font-inter font-medium text-base rounded bg-[#E5F1FF] py-4">
      Automobiles
    </p>

    <ul className="space-y-2 text-sm py-2">
      <li>Clothes and wear</li>
      <li>Home interiors</li>
      <li>Computer and Tech</li>
      <li>Tools,equipments</li>
      <li>sports and outdoors</li>
      <li>Animal and pets</li>
      <li>Machinery tools</li>
      <li>More category</li>
    </ul>
  </div>

  {/* RIGHT SECTION (hidden on mobile except image) */}
  <div className="flex-1 h-full flex md:flex-row flex-col items-center justify-center gap-4 w-full sm:h-full">

    {/* MAIN BANNER IMAGE — Visible on all devices */}
    <div className="  flex items-center h-full w-full">

      <img
        src="/banner.png"
        alt="Main Banner"
        className="
          object-cover inset-0 rounded-md border border-gray-300
          w-full h-full 
        "
      />

    </div>

    {/* RIGHT SMALL CARDS (Hidden on mobile) */}
    <div className="hidden lg:flex flex-col gap-2">

      {/* BLUE CARD */}
      <div className="w-[200px] h-[150px] bg-[#E3F0FF] rounded-md flex flex-col items-center justify-between p-3">
        <div className="flex gap-3 items-center">
          <img src="/Avatar.png" alt="profile" className="w-11 h-11" />
          <div className="flex flex-col leading-tight">
            <p className="text-sm text-gray-800 font-semibold">Hi user, </p>
            <p className="text-sm text-gray-800 font-semibold">let's get started</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <button className="w-full h-[30px] bg-blue-500 text-white rounded-md">
            Join now
          </button>

          <button className="w-full h-[30px] bg-white text-blue-500 border border-blue-500 rounded-md">
            Login
          </button>
        </div>
      </div>

      {/* ORANGE CARD */}
      <div className="w-[200px] h-[95px] bg-[#F38332] rounded-md flex flex-col px-3 items-start justify-center leading-tight">
        <p className="text-white font-medium text-sm">Get US $10 off</p>
        <p className="text-white font-medium text-sm">with new</p>
        <p className="text-white font-medium text-sm">supplier</p>
      </div>

      {/* GREEN CARD */}
      <div className="w-[200px] h-[95px] bg-[#55BDC3] rounded-md flex flex-col items-start px-3 justify-center">
        <p className="text-white font-medium text-sm">Send quotes with </p>
        <p className="text-white font-medium text-sm">supplier</p>
        <p className="text-white font-medium text-sm">preferences</p>
      </div>

    </div>

  </div>

</div>


{/* Main Container */}
<div className="w-full max-w-[1180px] mx-auto border border-[#DEE2E7] rounded-lg mb-3 bg-white flex flex-col md:flex-row md:h-60 overflow-hidden">

  {/* 1. LEFT SECTION (Deals & Timer) */}
 {/* LEFT SECTION (Deals & Timer) */}
<div className="w-full md:w-[281px] p-5 shrink-0 border-b md:border-b-0 md:border-r border-[#DEE2E7] 
                flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
  
  {/* Text Side: Stays as a column on both mobile and desktop */}
  <div className="flex flex-col">
    <h2 className="font-semibold text-[18px] md:text-[20px] leading-6 md:leading-7 tracking-tight">
      Deals and offers
    </h2>
    <p className="text-gray-500 text-xs md:text-sm">Hygiene equipments</p>
  </div>

  {/* Timer Side: Row on mobile, Row on desktop (but wrapped by the parent's column logic) */}
  <div className="flex gap-3 md:gap-4">
    {['Days', 'Hour', 'Min', 'Sec'].map((label) => (
      <div 
        key={label} 
        className="w-11 h-12 md:w-[45px] md:h-[50px] bg-[#3e4042] md:bg-[#3e4042] text-[#eef0f2] md:text-white rounded flex flex-col items-center justify-center"
      >
        <span className="font-bold text-[14px] md:text-[16px] leading-none">00</span>
        <span className="text-[10px] md:text-[12px] opacity-80">{label}</span>
      </div>
    ))}
  </div>

</div>

  {/* 2. PRODUCT SECTION (Horizontal Scroll on Mobile, Row on Desktop) */}
  <div className="flex overflow-x-auto md:overflow-hidden w-full scrollbar-hide">
    
    {/* Product Card Component (Repeated 5 times) */}
    {[
      { img: "/watch.png", name: "Smart watches" },
      { img: "/latop.png", name: "Laptops" },
      { img: "/camera.png", name: "Go pro Cameras" },
      { img: "/headphone.png", name: "Headphone" },
      { img: "/mobile.png", name: "Canon Cameras" }
    ].map((product, index) => (
      <div 
        key={index} 
        className="min-w-[140px] md:flex-1 flex flex-col items-center justify-center border-r border-[#DEE2E7] p-4 shrink-0 last:border-r-0"
      >
        <img src={product.img} className="w-24 h-24 md:w-[140px] md:h-[140px] object-contain" alt={product.name}/>
        <p className="mt-3 text-gray-700 text-sm md:text-base text-center">{product.name}</p>
        <p className="mt-1 bg-[#FFE3E3] text-[#EB001B] text-xs font-semibold px-3 py-1 rounded-full">
          -25%
        </p>
      </div>
    ))}

  </div>
</div>






  
  
  

  <div className="w-full max-w-[1180px] mx-auto mb-6">
  <h4 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-3 px-4 md:px-0 md:hidden">
    Home and outdoor
  </h4>

  <section className="w-full bg-white border-y md:border border-[#DEE2E7] rounded-md md:rounded-lg overflow-hidden mb-5">
    <div className="flex flex-col md:flex-row h-full">

      {/* Left Banner - Hidden on mobile */}
      <div className="hidden md:flex relative w-[280px] h-[257px] shrink-0 bg-cover bg-center"
           style={{ backgroundImage: "url('/item-section.jpg')" }}>
        <div className="absolute bg-[#FFE8BA66] inset-0 p-4 flex flex-col items-start ">
          <h4 className="text-lg font-semibold text-[#1C1C1C]">Home and outdoor</h4>
          <button className="mt-2 bg-white text-sm px-3 py-1 rounded shadow">Source now</button>
        </div>
      </div>

      {/* Items Section */}
      <div className="flex flex-row md:grid md:grid-cols-4 flex-1 h-full overflow-x-auto md:overflow-hidden scrollbar-hide">
        {[...Array(8)].map((_, index) => {
          const images = ["/sofa.png", "/scope.png", "/goldan.png", "/juice.png", "/splash.png", "/purse.jpg", "/matka.png", "/plant.png"];
          const titles = ["Soft Chairs", "Kitchen Mixer", "Sofa and Chairs", "Blenders", "Kitchen Dishes", "Home Appliance", "Matka", "Plant"];
          const prices = ["25", "75.99", "45.50", "120", "350", "60", "200", "150"];

          return (
            <div
              key={index}
              className="bg-white border-r border-gray-100 min-w-[140px] md:min-w-0 h-auto md:h-32 shrink-0 md:shrink flex flex-col md:relative p-4 last:border-r-0"
            >
              {/* Image: Top on mobile, Bottom-Right on desktop */}
              <div className="flex justify-center md:absolute md:bottom-2 md:right-2">
                <img
                  src={images[index]}
                  alt={titles[index]}
                  className="w-24 h-24 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Text: Below image on mobile, Top-Left on desktop */}
              <div className="mt-3 md:mt-0 md:absolute md:top-2 md:left-3 text-center md:text-left">
                <p className="text-sm font-medium text-[#1C1C1C] md:truncate">{titles[index]}</p>
                <p className="text-xs text-gray-400 mt-1 md:text-gray-500">
                  <span className="md:hidden">Price: </span>USD {prices[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

<h4 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-3 px-4 md:px-0 md:hidden">
   Consumer electronics and gedgets
  </h4>

<section className="w-full bg-white border-y md:border border-[#DEE2E7] rounded-md md:rounded-lg overflow-hidden">
   
   
    <div className="flex flex-col md:flex-row h-full">

      {/* Left Banner - Hidden on mobile */}
      <div className="hidden md:flex relative w-[280px] h-[257px] shrink-0 bg-cover bg-center"
           style={{ backgroundImage: "url('/mobile2.png')" }}>
        <div className="absolute bg-[#FFE8BA66] inset-0 p-4 flex flex-col items-start ">
          <h4 className="text-lg font-semibold text-[#1C1C1C]">Consumer electronics and gedgets</h4>
          <button className="mt-2 bg-white text-sm px-3 py-1 rounded shadow">Source now</button>
        </div>
      </div>

      {/* Items Section */}
      <div className="flex flex-row md:grid md:grid-cols-4 flex-1 h-full overflow-x-auto md:overflow-hidden scrollbar-hide">
        {[...Array(8)].map((_, index) => {
          const images = ["/watch.png", "/camera.png", "/wheadphone.png", "/flask.png", "/headphone.png", "/latop.png", "/moblile2.png", "/mobile3.png"];
          const titles = ["Soft Chairs", "Kitchen Mixer", "Sofa and Chairs", "Blenders", "Kitchen Dishes", "Home Appliance", "Matka", "Plant"];
          const prices = ["25", "75.99", "45.50", "120", "350", "60", "200", "150"];

          return (
            <div
              key={index}
              className="bg-white border-r border-gray-100 min-w-[140px] md:min-w-0 h-auto md:h-32 shrink-0 md:shrink flex flex-col md:relative p-4 last:border-r-0"
            >
              {/* Image: Top on mobile, Bottom-Right on desktop */}
              <div className="flex justify-center md:absolute md:bottom-2 md:right-2">
                <img
                  src={images[index]}
                  alt={titles[index]}
                  className="w-24 h-24 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Text: Below image on mobile, Top-Left on desktop */}
              <div className="mt-3 md:mt-0 md:absolute md:top-2 md:left-3 text-center md:text-left">
                <p className="text-sm font-medium text-[#1C1C1C] md:truncate">{titles[index]}</p>
                <p className="text-xs text-gray-400 mt-1 md:text-gray-500">
                  <span className="md:hidden">Price: </span>USD {prices[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

</div>



{/* Main Wrapper */}
<section className="relative w-full max-w-[1180px] mx-auto mb-6 overflow-hidden md:rounded-lg">
  
  {/* 1. BACKGROUND LAYER (The 1180x420 Area) */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/inquiry-section.png')" }} // Make sure to export this from Figma
  >
    {/* Blue Gradient Overlay - ensures text is readable on the left */}
    <div className="absolute inset-0 bg-linear-to-r from-[#2C7CF1]/20 via-[#127FFF]/10 to-transparent"></div>
  </div>

  {/* 2. CONTENT LAYER */}
  <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 py-10 min-h-[420px] gap-8">
    
    {/* LEFT SIDE: Heading & Text */}
    <div className="text-white max-w-[440px]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
        An easy way to send requests to all suppliers
      </h2>
      <p className="hidden md:block text-white/90 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    {/* RIGHT SIDE: The Inquiry Form Card (491px width) */}
    <div className="bg-white p-5 md:p-6 rounded-lg shadow-xl w-full max-w-[491px]">
      <h3 className="text-xl font-semibold text-[#1C1C1C] mb-5">
        Send quote to suppliers
      </h3>

      <form className="flex flex-col gap-4">
        {/* Item Name */}
        <input 
          type="text" 
          placeholder="What item you need?" 
          className="w-full border border-[#DEE2E7] rounded-md px-4 py-2.5 focus:border-blue-500 outline-none placeholder-gray-400"
        />

        {/* Details Textarea */}
        <textarea 
          placeholder="Type more details" 
          rows="3"
          className="w-full border border-[#DEE2E7] rounded-md px-4 py-2.5 focus:border-blue-500 outline-none resize-none placeholder-gray-400"
        ></textarea>

        {/* Quantity and Unit Row */}
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Quantity" 
            className="flex-1 border border-[#DEE2E7] rounded-md px-4 py-2.5 outline-none focus:border-blue-500"
          />
          
          {/* Custom Select */}
          <div className="relative w-[130px]">
            <select className="w-full appearance-none border border-[#DEE2E7] rounded-md px-4 py-2.5 bg-white outline-none cursor-pointer">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Litre</option>
            </select>
            {/* SVG Arrow */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-fit bg-[#127FFF] hover:bg-[#0067FF] text-white font-medium px-6 py-2.5 rounded-md transition-all active:scale-95 mt-2"
        >
          Send inquiry
        </button>
      </form>
    </div>

  </div>
</section>

{/* Recomanded section */}


<section className="w-full max-w-[1180px] mx-auto mb-5 px-4 md:px-0">
  {/* Section Heading */}
  <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-6">
    Recommended items
  </h2>

  {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    {[...Array(10)].map((_, index) => {
      // Data based on your uploaded image
      const items = [
        { price: "$10.30", title: "T-shirts with multiple colors, for men", img: "/T-Shirt.png" },
        { price: "$10.30", title: "Jeans shorts for men blue color", img: "/jean-shirt.jpg" },
        { price: "$12.50", title: "Brown winter coat medium size", img: "/w-coat.png" },
        { price: "$34.00", title: "Jeans bag for travel for men", img: "/jeans-wallet.png" },
        { price: "$99.00", title: "Leather wallet", img: "/leather-wallet.png" },
        { price: "$9.99", title: "Canon camera black, 100x zoom", img: "/wheadphone.png" }, // Note: Image in your screenshot shows jeans
        { price: "$8.99", title: "Headset for gaming with mic", img: "/matka.png" },
        { price: "$10.30", title: "Smartwatch silver color modern", img: "/flask.png" },
        { price: "$10.30", title: "Blue wallet for men leather metarfial", img: "/jeans-wallet.png" },
        { price: "$80.95", title: "Jeans bag for travel for men", img: "/leather-wallet.png" },
      ];

      const item = items[index];

      return (
        <div 
          key={index} 
          className="bg-white border border-[#EEEEEE] rounded-md p-4 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
        >
          {/* Product Image Wrapper */}
          <div className="h-[170px] flex items-center justify-center mb-4">
            <img 
              src={item.img} 
              alt={item.title} 
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Price */}
          <span className="text-base font-medium text-[#1C1C1C]">
            {item.price}
          </span>

          {/* Title / Description */}
          <p className="text-sm text-[#8B96A5] mt-1 leading-tight line-clamp-2">
            {item.title}
          </p>
        </div>
      );
    })}
  </div>
</section>

{/* service-section  */}

<section className="w-full max-w-[1180px] mx-auto mb-10 px-4 md:px-0">
  {/* Section Heading */}
  <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-6">
    Our extra services
  </h2>

  {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {[
      {
        title: "Source from Industry Hubs",
        img: "/stock.png",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        ),
      },
      {
        title: "Customize Your Products",
        img: "/industry.png",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 11m8 4V5" />
          </svg>
        ),
      },
      {
        title: "Fast, reliable shipping by ocean or air",
        img: "/product.png",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        ),
      },
      {
        title: "Product monitoring and inspection",
        img: "/source.png",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
    ].map((service, index) => (
      <div 
        key={index} 
        className="relative bg-white border border-[#E0E7E9] rounded-lg overflow-hidden h-[200px] md:h-64 group"
      >
        {/* Darkened Image Section */}
        <div className="relative h-[60%] w-full overflow-hidden bg-gray-800">
          <img 
            src={service.img} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="h-[40%] p-4 flex items-center">
          <p className="text-base font-medium text-[#1C1C1C] pr-10 leading-tight">
            {service.title}
          </p>
        </div>

        {/* Floating Icon Wrapper */}
        <div className="absolute right-4 top-[60%] -translate-y-1/2 w-12 h-12 bg-[#D1E7FF] border-2 border-white rounded-full flex items-center justify-center text-[#1C1C1C] shadow-sm">
          {service.icon}
        </div>
      </div>
    ))}
  </div>
</section>




</main>
      {/* === FOOTER PLACEHOLDER === */}
      <footer className="bg-blue-600 text-white p-4 text-center mt-8">
        Site Footer (Placeholder)
      </footer>
    </div>
  );
};

export default HomePage;