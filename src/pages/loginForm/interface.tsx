import { Divider, Grid, Stack, Button } from "@inubekit/inubekit";
import { Links } from "@pages/link";
import { DynamicInputs } from "@components/login/DynamicInputs";
import { ILoginForm } from "@ptypes/components/login/ILoginForm";
import { Header } from "@components/layout/Header";

const LoginFormUI = (props: ILoginForm) => {
    const {
        handleSubmit,
        labels,
        inputValid,
        handleInputChange,
        inputValue,
        currentStep,
        labelsSize,
        screenMobile,
        showLink
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Grid templateColumns="auto"
                templateRows="repeat(5, auto)"
                gap="13px"
                justifyContent="center"
                width="100%"
                height="100%"
            >
                <Header />

                <Divider
                    dashed
                />

                <DynamicInputs
                    labels={labels}
                    inputValid={inputValid}
                    handleInputChange={handleInputChange}
                    inputValue={inputValue}
                    currentStep={currentStep}
                    labelsSize={labelsSize}
                    showUserIcon={showLink}
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
                {
                    showLink && (
                        <Links labelsSize="small" />
                    )
                }
            </Grid>
        </form>
    );
}

export { LoginFormUI };