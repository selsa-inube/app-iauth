import { Box, Textfield, Select, Text, Stack } from "@inubekit/inubekit";
import { StyledQuestionsGrid } from "./styles";
import type { ISecurityQuestionsStepUI } from "@ptypes/components/register/steps/ISecurityQuestionsStepUI";

const SecurityQuestionsStepUI = (props: ISecurityQuestionsStepUI) => {
  const {
    formData,
    labels,
    securityQuestions,
    onAnswerChange,
    isMobile,
    minRequiredAnswers,
  } = props;

  if (!securityQuestions?.SecurityQuestionAndAnswer) {
    return (
      <Stack direction="column" gap="16px" width="100%" height="100%">
        <Box height="auto" width="100%">
          <Text appearance="gray">
            No hay preguntas de seguridad disponibles.
          </Text>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack direction="column" gap="16px" width="100%" height="100%">
      <Box height="auto" width="100%">
        <Text appearance="gray">
          {labels.securityQuestions.description.replace(
            "{0}",
            minRequiredAnswers.toString(),
          )}
        </Text>
        <StyledQuestionsGrid $isMobile={isMobile}>
          {securityQuestions.SecurityQuestionAndAnswer.map((question) => {
            const currentValue =
              formData.securityAnswers[question.numberQuestion] || "";

            if (question.answers) {
              const selectOptions = question.answers.map((item) => ({
                id: item.answer,
                value: item.answer,
                label: item.answer,
              }));

              return (
                <Select
                  key={question.numberQuestion}
                  label={`${question.numberQuestion}. ${question.question}`}
                  placeholder="Selecciona una opción"
                  fullwidth={true}
                  options={selectOptions}
                  onChange={(_, value) =>
                    onAnswerChange(question.numberQuestion, value)
                  }
                  name={`question-${question.numberQuestion}`}
                  value={currentValue}
                />
              );
            } else {
              return (
                <Textfield
                  key={question.numberQuestion}
                  id={`question-${question.numberQuestion}`}
                  label={`${question.numberQuestion}. ${question.question}`}
                  placeholder="Escribe tu respuesta"
                  fullwidth={true}
                  type="text"
                  size="wide"
                  maxLength={50}
                  minLength={0}
                  value={currentValue}
                  onChange={(e) =>
                    onAnswerChange(question.numberQuestion, e.target.value)
                  }
                />
              );
            }
          })}
        </StyledQuestionsGrid>
      </Box>
    </Stack>
  );
};

export { SecurityQuestionsStepUI };
