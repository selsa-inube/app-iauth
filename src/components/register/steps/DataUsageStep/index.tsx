import { useEffect } from "react";
import { DataUsageStepUI } from "./interface";
import type { IDataUsageStepProps } from "@ptypes/components/register/steps/IDataUsageStepProps";

const DataUsageStep = (props: IDataUsageStepProps) => {
  const { 
    formData, 
    onFormChange, 
    labels, 
    userData, 
    onNextEnabledChange, 
    isMobile = false 
  } = props;

  const handleDataTreatmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("dataTreatmentAccepted", e.target.checked);
  };

  const handleDataIdentityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormChange("dataIdentityAccepted", e.target.checked);
  };

  const getUpdatedLabels = () => {
    const originatorName = userData?.originatorName ?? "";
    return {
      ...labels,
      dataUsage: {
        ...labels.dataUsage,
        dataIdentityLabel: labels.dataUsage.dataIdentityLabel.replace("{0}", originatorName),
      },
    };
  };

  useEffect(() => {
    const isValid = formData.dataTreatmentAccepted && formData.dataIdentityAccepted;
    onNextEnabledChange?.(isValid);
  }, [
    formData.dataTreatmentAccepted,
    formData.dataIdentityAccepted,
    onNextEnabledChange,
  ]);

  return (
    <DataUsageStepUI
      formData={formData}
      labels={getUpdatedLabels()}
      userData={userData}
      isMobile={isMobile}
      onDataTreatmentChange={handleDataTreatmentChange}
      onDataIdentityChange={handleDataIdentityChange}
    />
  );
};

export { DataUsageStep };
