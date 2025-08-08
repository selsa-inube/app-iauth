import { StyledIconContainer } from "./styles.ts";
import { IStatusIconUI } from "@ptypes/components/utils/statusIcon/IStatusIconUI";
import { Icon } from "@inubekit/inubekit";

const StatusIconUI = (props: IStatusIconUI) => {
  const { icon, appearance, size } = props;

  return (
    <StyledIconContainer>
      <Icon 
        appearance={appearance}
        icon={icon}
        size={size}
      />
    </StyledIconContainer>
  );
};

export { StatusIconUI };
