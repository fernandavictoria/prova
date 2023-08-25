import styled from 'styled-components'
import { colors } from '../../style/GlobalStyle'

export const Section = styled.section`
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns:auto;
  gap: 100px;

  p{
    margin-top: 1rem;
    border-radius:22px ;
    border: 2rem solid ${colors.verde};
    background-color: ${colors.verde};
    font-size: 1.9rem;
    

  }
`