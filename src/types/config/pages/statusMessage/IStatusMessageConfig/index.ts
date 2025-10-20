import { EStatusIcon } from "@enum/components/EStatusIcon";

interface IStatusMessageConfig {
    title: string;
    message: string;
    icon: EStatusIcon;
    buttonText?: string;
    buttonAppearance?: "primary" | "warning";
}

export type { IStatusMessageConfig };