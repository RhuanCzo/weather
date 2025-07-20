import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp, IoCloudSharp, IoWaterSharp, IoNavigateSharp } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router";


export default function Clima() {
    const [clima, setClima] = useState()
    const location = useLocation();
    const cidade = location.state?.cidade;
    useEffect(() => {
        const promisse = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=49f39d812f9ef4ec1f21cd391d3a6a1e`)
        promisse.then((res) => {
            console.log(res.data)
            setClima(res.data)
        })
    }, [])
    return (
        <ContainerBackground>
            <Search>
                <h1>Confira o clima de uma cidade:</h1>
                <div>
                    <input type="text" placeholder="Digite o nome da cidade" />
                    <button><IoSearch size={24} /></button>
                </div>
                <hr />

                {clima &&
                    <Info>
                        <span><IoLocationSharp size={24} />{clima.name}</span>
                        <p>{clima.main.temp} K</p>
                        <p style={{ "font-weight": "bold" }}>{clima.weather[0].description}<IoCloudSharp size={24} /></p>
                        <div>
                            <p><IoWaterSharp size={24} />{clima.main.humidity}%</p><p><IoNavigateSharp size={24} /> {clima.wind.speed} </p>
                        </div>
                    </Info>}
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
height: 45%;
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

hr {
    width: 100%;
    height: 2px;
    background-color: #ffffff;
    margin-top: 25px;
    margin-bottom: 10px;
}

span {
    padding-top: 30px;
    font-size: 30px;
    font-weight: bold;
}
`
const Info = styled.div`
margin-top: 90px;
padding-top: 40px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 20PX;

div {
    display: flex;
    width: 100%;
    justify-content: center;
}
p, span {
    display: flex;
    align-items: center;
    margin: 20px;
}
`
