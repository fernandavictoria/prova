import styled from 'styled-components'
import {colors} from "../../style/GlobalStyle"
export const Section = styled.section`

  align-items: center;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  padding-bottom: 4rem;
  max-width: 1090px;
  margin: 0 auto;
  min-height: calc(100vh - 8rem);

  @media (max-width:630px) {
    grid-template-columns: auto ;
  }
  
  a{
    background-color: ${colors.verde} ;
    
    text-decoration: none;
    border-radius:22px ;
    border: 2rem solid ${colors.verde};

    color: black;
    font-size: 2rem;
    

  }

    
  
`