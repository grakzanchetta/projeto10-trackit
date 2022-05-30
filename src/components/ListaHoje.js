import { useState } from "react"
import axios from "axios";
import styled from "styled-components";
import Check from '../assets/check.svg'

export default function ListaHoje({ dados, config, atualizaHoje, progresso}) {
    
    const [check, setCheck] = useState(dados.done)
    const body = { };
    progresso()
    
    function feito() {
        if(check === false){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/check`, body, config)
            promise.then(()=> atualizaHoje())
            setCheck(true)        
        } else {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dados.id}/uncheck`,body, config)
            promise.then(()=> atualizaHoje())
            setCheck(false)   
        }
    }

    return (
        <Post>
            <div>
                <h4>{dados.name}</h4>
                <span>
                <h5>Sequência atual: </h5>
                <Ponto cor={check }> {dados.currentSequence} {dados.currentSequence === 1 ? "dia" : "dias"}</Ponto>
                </span>
                <span>
                <h5>Seu Recorde: </h5>
                <Ponto cor={dados.currentSequence === dados.highestSequence && check=== true && dados.highestSequence > 0? true : false}> {dados.highestSequence} {dados.highestSequence === 1 ? "dia": "dias"}</Ponto>
                </span>   
            </div>
            <Feito src={Check} feito={check } onClick={() => feito()} alt="check"/>
        </Post>
    )
}
const Feito = styled.img`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
    background-color: ${props => props.feito ? '#8FC549' : '#E7E7E7'};
`
const Ponto= styled.p`  
     color:${props => props.cor? "#8FC549": "#666666"};
`
const Post = styled.div`
    max-width: 340px;
    width: 100vw;
    height: auto;
    min-height: 94px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom:10px ;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span{
        display: flex;
        font-size :13px
    }
   
    h4{
        font-size: 20px;
        color:var(--cor-app-texto)
    }
    h5{
        font-size :13px ;
        color:var(--cor-app-texto)
    }
`
