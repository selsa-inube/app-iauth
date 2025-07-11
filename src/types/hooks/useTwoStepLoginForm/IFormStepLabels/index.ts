import { IInput } from '@inubekit/inubekit';

interface IFormStepLabels {
    header: {
        title: string;
        subtitle: string;
    };
    input: {
        label: string;
        placeholder: string;
        type: IInput['type'];
        id: string;
    };
    link: {
        text: string;
    };
    validation: {
        errorMessage: string;
    };
}

export type { IFormStepLabels };