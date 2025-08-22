import { Box, Checkbox, Stack } from "@inubekit/inubekit";
import { IDataUsageStepUIProps } from "@ptypes/components/register/steps/IDataUsageStepUIProps";
import { InformationBox } from "@components/utils/InformationBox";
import { StyledQuestionsGrid } from "../SecurityQuestionsStep/styles";

const DataUsageStepUI = (props: IDataUsageStepUIProps) => {
  const {
    formData,
    labels,
    userData,
    onDataTreatmentChange,
    onDataIdentityChange,
    isMobile,
  } = props;

  const getUserInfo = () => {
    const phoneDisplay = formData.phone
      ? `(+57) ${formData.phone}${formData.isWhatsappUsed ? " activo para WA." : ""}`
      : "No registrado";

    const userInfoBoxes = [
      {
        title: "Nombre",
        content: `${userData.firstName} ${userData.lastName}`,
        showOnMobile: false,
      },
      {
        title: "Identificación", 
        content: `${userData.documentType} No. ${userData.documentNumber}`,
        showOnMobile: false,
      },
      {
        title: "Correo de contacto",
        content: formData.email || "No registrado",
        showOnMobile: true,
      },
      {
        title: "Teléfono de contacto",
        content: phoneDisplay,
        showOnMobile: true,
      },
    ];

    return userInfoBoxes.filter(box => isMobile ? box.showOnMobile : true);
  };

  const userInfoBoxes = getUserInfo();

  return (
    <Box height="auto" width="100%">
      <Stack direction="column" gap="24px" width="100%" height="100%">
        <StyledQuestionsGrid $isMobile={isMobile} margin={isMobile ? "0 0 0 0.2rem" : "0 0 0 0.5rem"}>
          {userInfoBoxes.map((infoBox, index) => (
            <InformationBox
              key={`${infoBox.title}-${index}`}
              title={infoBox.title}
              content={infoBox.content}
              width="100%"
            />
          ))}
        </StyledQuestionsGrid>
        
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
      </Stack>
    </Box>
  );
};

export { DataUsageStepUI };
