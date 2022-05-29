import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TailSpin } from 'react-loader-spinner'

import Menu from "./Menu";
import Topo from "./Topo";
import UserContext from "../contexts/UserContext";

export default function Habitos(){

    const [habitos, setHabitos] = useState([])
    const { user } = useContext(UserContext);
    
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}` 
        }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((resposta) =>{
        setHabitos(resposta.data)
        });
    }, [])
    

    function renderizarHabitos (){
        console.log(habitos[2].name)
        return(
            <h1>{habitos[0].name}</h1>
        )
        
    }


    const habitosRenderizados = renderizarHabitos();

    return (
    <>
        <Topo/>
        <Container>
            {habitosRenderizados}
        </Container>
        <Menu/>
    </>
    )
}

/* 
   <Container>
            <TopBar />
            {load ? <Main><TailSpin color="#00BFFF" height={80} width={80} /></Main> :<Main>
                <h1>
                    Meus hábitos <Mais onClick={mais}>+</Mais>
                </h1>
                <Adicionar display={display}><AddHabito setHabito={setHabito} atualiza={atualiza} setDisplay={setDisplay}/></Adicionar>
                {habito}
                {habitos.map((e, index) => <ListaHabitos key={index} name={e.name} days={e.days} id={e.id} atualiza={atualiza} />)}
                {habitos.length > 0 ? "Abuble" :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </Main>}
            <Footer />
        </Container>*/

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-fundo-app);
    padding-top: 70px;
`