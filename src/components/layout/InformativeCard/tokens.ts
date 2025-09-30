import { inube } from "@inubekit/inubekit";
import { spacing } from "@design/tokens/tokens/spacing/spacing";

const informativeCardTokens = {
  container: {
    background: {
      color: inube.palette.neutral.N0,
    },
    radius: spacing.s100,
    shadow: {
      // 0px 4px 16px with ~10% neutral alpha
      color: inube.palette.neutralAlpha.N30A,
      offsetX: spacing.s0,
      offsetY: spacing.s050,
      blur: spacing.s200,
      spread: spacing.s0,
    },
  },
};

export { informativeCardTokens };
