import { Divider, Grid, Stack, Button } from "@inubekit/inubekit";
import { Links } from "@pages/Link";
import { DynamicInputs } from "@components/login/DynamicInputs";
import { ILoginForm } from "@ptypes/components/login/ILoginForm";
import { Header } from "@components/login/Header";

const LoginFormUI = (props: ILoginForm) => {
    const {
        handleSubmit,
        labelsSizeDifferent,
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
                gap="20px"
                justifyContent="center"
                width="100%"
            >
                <Header labelsSizeDifferent={labelsSizeDifferent} />

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
                        <Links labelsSize={labelsSize} />
                    )
                }
            </Grid>
        </form>
    );
}

export { LoginFormUI };