// src/pages/HomePage.jsx
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import React from 'react';
// Correct path to your main CSS file
import '../App.css'; 

const HomePage = () => {
  return (
    // Base layout container: uses custom background color
    <div className="min-h-screen bg-background-light">
      
     <Header></Header>
     <Navbar/>


      {/* Main Content Area: Centered and limited width */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Main Layout: Flex for desktop (lg:flex-row) and stacked for mobile (flex-col) */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* 1. Category Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow h-full">
              <h2 className="text-lg font-bold mb-3">All Categories</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary">Electronics</a></li>
                <li><a href="#" className="hover:text-primary">Apparel</a></li>
                {/* ... more categories */}
              </ul>
            </div>
          </aside>

          {/* 2. Main Body Content */}
          <section className="flex-grow">
            
            {/* 3. Hero/Banner Section */}
            <div className="bg-gray-400 h-64 rounded-lg mb-6 flex items-center justify-center text-xl font-semibold text-white">
              HOME PAGE BANNER
            </div>

            {/* 4. Featured Product Grid */}
            <h2 className="text-2xl font-bold text-secondary mb-4">Featured Deals</h2>
            
            {/* Responsive Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
              {/* Product Card Placeholders (Repeated) */}
              <div className="bg-white p-4 rounded-lg shadow h-64 flex flex-col justify-center items-center text-center">
                <p className="font-semibold">Product 1</p>
                <p className="text-primary font-bold">$25.00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow h-64 flex flex-col justify-center items-center text-center">
                <p className="font-semibold">Product 2</p>
                <p className="text-primary font-bold">$75.99</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow h-64 flex flex-col justify-center items-center text-center">
                <p className="font-semibold">Product 3</p>
                <p className="text-primary font-bold">$45.50</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow h-64 flex flex-col justify-center items-center text-center">
                <p className="font-semibold">Product 4</p>
                <p className="text-primary font-bold">$120.00</p>
              </div>
              
            </div>
          </section>
        </div>

      </main>

      {/* === FOOTER PLACEHOLDER === */}
      <footer className="bg-secondary text-white p-4 text-center mt-8">
        Site Footer (Placeholder)
      </footer>
    </div>
  );
};

export default HomePage;