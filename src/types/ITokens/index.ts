type IThemeData = Record<string, string>;

interface ITokens {
  businessUnit: string;
  portal: string;
  themeData: IThemeData;
  tokenThemeId: string;
}

export type { IThemeData, ITokens };