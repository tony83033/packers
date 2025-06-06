import { Package, Scale, HardHat, Recycle, Truck, Warehouse, ChevronRight } from "lucide-react";

export default function LogisticsServices() {
  const services = [
    {
      icon: Package,
      title: "Residential Packaging",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: Scale,
      title: "Commercial Movers",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: HardHat,
      title: "Furniture Rebinding",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: Recycle,
      title: "Furniture Recycling",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: Truck,
      title: "Residential Movers",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: Warehouse,
      title: "Commercial Storage",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-2">
          OUR SERVICES
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          We Provide World Class Logistic<br />
          Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-orange-200 p-6 hover:border-orange-300 transition-colors duration-200 group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4">
                <IconComponent className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-end">
                <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}