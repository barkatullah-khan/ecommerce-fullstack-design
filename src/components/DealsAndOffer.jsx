import react from 'react';

const DealsAndOffer =()=>{
    return (

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
                <img src={product.img} className="w-24 h-24 md:w-[140px] md:h-[140px] object-contain" alt={product.name} />
                <p className="mt-3 text-gray-700 text-sm md:text-base text-center">{product.name}</p>
                <p className="mt-1 bg-[#FFE3E3] text-[#EB001B] text-xs font-semibold px-3 py-1 rounded-full">
                  -25%
                </p>
              </div>
            ))}

          </div>
        </div>


    )
}

export default DealsAndOffer