interface IPageLayout {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  isMobile?: boolean;
}

export type { IPageLayout };
