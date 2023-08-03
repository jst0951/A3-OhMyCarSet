import ReactDOM from 'react-dom/client';
import Router from './routes/Router.tsx';
import './index.css';
import GlobalStyle from './style/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
