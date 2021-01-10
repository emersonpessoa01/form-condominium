import * as yup from "yup";

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

export default schema;
