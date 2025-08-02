import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./containers/Layout";
import { Home } from "./pages/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<div>Erro</div>} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/restaurante/:name" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
