import { Link } from "react-router-dom";

export default function Histórico(){
    return (
        <>
            <h1>Sou a Barra de Menu</h1>
            <Link to={`/habitos`}>Hábitos</Link>
            <Link to={`/hoje`}>Hoje</Link>
            <Link to={`/historico`}>Histórico</Link>
        </>
    )
}