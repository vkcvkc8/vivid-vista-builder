const About = () => {
  const features = [
    {
      icon: "💡",
      title: "Top Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
      icon: "💰",
      title: "COD Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },
    {
      icon: "✅",
      title: "100% Original Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/ae8836d7-bbdd-4b51-95f8-c7e857261724.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#DC2626] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choosing Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#FFF5E1] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#2C1810] rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Don't miss out on special offers</h2>
              <p className="mb-6">Register to receive news about the latest, savings combos, discount codes...</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span> Savings combos
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span> Freeship
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#F5B100]">✓</span> Premium deals
                </li>
              </ul>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                />
                <button className="px-6 py-2 bg-[#DC2626] rounded-lg hover:bg-[#DC2626]/90">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;