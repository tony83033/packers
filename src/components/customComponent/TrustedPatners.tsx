"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, CheckCircle, Clock, MapPin, Package, Shield } from "lucide-react"

export default function MovingServiceLanding() {
  const [formData, setFormData] = useState({
    movingFrom: "",
    movingTo: "",
    movingDate: "",
    name: "",
    phone: "",
    movingType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-700 flex" id="Contact">
      {/* Left Section */}
      <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Trusted Partner
            <br />
            for <span className="text-blue-500">Safe Relocation</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Professional packing and moving services across India. Making
            <br />
            your relocation smooth and stress-free.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Pan India Services</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Safe Packing</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Full Insurance</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium">
              Get Free Quote →
            </Button>
            <Button
              variant="outline"
              className="bg-white text-gray-800 border-white hover:bg-gray-100 px-8 py-3 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">15+ Years Experience</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">10,000+ Happy Customers</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">ISO Certified</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-300">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Quote Form */}
      <div className="w-full max-w-md lg:max-w-lg p-8 flex items-center">
        <Card className="w-full shadow-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">Get a Free Quote</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Moving From/To Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="movingFrom" className="text-sm font-medium text-gray-700">
                  Moving From
                </Label>
                <Input
                  id="movingFrom"
                  placeholder="Enter city"
                  value={formData.movingFrom}
                  onChange={(e) => handleInputChange("movingFrom", e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="movingTo" className="text-sm font-medium text-gray-700">
                  Moving To
                </Label>
                <Input
                  id="movingTo"
                  placeholder="Enter city"
                  value={formData.movingTo}
                  onChange={(e) => handleInputChange("movingTo", e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            {/* Moving Date */}
            <div className="space-y-2">
              <Label htmlFor="movingDate" className="text-sm font-medium text-gray-700">
                Moving Date
              </Label>
              <div className="relative">
                <Input
                  id="movingDate"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={formData.movingDate}
                  onChange={(e) => handleInputChange("movingDate", e.target.value)}
                  className="h-12 pr-10"
                />
                <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Name/Phone Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="Your number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            {/* Moving Type */}
            <div className="space-y-2">
              <Label htmlFor="movingType" className="text-sm font-medium text-gray-700">
                Moving Type
              </Label>
              <Select value={formData.movingType} onValueChange={(value) => handleInputChange("movingType", value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Residential Moving" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Moving</SelectItem>
                  <SelectItem value="commercial">Commercial Moving</SelectItem>
                  <SelectItem value="office">Office Moving</SelectItem>
                  <SelectItem value="international">International Moving</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-medium">
              Get Free Quote
            </Button>

            {/* Footer Text */}
            <p className="text-center text-sm text-gray-500">{"We'll get back to you within 24 hours"}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
