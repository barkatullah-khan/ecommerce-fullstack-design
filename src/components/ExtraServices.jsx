import react from 'react';

const ExtraServices=()=>{
    return(

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

    )
}


export default ExtraServices;