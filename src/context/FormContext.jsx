import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
    },
    preferences: {
      newsletter: false,
      notification: true,
      theme: "light",
      language: "bn",
    },
  });

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.personalInfo.firstName)
        newErrors.firstName = "First Name is Required";
      if (!formData.personalInfo.lastName)
        newErrors.lastName = "Last Name is Required";
      if (!formData.personalInfo.dateOfBirth)
        newErrors.dateOfBirth = "Date Of Birth is Required";
    }

    if (step === 2) {
      if (!formData.contactInfo.email) newErrors.email = "Email is required";
      else if (!/\s+@\s+\.\s+/.test(formData.contactInfo.email))
        newErrors.email = "Email is Invalid";
      if (!formData.contactInfo.phone)
        newErrors.phone = "Phone Number is required";
      if (!formData.contactInfo.address)
        newErrors.address = "Address is required";
      if (!formData.contactInfo.city) newErrors.city = "City is required";
      if (!formData.contactInfo.zipCode)
        newErrors.zipCode = "Zip Code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // next button
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  // previous button
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const steps = [
    { id: 1, title: "Personal Info", description: "Basic Information" },
    { id: 2, title: "Contacts", description: "Reach You!" },
    { id: 3, title: "Preferences", description: "Customize Experience" },
    { id: 4, title: "Review", description: "Final Check" },
  ];

  const value = {
    steps,
    currentStep,
    formData,
    errors,
    updateFormData,
    nextStep,
    prevStep,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
