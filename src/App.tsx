import UserIU from './test/input';
import TestLink from './test/lintTest';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<UserIU />} />
      <Route path="/test" element={<TestLink />} />
    </Routes>
  );
}

export { App };
