import { InformativeCardUI } from "./interface.tsx";
import { IInformativeCard } from "@ptypes/components/layout/informativeCard/IInformativeCard";

const InformativeCard = (props: IInformativeCard) => {
  const {
    title,
    message,
    buttonText,
    buttonAppearance,
    icon,
    onButtonClick,
    labelsSizeDifferent,
  } = props;

  return (
    <InformativeCardUI
      title={title}
      message={message}
      buttonText={buttonText}
      buttonAppearance={buttonAppearance}
      icon={icon}
      onButtonClick={onButtonClick}
      labelsSizeDifferent={labelsSizeDifferent}
    />
  );
};

export { InformativeCard };
