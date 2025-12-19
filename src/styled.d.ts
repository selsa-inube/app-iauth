/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/no-explicit-any   
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
import "styled-components"
import "react"
import { ITheme } from "@ptypes/context/ITheme"

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
declare module "react" {
  interface Attributes {
    [key: `$${string}`]: unknown;
  }
  interface HTMLAttributes<T> {
    [key: `$${string}`]: unknown;
  }
  interface SVGAttributes<T> {
    [key: `$${string}`]: unknown;
  }
}