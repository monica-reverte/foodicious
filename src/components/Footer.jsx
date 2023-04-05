import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterContainer>
        <p>Copyright © 2023 Foodicious</p>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 2rem;
padding: 0.8rem;
}



    p{
        font-size: 1.25rem;
        color:#67c0b0;
    }
    
    
    `
    




