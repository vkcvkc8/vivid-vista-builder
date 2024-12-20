import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lovable-uploads/cec35245-3122-4998-aa39-e1055a91fcfb.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Contact us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#DC2626] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-[#DC2626]/90 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Subject *</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white h-32"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" required />
                  <label htmlFor="terms" className="text-white">Accept Terms & Condition</label>
                </div>
                <Button className="w-full bg-white text-[#DC2626] hover:bg-white/90">
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[#DC2626]/90 p-8 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-8">Contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Address:</h3>
                  <p>
                    Third Floor, Dhaka Tower,<br />
                    GMS Rd, Dehradun,<br />
                    Uttarakhand - 248171, INDIA
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone:</h3>
                  <p>+1234567890</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email:</h3>
                  <p>Sunsor@support.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;