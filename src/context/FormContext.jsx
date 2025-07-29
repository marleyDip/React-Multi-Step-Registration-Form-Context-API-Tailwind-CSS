import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { id: 1, title: "Personal Info", description: "Basic Information" },
    { id: 2, title: "Contacts", description: "Reach You!" },
    { id: 3, title: "Preferences", description: "Customize Experience" },
    { id: 4, title: "Review", description: "Final Check" },
  ];

  const value = { steps, currentStep };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
