import { Home } from '@pages/home';
import { Route, Routes } from 'react-router-dom';
import { defaultPortalCode } from '@config/app/portalCode';

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode:string = params.get("portal") || defaultPortalCode;

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home portalCode={portalCode} />} />
    </Routes>
  );
}

export { App };
