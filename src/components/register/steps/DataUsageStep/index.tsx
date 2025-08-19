import { useEffect } from "react";
import { DataUsageStepUI } from "./interface";
import type { IDataUsageStepProps } from "@ptypes/components/register/steps/IDataUsageStepProps";

const DataUsageStep = (props: IDataUsageStepProps) => {
  const { formData, onFormChange, labels, onNextEnabledChange } = props;

  const handleDataTreatmentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFormChange("dataTreatmentAccepted", e.target.checked);
  };

  const handleDataIdentityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("dataIdentityAccepted", e.target.checked);
  };

  // Validación para habilitar el botón enviar (ambos checkboxes deben estar marcados)
  useEffect(() => {
    const isValid =
      formData.dataTreatmentAccepted && formData.dataIdentityAccepted;
    onNextEnabledChange?.(isValid);
  }, [
    formData.dataTreatmentAccepted,
    formData.dataIdentityAccepted,
    onNextEnabledChange,
  ]);

  return (
    <DataUsageStepUI
      formData={formData}
      labels={labels}
      onDataTreatmentChange={handleDataTreatmentChange}
      onDataIdentityChange={handleDataIdentityChange}
    />
  );
};

export { DataUsageStep };
