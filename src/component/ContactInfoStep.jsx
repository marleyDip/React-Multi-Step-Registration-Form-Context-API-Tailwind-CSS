import { Mail } from "lucide-react";

function ContactInfoStep() {
  return (
    <div className="space-y-8">
      {/* header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
          <Mail className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Contact Information
        </h2>

        <p className="text-gray-600 text-lg">How can we reach?</p>
      </div>
      {/* header */}

      <div className="space-y-8">
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Email Address*
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
              />

              <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                Please enter your email address
              </div>
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Phone Number*
            </label>

            <div className="relative">
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
              />

              <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                Please enter your phone number
              </div>
            </div>
          </div>
        </div>

        {/* Address Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Address*
          </label>

          <div className="relative">
            <input
              type="number"
              placeholder="Enter Your Address"
              className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
            />

            <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
              Please enter your address
            </div>
          </div>
        </div>

        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* City Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              City*
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your City"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
              />

              <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                Please enter your city
              </div>
            </div>
          </div>

          {/* Zip Code Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Zip Code*
            </label>

            <div className="relative">
              <input
                type="number"
                placeholder="Enter Your Zip Code"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
              />

              <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                Please enter your zip code
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoStep;
