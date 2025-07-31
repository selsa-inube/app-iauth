import { StatusMessageUI } from "@pages/statusMessage/interface";
import { useMediaQuery } from "@inubekit/inubekit";
import { IStatusMessage } from "@ptypes/pages/statusMessage/IStatusMessage";
import { statusMessages } from "@config/pages/statusMessage";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { EStatusIcon } from "@enum/components/EStatusIcon";
import { TextSize } from "@ptypes/components/TextSize";
import { useNavigate } from "react-router-dom";
const StatusMessage = (props: IStatusMessage) => {
  const { messageType, customMessage, onButtonClick } = props;
  const navigate = useNavigate();
  const screenMobile = useMediaQuery("(max-width: 768px)");
  const labelsSizeDifferent: TextSize = screenMobile ? "medium" : "large";
  const getMessageConfig = () => {
    if (messageType === EStatusMessage.NONE) {
      return {
        title: "Mensaje no definido",
        message: "No se ha especificado un tipo de mensaje válido.",
        buttonText: "Entendido",
        buttonVariant: "primary" as const,
        icon: EStatusIcon.USER_CHECK,
      };
    }

    const baseMessage =
      statusMessages[messageType as keyof typeof statusMessages];

    return {
      title: customMessage?.title ?? baseMessage.title,
      message: customMessage?.message ?? baseMessage.message,
      buttonText: customMessage?.buttonText ?? baseMessage.buttonText,
      buttonVariant: customMessage?.buttonVariant ?? baseMessage.buttonVariant,
      icon: customMessage?.icon ?? baseMessage.icon,
    };
  };

  const messageConfig = getMessageConfig();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/");
    }
  };

  return (
    <StatusMessageUI
      title={messageConfig.title}
      message={messageConfig.message}
      buttonText={messageConfig.buttonText}
      buttonVariant={messageConfig.buttonVariant}
      icon={messageConfig.icon}
      onButtonClick={handleButtonClick}
      labelsSizeDifferent={labelsSizeDifferent}
    />
  );
};

export { StatusMessage };
