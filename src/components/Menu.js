import styled from "styled-components";
import { Link } from "react-router-dom";
import DiarioContext from "../contexts/DiarioContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useContext } from "react";

export default function Menu(){

    const { diario } = useContext(DiarioContext)

    return (
        <Container>
            <NavLink to={`/habitos`}><h1>Hábitos</h1></NavLink>
            <NavLink to="/hoje">
                <Botao>
                <CircularProgressbar
                    value={diario}
                    text={"Hoje"}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor:'#52B6FF',
                        textColor:'#FFFFFF',
                        textSize:'18px',
                        pathColor:'#ffffff'
                    })}
                />
                </Botao>
            </NavLink>
            <NavLink to={`/historico`}><h1>Histórico</h1></NavLink>
        </ Container>
    )
}

const Botao = styled.div`
    height: 91px;
    width: 91px;
    margin-bottom: 31px;
`

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:36px ;
    padding-right: 36px;
    background-color: #fff;
    
   h1{
        font-size: 18px;
        color:#52B6FF;
    } 
`
const NavLink = styled(Link)`
  text-decoration: none;
}
`
