const Blog = () => {
  const blogs = [
    {
      title: "Delicious Dal Puri From Sunsor atta and Oil",
      category: "Recipes | Stories",
      image: "/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png"
    },
    {
      title: "Samosa Made From Sunsor Atta",
      category: "Recipes | Stories",
      image: "/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png"
    },
    {
      title: "Super Delicious Kachori From Sunsor atta and Oil",
      category: "Recipes | Stories",
      image: "/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/ae6f463c-0120-4114-9f84-3f32d422cc26.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Blogs</h1>
          <p className="text-xl max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="bg-[#DC2626] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2">{blog.category}</p>
                  <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                  <a href="#" className="text-[#DC2626] hover:underline">View More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;