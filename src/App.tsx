import './styles/global.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import MainLayout from "./mainlayout/Mainlayout";
import InfrastructurePage from './pages/InfrastructurePage';
import SecurityPage from './pages/SecurityPage';
import IntegrationPage from './pages/IntegrationPage';
import logoITS from "../public/vnits_logo.png";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/giai-phap-ha-tang-cntt" element={<InfrastructurePage />} />
        <Route path="/giai-phap-an-ninh" element={<SecurityPage />} />
        <Route path="/giai-phap-tich-hop" element={<IntegrationPage />} />
      </Route>
    </Routes>
  );
}