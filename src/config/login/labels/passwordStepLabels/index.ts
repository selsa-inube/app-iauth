import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels'

const passwordStepLabels: IFormStepLabels = {
  header: {
    title: '¡Bienvenido!',
    subtitle: 'Ahora, ingresa tu contraseña',
  },
  input: {
    label: 'Contraseña',
    placeholder: 'Clave',
    type: 'password',
    id: 'userPassword',
  },
  link: {
    text: '¿Olvidaste tu contraseña?',
  },
  validation: {
    errorMessage: 'La contraseña es requerida.',
  },
};

export { passwordStepLabels };