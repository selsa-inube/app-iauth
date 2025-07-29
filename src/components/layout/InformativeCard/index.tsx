import { InformativeCardUI } from "./interface.tsx";
import { IInformativeCard } from "@ptypes/components/layout/informativeCard/IInformativeCard";

const InformativeCard = (props: IInformativeCard) => {
  const {
    title,
    message,
    buttonText,
    buttonVariant,
    icon,
    onButtonClick,
    labelsSizeDifferent,
  } = props;

  return (
    <InformativeCardUI
      title={title}
      message={message}
      buttonText={buttonText}
      buttonVariant={buttonVariant}
      icon={icon}
      onButtonClick={onButtonClick}
      labelsSizeDifferent={labelsSizeDifferent}
    />
  );
};

export { InformativeCard };
