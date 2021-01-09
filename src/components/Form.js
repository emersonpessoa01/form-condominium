import React, { useState } from "react";
import * as St from "./Styles";
import { mask, unMask } from "remask";
import {useForm} from "react-hook-form"


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

  const {register, handleSubmit} = useForm()

  const newUser = (user)=>{

  } 
  

  return (
    <div>
      <St.Title>Cadastro de Condomínio</St.Title>

      <St.Form onSubmit={handleSubmit(newUser)}>
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
              ref={register}
            />
          </div>
        </>

        <div>
          <St.Label htmlFor="name">Nome:</St.Label>
          <St.Input
            type="text"
            name="name"
            placeholder="Nome completo"
            ref={register}

          />
        </div>

        <div>
          <St.Label htmlFor="cel">Celular:</St.Label>
          <St.Input
            type="text"
            name="cel"
            placeholder="Celular"
            value={valueCel}
            onChange={handleOnChangeCel}
            ref={register}

          />
        </div>

        <div>
          <St.Label htmlFor="cep">Cep:</St.Label>
          <St.Input
            type="text"
            name="cep"
            placeholder="Cep"
            value={valueCep}
            onChange={handleOnChangeCep}
            ref={register}

          />
        </div>

        <div>
          <St.Label htmlFor="email">Email:</St.Label>
          <St.Input
            type="text"
            name="email"
            placeholder="Email"
            ref={register}

          />
        </div>

        <div>
          <St.Button type="submit" >Enviar</St.Button>
        </div>
      </St.Form>
    </div>
  );
};

export default Form;
