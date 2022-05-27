import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Topo(){
    const { user } = useContext(UserContext);

    return (
        <>
            <h1>Sou {user.name}</h1>
        </>    
    )
}