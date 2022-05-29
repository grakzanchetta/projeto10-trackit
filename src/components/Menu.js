import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Histórico(){
    return (
        <Container>
            <Link to={`/habitos`}>Hábitos</Link>
            <Link to={`/hoje`}>Hoje</Link>
            <Link to={`/historico`} >Histórico</Link>
        </ Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    background-color: #ffffff;
`


