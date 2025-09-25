import React from "react";


import LoginPage from './pages/Login/Login.jsx';
import SobreNosPage from './pages/SobreNos/sobreNos.jsx'
import HudCadastrosPage from './pages/HudCadastros/HudCadastros.jsx'
import CadastroPessoaPage from './pages/CadastroPessoa/CadastroPessoa.jsx'
import CadastroEmpresaPage from './pages/CadastroEmpresa/CadastroEmpresa.jsx'
import CadastroOngPage from './pages/CadastroOng/CadastroOng.jsx'
import RecuperarSenhaPage from "./pages/RecuperarSenha/recuperarSenha.jsx";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
      <>
        <Routes>
            <Route path="/" element={<SobreNosPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/hudCadastros" element={<HudCadastrosPage />}></Route>
            <Route path="/cadastroPessoa" element={<CadastroPessoaPage />}></Route>
            <Route path="/cadastroEmpresa" element={< CadastroEmpresaPage/>}></Route>
            <Route path="/cadastroOng" element={<CadastroOngPage />}></Route>
            <Route path="/recuperarSenha" element={<RecuperarSenhaPage />}></Route>
        </Routes>
      </>
    )
}

export default AppRoutes