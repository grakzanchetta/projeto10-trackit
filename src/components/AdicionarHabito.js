import axios from "axios"
import React,{ useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UserContext";
import { ThreeDots } from 'react-loader-spinner';


export default function AdicionarHabito({ setHabito ,atualiza,setDisplay}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [diasSelecionado, setDiasSelecionados] = useState([])
    const[nomeHabito,setNomeHabito] = useState([])
    const{user} = useContext(UserContext);
    const [carregando, setCarregando] = useState(false);
   
    function cancelar() {
        setDisplay("none")     
    }

    function RenderCheck(e, index) {
        const [cor, setCor] = useState(false)

        function seleciona(element) {
            if (cor === true) {
                setCor(false)
                setDiasSelecionados( diasSelecionado.filter((e) => e !== index ? index : ''))
            } else {
                setCor(true)
                setDiasSelecionados([...diasSelecionado, index])
            }     
        }
        return (
            <Check  key={index} onClick={carregando ? none : (element) => seleciona(element)} cor={cor}>{e}</Check>
        )
    }
    function salvar(){
        const body = {
            name: nomeHabito,
            days: diasSelecionado
        }
        const config = {
            headers:{
                "Authorization": `Bearer ${user.token}`
            }
        }

        setCarregando(true)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body, config)
        promise.then(function(resposta) {
            setDisplay("none")
            setCarregando(false)
            setNomeHabito('')
            setDiasSelecionados([])
            atualiza()    
        })
        promise.catch(function(resposta){
            setCarregando(false)
            alert("Habito não pode ser incluso. Tente novamente.")
        })  
    }
    
    function none(){}
    
    return (
        <Container>
            <input
                type='text'
                placeholder='nome do habito' 
                value={nomeHabito}
                onChange={(e) => setNomeHabito(e.target.value)}
                disabled={carregando}
                />
            <Dias>
                {dias.map((e, index) => RenderCheck(e, index))}
            </Dias>
            <Finalizar>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                <Salvar onClick={carregando ? none: salvar}>{carregando ? <ThreeDots color="#FFFFFF" height={50} width={50} /> : <>Salvar</>}</Salvar>
            </Finalizar>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 340px;
    height: 180px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    align-items: center;
    padding: 18px;
    flex-direction: column;
    position: relative;
    margin-bottom: 10px;

    input{
        height: 45px;
        width: 95%;
        background-color:  "#FFFFFF";
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        font-size: 20px;
        padding: 5px;
    }
`
const Dias = styled.div`
    display: flex;
    max-width: 340px;    
`
const Check = styled.div`
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        display: flex;
        justify-content: center;
        align-items: center;
        color:${props => props.cor ? '#ffffff' : '#DBDBDB'};
        background-color: ${props => props.cor ? '#CFCFCF' : '#fff'};
        margin-left: 4px;;
`
const Cancelar = styled.div`
    color:#52B6FF;
    font-size: 16px;
    margin-right: 23px;
`
const Salvar = styled.div`
        height: 35px;
        width: 84px;
        border:none;
        border-radius: 5px;
        color:#fff;
        background-color:#52B6FF ;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;  
`
const Finalizar = styled.div`
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
`