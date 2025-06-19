import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels'

const userNameStepLabels: IFormStepLabels = {
  header: {
    title: 'Validación de identidad',
    subtitle: 'Por favor, ingresa tu cuenta de usuario',
  },
  input: {
    label: 'Cuenta de usuario',
    placeholder: 'Usuario',
    type: 'text',
    id: 'userName',
  },
  link: {
    text: '¿Olvidaste tu usuario?',
  },
  validation: {
    errorMessage: 'El usuario es requerido.',
  },
};

export { userNameStepLabels };