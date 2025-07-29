import { StyledIconContainer } from "./styles.ts";
import { IStatusIcon } from "@ptypes/components/utils/statusIcon/IStatusIcon";
import { EStatusIcon } from "@enum/components/EStatusIcon";
import { MdHowToReg, MdRunningWithErrors } from "react-icons/md";

const StatusIconUI = (props: IStatusIcon) => {
  const { icon } = props;

  const getIcon = () => {
    switch (icon) {
      case EStatusIcon.USER_CHECK:
        return <MdHowToReg size={100} color="#0066CC" />;
      case EStatusIcon.CLOCK_WARNING:
        return <MdRunningWithErrors size={100} color="#FF9500" />;
      default:
        return <MdHowToReg size={100} color="#0066CC" />;
    }
  };

  return <StyledIconContainer>{getIcon()}</StyledIconContainer>;
};

export { StatusIconUI };
