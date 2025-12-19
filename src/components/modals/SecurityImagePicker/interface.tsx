import { Stack, Grid, Button, Blanket } from "@inubekit/inubekit";
import { Modal } from "@components/layout/Modal";
import type { ISecurityImagePickerUI } from "@ptypes/components/modals/SecurityImagePicker/ISecurityImagePickerUI";
import { securityImagePickerLabels } from "@config/modals/securityImagePicker/labels";
import { StyledImageCell, StyledImg } from "./styles";
import { securityImages } from "@assets/img/securityImg";

const SecurityImagePickerUI = (props: ISecurityImagePickerUI) => {
  const { isMobile, open, onClose, onSelect } = props;

  const images = securityImages;

  if (!open) return null;

  const colCount = isMobile ? 4 : 6;
  const columns = `repeat(${colCount}, 1fr)`;
  const rows = Math.ceil(images.length / colCount);
  const templateRows = `repeat(${rows}, auto)`;

  return (
    <Blanket>
      <Modal
        isMobile={isMobile ?? false}
        onClose={onClose}
        title={securityImagePickerLabels.title}
        showCloseButton={true}
        showDivider={true}
        width={isMobile ? "335px" : "700px"}
        closeButtonText={securityImagePickerLabels.close}
        footer={
          <Stack justifyContent="end" width="100%">
            <Button appearance="gray" variant="outlined" onClick={onClose}>
              {securityImagePickerLabels.cancel}
            </Button>
          </Stack>
        }
      >
        <Stack gap="0" width="100%" margin="12px 0" alignItems="center" justifyContent="center">
          <Grid
            templateColumns={columns}
            templateRows={templateRows}
            gap="12px"
            justifyContent="center"
            width="fit-content"
          >
            {images.map((src) => (
              <StyledImageCell key={src} onClick={() => onSelect(src)}>
                <StyledImg src={src}/>
              </StyledImageCell>
            ))}
          </Grid>
        </Stack>
      </Modal>
    </Blanket>
  );
};

export { SecurityImagePickerUI };
