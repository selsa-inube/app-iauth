interface ISecurityImagePickerUI {
  open: boolean;
  isMobile?: boolean;
  onClose: () => void;
  onSelect: (src: string) => void;
}

export type { ISecurityImagePickerUI };
