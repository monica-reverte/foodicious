import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Search = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search/" + input)
    };

    return (
    <FormStyle onSubmit={handleSubmit}>
        <div>
            <FaSearch />
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder='Search...'/>
        </div>
    </FormStyle>
    )
}


const FormStyle = styled.form`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;


    div{
        position: relative;
    }

    input{
        border: none;
        background: #fefaf7;
        font-size: 1rem;
        color: white;
        padding: 1rem 3rem;
        border: 1px solid rgb(56,56,56);
        border-radius: 0.5rem;
    } 
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: rgb(56,56,56);
    }  
`;
