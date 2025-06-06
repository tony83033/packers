

export default function GetStartedCTA() {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl">
            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">
              GET STARTED
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
              Ready To Get Moving?<br />
              Get Your Free Quote
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>

          {/* Right Truck Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Truck SVG Illustration */}
        <img src="/assets/our_work_img.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}