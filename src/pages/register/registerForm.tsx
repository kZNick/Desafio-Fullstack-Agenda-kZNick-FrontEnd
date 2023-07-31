import { FormRegister } from "../../styles/forms";
import { WavyLink } from "react-wavy-transitions";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../@types/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { RegisterLoginContext } from "../../contexts/contexRegisterLogin";

export const RegisterForm = () => {

  const { handleSubmitRegister, loading } = useContext(RegisterLoginContext);
  const handlePhoneInput = (event: any) => {
    const phoneValue = event.target.value;

    const onlyNumbers = phoneValue.replace(/\D/g, "");

    const formattedPhone = onlyNumbers.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );

    event.target.value = formattedPhone;
  };

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Senha Obrigatório"),
    telefone: yup
      .string()
      .required("Telefone Obrigatório")
      .matches(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Telefone inválido. Use o formato (XX) XXXXX-XXXX"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormRegister onSubmit={handleSubmit(handleSubmitRegister)}>
      <div className="HeaderForm">
        <h2>Cadastro</h2>
        <WavyLink
          color="#00e4fc"
          to="/Login"
          duration={1000}
          className="comeBack"
        >
          Retornar para o login
        </WavyLink>
      </div>
      <div className="Inpults">
        <label htmlFor="fullName">Nome completo</label>
        <input type="text" id="fullName" {...register("fullName")} className={errors.fullName && "inputError"} />
        <span className="error">{errors.fullName?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} className={errors.email && "inputError"} />
        <span className="error">{errors.email?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" onInput={handlePhoneInput} {...register("telefone")} className={errors.telefone && "inputError"} />
        <span className="error">{errors.telefone?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} className={errors.password && "inputError"} />
        <span className="error">{errors.password?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword")} className={errors.confirmPassword && "inputError"} />
        <span className="error">{errors.confirmPassword?.message}</span>
      </div>

      <button type="submit" className="buttonRegister">
        Criar Conta
      </button>
    </FormRegister>
  );
};
