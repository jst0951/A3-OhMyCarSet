import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage.tsx';
import SelfModePage from '../pages/SelfModePage/SelfModePage.tsx';
import GuideModePage from '../pages/GuideModepage/GuideModePage.tsx';
import CompletePage from '@/pages/CompletePage/CompletePage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import ErrorPage from '@/pages/ErrorPage/ErrorPage.tsx';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/self-mode" element={<SelfModePage />} />
          <Route path="/guide-mode" element={<GuideModePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/complete" element={<CompletePage />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
