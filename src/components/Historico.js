import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";

export default function Historico(){
    return (
    <>
        <Topo/>
        <Container>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Container>
        <Menu/>
    </>
    )
}

const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: var(--cor-fundo-app);
        padding-top: 98px;
        display: flex;
        flex-direction: column;
        align-items: center;

    h1{
        width: 340px;
        font-size: 23px;
        color: var(--cor-app);
        margin-bottom: 17px;
    }
    
    h2{
        width: 340px;
        font-size:18px;
        color: var(--cor-app-texto);
        margin-bottom: 28px;
    }

    `

