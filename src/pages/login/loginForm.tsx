import { useContext } from "react";
import { FormLogin } from "../../styles/forms";
import * as yup from "yup";
import { WavyLink } from "react-wavy-transitions";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormData } from "../../@types/types";
import { useForm } from "react-hook-form";
import Pulse from "../../assets/Pulse.gif"

export const LoginForm = () => {
  const { handleSubmitLogin, loading } = useContext(RegisterLoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigadorio").email("Email inválido"),
    password: yup.string().required("Senha obrigadoria"),
  });

  const { register, handleSubmit } = useForm<UserFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormLogin onSubmit={handleSubmit(handleSubmitLogin)}>
      <h2>Login</h2>
      <div className="Inpults">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required={true}  {...register("email")}/>
      </div>
      <div className="Inpults">
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" required={true} {...register("password")} />
      </div>
      <WavyLink
        className="register"
        to="/Register"
        direction="up"
        duration={1000}
        color="#001220"
      >
        Cadastrar
      </WavyLink>
      <button className="buttonLogin" type="submit" disabled={loading? true: false}>
        {loading? <img src={Pulse}/> : "Entar"}
      </button>
    </FormLogin>
  );
};
