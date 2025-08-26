import type { IRegisterRequestWarningConfig } from "@ptypes/config/register/modal/IRegisterRequestWarningConfig";

const registerRequestWarning: IRegisterRequestWarningConfig = {
  title: "Solicitud",
  closeButton: "Cerrar",
  confirmButton: "Confirmar",
  message: "Se presentó un error, vuelve a intentarlo más tarde utilizando este mismo link o comunícate con el servicio de soporte del portal +*Nombre del originador*.",
};

export { registerRequestWarning };
