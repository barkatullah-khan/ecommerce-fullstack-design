// src/pages/HomePage.jsx
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import '../App.css';
import DealsAndOffer from "../components/DealsAndOffer";
import CategorySection from "../components/CategorySection";
import InquiryForm from "../components/InquiryForm"
import RecommendedItems from "../components/RecommendedItems";
import ExtraServices from "../components/ExtraServices";
import RegionSuppliers from "../components/RegionSuppliers";
import NewsLatter from "../components/NewsLatter";
const HomePage = () => {
  // 1. Define your data for the first section
  const homeData = [
    { title: "Soft Chairs", price: "25", img: "/sofa.png" },
    { title: "Kitchen Mixer", price: "75.99", img: "/scope.png" },
    { title: "Sofa and Chairs", price: "45.50", img: "/goldan.png" },
    { title: "Blenders", price: "120", img: "/juice.png" },
    { title: "Kitchen Dishes", price: "350", img: "/splash.png" },
    { title: "Home Appliance", price: "60", img: "/purse.jpg" },
    { title: "Matka", price: "200", img: "/matka.png" },
    { title: "Plant", price: "150", img: "/plant.png" },
  ];

  // 2. Define your data for the second section
  const electronicsData = [
    { title: "Smart Watches", price: "25", img: "/watch.png" },
    { title: "Cameras", price: "75.99", img: "/camera.png" },
    { title: "Headphones", price: "45.50", img: "/wheadphone.png" },
    { title: "Electric Kettle", price: "120", img: "/flask.png" },
    { title: "Gaming Sets", price: "350", img: "/headphone.png" },
    { title: "Laptops", price: "60", img: "/latop.png" },
    { title: "Smartphones", price: "200", img: "/moblile2.png" },
    { title: "Tablets", price: "150", img: "/mobile3.png" },
  ];

  return (
    // Base layout container: uses custom background color
    <div className="min-h-screen bg-gray-100 relative">

      <Header />
      <Navbar />

      {/* Main Content Area: Centered and limited width */}
      <main className="max-w-7xl mx-auto lg:px-8 py-6">
        <Hero />
        <DealsAndOffer />

        {/* Main Container */}

        <CategorySection
          title="Home and outdoor"
          bannerImg="/item-section.jpg"
          items={homeData}
        />

        <CategorySection
          title="Consumer electronics and gadgets"
          bannerImg="/mobile2.png"
          items={electronicsData}
        />

        {/* Main Wrapper */}
        <InquiryForm />

        {/* Recomanded section */}

        <RecommendedItems />


        {/* service-section  */}

        <ExtraServices />

        {/* regionBy suppliers */}

        <RegionSuppliers />

      </main>

      <NewsLatter />


      <Footer />

    </div>
  );
};

export default HomePage;

