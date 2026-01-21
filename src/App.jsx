import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage"; 

function App() {
  const [cart, setCart] = useState([]);

  // 1. ADDED BACK: Function to update quantity (+/-)
  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  // 2. Updated addToCart logic
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.title} added to cart!`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} cart={cart}/>} />
        <Route path="/product/:id" element={<DetailsPage onAddToCart={addToCart} cart={cart} />} />
        
        {/* Now updateQuantity is defined and can be passed safely */}
        <Route 
          path="/cart" 
          element={<CartPage cart={cart} setCart={setCart} updateQuantity={updateQuantity} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;