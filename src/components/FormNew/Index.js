import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

import Form from "../Form/Index";
import Field from "../Field/Index";
import Button from "../Button/Index";
import schema from "./Validation"

const FormNew = () => {
  //sai schema daqui indo para Validation.js

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" name="name" type="text" register={register} />
      {/* {errors.name.message && errors.name.message} */}
      {/* {errors.name?.type} */}
      <p>{errors.name?.message}</p> <br />
      <Field.Text label="Email" name="email" type="email" register={register} />
      <p>{errors.email?.message}</p> <br />
      <Button>Enviar</Button>
    </Form>
  );
};

export default FormNew;
