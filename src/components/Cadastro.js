import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from '../assets/title.png';
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {

    const [cadastro, setCadastro] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    })
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    
    function fazerCadastro(event) {
        event.preventDefault();
        setCarregando(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);

        promise.then((resposta) => {
            navigate("/");
        });
        promise.catch((resposta) => {
            alert("O Cadastro não pode ser realizado. Tente novamente.")
        });
    }

    function preencherCadastro() {
        return (
            <>
                <input
                    type="email"
                    placeholder="email"
                    value={cadastro.email}
                    disabled={carregando} 
                    onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={cadastro.senha}
                    disabled={carregando} 
                    onChange={(e) => setCadastro({ ...cadastro, password: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={cadastro.name}
                    disabled={carregando} 
                    onChange={(e) => setCadastro({ ...cadastro, name: e.target.value })}
                    required
                />
                <input
                    placeholder="foto"
                    value={cadastro.image}
                    disabled={carregando} 
                    onChange={(e) => setCadastro({ ...cadastro, image: e.target.value })}
                />
                <button disabled={carregando} type="submit">{carregando ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : <p>Cadastrar</p>}</button>
            </>
        )
    }

    const cadastroPreenchido = preencherCadastro();

    return (
        <Container>
            <img src={Logo} alt="Logo trackIT" />
            <Cadastrar onSubmit={fazerCadastro}>{cadastroPreenchido}</Cadastrar>
            <NavLink to={`/`}>Já tem uma conta? Faça login!</NavLink>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-login-cadastro)
`
const Cadastrar = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    input{
        height: 45px;
        width: 303px;
        background-color: ${props => props.ativa ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 19.976px;
        
    &::placeholder{
        color:#DBDBDB;
    }
    }

    button{
        height: 45px;
        width: 303px;
        font-size: 21px;
        color: var(--cor-login-cadastro);
        background-color: var(--cor-botao);
        border-radius: 4.63636px;
        border:none;
        display: flex;
        align-items: center;
        justify-content: center;
  
        &:hover{
            filter: opacity(0.7);
        }
    }
`



const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--cor-botao);
}
`
