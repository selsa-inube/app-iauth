import { Divider, Grid, Stack, Text, Button } from "@inubekit/inubekit";
import { DynamicInputs } from "@components/login/DynamicInputs";
import logoPadlock from "@assets/img/lgo/logo-padlock-blue.png";
import { ILoginFormProps } from "@ptypes/components/login/IDynamicInputs";

const LoginFormUI = (props:ILoginFormProps) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Grid templateColumns="auto"
                templateRows="repeat(5, auto)"
                gap="20px"
                justifyContent="center"
                width="100%"
            >
                <Stack
                    alignItems="center"
                    height="38.02px"
                    justifyContent="center"
                    gap="7.07px"
                >
                    <img
                        src={logoPadlock}
                        alt="Logo Candado"
                        width="31.81"
                        height="31.81"
                    />
                    <Text
                        type="title"
                        size={props.sizeLablesDiferent}
                        appearance="gray"
                        weight="bold"
                    >
                        iAuth
                    </Text>
                </Stack>
                <Divider
                    dashed={true}
                />

                <DynamicInputs
                    labels={props.labels}
                    inputValid={props.inputValid}
                    handleInputChange={props.handleInputChange}
                    inputValue={props.inputValue}
                    currentStep={props.currentStep}
                    sizeLables={props.sizeLables}

                />

                <Stack
                    direction="column"
                    width={props.screenMobile}
                >
                    <Button
                        appearance="primary"
                        type="submit"
                        children="Continuar"
                        fullwidth={true}
                        
                    />
                </Stack>
                {props.link}
            </Grid>
        </form>
    );
}

export { LoginFormUI };