import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom'; // 追加
import HomePage from './component/pages/HomePage';
import './styles/reset.css';

function Router() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
