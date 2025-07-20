import styled from "styled-components"
import {IoSearch} from "react-icons/io5"
import { useNavigate } from "react-router"

export default function PaginaInicial({setCidade, cidade}) {
    const navigate = useNavigate();
    console.log(cidade) 

    function mudaPagina(e) {
        e.preventDefault();
        if (cidade === "") {
            alert("Digite o nome da cidade")
        } else {
            navigate("/clima", { state: { cidade } })
        }
    }

    return (
        <ContainerBackground>
            <Search>
                <h1>Confira o clima de uma cidade:</h1>
                <div>
                    <input onChange={(e) => setCidade(e.target.value)} type="text" placeholder="Digite o nome da cidade" />
                    <button onClick={(e) => mudaPagina(e)}><IoSearch size={24} /></button>
                </div>
            </Search>
        </ContainerBackground>
    )
}

const ContainerBackground = styled.div`
background-image: url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYXRoZXJ8ZW58MHx8fHwxNjg3NTY5NzA1&ixlib=rb-4.0.3&q=80&w=1080");
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

h1 {
    color: white;
    font-size: 25px;
    text-align: center;
}
`
const Search = styled.div`
background-color: #3d85c6;
height: 15%;
width: 20%;
border-radius: 20px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;

div{
    padding-top: 10px;
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
}
input {
    width: 100%;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    margin-top: 10px;
}
button {
    height: 45px;
    width: 60px;
    border-radius: 7px;
    margin-left: 10px;
    background-color: blue;
    margin-top: 10px;
}
`