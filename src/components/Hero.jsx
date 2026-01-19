import react from 'react';

const Hero =()=>{
    return(

<div className="mx-auto w-full max-w-[1180px] h-auto lg:h-[400px] bg-white border-b lg:border border-gray-200 rounded-none lg:rounded-md mb-3 flex flex-col lg:flex-row p-0 lg:p-[17px] gap-0 lg:gap-[11px]">

  {/* Left Sidebar - Stays hidden until Large screens */}
  <div className="hidden lg:block w-[250px] shrink-0">
    <ul className="text-gray-600 font-inter">
      <li className="px-3 py-3 font-medium text-[#1C1C1C] rounded-lg bg-[#E5F1FF] cursor-pointer">Automobiles</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Clothes and wear</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Home interiors</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Computer and Tech</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Tools, equipments</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Sports and outdoors</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Animal and pets</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">Machinery tools</li>
      <li className="px-3 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">More category</li>
    </ul>
  </div>

  {/* Center Banner Section 
      min-w-0 allows it to shrink below its content size.
      md:min-w-[400px] forces it to be able to go down to 400px.
  */}
  <div className="flex-1 relative min-w-0 md:min-w-[400px] h-[180px] sm:h-[300px] lg:h-full overflow-hidden">
    
    
    <img
      src="/banner.png"
      alt="Main Banner"
      className="w-full h-full object-cover rounded-none lg:rounded-sm"
    />
  </div>

  {/* Right Sidebar - Hidden on mobile/tablet */}
  <div className="hidden lg:flex flex-col gap-2.5 w-[200px] shrink-0">
    {/* Profile Card */}
    <div className="bg-[#E3F0FF] rounded-md p-4 flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <img src="/Avatar.png" alt="profile" className="w-11 h-11 rounded-full" />
        <div className="leading-tight">
          <p className="text-base text-[#1C1C1C]">Hi, user</p>
          <p className="text-base text-[#1C1C1C]">let's get started</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full py-1.5 bg-blue-600 text-white rounded-md text-sm">Join now</button>
        <button className="w-full py-1.5 bg-white text-blue-600 rounded-md text-sm border border-gray-200">Log in</button>
      </div>
    </div>

    {/* Promo Cards */}
    <div className="bg-[#F38332] rounded-md p-4 h-[95px] flex items-center">
      <p className="text-white text-sm leading-tight">Get US $10 off with a new supplier</p>
    </div>
    <div className="bg-[#55BDC3] rounded-md p-4 h-[95px] flex items-center">
      <p className="text-white text-sm leading-tight">Send quotes with supplier preferences</p>
    </div>
  </div>

</div>

    )
}

export default Hero;