import styled from "styled-components";

export const FooterContainer = styled.div`
  /* margin: 10px 0px; */
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  background-color: #0061fe;
`;

export const FooterParteEsquerda = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin: 5px 5px 5px 0px;
`;
export const FooterParteDireita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  margin: 5px 0px 5px 5px;
`;

export const Informacoes = styled.p`
  font-size: 1.1em;
  color: white;
`;
export const Links = styled.a`
  font-size: 1.1em;
  color: white;
`;
