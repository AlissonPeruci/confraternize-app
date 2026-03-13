import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/initialLangePage";
import LoginPage from "./pages/login";
import CadastroPage from "./pages/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/cadastrar" element={<CadastroPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
