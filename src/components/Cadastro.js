import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Cadastro() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    const navigate = useNavigate();
    const cadastroPreenchido = preencherCadastro();

    function fazerCadastro(event) {
        event.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: senha
        });

        promise.then((resposta) => {
            console.log(resposta.data)
            navigate("/");
        });
        promise.catch(alert("O Cadastro não pode ser realizado. Tente novamente."));
    }

    function preencherCadastro() {
        return (
            <>
                <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} />
                <input type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </>
        )
    }

    return (
        <>
            <Cadastrar onSubmit={fazerCadastro}>{cadastroPreenchido}</Cadastrar>
            <Link to={`/`}>Já tem uma conta? Faça login!</Link>
        </>
    )
}

const Cadastrar = styled.form`
`

