import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage.tsx';
import SelfModePage from '../pages/SelfModePage/SelfModePage.tsx';
import GuideModePage from '../pages/GuideModepage/GuideModePage.tsx';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/self-mode" element={<SelfModePage />} />
          <Route path="/guide-mode" element={<GuideModePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
