import { IInput } from '@inubekit/inubekit';

interface IFormStepLabels {
    mainLabel: string;
    subMainLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    inputType: IInput['type'];
    inputId: string;
    linkLabel: string;
    messageError?: string;
};

export type { IFormStepLabels };