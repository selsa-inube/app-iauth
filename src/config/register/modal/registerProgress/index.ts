import type { IRegisterProgressModalConfig } from "@ptypes/config/register/modal/IRegisterProgressModalConfig";

const registerProgressModal: IRegisterProgressModalConfig = {
  title: "Procesando solicitud",
  description: "Hemos recibido tu solicitud y se encuentra en proceso. Por favor, espera mientras la gestionamos.",
  steps: {
    sending: "Enviando",
    success: "Cuenta creada con éxito!",
  },
  loading: {
    title: "Cargando...",
    description: "Preparando información...",
  },
  button: {
    understood: "Entendido",
  },
};

export { registerProgressModal };
