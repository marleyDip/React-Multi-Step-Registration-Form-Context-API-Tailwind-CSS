import { Mail, Settings } from "lucide-react";
import { useFormContext } from "../context/FormContext";

function PreferenceStep() {
  const { formData, updateFormData } = useFormContext();
  //console.log(formData, errors);

  const handleToggle = (field, value) => {
    updateFormData("preferences", {
      ...formData.preferences,
      [field]: value,
    });
  };

  const handleSelect = (field, value) => {
    updateFormData("preferences", {
      ...formData.preferences,
      [field]: value,
    });
  };

  return (
    <div className="space-y-8">
      {/* header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
          <Settings className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-3">Preferences</h2>

        <p className="text-gray-600 text-lg">Customize your Experience</p>
      </div>
      {/* header */}

      {/* Form Field */}
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm p-8 rounded-2xl border-gray-200/50">
          <h3 className="text-xl font-bold text-gray-900 flex items-center mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500  to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Mail className="w-4 h-4 text-white" />
            </div>
            Communication Preferences
          </h3>

          <div className="space-y-6">
            {/* newsletter */}
            <div className="flex items-center justify-between p-4 bg-white/70 hover:bg-white/90 border border-gray-200/50 rounded-xl transition-all duration-200">
              <div className="flex-1">
                <label className="text-base font-semibold  text-gray-800 block mb-1">
                  Newsletter Subscription
                </label>

                <p className="text-sm text-gray-600">
                  Receive out weekly newsletter with updates and tips
                </p>
              </div>

              <button
                type="button"
                className={`relative inline-flex items-center h-7 w-12 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 ${
                  formData.preferences.newsletter
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                    : "bg-gray-300"
                }`}
                onClick={() =>
                  handleToggle("newsletter", !formData.preferences.newsletter)
                }
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-white transform transition-transform shadow-lg duration-300 ${
                    formData.preferences.newsletter
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            {/* newsletter */}

            {/* notification */}
            <div className="flex items-center justify-between p-4 bg-white/70 hover:bg-white/90 border border-gray-200/50 rounded-xl transition-all duration-200">
              <div className="flex-1">
                <label className="text-base font-semibold  text-gray-800 block mb-1">
                  Push Notification
                </label>

                <p className="text-sm text-gray-600">
                  Get notified about important updates and message
                </p>
              </div>

              <button
                type="button"
                className={`relative inline-flex items-center h-7 w-12 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 ${
                  formData.preferences.notification
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                    : "bg-gray-300"
                }`}
                onClick={() =>
                  handleToggle(
                    "notification",
                    !formData.preferences.notification
                  )
                }
              >
                <span
                  className={`inline-block h-5 w-5 rounded-full bg-white transform transition-transform shadow-lg duration-300 ${
                    formData.preferences.notification
                      ? "translate-x-6"
                      : "translate-x-1"
                  } `}
                />
              </button>
            </div>
            {/* notification */}
          </div>
        </div>

        {/* theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Theme Preferences
            </label>

            <select
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4  focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300"
              value={formData.preferences.theme}
              onChange={(e) => handleSelect("theme", e.target.value)}
            >
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
              <option value="system">System Default</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Language
            </label>

            <select
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4  focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300"
              value={formData.preferences.language}
              onChange={(e) => handleSelect("language", e.target.value)}
            >
              <option value="en">English</option>
              <option value="bn">Bengali</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
        {/* theme */}
      </div>
    </div>
  );
}

export default PreferenceStep;
