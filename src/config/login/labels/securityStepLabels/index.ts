import { IFormStepLabels } from '@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels'

const securityStepLabels: IFormStepLabels = {
  header: {
    title: 'Verifica tu imagen y frase de seguridad.',
    subtitle: '',
  },
  input: {
    label: '',
    placeholder: '',
    type: 'text',
    id: 'securityCheck',
  },
  link: {
    text: '',
  },
  validation: {
    errorMessage: '',
  },
};

export { securityStepLabels };
