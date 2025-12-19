interface ISecurityCheckUI {
  // Accepts either an absolute/relative URL or a data URI (e.g., data:image/svg+xml;base64,...)
  imageUrl: string;
  phrase: string;
  isMobile?: boolean;
}

export type { ISecurityCheckUI };
