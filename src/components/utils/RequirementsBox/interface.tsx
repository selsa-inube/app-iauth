import { Text } from "@inubekit/inubekit";
import type { IRequirementsBoxUI } from "@ptypes/components/utils/IRequirementsBoxUI";
import { MdChecklistRtl } from "react-icons/md";
import {
  StyledChecklistIcon,
  StyledContent,
  StyledRequirementsBox,
  StyledHeader,
} from "./styles";

const RequirementsBoxUI = (props: IRequirementsBoxUI) => {
  const { title, requirements, minWidth = "205px" } = props;

  return (
    <StyledRequirementsBox $minWidth={minWidth}>
      <StyledContent>
        <StyledHeader>
          <StyledChecklistIcon aria-label="requirements icon">
            <MdChecklistRtl />
          </StyledChecklistIcon>
          <Text size="medium" weight="bold">
            {title}
          </Text>
        </StyledHeader>
        <ul>
          {requirements.map((requirement, index) => (
            <li key={index}>
              <Text appearance="gray" size="medium">
                {requirement}
              </Text>
            </li>
          ))}
        </ul>
      </StyledContent>
    </StyledRequirementsBox>
  );
};

export { RequirementsBoxUI };
