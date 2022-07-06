import styled from "styled-components";
import foto from "../../img/background.jpg"

export const PrincipalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const PrincipalEsquerda = styled.div`
    background-image: url(${foto});
    flex: 1;
    background-position: center;
    background-size: cover; 
`

export const PrincipalDireita = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #3E7ADA;
`
