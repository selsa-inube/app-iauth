import { Home } from '@pages/home';
import { Route, Routes } from 'react-router-dom';
import { environment } from "@config/environment";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode:string = params.get("portal") || environment.DEAFULT_PORTAL_CODE;

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home portalCode={portalCode} />} />
    </Routes>
  );
}

export { App };
