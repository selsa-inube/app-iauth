/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any   
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
import "styled-components"
import { ITheme } from "@ptypes/context/ITheme"

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
//@ts-ignore
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [key: `$${string}`]: any;
    }
  }
}