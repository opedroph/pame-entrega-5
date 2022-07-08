import React from "react";
import {
  FormularioContainer,
  TituloFormulario,
  FormSpace,
  Input,
  Button,
  Label,
} from "./style.js";

const dadosFormulario = [
  { label: "Nome da criança", name: "nomeCrianca", type: "text" },
  {
    label: "data de nascimento",
    name: "dataNascimento",
    type: "date",
  },
  { label: "Nome do Responsável", name: "nomeResponsavel", type: "text" },
  {
    label: "Telefone",
    name: "telefoneCliente",
    type: "text",
  },
  {
    label: "Email",
    name: "emailCliente",
    type: "email",
  },
  { label: "Quando quer sua consulta?", name: "dataConsulta", type: "date" },

  { label: "A que horas?", name: "horaConsulta", type: "time" },
];

const Formulario = () => {
  return (
    <>
      <FormularioContainer>
        <TituloFormulario>Marque uma consulta!</TituloFormulario>
        <FormSpace>
          {dadosFormulario.map((item, index) => (
            <div key={index}>
              <Label htmlFor={item.name}>{item.label}</Label>
              <Input id={item.name} type={item.type}></Input>
            </div>
          ))}
          <Button>Marcar consulta</Button>
        </FormSpace>
      </FormularioContainer>
    </>
  );
};

export default Formulario;
