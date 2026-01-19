import React from "react";

const NewsLatter=()=>{
    return (

 <section className="w-full  bg-[#EFF2F4]  p-4">
        <div className="max-w-[1180px] mx-auto px-4 text-center">
          {/* Heading */}
          <h3 className="text-[20px] font-semibold text-[#1C1C1C] mb-1">
            Subscribe on our newsletter
          </h3>

          {/* Subtext */}
          <p className="text-[#606060] text-[16px] mb-6">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>

          {/* Form Container */}
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-[400px] mx-auto">
            <div className="relative w-full">
              {/* Mail Icon */}
              <span className="absolute inset-y-0 left-3 flex items-center text-[#8B96A5]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-[#DEE2E7] rounded-md outline-none focus:border-blue-500 bg-white"
              />
            </div>

            {/* Subscribe Button */}
            <button className="w-full sm:w-auto bg-[#127FFF] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors shadow-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>


    )
}


export default NewsLatter;