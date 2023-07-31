import loginImg from "../../assets/loginImg.png";
import { LoginPage } from "../../styles/login";
import { LoginForm } from "./loginForm";

export const Login = () => {
  return (
    <LoginPage>
      <section className="LeftSection">
        <LoginForm/>
      </section>
      <section className="RightSection">
        <div className="imgPage">
          <img src={loginImg} alt="" />
        </div>
        <div className="whiteBackground" />
      </section>
    </LoginPage>
  );
};
