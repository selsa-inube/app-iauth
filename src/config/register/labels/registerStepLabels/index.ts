import type { IRegisterStepLabels } from "@ptypes/components/register/IRegisterStepLabels";

const registerStepLabels: IRegisterStepLabels = {
  account: {
    usernameLabel: "Nombre de la cuenta de usuario",
    usernamePlaceholder: "Ej: nombre11",
    usernameMessage:
      "Requisitos: Mínimo 8 caracteres, solo minúsculas, incluir letras y números.",
    requirements: {
      title: "Requisitos:",
      items: [
        "Mínimo 8 caracteres.",
        "Solo utilizar minúsculas.",
        "Incluir letras y números.",
      ],
    },
  },
  password: {
    passwordLabel: "Contraseña o clave Secreta",
    confirmPasswordLabel: "Confirmar contraseña o clave Secreta",
    passwordPlaceholder: "Contraseña",
    confirmPasswordPlaceholder: "Contraseña nuevamente",
    passwordMessage:
      "Requisitos: Mínimo 8 caracteres, solo minúsculas, incluir letras y números.",
    requirements: {
      title: "Requisitos:",
      items: [
        "Longitud mínima de 8 caracteres.",
        "Obligatoria combinación de letras y números.",
        "Una letra mayúscula obligatoria.",
        "Mínimo un carácter especial. (!@#$%^&*()-_=+{}[]|\\:;\"'<>.,?/)",
      ],
    },
  },
  contactInfo: {
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "Email",
    phoneLabel: "Número",
    phonePlaceholder: "Número móvil",
    whatsappLabel: "¿Lo usas para WhatsApp?",
    whatsappLabelMobile: "¿Mismo # WhatsApp?",
    whatsappToggleLabel: "Sí",
    whatsappPhoneLabel: "Número de WhatsApp",
    whatsappPhonePlaceholder: "WhatsApp",
    errors: {
      invalidEmail: "Email inválido",
      minimumDigits: "Mínimo 7 dígitos",
    },
  },
  securityQuestions: {
    description:
      "Por favor, responde al menos {0} de las siguientes preguntas.",
    question1Label: "1. ¿Cuál es el primer nombre de tu madre?",
    question2Label: "2. ¿Cuál es tu ciudad de nacimiento?",
    question3Label: "3. ¿Cuál es el nombre de tu abuela materna?",
    religionLabel: "4. Religión con la que más te identificas",
    religionPlaceholder: "Selecciona de la lista",
    birthplaceLabel: "5. ¿En qué lugar ocurrió tu nacimiento?",
    birthplacePlaceholder: "Selecciona de la lista",
    questionPlaceholder: "Tu respuesta",
    religionOptions: [
      { value: "catolica", label: "Católica", id: "cat" },
      { value: "cristiana", label: "Cristiana", id: "cri" },
      { value: "judaica", label: "Judaica", id: "jud" },
      { value: "islamica", label: "Islámica", id: "isl" },
      { value: "budista", label: "Budista", id: "bud" },
      { value: "otra", label: "Otra", id: "otr" },
    ],
    birthplaceOptions: [
      { value: "ciudad", label: "Ciudad", id: "ciu" },
      { value: "campo", label: "Campo", id: "cam" },
      { value: "extranjero", label: "Extranjero", id: "ext" },
    ],
  },
  dataUsage: {
    dataTreatmentLabel:
      "Autorizo el tratamiento de los datos de acuerdo a Tratamiento de datos",
    dataIdentityLabel: "Autorizo el tratamiento de los datos de identidad",
  },
  buttons: {
    previous: "Anterior",
    next: "Siguiente",
    submit: "Enviar",
  },
};

export { registerStepLabels };
