import "./App.css";
import MultiStepForm from "./component/MultiStepForm";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 ">
        <MultiStepForm />
      </div>
    </FormProvider>
  );
}

export default App;
