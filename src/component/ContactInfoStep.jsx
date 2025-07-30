import { Mail } from "lucide-react";
import { useFormContext } from "../context/FormContext";

function ContactInfoStep() {
  const { formData, errors, updateFormData } = useFormContext();

  const handleChange = (field, value) => {
    updateFormData("contactInfo", {
      ...formData.contactInfo,
      [field]: value,
    });
  };

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
                value={formData.contactInfo.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter Your Email Address"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />

              {errors.email && (
                <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          {/* Email Field */}

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Phone Number*
            </label>

            <div className="relative">
              <input
                type="number"
                value={formData.contactInfo.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter Your Phone Number"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />

              {errors.phone && (
                <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>
          {/* Phone Field */}
        </div>
        {/* input fields */}

        {/* Address Field */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Address*
          </label>

          <div className="relative">
            <input
              type="text"
              value={formData.contactInfo.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="Enter Your Address"
              className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                errors.address
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />

            {errors.address && (
              <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                {errors.address}
              </div>
            )}
          </div>
        </div>
        {/* Address Field */}

        {/* input fields 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* City Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              City*
            </label>

            <div className="relative">
              <input
                type="text"
                value={formData.contactInfo.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Enter Your City"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                  errors.city
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />

              {errors.city && (
                <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                  {errors.city}
                </div>
              )}
            </div>
          </div>
          {/* City Field */}

          {/* Zip Code Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Zip Code*
            </label>

            <div className="relative">
              <input
                type="number"
                value={formData.contactInfo.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                placeholder="Enter Your Zip Code"
                className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 ${
                  errors.zipCode
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />

              {errors.zipCode && (
                <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
                  {errors.zipCode}
                </div>
              )}
            </div>
          </div>
          {/* Zip Code Field */}
        </div>
        {/* input fields 2 */}
      </div>
    </div>
  );
}

export default ContactInfoStep;
