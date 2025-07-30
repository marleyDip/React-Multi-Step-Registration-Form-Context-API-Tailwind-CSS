import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useFormContext } from "../context/FormContext";
import { stepIcons } from "../utils/Icon";
import PersonalInfoStep from "./PersonalInfoStep";
import ContactInfoStep from "./ContactInfoStep";
import PreferenceStep from "./PreferenceStep";
import ReviewStep from "./ReviewStep";

function MultiStepForm() {
  const {
    steps,
    currentStep,
    nextStep,
    prevStep,
    handleSubmit,
    isSubmitted,
    resetForm,
  } = useFormContext();

  //console.log(currentStep);
  //console.log(steps);
  //console.log(steps[1]);

  //console.log(stepIcons[1]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <ContactInfoStep />;
      case 3:
        return <PreferenceStep />;
      case 4:
        return <ReviewStep />;
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center py-16">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full grid place-items-center shadow-2xl">
              <Check className="w-12 h-12 text-white" />
            </div>

            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full grid place-items-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Registration Complete!
          </h2>

          <p className="text-xl  text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Thank you for providing your information. We'll grt back to you soon
            with next steps.
          </p>

          <button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg transform transition-all duration-200  hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1"
            onClick={resetForm}
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-12">
        {/* i will use logic */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => {
            const Icon = stepIcons[step.id];
            //console.log(icon);

            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div className="flex items-center key={step.id} ">
                {/* info */}
                <div className="flex flex-col items-center">
                  <div
                    className={`grid place-items-center w-16 h-16 rounded-2xl transition-all duration-500 transform ${
                      isCompleted
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 text-white shadow scale-110"
                        : isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 text-white shadow-lg scale-110"
                        : "bg-white border-gray-300 text-gray-400"
                    } `}
                  >
                    {isCompleted ? (
                      <Check className="w-8 h-8" />
                    ) : (
                      <Icon className="w-8 h-8" />
                    )}
                  </div>

                  <div className="mt-4 text-center">
                    <p
                      className={`text-sm font-bold ${
                        isActive
                          ? "text-blue-600"
                          : isCompleted
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      Step {step.id}
                    </p>

                    <p
                      className={`text-xs font-bold ${
                        isActive
                          ? "text-blue-600"
                          : isCompleted
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>

                    <p
                      className={`text-sm font-bold ${
                        isActive
                          ? "text-blue-600"
                          : isCompleted
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* info */}

                {/* desktop progress bar => index reaches = 0, 1, 2... 2 < 3 */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block w-24 h-1 mx-6 rounded-full transition-all duration-500 ${
                      currentStep > step.id
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : "bg-gray-200"
                    } `}
                  ></div>
                )}
                {/* desktop progress bar */}
              </div>
            );
          })}
        </div>

        {/* mobile progressbar */}
        <div className="sm:hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-black text-gray-700">
              Step {currentStep} of {steps.length}
            </span>

            <span className="text-sm font-black text-gray-600">
              {steps[currentStep - 1].title}
            </span>
          </div>
          {/* progressbar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-700"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
          {/* progressbar */}
        </div>
        {/* mobile progressbar */}
      </div>

      {/* form content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-10 mb-10">
        <div className="min-h-[600px]">{renderStepContent()}</div>
      </div>
      {/* form content */}

      {/* Navigation button */}
      <div className="flex items-center justify-between">
        <button
          className={`flex items-center px-8 py-4 font-semibold rounded-2xl transition-all duration-200 ${
            currentStep !== 1
              ? "bg-white text-gray-700   hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          onClick={prevStep}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        {currentStep < steps.length ? (
          <button
            className={`flex items-center px-8 py-4 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-1`}
            onClick={nextStep}
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Next Step
          </button>
        ) : (
          <button
            className="flex items-center px-10 py-4 text-white font-semibold bg-gradient-to-r  from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-all duration-200"
            onClick={handleSubmit}
          >
            Submit Registration
          </button>
        )}
      </div>
      {/* Navigation button */}
    </div>
  );
}

export default MultiStepForm;
