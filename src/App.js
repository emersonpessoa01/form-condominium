import React, { useState } from "react";
import * as St from "./components/Styles";
import { mask, unMask } from "remask";
import Form from "./components/Form"

export default function App() {
  const [value, setValue] = useState("");

  const onChange = (evt) => {
    // setValue(evt.target.value)
    const originalValue = unMask(evt.target.value);
    const maskedValue = mask(originalValue, [
      "999.999.999-99",
      "99.999.999/9999-99",
    ]); 
    setValue(maskedValue);
  };

  return (
    <St.Layout>
      <Form />
      <St.Input
        autoFocus
        type="text"
        name="doc"
        placeholder="Digite CPF ou CNPJ"
        value={value}
        onChange={onChange}
      />
      <div>valor:{value}</div>
    </St.Layout>
  );
}
