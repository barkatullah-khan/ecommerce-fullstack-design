// src/pages/DetailsPage.jsx
import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DetailsPage = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* --- Main Product Layout: Images (1/2) + Info (1/2) --- */}
        {/* Uses flex-col for mobile stacking, lg:flex-row for desktop side-by-side */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
          
          {/* 1. Image Gallery / Product Visuals (lg:w-1/2) */}
          <section className="lg:w-1/2">
            {/* Main Image */}
            <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg mb-4">
              <span className="text-gray-500 text-xl">Main Product Image (500x500)</span>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 overflow-x-auto">
              <div className="w-20 h-20 bg-gray-300 border-2 border-primary cursor-pointer shrink-0 rounded"></div>
              <div className="w-20 h-20 bg-gray-300 shrink-0 rounded"></div>
              <div className="w-20 h-20 bg-gray-300 shrink-0 rounded"></div>
              {/* ... more thumbnails */}
            </div>
          </section>

          {/* 2. Product Information & Buy Box (lg:w-1/2) */}
          <section className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-secondary mb-2">
              High-Performance Wireless Gaming Headset
            </h1>
            
            {/* Rating/Reviews */}
            <div className="text-sm text-gray-500 mb-4 border-b pb-4">
              ★★★★★ (45 Reviews) | Brand: TechPro
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-primary">$129.99</span>
              <span className="text-base text-gray-400 line-through ml-3">$150.00</span>
            </div>
            
            {/* Options (Color/Size) */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Color:</p>
              <div className="flex space-x-3">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-primary cursor-pointer"></div>
                <div className="w-6 h-6 rounded-full bg-red-600 border border-gray-300 cursor-pointer"></div>
              </div>
            </div>

            {/* Quantity and Action Buttons (The Buy Box) */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold">Quantity:</label>
                <input type="number" defaultValue="1" min="1" className="w-20 p-2 border rounded-lg text-center" />
              </div>

              <button className="bg-accent text-white py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-opacity">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-secondary py-3 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors">
                Buy Now
              </button>
            </div>
          </section>
        </div>

        {/* --- Product Specifications and Details (Full Width) --- */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-secondary mb-4 border-b pb-2">Product Description</h2>
            <p className="text-gray-700">Detailed technical specifications, features, and warranty information go here. This section is full-width below the main image/info block.</p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DetailsPage;