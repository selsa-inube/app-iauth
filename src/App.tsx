import { Home } from "@pages/home";
import { Route, Routes } from "react-router-dom";
import { Register } from "@pages/register";
import { ValidateLink } from "@pages/validateLink";
import { Logout } from "@pages/logout";
import { PageLayout } from "@components/layout/PageLayout";


const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/logout" element={<Logout />} />
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

export { App };
