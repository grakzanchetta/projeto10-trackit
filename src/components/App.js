import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje";
import Historico from "./Historico";
import Login from "./Login";

export default function App(){

    return (
    <>
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login /> } />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                    <Route path="/hoje" element={<Hoje />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    </>
    )
}