import { inube } from "@inubekit/inubekit";
import { spacing } from "@design/tokens/tokens/spacing/spacing";

const informationBoxTokens = {
  container: {
    background: { color: inube.palette.neutral.N10 },
    radius: spacing.s100,
  },
  content: {
    color: inube.palette.neutral.N400,
    gap: spacing.s075,
    paddingY: spacing.s075,
    paddingX: spacing.s200,
  },
  header: {
    gap: spacing.s075,
  },
};

export { informationBoxTokens };