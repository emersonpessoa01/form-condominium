import React from "react";

import Main from "./components/Main/Main";
import Form from "./components/Form/Index";
import Field from "./components/Field/Index";

const App=()=>{
  return (
    <Main>
      <Form>
        <Field.Text label="Email" name="email" type="email" />
      </Form>
    </Main>
  );
}

export default App;