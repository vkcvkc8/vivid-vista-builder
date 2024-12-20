import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('/lovable-uploads/85865ee8-ec9b-4681-9cca-e8182dc64f96.png')`
        }}
      >
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-2xl">
            <img 
              src="/lovable-uploads/b7003e17-377d-4320-92e6-a0a3a421a9d2.png" 
              alt="Sunsor Logo" 
              className="h-24 mb-8"
            />
            <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              The Sunsor Quality
            </h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Hand - picked Ingredients, careful processing and untouched packaging ensuring superior quality.
            </p>
            <Button 
              className="bg-[#DC2626] hover:bg-[#DC2626]/90 text-white px-8 py-6 text-lg flex items-center gap-2"
            >
              Explore
              <span className="text-2xl">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-8 bg-white/80 backdrop-blur-sm -mt-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white" />
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Customer" className="w-12 h-12 rounded-full border-2 border-white" />
            </div>
            <div>
              <h4 className="font-semibold">Our Happy Customer</h4>
              <div className="flex items-center gap-2">
                <span className="text-[#F5B100]">⭐ 4.8</span>
                <span className="text-gray-600">(12.5k Review)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;