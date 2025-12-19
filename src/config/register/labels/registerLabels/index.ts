import type { IRegisterLabels } from "@ptypes/config/register/IRegisterLabels";
import logoDefault from "@assets/img/lgo/logo-feselsa.png";

const registerLabels: IRegisterLabels = {
  title: "Formulario de auto registro",
  subtitle: "Completa los siguientes pasos para crear tu cuenta",
  welcomeMessage: {
    greeting: "Hola",
    userInfo: "Información del usuario confirmada",
  },
  invitedBy: {
    text: "Invitado por",
    imageUrl: logoDefault,
  },
};

export { registerLabels };
