import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useValidationToken } from "@hooks/useValidationToken";
import { selfRegisterTokenQueryParam } from "@config/environment";
import { StatusMessage } from "@pages/statusMessage";
import { EStatusMessage } from "@enum/pages/EStatusMessage";
import { Spinner, Stack } from "@inubekit/inubekit";

const ValidateLink = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParamName = selfRegisterTokenQueryParam ?? "a";
  const token = searchParams.get(queryParamName);

  const { validateToken, isLoading, validationResult, error } =
    useValidationToken();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    void validateToken(token);
  }, [token, navigate, validateToken]);

  useEffect(() => {
    if (error) {
      navigate("/");
      return;
    }

    if (!isLoading && validationResult?.type === "VALID_USER_DATA") {
      navigate("/register", {
        state: {
          userData: validationResult.userData,
        },
      });
    }
  }, [error, isLoading, validationResult, navigate]);

  if (isLoading) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Spinner />
      </Stack>
    );
  }

  if (error || !validationResult) {
    return null;
  }

  switch (validationResult.type) {
    case "LINK_EXPIRED":
      return <StatusMessage messageType={EStatusMessage.LINK_EXPIRED} />;

    case "USER_ALREADY_REGISTERED":
      return (
        <StatusMessage messageType={EStatusMessage.USER_ALREADY_REGISTERED} />
      );

    case "VALID_USER_DATA":
    default:
      return null;
  }
};

export { ValidateLink };
