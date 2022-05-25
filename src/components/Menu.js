import { Link } from "react-router-dom";

export default function Histórico(){
    return (
        <>
            <Link to={`/habitos`}>Hábitos</Link>
            <Link to={`/hoje`}>Hoje</Link>
            <Link to={`/historico`}>Histórico</Link>
        </>
    )
}