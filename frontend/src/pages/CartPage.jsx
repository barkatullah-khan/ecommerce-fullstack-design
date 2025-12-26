// src/pages/CartPage.jsx
import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 75.99, quantity: 1, image: "bg-gray-400" },
    { id: 2, name: "Ergonomic Gaming Mouse", price: 40.00, quantity: 2, image: "bg-gray-500" },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Reusable Cart Item component structure for clarity
  const CartItem = ({ item }) => (
    // Desktop layout (lg:flex) displays item details horizontally
    // Mobile layout (flex-col) stacks item details vertically
    <div className="flex flex-col sm:flex-row items-center border-b py-4 last:border-b-0">
      
      {/* 1. Image & Name */}
      <div className="flex items-center w-full sm:w-2/5 mb-3 sm:mb-0">
        <div className={`w-20 h-20 ${item.image} rounded mr-4 shrink-0`}></div>
        <span className="font-semibold text-secondary">{item.name}</span>
      </div>

      {/* 2. Price (Always visible) */}
      <span className="w-full sm:w-1/5 text-lg font-bold text-primary mb-3 sm:mb-0">
        ${item.price.toFixed(2)}
      </span>

      {/* 3. Quantity Selector */}
      <div className="w-full sm:w-1/5 mb-3 sm:mb-0">
        <input type="number" defaultValue={item.quantity} min="1" className="w-16 p-2 border rounded text-center" />
      </div>

      {/* 4. Subtotal & Remove Button */}
      <div className="w-full sm:w-1/5 text-right flex flex-col items-end">
        <span className="text-lg font-bold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button className="text-sm text-red-500 hover:text-red-700 mt-1">Remove</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-secondary mb-6">Your Shopping Cart</h1>

        {/* --- Main Layout: Item List (2/3) + Summary (1/3) --- */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Item List (Wider column on desktop) */}
          <section className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            {/* Continue Shopping Button */}
            <div className="mt-6 flex justify-end">
              <button className="text-primary hover:text-secondary font-semibold">
                ← Continue Shopping
              </button>
            </div>
          </section>

          {/* 2. Order Summary (Narrower column on desktop) */}
          <aside className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-2xl font-bold border-b pb-3 mb-4">Order Summary</h2>
            
            <div className="space-y-3 text-lg">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Shipping Estimate:</span>
                <span className="font-semibold">$10.00</span>
              </div>
              <div className="flex justify-between pt-3 text-xl font-bold text-secondary">
                <span>Order Total:</span>
                <span className="text-primary">${(subtotal + 10.00).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-accent text-white py-3 rounded-lg font-bold text-lg mt-6 hover:bg-opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;