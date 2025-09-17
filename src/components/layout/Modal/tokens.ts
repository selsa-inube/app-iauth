import { inube } from "@inubekit/inubekit";
import { spacing } from "@design/tokens/tokens/spacing/spacing";

const modalTokens = {
  card: {
    background: {
      color: inube.palette.neutral.N0,
    },
    radius: spacing.s100,
    shadow: {
      color: inube.palette.neutral.N10,
      offsetX: spacing.s0,
      offsetY: spacing.s025,
      blur: spacing.s025,
      spread: spacing.s0,
    },
  },
};

export { modalTokens };
