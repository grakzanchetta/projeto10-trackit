import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();
    const cadastroLogin = preencherLogin();

    function fazerLogin(event) {
        event.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: senha
        });

        promise.then((resposta) => {
            console.log(resposta.data)
            navigate("/hoje");
        });
        promise.catch((erro) => {
            console.log(erro.resposta.statusText)
        })
    }

    function preencherLogin() {
        return (
            <>
                <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <button type="submit">Entrar</button>
            </>
        )
    }
    
    return (
        <>
            <Logar onSubmit={fazerLogin}>{cadastroLogin}</Logar>
            <Link to={`/cadastro`}>Não tem uma conta? Cadastre-se!</Link>
        </>
    )
}

const Logar = styled.form`
`