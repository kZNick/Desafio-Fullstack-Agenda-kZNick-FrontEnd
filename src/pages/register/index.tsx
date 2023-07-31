import { RegisterPage } from "../../styles/register"
import { RegisterForm } from "./registerForm"
import Innovation from "../../assets/Innovation.gif"

export const Register = ()=>{

    return(
        <RegisterPage>
           <RegisterForm/>
           <img src={Innovation} alt=""  className="ImgRegister"/>
        </RegisterPage>
    )
}