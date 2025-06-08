import Image from "next/image"
import { ChevronRight, ChevronDown, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/hero.jpg" alt="Moving boxes background" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-900/80" /> {/* Blue overlay */}
      </div>

      {/* Navigation */}
      <header className="relative z-10 bg-white py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-500">
              <span className="text-orange-500">P</span>ACKY
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-orange-500">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-700">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-700">
              Contact
            </a>
            <a href="#" className="text-sm font-medium text-gray-700">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-gray-700">
              Team
            </a>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700">
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">Get A Quote</Button>
          </nav>

          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center text-white px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-medium mb-2">Welcome to </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Shivam Transbort Packers &
Movers
</h1>
          <p className="text-sm md:text-base opacity-90 mb-8 max-w-xl mx-auto">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentiu.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-base">
            Get Started
          </Button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-16 space-x-2">
            <div className="h-2 w-8 bg-orange-500 rounded-full"></div>
            <div className="h-2 w-2 bg-white/50 rounded-full"></div>
            <div className="h-2 w-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Tracking Section */}
      <div className="relative z-10 max-w-3xl mx-auto -mt-16 mb-8 flex flex-col md:flex-row">
        <div className="bg-orange-500 text-white p-6 flex items-center justify-between md:w-64">
          <div>
            <h3 className="font-bold text-xl">Track Your Shipment</h3>
          </div>
          <ChevronRight className="h-6 w-6" />
        </div>
        <div className="flex flex-col md:flex-row bg-white shadow-lg flex-1">
          <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
            <p className="text-gray-500 mb-1">Email</p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <Input
                type="email"
                placeholder="envato@gmail.com"
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto text-gray-700"
              />
            </div>
          </div>
          <div className="flex-1 p-4">
            <p className="text-gray-500 mb-1">Phone</p>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <Input
                type="tel"
                placeholder="+91 7549944596"
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
