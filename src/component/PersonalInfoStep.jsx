import { User } from "lucide-react";

function PersonalInfoStep() {
  return (
    <div className="space-y-8">
      {/* header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
          <User className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Personal Information
        </h2>

        <p className="text-gray-600 text-lg">
          Tell us a bit about your self to get started
        </p>
      </div>
      {/* header */}

      {/* input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* first name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            First Name*
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your First Name"
              className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
            />

            <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
              Please enter your first name
            </div>
          </div>
        </div>

        {/* Last name */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Last Name*
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
            />

            <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
              Please enter your last name
            </div>
          </div>
        </div>
      </div>
      {/* input fields */}

      {/* info fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date Of Birth */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Date Of Birth*
          </label>

          <div className="relative">
            <input
              type="date"
              className={`w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200`}
            />

            <div className="absolute left-0 -bottom-6 flex items-center text-red-500 text-sm">
              Please enter date of birth
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Gender*
          </label>

          <select className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-r-gray-300">
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer Not to Say</option>
          </select>
        </div>
      </div>
      {/* info fields */}
    </div>
  );
}

export default PersonalInfoStep;
