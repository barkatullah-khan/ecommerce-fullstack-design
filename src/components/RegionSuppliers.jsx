import React from "react";

const RegionSuppliers=({suppliers})=>{
    return(


         <section className="w-full max-w-[1180px] mx-auto lg:px-0 bg-white px-4 py-4">
          {/* Section Title */}
          <h2 className="px-4 text-2xl font-semibold text-[#1C1C1C] mb-6">
            Suppliers by region
          </h2>

          {/* Region Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-2 px-4">
            {[
              { name: "Arabic Emirates", url: "shopname.ae", img: "/uae.png" },
              { name: "Australia", url: "shopname.ae", img: "/aust.png" },
              { name: "United States", url: "shopname.ae", img: "/america.png" },
              { name: "Russia", url: "shopname.ru", img: "/russia.png" },
              { name: "Italy", url: "shopname.it", img: "/Italy.png" },
              { name: "Denmark", url: "denmark.com.dk", img: "/denmark.png" },
              { name: "France", url: "shopname.com.fr", img: "/france.png" },
              { name: "Arabic Emirates", url: "shopname.ae", img: "/uae.png" },
              { name: "China", url: "shopname.ae", img: "/china.png" },
              { name: "Great Britain", url: "shopname.co.uk", img: "/GB.png" },
            ].map((region, index) => (
              <div key={index} className="flex items-center gap-3">

                {/* Flag Image replaces the <span> emoji */}
                <div className="w-7 h-5 shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={region.img}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[#1C1C1C] text-[15px] leading-tight font-normal">
                    {region.name}
                  </p>
                  <p className="text-[#8B96A5] text-[12px] leading-tight">
                    {region.url}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}

export default RegionSuppliers