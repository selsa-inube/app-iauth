import { useState } from "react";
import { RegisterOrchestratorUI } from "./interface";
import { AccountStep } from "../steps/AccountStep";
import { PasswordStep } from "../steps/PasswordStep";
import { ContactInfoStep } from "../steps/ContactInfoStep";
import { SecurityQuestionsStep } from "../steps/SecurityQuestionsStep";
import { DataUsageStep } from "../steps/DataUsageStep";
import type { IRegisterOrchestratorProps } from "@ptypes/components/register/IRegisterOrchestratorProps";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IStep } from "@ptypes/components/register/IFormContainer";

const RegisterOrchestrator = (props: IRegisterOrchestratorProps) => {
  const {
    labelsSize,
    isMobile,
    labels,
    onSubmit,
    passwordPolicy,
    isPolicyLoading,
    securityQuestions,
  } = props;

  const baseSteps: IStep[] = [
    {
      id: "account",
      number: 1,
      name: "Cuenta de usuario",
      description: "Escribe el nombre de tu cuenta de usuario.",
    },
    {
      id: "password",
      number: 2,
      name: "Contraseña",
      description: "Define la clave secreta según los requisitos.",
    },
    {
      id: "contact-info",
      number: 3,
      name: "Datos de Contacto",
      description: "Completa los datos de contacto.",
    },
  ];

  const securityQuestionsStep: IStep = {
    id: "questions",
    number: 4,
    name: "Preguntas de Seguridad",
    description: "Preguntas secretas útiles para cambios en tu cuenta.",
  };

  const dataUsageStep: IStep = {
    id: "usage",
    number: passwordPolicy?.policyForTheUserKey === "HighLevel" ? 5 : 4,
    name: "Uso de datos personales",
    description: "Confirmación de uso de tus datos personales.",
  };

  const steps: IStep[] =
    passwordPolicy?.policyForTheUserKey === "HighLevel"
      ? [...baseSteps, securityQuestionsStep, dataUsageStep]
      : [...baseSteps, dataUsageStep];

  const [currentStep, setCurrentStep] = useState<IStep>(steps[0]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const [formData, setFormData] = useState<IRegisterFormData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    phoneCountryCode: "CO",
    isWhatsappUsed: true,
    whatsappPhoneCountryCode: "CO",
    securityAnswers: {},
    dataTreatmentAccepted: false,
    dataIdentityAccepted: false,
  });

  const handleFormChange = <K extends keyof IRegisterFormData>(
    field: K,
    value: IRegisterFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNextEnabledChange = (enabled: boolean) => {
    setIsNextEnabled(enabled);
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep.id);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
      setIsNextEnabled(false);
    }
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep.id);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
      setIsNextEnabled(false);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const renderCurrentStep = () => {
    const baseProps = {
      formData,
      onFormChange: handleFormChange,
      labels,
      onNextEnabledChange: handleNextEnabledChange,
      isMobile,
    };

    switch (currentStep.id) {
      case "account":
        return <AccountStep {...baseProps} />;
      case "password":
        return (
          <PasswordStep
            {...baseProps}
            passwordPolicy={passwordPolicy}
            isPolicyLoading={isPolicyLoading}
          />
        );
      case "contact-info":
        return <ContactInfoStep {...baseProps} />;
      case "questions":
        return (
          <SecurityQuestionsStep
            {...baseProps}
            securityQuestions={securityQuestions}
            minRequiredAnswers={3}
          />
        );
      case "usage":
        return <DataUsageStep {...baseProps} />;
      default:
        return null;
    }
  };

  return (
    <RegisterOrchestratorUI
      labelsSize={labelsSize}
      isMobile={isMobile ?? false}
      labels={labels}
      currentStep={currentStep}
      totalSteps={steps.length}
      isNextEnabled={isNextEnabled}
      formData={formData}
      currentStepComponent={renderCurrentStep()}
      onBack={handleBack}
      onNext={handleNext}
      onSubmit={handleSubmit}
    />
  );
};

export { RegisterOrchestrator };
