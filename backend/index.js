import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Placeholder products API (static data)
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Product A", price: 29.99, image: "/assets/p1.png" },
    { id: 2, name: "Product B", price: 45.50, image: "/assets/p2.png" }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
