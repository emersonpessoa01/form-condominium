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
      .required("Nome é obrigatório."),
    email: yup
      .string()
      .email("Digite email válido.")
      .required("Email é obrigatório."),
    cpf: yup
      .string()
      .min(11, "Digite 11 ou 14 números.")
      .required("Cpf é obrigatório."),
    cel: yup
      .string()
      .min(11, "Digite 11 números.")
      .required("Cpf é obrigatório."),
    cep: yup
      .string()
      .min(8, "Digite 8 números.")
      .required("Cpf é obrigatório."),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
    alert(JSON.stringify(user))
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Title>Cadastro de Condomínio</Title>
      <Label>
        <Content>Nome</Content>
        <Input
          autoFocus
          type="text"
          name="nanme"
          placeholder="Nome completo"
          ref={register}
        />
        <ValidationStyled>{errors.name?.message}</ValidationStyled> <br />
      </Label>

      <Label>
        <Content>Email</Content>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          ref={register}
        />
        <ValidationStyled>{errors.email?.message}</ValidationStyled> <br />
      </Label>

      <Label>
        <Content>Cpf/Cnpj</Content>
        <Input
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
        <Content>Celular</Content>
        <Input
          type="text"
          name="cel"
          placeholder="Celular"
          value={valueCel}
          onChange={handleOnChangeCel}
          ref={register}
        />
        <ValidationStyled>{errors.cel?.message}</ValidationStyled> <br />
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
        <ValidationStyled>{errors.cep?.message}</ValidationStyled> <br />
      </Label>

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormNew;
