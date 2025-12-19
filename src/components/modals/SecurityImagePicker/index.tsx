import type { ISecurityImagePicker } from "@ptypes/components/modals/SecurityImagePicker/ISecurityImagePicker";
import { SecurityImagePickerUI } from "./interface";

const SecurityImagePicker = (props: ISecurityImagePicker) => {
  const { open, onClose, onSelect, isMobile } = props;

  return (
    <SecurityImagePickerUI
      open={open}
      onClose={onClose}
      onSelect={onSelect}
      isMobile={isMobile}
    />
  );
};

export { SecurityImagePicker };
