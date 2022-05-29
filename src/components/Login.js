import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ThreeDots } from "react-loader-spinner";
import Logo from '../assets/title.png';
import UserContext from "../contexts/UserContext";

export default function Login(){

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [carregando, setCarregando] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

    function fazerLogin(event) {
        event.preventDefault();
        setCarregando(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
        promise.then((resposta) => {
            setUser(resposta.data);
            navigate("/hoje");
        });
        promise.catch((resposta) => {
            setCarregando(false);
            alert("O Login não pode ser realizado. Tente novamente.")
        });
    }

    const cadastroLogin = preencherLogin();
    
    function preencherLogin() {
        return (
            <>
                 <input
                    type='email'
                    placeholder="email"
                    disabled={carregando}
                    value={login.email}
                    onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder="senha"
                    disabled={carregando}
                    value={login.password}
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                />
                <button disabled={carregando} type="submit">{carregando ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : <p>Entrar</p>}</button>
            </>
        )
    }
    
    return (
        <Container>
            <img src={Logo} alt="Logo trackIT" />
            <Logar onSubmit={fazerLogin}>{cadastroLogin}</Logar>
            <NavLink to={`/cadastro`}>Não tem uma conta? Cadastre-se!</NavLink>
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

const Logar = styled.form`
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