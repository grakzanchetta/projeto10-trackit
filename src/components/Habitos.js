import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

import Menu from "./Menu";
import Topo from "./Topo";
import UserContext from "../contexts/UserContext";
import ListaHabitos from "./ListaHabitos";
import AdicionarHabito from "./AdicionarHabito";

export default function Habitos(){

    const [habitos, setHabitos] = useState([])
    const { user } = useContext(UserContext);
    const [carregando, setCarregando] = useState(true)
    
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}` 
        }
    }

    useEffect(() => {

        atualiza()
    }, [])
    function atualiza() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then(function (resposta) {
            setHabitos(resposta.data)
            setCarregando(false)
        })
    }
    
    function Render({ habitos, load }) {
        const [habito, setHabito] = useState([])
        const [display, setDisplay ]= useState("none")
        
        function mais() {
            setDisplay("flex")
    
        }
        return (
            <Container>
                {load ? <Main><ThreeDots color="#00BFFF" height={50} width={50} /></Main> :<Main>
                    <h1>
                        Meus hábitos <Mais onClick={mais}>+</Mais>
                    </h1>
                    <Adicionar display={display}><AdicionarHabito setHabito={setHabito} atualiza={atualiza} setDisplay={setDisplay}/></Adicionar>
                    {habito}
                    {habitos.map((e, index) => <ListaHabitos key={index} name={e.name} days={e.days} id={e.id}  />)}
                    {habitos.length > 0 ? "" :
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
                </Main>}
            </Container>
        )
    }

    return (
    <>
        <Topo/>
            <Render habitos={habitos} atualiza={atualiza} load={carregando}/>
        <Menu/>
    </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-app);
    overflow-y: auto;
`
const Main = styled.div`
    padding-top:110px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 90px;

    h1{
        font-size: 23px;
        color: var(--cor-app);
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        width: 95%;
        max-width: 340px;
    }
    
    p{
        font-size: 18px;
        color:#666666;
        line-height: 22px;
        max-width: 340px;
    }
`
const Mais = styled.button`
        height: 35px;
        width: 40px;
        border:none;
        border-radius: 5px;
        font-weight: 700;
        color:#fff;
        background-color:#52B6FF ;
        font-size: 27px; 
`
const Adicionar = styled.div`
width: 340px;
display: ${props => props.display};
`