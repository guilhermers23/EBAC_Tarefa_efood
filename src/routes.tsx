import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./containers/Layout";
import { Home } from "./pages/Home";
import { Restaurant } from "./pages/Restaurant";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<div>Erro</div>} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/restaurante/:name" element={<Restaurant />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
