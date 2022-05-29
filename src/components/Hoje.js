import styled from "styled-components";

import Menu from "./Menu";
import Topo from "./Topo";

export default function Habitos(){
    
    return (
    <>
        <Topo></Topo>
            <Container>
                <h1>Sou a tela de Hoje</h1>
            </Container>
        <Menu></Menu>
    </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-app);
    padding-top: 70px;
`