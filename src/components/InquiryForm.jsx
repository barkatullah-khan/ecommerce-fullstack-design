import react from 'react';
const InquiryForm =()=>{
    
    return(

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
    )
}

export default InquiryForm;