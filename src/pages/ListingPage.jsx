// src/pages/ListingPage.jsx
import React from 'react';
import '../App.css'; // Import the main CSS file
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import ProductCard from '../components/ProductCard';

const ListingPage = () => {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-secondary mb-6">Search Results for "Electronics"</h1>

        {/* --- Main Layout: Two Columns Desktop, Stacked Mobile --- */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Filter Sidebar (The `aside` element) */}
          <aside className="lg:w-1/4 shrink-0">
            
            {/* Mobile Filter Button (VISIBLE only on small screens) */}
            <div className="lg:hidden mb-4">
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90">
                    Show Filters (Mobile View)
                </button>
            </div>
            
            {/* Desktop Filters (HIDDEN on mobile, VISIBLE on large screens) */}
            <div className="bg-white p-5 rounded-lg shadow-lg hidden lg:block">
              <h2 className="text-lg font-bold mb-4 border-b pb-2">Filter By</h2>
              
              {/* Example Filter Section: Price */}
              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-2">Price Range</h3>
                <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <p className="text-xs text-gray-500 mt-1">Under $500</p>
              </div>
              
              {/* Example Filter Section: Brand */}
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-2">Brand</h3>
                <label className="block text-sm"><input type="checkbox" className="mr-2"/> Sony</label>
                <label className="block text-sm"><input type="checkbox" className="mr-2"/> Samsung</label>
                <label className="block text-sm"><input type="checkbox" className="mr-2"/> Apple</label>
              </div>
            </div>
          </aside>

          {/* 2. Product Results (The `section` element) */}
          <section className="grow lg:w-3/4">
            
            {/* Grid Container: Responsive column count */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Use the Product Card component here */}
              <ProductCard name="Laptop Pro" price="1199.00" />
              <ProductCard name="Mechanical Keyboard" price="95.00" />
              <ProductCard name="Webcam 4K" price="65.00" />
              <ProductCard name="Smart Watch" price="149.99" />
              <ProductCard name="Gaming Mouse" price="40.00" />
              <ProductCard name="Ultra HD Monitor" price="299.00" />
              {/* Add more for a full results page look */}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListingPage;