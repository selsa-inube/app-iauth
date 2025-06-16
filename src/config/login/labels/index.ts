import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels'

const userNameStepLabels: IFormStepLabels = {
  header: {
    title: 'Servicio de identidad',
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

const passwordStepLabels: IFormStepLabels = {
  header: {
    title: 'Bienvenido, ',
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

export { userNameStepLabels, passwordStepLabels };