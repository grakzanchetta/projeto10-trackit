import { useContext } from "react";
import styled from "styled-components";

import imagemTopo from "../assets/imagemTopo.png"
import UserContext from "../contexts/UserContext";

export default function Topo(){
    const { user } = useContext(UserContext);

    return (
        <Container>
            <Logo src={imagemTopo} />
            <UserImage src={user.image} alt="imagem-usuario" />
        </Container>    
    )
}

const UserImage = styled.img`
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
`;

const Logo = styled.img`
    height: 40px;
    width: 97px;    
    margin-left: 18px;
`;

const Container = styled.div`
    width: 100vw;
    height: 70px;
    background-color: var(--cor-app);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
`