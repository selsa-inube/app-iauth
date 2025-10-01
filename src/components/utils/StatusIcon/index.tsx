import { StatusIconUI } from "./interface.tsx";
import { IStatusIcon } from "@ptypes/components/utils/statusIcon/IStatusIcon";
import { EStatusIcon } from "@enum/components/EStatusIcon";
import { MdErrorOutline, MdHowToReg, MdRunningWithErrors } from "react-icons/md";

const StatusIcon = (props: IStatusIcon) => {
  const { icon } = props;

  const iconMap = {
    [EStatusIcon.USER_CHECK]: {
      icon: <MdHowToReg />,
      appearance: "primary" as const,
      size: "100px"
    },
    [EStatusIcon.CLOCK_WARNING]: {
      icon: <MdRunningWithErrors />,
      appearance: "warning" as const,
      size: "100px"
    },
    [EStatusIcon.ERROR]: {
      icon: <MdErrorOutline />,
      appearance: "danger" as const,
      size: "100px"
    },
  };

  const selectedIconConfig = iconMap[icon] || iconMap[EStatusIcon.USER_CHECK];

  return (
    <StatusIconUI 
      icon={selectedIconConfig.icon}
      appearance={selectedIconConfig.appearance}
      size={selectedIconConfig.size}
    />
  );
};

export { StatusIcon };
