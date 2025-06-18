import { MainEntry } from '@pages/login/mainEntry';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainEntry />} />
    </Routes>
  );
}

export { App };
