import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [view, setView] = useState<"grid" | "list">("grid");

  const products = [
    {
      name: "Sunsor Chakki Atta",
      price: 248.00,
      originalPrice: 499.00,
      discount: "30% Off",
      rating: 4.5,
      reviews: 23,
      inStock: true,
      image: "/lovable-uploads/d02c4b76-9879-4e4d-a74f-95182e8f1dad.png"
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen">
      {/* Promo Banner */}
      <div className="bg-[#F5B100] py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <p className="text-black">
              Get 5% Off your first order,
              <span className="font-semibold"> Promo: ORDER5</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1">
            <span className="text-xl">📍</span>
            <span className="text-black">
              Dehradun, Uttarakhand - 248171, India
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Our Products</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => setView("list")}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 relative">
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </button>
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <div className="space-y-2">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#DC2626] font-bold">₹{product.price}</span>
                  <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-[#F5B100] text-sm">{product.discount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5B100]">⭐ {product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                <Button className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;