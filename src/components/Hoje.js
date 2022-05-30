import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from 'dayjs'

import Menu from "./Menu";
import Topo from "./Topo";
import UserContext from "../contexts/UserContext";
import DiarioContext from "../contexts/DiarioContext";
import ListaHoje from "./ListaHoje";

dayjs.locale('pt-br')

export default function Habitos(){

    const [hoje, setHoje] = useState([])
    
    const {diario, setDiario} = useContext(DiarioContext)
    const { user } = useContext(UserContext);
    
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    let now = dayjs()

    const config = {
        headers:{
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        atualizaHoje()
    }, [])
    function atualizaHoje() {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(function(resposta){
            setHoje(resposta.data)
            
        }) 
    }

    function progresso(){
        let total = hoje.length
        let feitos = 0
        hoje.map((e)=>{
            if(e.done === true){
                feitos += 1
            }
        return('')
        })
        setDiario(feitos/total*100)
    }


    return (
    <>
        <Topo/>
            <Container>
            <h1>{semana[now.$W]}, {now.$D}/{now.$M < 10 ? `0${now.$M }` : `${now.$M }`}</h1>
            {diario === 0 ? <h2>Nenhum habito concluido ainda</h2> : <h3>{diario.toFixed()}% dos habitos concluidos</h3>}
            { hoje.map((e,index) => <ListaHoje key={index} dados={e} config={config} atualizaHoje={atualizaHoje} progresso={progresso}/>)}

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
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    h1{
        width: 340px;
        font-size: 23px;
        color: var(--cor-app);
    }
    h2{
        width: 340px;
        font-size:18px;
        color:#bababa;
        margin-bottom: 28px;
        margin-top: 5px;
    }
    h3{
        width: 340px;
        font-size:18px;
        color:var(--cor-sucesso);
        margin-bottom: 28px;
        margin-top: 5px;
    }
`

