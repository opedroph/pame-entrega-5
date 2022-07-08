import React from "react";
import Consultas from "./consultas";
import { InformacoesClientes, Titulo } from "./sistemaLocalElements";

function SistemaLocal() {
  return (
    <>
      <InformacoesClientes>
        <Consultas />
      </InformacoesClientes>
    </>
  );
}

export default SistemaLocal;
