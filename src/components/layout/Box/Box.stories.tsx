import { Box, IBox } from ".";

import { Button } from "@inubekit/inubekit";
import { Text } from "@inubekit/inubekit";
import { Stack } from "@inubekit/inubekit";
import { ThemeProvider } from "styled-components";
import { inube } from "@inubekit/inubekit";

const story = {
  title: "layout/Box",
  components: Box,
};

const Default = (args: IBox) => <Box {...args} />;
Default.args = {
  margin: "0px",
  padding: "16px",
  borderRadius: "8px",
};

const Composition = (args: IBox) => (
  <Box {...args}>
    <Stack direction="column" gap="8px">
      <Text>The quick brown fox jumps over the lazy dog</Text>
      <Button appearance="gray" variant="outlined">
        Confirm
      </Button>
    </Stack>
  </Box>
);

const Themed = (args: IBox) => (
  <ThemeProvider theme={theme}>
    <Box {...args} />
  </ThemeProvider>
);
const theme = {
  box: {
    border: {
      color: inube.palette.teal.T300,
    },
  },
};

export { Default, Composition, Themed };
export default story;
