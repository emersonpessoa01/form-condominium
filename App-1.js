import React, { useState } from "react";
import { mask, unMask } from "remask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../Form/Index";
import Button from "../Button/Index";
import Title from "../Title/Index";
import ValidationStyled from "./ValidationStyled";
import Label from "../Field/Label/Index";
import Input from "../Field/Input/Index";
import Content from "../Field/Content/Index";


const FormNew = () => {
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

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Digite no mínimo 2 caracteres.")
      .required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Digite email válido")
      .required("Email é obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Title>Cadastro de Condomínio</Title>
      <Label>
      <Content>Cpf</Content>

        <Input
          autoFocus
          type="text"
          name="cpf"
          placeholder="Digite CPF ou CNPJ"
          value={valueCpf}
          onChange={handleOnChangeCpf}
          ref={register}
        />
        <ValidationStyled>{errors.cpf?.message}</ValidationStyled> <br />
      </Label>

      <Label>
        <Content>Nome</Content>
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          ref={register}
        />
      </Label>
      <ValidationStyled>{errors.name?.message}</ValidationStyled> <br />


      <Label>
        <Content>Celular</Content>
        <Input
          type="text"
          name="cel"
          placeholder="Celular"
          value={valueCel}
          onChange={handleOnChangeCel}
          ref={register}
        />
      </Label>

      <Label>
        <Content>Cep</Content>
        <Input
          type="text"
          name="cep"
          placeholder="Cep"
          value={valueCep}
          onChange={handleOnChangeCep}
          ref={register}
        />
      </Label>

      <Label>
        <Content>Email</Content>
        <Input type="text" name="email" placeholder="Email" ref={register} />
      </Label>
      <ValidationStyled>{errors.email?.message}</ValidationStyled>


      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormNew;
