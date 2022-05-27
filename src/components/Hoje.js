import Menu from "./Menu";
import Topo from "./Topo";

export default function Habitos(){

    return (
    <>
        <Topo user={user} setUser={setUser}></Topo>
        <h1>Sou a tela de Hoje</h1>
        <Menu></Menu>
    </>
    )
}