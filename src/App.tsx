/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Home } from "@pages/home";
import { Route, Routes } from "react-router-dom";
import { portalCatalogId } from "@config/environment";
import Register from "@pages/register";
import { ValidateLink } from "@pages/validateLink";
import { PageLayout } from "@components/layout/PageLayout";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const originatorId: string | null = params.get("originatorId");
const originatorCode: string | null = params.get("originatorCode");
const callbackUrl: string | null = params.get("callbackUrl");

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            originatorId={originatorId ?? ""}
            originatorCode={originatorCode ?? ""}
            callbackUrl={callbackUrl ?? ""}
          />
        }
      />
      <Route
        path="/validate-link"
        element={
          <PageLayout>
            <ValidateLink />
          </PageLayout>
        }
      />
      <Route
        path="/register"
        element={
          <PageLayout>
            <Register />
          </PageLayout>
        }
      />
    </Routes>
  );
};

export { App };
