import { Home } from "@pages/home";
import { Route, Routes } from "react-router-dom";

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
    </Routes>
  );
};

export { App };
