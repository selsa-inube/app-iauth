import { Divider, Grid, Stack, Text, Link, Button } from "@inubekit/inubekit";
import { useTwoStepLoginForm } from "../hooks/useTwoStepLoginForm";
import { DynamicInputs } from "./inputs";



function UserIU() {
    const { currentStep, handleSubmit, labels, inputValid, handleInputChange, inputValue } = useTwoStepLoginForm();


    return (
        <form onSubmit={handleSubmit}>
            <Grid templateColumns="auto"
                templateRows="auto auto auto auto auto"
                gap="20px"
                justifyContent="center"
                width="500px"
            >
                <Stack
                    alignItems="center"
                    height="38.02px"
                    justifyContent="center"
                    gap="7.07px"
                >
                    <img
                        src="./src/assets/img/lgo/logo-padlock-blue.png"
                        alt="Logo Candado"
                        width="31.81"
                        height="31.81"
                    />
                    <Text
                        type="title"
                        size="large"
                        appearance="gray"
                        weight="bold"
                    >iAuth
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
                />

                <Stack
                    direction="column"
                >
                    <Button
                        appearance="warning"
                        type="submit"
                        children="Continuar"
                        fullwidth={true}
                    />
                </Stack>
                {
                    currentStep === 'usernameInput' && (
                        <>
                            <Divider
                                dashed={true}
                            />
                            <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                gap="12px"
                                height="28px">
                                <Text
                                    as="span"
                                    size="medium"
                                    appearance="gray"
                                    children="¿No tienes cuenta?"
                                />
                                <Link
                                    path="https://www.inubekit.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="medium"
                                    type="label"
                                >
                                    ¡Regístrate!
                                </Link>
                            </Stack>
                        </>
                    )
                }

            </Grid>
        </form>
    );
}

export default UserIU;