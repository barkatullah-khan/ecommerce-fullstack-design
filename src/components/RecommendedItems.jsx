import React from "react";

const RecommendedItems=({items})=>{
    return(

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


    )
}

export default RecommendedItems