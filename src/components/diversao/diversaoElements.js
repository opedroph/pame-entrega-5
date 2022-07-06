import styled from "styled-components";
import foto from '../../img/brincar.jpg'

export const ContainerDiversao = styled.div`
    display: flex;
    padding: 30px;
` 

export const Esquerda = styled.div`
    flex: 1;
    background-image: ${foto};
    background-size: cover;
    background-position: center;
`

export const Direita = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

