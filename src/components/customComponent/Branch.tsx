import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MainBranches() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Main Branches</h2>

      {/* Branch Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mumbai Branch Card */}
        <Card className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-8">
            {/* Branch Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mumbai Branch</h3>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">123, Business Hub, Andheri East, Mumbai - 400069</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">mumbai@shivamtransport.com</p>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delhi Branch Card */}
        <Card className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-8">
            {/* Branch Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Delhi Branch</h3>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">456, Industrial Area, Nehru Place, Delhi - 110019</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">+91 98765 43211</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">delhi@shivamtransport.com</p>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
