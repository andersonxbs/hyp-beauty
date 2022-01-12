import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Agenda from "./pages/Agenda";

const AppRoutes = () => (
  <BrowserRouter basename="beauty">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agenda" element={<Agenda />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
