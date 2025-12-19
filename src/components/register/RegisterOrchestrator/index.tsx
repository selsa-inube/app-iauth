import { useState } from "react";
import { RegisterOrchestratorUI } from "./interface";
import { AccountStep } from "../steps/AccountStep";
import { PasswordStep } from "../steps/PasswordStep";
import { ContactInfoStep } from "../steps/ContactInfoStep";
import { SecurityQuestionsStep } from "../steps/SecurityQuestionsStep";
import { DataUsageStep } from "../steps/DataUsageStep";
import { SecurityImageStep } from "../steps/SecurityImageStep";
import type { IRegisterOrchestrator } from "@ptypes/components/register/IRegisterOrchestratorProps";
import type { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import type { IStep } from "@ptypes/components/register/IFormContainer";
import { getDialCodeByCountryCode } from "@components/form/PhoneNumberField/utils";

const RegisterOrchestrator = (props: IRegisterOrchestrator) => {
  const {
    labelsSize,
    isMobile,
    labels,
    userData,
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
    number: 0,
    name: "Preguntas de Seguridad",
    description: "Preguntas secretas útiles para cambios en tu cuenta.",
  };

  const securityImageStep: IStep = {
    id: "security-image",
    number: 0,
    name: "Imagen y frase de seguridad",
    description: "Configura tu imagen y frase de seguridad.",
  };

  const dataUsageStep: IStep = {
    id: "usage",
    number: 0,
    name: "Uso de datos personales",
    description: "Confirmación de uso de tus datos personales.",
  };

  const stepsBeforeNumbering: IStep[] =
    passwordPolicy?.policyForTheUserKey === "HighLevel"
      ? [...baseSteps, securityQuestionsStep, securityImageStep, dataUsageStep]
      : [...baseSteps, securityImageStep, dataUsageStep];

  const steps: IStep[] = stepsBeforeNumbering.map((s, index) => ({
    ...s,
    number: index + 1,
  }));

  const [currentStep, setCurrentStep] = useState<IStep>(steps[0]);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const [formData, setFormData] = useState<IRegisterFormData>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    phoneCountryCode: "CO",
    phoneDialCode: getDialCodeByCountryCode("CO"),
    isWhatsappUsed: true,
    whatsappPhoneCountryCode: "CO",
    whatsappPhoneDialCode: getDialCodeByCountryCode("CO"),
    securityAnswers: {},
    dataTreatmentAccepted: false,
    dataIdentityAccepted: false,
    SafetyPhrase: "",
    securityImage: "",
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
      userData,
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
      case "security-image":
        return (
          <SecurityImageStep
            {...baseProps}
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
