const Story = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/a1d8fe4c-2578-4d73-80e7-0e1217cd262c.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#8AB73A] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <img 
              src="/lovable-uploads/a1d8fe4c-2578-4d73-80e7-0e1217cd262c.png"
              alt="John Ben"
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-4xl font-bold mb-4">John Ben</h2>
            <p className="text-lg">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;