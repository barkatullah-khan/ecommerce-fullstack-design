import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import '../App.css';
import DealsAndOffer from "../components/DealsAndOffer";
import CategorySection from "../components/CategorySection";
import InquiryForm from "../components/InquiryForm"
import ExtraServices from "../components/ExtraServices";
import RegionSuppliers from "../components/RegionSuppliers";
import NewsLatter from "../components/NewsLatter";
import RecommendedItems from "../components/RecommendedItems";
import { allProducts } from "../Data/products";

const HomePage = ({ onAddToCart, cart, searchQuery, setsearchQuery, selectedCategory, setSelectedCategory }) => {
  
  // LOGIC: Combined Filter (Checks both Search Bar AND Category Selection)
  const filteredMasterList = allProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes((searchQuery || "").toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // DATA SPLITTING: Use the filtered list to fill the UI sections
  const homeData = filteredMasterList.filter(item => item.category === "home");
  const electronicsData = filteredMasterList.filter(item => item.category === "electronics");
  const recommendedData = filteredMasterList.filter(item => item.category === "recommended");
  const dealsData = filteredMasterList.filter(item => item.category === "deals");

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header cart={cart} setsearchQuery={setsearchQuery} searchQuery={searchQuery} />
      
      {/* Pass setSelectedCategory to Navbar so clicking links works */}
      <Navbar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      <main className="max-w-7xl mx-auto lg:px-8 py-6">
        
        {/* UI: Show a "Reset" button if a category is active */}
        {selectedCategory !== "all" && (
          <div className="mb-4 px-4 flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-200">
            <p className="text-blue-800">
              Showing results for: <strong>{selectedCategory}</strong>
            </p>
            <button 
              onClick={() => setSelectedCategory("all")}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Sections hide automatically if they have no items matching the search/category */}
        {!searchQuery && selectedCategory === "all" && <Hero />}
        
        {dealsData.length > 0 && <DealsAndOffer items={dealsData} />}

        {homeData.length > 0 && (
          <CategorySection
            title="Home and outdoor"
            bannerImg="/item-section.jpg"
            items={homeData}
            onAddToCart={onAddToCart}
          />
        )}

        {electronicsData.length > 0 && (
          <CategorySection
            title="Consumer electronics and gadgets"
            bannerImg="/mobile2.png"
            items={electronicsData}
            onAddToCart={onAddToCart}
          />
        )}

        {!searchQuery && <InquiryForm />}

        {recommendedData.length > 0 && (
          <RecommendedItems items={recommendedData} />
        )}


       
       
            
        {/* Global "Empty State" if nothing matches anything */}
        {filteredMasterList.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm my-4">
            <h2 className="text-2xl text-gray-500 font-semibold">No products found</h2>
            <p className="text-gray-400 mt-2">Try adjusting your search or category filters.</p>
            <button 
               onClick={() => {setsearchQuery(""); setSelectedCategory("all")}}
               className="mt-4 text-blue-600 font-bold underline"
            >
              Reset all filters
            </button>
          </div>
        )}


 {!searchQuery && <ExtraServices />}
        {!searchQuery && <RegionSuppliers />}
      </main>

      <NewsLatter />
      <Footer />
    </div>
  );
};

export default HomePage;