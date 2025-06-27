import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Headphones } from "lucide-react"

export default function AboutUsSection() {
  return (
    <section className="h-full max-w-full mx-auto bg-slate-800 flex items-center" id="About">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* About Us Label */}
            <div className="text-orange-500 font-semibold text-sm tracking-wider uppercase">ABOUT US</div>

            {/* Main Heading */}
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Safely Moving Your Valuable Products
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an unknown printer.
            </p>

            {/* Feature Cards */}
            <div className="space-y-6">
              {/* Free Estimate Card */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <ClipboardList className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Free Estimate</h3>
                    <p className="text-slate-600">Lorem Ipsum is simply dummy text.</p>
                  </div>
                </CardContent>
              </Card>

              {/* 24/7 Services Card */}
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Headphones className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">24/7 Services</h3>
                    <p className="text-slate-600">Lorem Ipsum is simply dummy text.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/assets/about.jpg"
                alt="Professional movers holding cardboard boxes"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
