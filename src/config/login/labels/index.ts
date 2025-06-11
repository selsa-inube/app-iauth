import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels'

const labelsUserName:IFormStepLabels = {
    mainLabel: 'Servicio de identidad',
    subMainLabel: 'Por favor, ingresa tu cuenta de usuario',
    inputLabel: 'Cuenta de usuario',
    inputPlaceholder: 'Usuario',
    inputType: 'text',
    inputId: 'userName',
    linkLabel: '¿Olvidaste tu usuario?',
    messageError: 'El usuario es requerido.'
};

const labelsPassword:IFormStepLabels = {
    mainLabel: 'Bienvenido, ',
    subMainLabel: 'Ahora, ingresa tu contraseña',
    inputLabel: 'Contraseña',
    inputPlaceholder: 'Clave',
    inputType: 'password',
    inputId: 'userPassword',
    linkLabel: '¿Olvidaste tu contraseña?',
    messageError: 'La contraseña es requerida.'
};

export { labelsUserName, labelsPassword };