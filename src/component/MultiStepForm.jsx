import { ChevronLeft, ChevronRight } from "lucide-react";

function MultiStepForm() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-12">
        {/* i will use logic */}
        <div className="flex justify-between items-center  mb-6"></div>

        {/* mobile progressbar */}
        <div className="sm:hidden">
          <div className="flex justify-between items-center  mb-4">
            <span className="text-sm font-black text-gray-700">
              Step length
            </span>

            <span className="text-sm font-black text-gray-600">Step title</span>
          </div>
          {/* progressbar */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-700"></div>
        </div>
        {/* mobile progressbar */}
      </div>

      {/* form content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-10 mb-10">
        <div className="min-h-[600]"></div>
      </div>
      {/* form content */}

      {/* Navigation button */}
      <div className="flex items-center justify-between">
        <button
          className={`flex items-center px-8 py-4 font-semibold rounded-2xl transition-all duration-200`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        <button
          className={`flex items-center px-8 py-4 font-semibold rounded-2xl transition-all duration-200`}
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Previous
        </button>

        {/* <button className="flex items-center px-10 py-4 text-white font-semibold bg-gradient-to-r  from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-all duration-200">
          Submit Registration
        </button> */}
      </div>
      {/* Navigation button */}
    </div>
  );
}

export default MultiStepForm;
