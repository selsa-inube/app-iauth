import { StatusIconUI } from "./interface.tsx";
import { IStatusIcon } from "@ptypes/components/utils/statusIcon/IStatusIcon";

const StatusIcon = (props: IStatusIcon) => {
  const { icon } = props;

  return <StatusIconUI icon={icon} />;
};

export { StatusIcon };
