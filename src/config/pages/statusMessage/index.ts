import { EStatusIcon } from "@enum/components/EStatusIcon";

const statusMessages = {
  userAlreadyRegistered: {
    title: "Ya estás registrado.",
    message:
      'Ya estás registrado, utiliza tus credenciales o dirígete al portal que requieres por la opción "¿Olvidaste tu usuario?".',
    icon: EStatusIcon.USER_CHECK, // Icono de usuario registrado
    buttonText: "Entendido",
    buttonAppearance: "primary" as const,
  },
  linkExpired: {
    title: "Lo sentimos.",
    message:
      "Esta invitación perdió su vigencia después de # días sin utilizarse, si lo requieres, dirígete nuevamente al portal donde solicitaste el registro.",
    icon: EStatusIcon.CLOCK_WARNING, // Icono de tiempo/advertencia
    buttonText: "Entendido",
    buttonAppearance: "warning" as const,
  },
  missingParams: {
    title: "Parámetros incompletos.",
    message:
      "La URL que estás intentando usar no contiene todos los parámetros requeridos para continuar con el proceso de autenticación. Por favor regresa al portal de origen e inicia nuevamente el proceso.",
    icon: EStatusIcon.CLOCK_WARNING,
    buttonText: "Entendido",
    buttonAppearance: "warning" as const,
  },
};

export { statusMessages };
