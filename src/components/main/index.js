import React from "react";
import {
  PrincipalContainer,
  PrincipalEsquerda,
  PrincipalDireita,
} from "./style.js";
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
