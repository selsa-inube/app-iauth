import { Divider, Grid, Stack, Text, Button } from "@inubekit/inubekit";
import { DynamicInputs } from "@components/login/DynamicInputs";
import logoPadlock from "@assets/img/lgo/logo-padlock-blue.png";
import { ILoginFormProps } from "@ptypes/components/login/IDynamicInputs";

const LoginFormUI = (props: ILoginFormProps) => {
    const {
        handleSubmit,
        labelsSizeDiferent,
        labels,
        inputValid,
        handleInputChange,
        inputValue,
        currentStep,
        labelsSize,
        screenMobile,
        link,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
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
                        size={labelsSizeDiferent}
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
                    labels={labels}
                    inputValid={inputValid}
                    handleInputChange={handleInputChange}
                    inputValue={inputValue}
                    currentStep={currentStep}
                    labelsSize={labelsSize}

                />

                <Stack
                    direction="column"
                    width={screenMobile}
                >
                    <Button
                        appearance="primary"
                        type="submit"
                        children="Continuar"
                        fullwidth={true}

                    />
                </Stack>
                {link}
            </Grid>
        </form>
    );
}

export { LoginFormUI };