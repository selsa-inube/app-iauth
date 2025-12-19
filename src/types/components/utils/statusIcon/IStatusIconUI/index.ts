import { ReactElement } from "react";

interface IStatusIconUI {
  icon: ReactElement;
  appearance: "primary" | "warning" | "danger" | "success" | "help" | "dark" | "gray" | "light";
  size: string;
}

export type { IStatusIconUI };
