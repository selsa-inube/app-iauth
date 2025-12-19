import { Box } from ".";
import { IBox } from "@ptypes/components/box/IBox";
import { Button, Text, Stack, inube } from "@inubekit/inubekit";
import { ThemeProvider } from "styled-components";
import { ITheme } from "@ptypes/context/ITheme";

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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <ThemeProvider theme={theme as unknown as ITheme}>
    <Box {...args} />
  </ThemeProvider>
);
const theme= {
  box:{
    border: {
      color: inube.palette.teal.T300
    }
  }
}

export { Default, Composition, Themed };
export default story;
