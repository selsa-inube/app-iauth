import { Home } from '@pages/home';
import { Route, Routes } from 'react-router-dom';
import { PORTAL_CATALOG_ID } from "@config/environment";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode:string = params.get("portal") || PORTAL_CATALOG_ID;

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home portalCode={portalCode} />} />
    </Routes>
  );
}

export { App };
