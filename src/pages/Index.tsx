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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('/lovable-uploads/afde0202-605e-4747-8d04-270de758ee81.png')`
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

      {/* Our Products Section */}
      <section className="py-16 bg-[#DC2626]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Product</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Atta', image: '/lovable-uploads/d02c4b76-9879-4e4d-a74f-95182e8f1dad.png' },
              { name: 'Mustard Oil', image: '/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png' },
              { name: 'Suji', image: '/lovable-uploads/ae8836d7-bbdd-4b51-95f8-c7e857261724.png' },
              { name: 'Maida', image: '/lovable-uploads/cec35245-3122-4998-aa39-e1055a91fcfb.png' },
              { name: 'Besan', image: '/lovable-uploads/a1d8fe4c-2578-4d73-80e7-0e1217cd262c.png' },
              { name: 'Wheat Bran', image: '/lovable-uploads/d02c4b76-9879-4e4d-a74f-95182e8f1dad.png' },
            ].map((product, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full p-4 mb-4 aspect-square flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-white font-medium">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delicious Chole Bhature Section */}
      <section className="py-16 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="bg-black/40 rounded-2xl p-8 flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Delicious Chole Bhature</h2>
              <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  Our Superior-Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  Contact-Less Packaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  The Trust Of Millions Of Mothers
                </li>
              </ul>
            </div>
            <img 
              src="/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png" 
              alt="Chole Bhature" 
              className="w-1/3"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border rounded-lg p-4">
                <img 
                  src="/lovable-uploads/d02c4b76-9879-4e4d-a74f-95182e8f1dad.png" 
                  alt="Product" 
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Sunsor Chakki Atta</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">₹248.00</span>
                    <span className="text-gray-500 line-through">₹499.00</span>
                    <span className="text-[#F5B100] text-sm">30% Off</span>
                  </div>
                  <Button className="w-full bg-[#DC2626] hover:bg-[#DC2626]/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-16 bg-[#DC2626]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png" 
                  alt="Recipe" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">Delicious Dal Puri</h3>
                  <p className="text-white/80 text-sm">Made from Sunsor Atta</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us No.1 Section */}
      <section className="py-16 bg-gradient-to-b from-[#DC2626] to-[#F5B100]">
        <div className="container mx-auto px-4">
          <div className="bg-black/40 rounded-2xl p-8 flex items-center justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">What Makes Us No.1?</h2>
              <ul className="space-y-2 text-white">
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  Our Superior-Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  Contact-Less Packaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span>
                  The Trust Of Millions Of Mothers
                </li>
              </ul>
            </div>
            <img 
              src="/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png" 
              alt="Chef" 
              className="w-1/3"
            />
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-[#DC2626]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative">
                <img 
                  src="/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png" 
                  alt="Video thumbnail" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl">▶</span>
                  </div>
                </button>
                <h3 className="text-white font-medium mt-4">Recipe Title</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-[#F5B100]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Follow us @Sunsor</h2>
          <div className="flex justify-center gap-8">
            {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((platform) => (
              <button key={platform} className="text-[#DC2626] hover:text-[#DC2626]/80">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#DC2626] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/b7003e17-377d-4320-92e6-a0a3a421a9d2.png" 
                alt="Sunsor Logo" 
                className="h-16 mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">Can't get enough?</h3>
              <p>Sign up to our newsletter for updates</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Important Links</h4>
              <ul className="space-y-2">
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Terms</h4>
              <ul className="space-y-2">
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>+91 123 456 7890</p>
              <p>info@sunsor.com</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>© 2024 Sunsor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;