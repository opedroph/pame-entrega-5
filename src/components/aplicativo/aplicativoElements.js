import styled from "styled-components";

export const AplicativoContainer = styled.div`
  width: 100%;
  background-color: #b9cef0;
  padding: 0px 30px;
  display: flex;
`;
export const ParteEsquerda = styled.div`
  flex: 1;
  margin: 20px 5px 20px 0px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ParteDireita = styled.div`
  flex: 1;
  margin: 20px 0px 20px 5px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Titulo = styled.h1`
  font-size: 2em;
`;
export const Disponibilidade = styled.h3`
  font-size: 1.3em;
`;

export const SeuFilhoPrecisa = styled.h2`
  font-size: 1.5em;
`;
export const Dados = styled.p`
  font-size: 1.2em;
  margin: 5px 0px;
`;
