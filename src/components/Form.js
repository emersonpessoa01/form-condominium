import React, { useState } from "react";
import * as St from "./Styles";
import { mask, unMask } from "remask";

// const initialValue = {
//   cpf: "",
//   name: "",
//   cel: "",
//   cep: "",
//   email: "",
// };

const Form = () => {
  const [valueCpf, setValueCpf] = useState("");
  const [valueCel, setValueCel] = useState("");
  const [valueCep, setValueCep] = useState("");
  // const [values, setValues] = useState(initialValue);

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

  // const handleSave = (evt) => {
  //   const { name, value } = evt.target;
  //    console.log({name, value})
  //   setValues({ ...values, [name]: value });
  // };

  // console.log(values)

  // const onSubmit=(evt) => {
  //   evt.preventDefault();
    
  // }

  return (
    <div>
      <St.Title>Cadastro de Condomínio</St.Title>

      <St.Form>
        <>
          <div>
            <St.Label htmlFor="cpf">CPF/CNPJ:</St.Label>
            <St.Input
              autoFocus
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
          <St.Input
            type="text"
            name="name"
            placeholder="Nome..."
          />
        </div>

        <div>
          <St.Label htmlFor="cel">Celular:</St.Label>
          <St.Input
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
            type="text"
            name="email"
            placeholder="Email..."
          />
        </div>

        <div>
          <button type="submit" >Salvar</button>
        </div>
      </St.Form>
    </div>
  );
};

export default Form;
