import React, { useState } from "react";
import * as St from "./Styles";
import { mask, unMask } from "remask";

const Form = () => {
  const [valueCpf, setValueCpf] = useState("");
  const [valueCel, setValueCel] = useState("");
  const [valueCep, setValueCep] = useState("");

  const handleOnChangeCpf = (evt) => {
    const originalValue = unMask(evt.target.value);
    const maskedValue = mask(originalValue, [
      "999.999.999-99",
      "99.999.999/9999-99",
    ]);
    setValueCpf(maskedValue);
  };

  const handleOnChangeCel = (evt) => {
    const originalValue = unMask(evt.target.value);
    const maskedValue = mask(originalValue, ["(99) 9 9999-9999"]);
    setValueCel(maskedValue);
  };

  const handleOnChangeCep = (evt) => {
    const originalValue = unMask(evt.target.value);
    const maskedValue = mask(originalValue, ["99.999-999"]);
    setValueCep(maskedValue);
  };

  return (
    <div>
      <h1>Cadastro de Condomínio</h1>

      <form>
        <>
          <div>
            <St.Label htmlFor="cpf">CPF/CNPJ:</St.Label>
            <St.Input
              autoFocus
              id="cpf"
              type="text"
              name="cpf"
              placeholder="Digite CPF ou CNPJ"
              value={valueCpf}
              onChange={handleOnChangeCpf}
            />
          </div>
        </>

        <div>
          <St.Label htmlFor="name">Nome:</St.Label>
          <St.Input id="name" type="text" name="name" placeholder="Nome..." />
        </div>

        <div>
          <St.Label htmlFor="cel">Celular:</St.Label>
          <St.Input
            id="cel"
            type="text"
            name="cel"
            placeholder="Celular..."
            value={valueCel}
            onChange={handleOnChangeCel}
          />
        </div>

        <div>
          <St.Label htmlFor="cep">Cep:</St.Label>
          <St.Input
            id="cep"
            type="text"
            name="cep"
            placeholder="Cep..."
            value={valueCep}
            onChange={handleOnChangeCep}
          />
        </div>

        <div>
          <St.Label htmlFor="email">Email:</St.Label>
          <St.Input
            id="email"
            type="text"
            name="email"
            placeholder="Email..."
          />
        </div>

        <div>
          <St.Button type="submit">Salvar</St.Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
