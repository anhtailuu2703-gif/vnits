import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/vnits/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
