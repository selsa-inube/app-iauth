import { Divider, Grid, Stack, Button } from "@inubekit/inubekit";
import { Links } from "@components/login/Link";
import { DynamicInputs } from "@components/login/DynamicInputs";
import { ILoginFormProps } from "@ptypes/components/login/ILoginFormProps";
import { Header } from "@components/login/Header";

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
                <Header labelsSizeDiferent={labelsSizeDiferent} />

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