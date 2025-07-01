interface ICustomTokens {
  modal?: { 
    backgroundColor: string;
    borderRadius: string;
  };
  mask?: {
    background?: {
      light: string;
      dark: string;
    };
    zIndex?: {
      frond: number;
      behind: number;
    };
  };
}

export type{ ICustomTokens };