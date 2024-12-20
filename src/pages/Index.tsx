import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Sunsor</h1>
          <div className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experience Modern Design
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our collection of minimalist and elegant products designed for your lifestyle.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
                <h4 className="text-xl font-semibold mb-2">Product {item}</h4>
                <p className="text-gray-600">
                  A beautiful piece designed with simplicity in mind.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4">Sunsor</h5>
              <p className="text-gray-400">
                Creating beautiful spaces through minimalist design.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>contact@sunsor.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 px-4 py-2 rounded text-white flex-grow"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;