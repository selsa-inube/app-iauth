import { Login } from '@pages/login';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export { App };
