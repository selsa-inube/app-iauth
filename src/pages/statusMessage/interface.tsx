import { Stack } from "@inubekit/inubekit";
import { IStatusMessageUI } from "@ptypes/pages/statusMessage/IStatusMessageUI";
import { PageLayout } from "@components/layout/PageLayout";
import { InformativeCard } from "@components/layout/InformativeCard";
const StatusMessageUI = (props: IStatusMessageUI) => {
  const {
    title,
    message,
    buttonText,
    buttonAppearance,
    icon,
    labelsSizeDifferent,
    onButtonClick,
  } = props;

  return (
    <PageLayout>
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
          buttonAppearance={buttonAppearance}
          icon={icon}
          onButtonClick={onButtonClick}
          labelsSizeDifferent={labelsSizeDifferent}
        />
      </Stack>
    </PageLayout>
  );
};

export { StatusMessageUI };
