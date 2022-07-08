import React from "react";
import {
  PrincipalContainer,
  PrincipalEsquerda,
  PrincipalDireita,
} from "./mainElements";
import Formulario from "../formularios";

function Main() {
  return (
    <>
      <PrincipalContainer>
        <PrincipalEsquerda></PrincipalEsquerda>
        <PrincipalDireita>
          <Formulario />
        </PrincipalDireita>
      </PrincipalContainer>
    </>
  );
}

export default Main;
