import styled from "styled-components";
import foto from "../../img/brincar.jpg";

export const ContainerDiversao = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  background-color: #3e7ada;
  flex-wrap: wrap;
`;

export const Cima = styled.div`
  background-image: url(${foto});
  background-position: center;
  background-size: cover;
  flex: 2;
`;

export const Baixo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0px 30px;
`;
export const Esquerda = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 0px;
`;

export const Direita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 10px 0px 10px 10px;
`;

export const Titulo = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  color: white;
`;
export const Comentarios = styled.p`
  font-size: 1.5em;
  color: #d3d3d3;
`;
