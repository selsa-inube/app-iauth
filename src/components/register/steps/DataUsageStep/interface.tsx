import { Checkbox, Stack } from "@inubekit/inubekit";
import { IRegisterFormData } from "@ptypes/components/register/IRegisterFormData";
import { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

interface IDataUsageStepUIProps {
  formData: IRegisterFormData;
  labels: IRegisterStepLabels;
  onDataTreatmentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDataIdentityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DataUsageStepUI = (props: IDataUsageStepUIProps) => {
  const { formData, labels, onDataTreatmentChange, onDataIdentityChange } =
    props;

  return (
    <Stack direction="column" gap="16px" width="100%">
      <Checkbox
        value="dataTreatment"
        checked={formData.dataTreatmentAccepted}
        id="dataTreatment"
        label={labels.dataUsage.dataTreatmentLabel}
        onChange={onDataTreatmentChange}
      />

      <Checkbox
        value="dataIdentity"
        checked={formData.dataIdentityAccepted}
        id="dataIdentity"
        label={labels.dataUsage.dataIdentityLabel}
        onChange={onDataIdentityChange}
      />
    </Stack>
  );
};

export { DataUsageStepUI };
