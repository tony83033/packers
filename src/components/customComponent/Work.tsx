import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Smartphone, ThumbsUp, Settings } from "lucide-react"
import Image from "next/image"

const statistics = [
  {
    icon: Lightbulb,
    number: "12,000",
    label: "SATISFIED CLIENTS",
  },
  {
    icon: Smartphone,
    number: "96,000",
    label: "PACKAGES DELIVERED",
  },
  {
    icon: ThumbsUp,
    number: "1,500",
    label: "EXPERIENCED TEAM",
  },
  {
    icon: Settings,
    number: "60+",
    label: "BRANCHES",
  },
]

export default function OurWorkSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">OUR WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            We Create A Honest, Hassle-Free And Quality Moving Experience
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Truck Image */}
          <div className="relative">
            <Image
              src="/assets/our_work_img.png"
              alt="PACKY delivery truck"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right Side - Statistics Cards */}
          <div className="grid grid-cols-2 gap-6">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="border-2 border-orange-200 hover:border-orange-300 transition-colors duration-200"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <stat.icon className="w-12 h-12 text-orange-500 mx-auto" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</h3>
                    <p className="text-sm font-medium text-gray-600 tracking-wider uppercase">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
