import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.secundary};
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  h1{
    color: white;
  }
  
  ul{
    list-style-type: none;
  }
`

