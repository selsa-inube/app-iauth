import { useEffect } from "react";
import { SecurityQuestionsStepUI } from "./interface";
import type { ISecurityQuestionsStepProps } from "@ptypes/components/register/steps/ISecurityQuestionsStepProps";

const SecurityQuestionsStep = (props: ISecurityQuestionsStepProps) => {
  const {
    formData,
    onFormChange,
    labels,
    onNextEnabledChange,
    securityQuestions,
    minRequiredAnswers,
    isMobile,
  } = props;

  const handleAnswerChange = (questionNumber: string, value: string) => {
    const updatedAnswers = {
      ...formData.securityAnswers,
      [questionNumber]: value,
    };
    onFormChange("securityAnswers", updatedAnswers);
  };

  useEffect(() => {
    const answeredQuestions = Object.values(formData.securityAnswers).filter(
      (answer) => answer.trim() !== "",
    ).length;

    const isValid = answeredQuestions >= minRequiredAnswers;
    onNextEnabledChange?.(isValid);
  }, [formData.securityAnswers, minRequiredAnswers, onNextEnabledChange]);

  return (
    <SecurityQuestionsStepUI
      formData={formData}
      labels={labels}
      securityQuestions={securityQuestions}
      onAnswerChange={handleAnswerChange}
      isMobile={isMobile}
      minRequiredAnswers={minRequiredAnswers}
    />
  );
};

export { SecurityQuestionsStep };
