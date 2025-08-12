import { Text } from "@inubekit/inubekit";
import type { IRequirementsBoxUI } from "@ptypes/components/utils/IRequirementsBoxUI";

const RequirementsBoxUI = (props: IRequirementsBoxUI) => {
  const { title, requirements, minWidth = "205px" } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "6px 16px",
        minWidth: minWidth,
        width: "fit-content",
        minHeight: "96px",
        height: "auto",
        background: "#FAFBFC",
        borderRadius: "8px",
        flex: "none",
        order: 0,
        flexGrow: 0,
      }}
    >
      <div style={{ fontSize: "0.75rem", color: "#666" }}>
        <Text size="medium" weight="bold">
          {title}
        </Text>
        <ul style={{ margin: "0.5rem 0", paddingLeft: "1rem" }}>
          {requirements.map((requirement, index) => (
            <li key={index}>
              <Text appearance="gray" size="medium">
                {requirement}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { RequirementsBoxUI };
