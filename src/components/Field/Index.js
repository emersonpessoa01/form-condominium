import React from "react";
import Content from "./Content/Index";
import Input from "./Input/Index";
import Label from "./Label/Index";

const Text = ({ label, type, name, register }) => {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type={type} name={name} ref={register} />
    </Label>
  );
};

const Field = {
  Text,
};

export default Field;
