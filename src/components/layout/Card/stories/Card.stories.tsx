import { Card } from "..";
import type { ICard } from "@ptypes/components/card/ICard";
import { Box, Button, Input, Text } from "@inubekit/inubekit"

const story = {
    title: "Layout/Card",
    component: Card
}

const Default = (args: ICard) => <Card {...args} />;

Default.args = {
    children: (
        <Box>
            <Text type="title">Card Login</Text>
            <Input name="Usernamepassword" id="Usernamepassword" type="text" placeholder="Username or password" />
            <Button type="button">Login</Button>
        </Box>
    )
};

export default story;
export { Default };

