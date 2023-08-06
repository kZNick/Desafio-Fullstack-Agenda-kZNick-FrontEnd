import { ReactNode, createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { apiContacts } from "../services/api";
import { toast } from "react-toastify";
import { RegisterFormData, RegisterLoginContextData, UserFormData } from "../@types/types";
import { SubmitHandler } from "react-hook-form/dist/types";

export const RegisterLoginContext = createContext<RegisterLoginContextData>({} as RegisterLoginContextData);

export const RegisterLoginProvider = () => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("ContactsTokenUser");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    if(token){
      navigate("/");
    }
  },[])

  const handleSubmitLogin: SubmitHandler<UserFormData> = async (data) => {
    setLoading(true);
    try {
      const response = await apiContacts.post("/login", data);
      toast.success("Login feito com Sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("ContactsTokenUser", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email invalido ou senha invalida", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRegister: SubmitHandler<RegisterFormData> = async (
    datas
  ) => {
    try {
      setLoading(true);
      const response = await apiContacts.post("/users", datas);
      toast.success("😁 Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const login = {
        email: datas.email,
        password: datas.password,
      };
      handleSubmitLogin(login);
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      const erroPhone = "telefone already exists";
      const erroEmail = "Email already exists";

      if (errorMessage === erroPhone) {
        toast.error("Telefone já esta Cadastrado", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }

      if(errorMessage  !== erroEmail && errorMessage  !== erroPhone){
        toast.error("😅Ops! Algo deu errado", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterLoginContext.Provider
      value={{ handleSubmitLogin, handleSubmitRegister, loading }}
    >
      <Outlet />
    </RegisterLoginContext.Provider>
  );
};
