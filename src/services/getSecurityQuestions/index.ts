import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";
import type { ICredentialRequirementParams } from "@ptypes/api/ICredentialRequirementParams";

const getSecurityQuestions = async (
  params: ICredentialRequirementParams,
): Promise<ISecurityQuestionsResponse> => {
  console.log("Fetching security questions for:", params);

  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    SecurityQuestionAndAnswer: [
      {
        numberQuestion: "3",
        question: "Write the name of your maternal grandmother?",
      },
      {
        numberQuestion: "4",
        question: "Select the identity you identify with the most?",
        answers: [
          { answer: "Catholic" },
          { answer: "Christian" },
          { answer: "Evangelical" },
          { answer: "Jewish" },
          { answer: "Protestant" },
          { answer: "Hindu" },
          { answer: "None of the above" },
        ],
      },
      {
        numberQuestion: "5",
        question: "In what place was your birth?",
        answers: [
          { answer: "My parents' house" },
          { answer: "Relative's house" },
          { answer: "Hospital" },
          { answer: "Other place than above" },
        ],
      },
      {
        numberQuestion: "1",
        question: "Write the name of your mother?",
      },
      {
        numberQuestion: "2",
        question: "Write the name of your city of birth?",
      },
    ].sort((a, b) => (a.numberQuestion > b.numberQuestion ? 1 : -1)),
  };
};

export { getSecurityQuestions };
