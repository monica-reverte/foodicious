import styled from "styled-components";
import { Link } from "react-router-dom";
import foodicious from "../assets/foodicious.png"

import React from 'react'

export const NavBar = () => {
    return (
        <Nav>
            <Logo to={"/"}>
                <img src={foodicious} alt="logo" />
            </Logo>
        </Nav>
    )
}


const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400; 
`

const Nav = styled.div`
padding-top: 4rem;
display: flex;
justify-content: center;
align-items: center;
`
