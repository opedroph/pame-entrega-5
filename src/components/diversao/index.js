import React from "react";
import {
  ContainerDiversao,
  Baixo,
  Cima,
  Esquerda,
  Direita,
  Titulo,
  Comentarios,
} from "./diversaoElements";

function Diversao() {
  return (
    <ContainerDiversao>
      <Cima></Cima>
      <Baixo>
        <Esquerda>
          <Titulo>
            Estamos de cara nova! venha conhecer nossa nova clínica.
          </Titulo>
        </Esquerda>
        <Direita>
          <Comentarios>Espaço dedicado para crianças.</Comentarios>
          <Comentarios>6 pediatras especializados.</Comentarios>
          <Comentarios>
            funcionamos de segunda às sextas, das 7h as 19h.
          </Comentarios>
        </Direita>
      </Baixo>
    </ContainerDiversao>
  );
}

export default Diversao;
