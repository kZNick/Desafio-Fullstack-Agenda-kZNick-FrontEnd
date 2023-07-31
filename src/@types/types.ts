import { SubmitHandler } from "react-hook-form";

export interface RegisterFormData {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
  telefone: string;
}

export interface UpdateFormData {
  email: string;
  fullName: string;
  telefone: string;
}

export interface UserFormData {
  email: string;
  password: string;
}

export interface RegisterLoginContextData {
  handleSubmitLogin: SubmitHandler<UserFormData>;
  handleSubmitRegister: SubmitHandler<RegisterFormData>;
  loading: boolean;
}
 export interface HomeContextData {
    
 }

 export interface editProfileType  {
  email: string;
  name: string;
  username: string;
  perfil: string| any;
  birthdate: string;
}