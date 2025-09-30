import { inube } from "@inubekit/inubekit";

const requestProcessDesktopTokens = {
  progressBar: {
    track: {
      background: { color: inube.palette.neutral.N30 },
      border: { color: inube.palette.neutral.N10 },
    },
  },
  stepIndicator: {
    border: {
      color: {
        error: inube.palette.red.R400,
        success: inube.palette.green.G400,
      },
    },
  },
  requestContainer: {
    border: { color: inube.palette.neutral.N40 },
  },
};

export { requestProcessDesktopTokens };
