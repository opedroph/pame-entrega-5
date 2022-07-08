import React from "react";

import {
  AplicativoContainer,
  Disponibilidade,
  ParteDireita,
  ParteEsquerda,
  SeuFilhoPrecisa,
  Titulo,
  Dados,
} from "./style.js";

function Aplicativo() {
  return (
    <>
      <AplicativoContainer>
        <ParteEsquerda>
          <Titulo>conheça nosso aplicativo.</Titulo>
          <Disponibilidade>disponível para iphone e android</Disponibilidade>
        </ParteEsquerda>
        <ParteDireita>
          <SeuFilhoPrecisa>
            tudo o que seus filhos precisam está aqui!
          </SeuFilhoPrecisa>
          <Dados>Produtos & medicamentos</Dados>
        </ParteDireita>
      </AplicativoContainer>
    </>
  );
}

export default Aplicativo;
