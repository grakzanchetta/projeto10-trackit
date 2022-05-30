import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import DiarioContext from "../contexts/DiarioContext";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje";
import Historico from "./Historico";
import Login from "./Login";

export default function App(){

    const [user, setUser] = useState(null);
    const [diario, setDiario] = useState(0)

    return (
    <>
        <UserContext.Provider value={{ user, setUser }}>
        <DiarioContext.Provider value={{ diario, setDiario }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login /> } />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter> 
        </DiarioContext.Provider>   
        </UserContext.Provider>
    </>
    )
}