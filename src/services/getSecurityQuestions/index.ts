import type { ISecurityQuestionsResponse } from "@ptypes/api/ISecurityQuestionsResponse";
import type { ICredentialRequirementParams } from "@ptypes/api/ICredentialRequirementParams";
import { iauthQueryAxiosInstance } from "@api/iauthQuery";
import type { ISecurityQuestionsApiResponse } from "@ptypes/services/ISecurityQuestionsApiResponse";
import { AxiosRequestConfig } from "axios";

const getSecurityQuestions = async (
  params: ICredentialRequirementParams,
): Promise<ISecurityQuestionsResponse> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Business-Unit": "test",
      "X-Action": "SearchSecurityQuestionAndAnswer",
    },
  };

  const queryParams = new URLSearchParams();
  if (params.originatorId) queryParams.append("originatorId", params.originatorId);
  if (params.originatorCode) queryParams.append("originatorCode", params.originatorCode);

  const url = `/originators?${queryParams.toString()}`;
  const { data } = await iauthQueryAxiosInstance.get<ISecurityQuestionsApiResponse>(url, config);
  const mapped: ISecurityQuestionsResponse = {
    SecurityQuestionAndAnswer: data.SecurityQuestionAndAnswer.map((q) => ({
      numberQuestion: q.numberQuestion,
      question: q.i18n?.es ?? q.question,
      answers: q.answers?.map((a) => ({
        answer: a.answer,
        label: a.i18n?.es ?? a.answer,
      })),
    }))
      .sort((a, b) => (a.numberQuestion > b.numberQuestion ? 1 : -1)),
  };

  return mapped;
};

export { getSecurityQuestions };
