import { Stack } from "@inubekit/inubekit";
import { IStatusMessageUI } from "@ptypes/pages/statusMessage/IStatusMessageUI";
import { InformativeCard } from "@components/layout/InformativeCard";
const StatusMessageUI = (props: IStatusMessageUI) => {
  const {
    title,
    message,
    buttonText,
    buttonVariant,
    icon,
    labelsSizeDifferent,
    onButtonClick,
  } = props;

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <InformativeCard
        title={title}
        message={message}
        buttonText={buttonText}
        buttonVariant={buttonVariant}
        icon={icon}
        onButtonClick={onButtonClick}
        labelsSizeDifferent={labelsSizeDifferent}
      />
    </Stack>
  );
};

export { StatusMessageUI };
