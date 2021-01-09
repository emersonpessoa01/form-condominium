import React from 'react';

const initialValue = {
  cpf:"",
  name:"",
  cel:"",
  cep:"",
  email:"",

}

export default function Submit() {
  const [values, setValues] = useState(initialValue);

  const handleChangeSubmit = (evt)=>{
    const {name, value} = evt.target;

  }

  return (
    <div>
      
    </div>
  )
}
