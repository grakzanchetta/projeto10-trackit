import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Histórico(){
    return (
        <Container>
            <NavLink to={`/habitos`}><h1>Hábitos</h1></NavLink>
            <NavLink to={`/hoje`}>Hoje</NavLink>
            <NavLink to={`/historico`}><h1>Histórico</h1></NavLink>
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

    h1{
        font-size: 18px;
        color:#52B6FF;
    }

`

const NavLink = styled(Link)`
  text-decoration: none;
  
  &:hover{
    cursor:pointer;
    filter: brightness(130%);
}
`


