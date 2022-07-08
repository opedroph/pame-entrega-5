import React from "react";
import Consultas from "./consultas";
import { InformacoesClientes} from "./style.js";

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
