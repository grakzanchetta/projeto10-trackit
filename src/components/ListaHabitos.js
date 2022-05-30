import axios from "axios"
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Lixeira from '../assets/Vector.jpg'

export default function ListaHabitos({name,days, id}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const{user} = useContext(UserContext);
    const navigate = useNavigate();

    function RenderCheck(e,index){
        const [cor] = useState(false)
        let teste = days.includes(index)
        if( teste === true){
            return(
                <Check key={index} cor={true}>{e}</Check>
            )
            
        }else{
            return(
                <Check  key={index} cor={cor}>{e}</Check>
            )
        }
    }
    function deletar(id){
        let confirm = window.confirm("tem certeza que quer deletar esse habito?")
        if(confirm === true){
            const config = {
                headers:{
                    "Authorization": `Bearer ${user.token}`
                }
            }
            
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config) 
            promise.then(function(resposta) {
                navigate("/historico");
                navigate("/habitos");
            })
        }
    }
    return (
        <>
            <Container>
                <h1>{name}<img src={Lixeira} alt="deletar" onClick={()=> deletar(id)}/></h1>
                <Dias>
                    {dias.map((e,index) => RenderCheck(e,index))}
                </Dias>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 91px;
    background-color: var(--cor-login-cadastro);
    margin-bottom: 10px;
    border-radius: 5px;
    max-width: 340px;
    padding:12px;
    h1{
        margin: 8px;
        color: var(--cor-app-texto);
        font-size: 20px;
    }
`

const Check = styled.div`
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        display: flex;
        justify-content: center;
        align-items: center;
        color:${props => props.cor ? '#FFFFFF' : '#DBDBDB'};
        background-color: ${props => props.cor ? '#CFCFCF' : '#fff'};
        margin-left: 4px;;
`
const Dias = styled.div`
    display: flex;
`