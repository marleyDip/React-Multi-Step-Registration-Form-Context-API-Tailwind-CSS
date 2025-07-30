import { Lock, Mail, Settings, User } from "lucide-react";
import { useFormContext } from "../context/FormContext";

function ReviewStep() {
  const { formData } = useFormContext();
  return (
    <div className="space-y-8">
      {/* header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
          <Lock className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Review & Submit
        </h2>

        <p className="text-gray-600 text-lg">
          Please Review your information before submitting
        </p>
      </div>
      {/* header */}

      {/* review selection */}
      <div className="space-y-6">
        {/* info */}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2  border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500  to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-white" />
            </div>
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Full Name
              </span>

              <p className="text-lg  font-semibold text-gray-900">
                {formData.personalInfo.firstName}{" "}
                {formData.personalInfo.lastName}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Date of Birth
              </span>

              <p className="text-lg font-semibold text-gray-900">
                {formData.personalInfo.dateOfBirth || "Not Specified"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Gender
              </span>

              <p className="text-lg font-semibold text-gray-900">
                {formData.personalInfo.gender || "Not Specified"}
              </p>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500  to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Mail className="w-4 h-4 text-white" />
            </div>
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Email Address
              </span>

              <p className="text-lg font-semibold text-gray-900">
                {formData.contactInfo.email}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Phone Number
              </span>

              <p className="text-lg font-semibold text-gray-900">
                {formData.contactInfo.phone}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Full Address
              </span>

              <p className="text-lg font-semibold text-gray-900">
                {formData.contactInfo.address}, {formData.contactInfo.city},
                {formData.contactInfo.zipCode}
              </p>
            </div>
          </div>
        </div>

        {/* newsletter */}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2  border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500  to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Settings className="w-4 h-4 text-white" />
            </div>
            preferences
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Newsletter
              </span>

              <div className="flex items-center">
                {/* conditional rendering */}
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    formData.preferences.newsletter
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                ></div>
                <p className="text-lg font-semibold text-gray-900">
                  {formData.preferences.newsletter ? "Enable" : "Disable"}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Notification
              </span>

              <div className="flex items-center">
                {/* conditional rendering */}
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    formData.preferences.notification
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                ></div>
                <p className="text-lg font-semibold text-gray-900">
                  {formData.preferences.notification ? "Enable" : "Disable"}
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Theme
              </span>

              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-gray-900 capitalize">
                    {formData.preferences.theme}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Language
              </span>

              <div className="flex items-center">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                    {formData.preferences.language}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review selection */}
    </div>
  );
}

export default ReviewStep;
