import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5%;
  width: 50%;
  max-width: 70%;
  height: 480px;
  max-height: 100%;
  border-radius: 30px;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: 20%;
  left: 15%;
  padding: 25px;
  pointer-events: auto;
  h2 {
    background: #069bdd;
    background: linear-gradient(to top left, #069bdd 61%, #064967 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3em;
    color: white;
    margin-left: 35%;
  }
  .Inpults {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    input {
      background-color: transparent;
      height: 35px;
      border-radius: 10px;
      border: 2px solid #064967;
      font-size: 1rem;
      padding-left: 5px;
    }
    label {
      font-size: 1.5rem;
      color: #064967;
      margin-left: 5px;
    }
  }
  button {
    margin-top: 15px;
    height: 35px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid #064967;
    color: #064967;
    cursor: pointer;
    display: flex;
    padding-left: 38%;
    align-items: center;
    transition: 0.8s;
  }
  .register {
    text-decoration: none;
    margin-top: 15px;
    height: 35px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid #064967;
    color: #064967;
    cursor: pointer;
    display: flex;
    padding-left: 38%;
    align-items: center;
    transition: 0.8s;
  }
  .register:hover {
    background-color: white;
  }
  .buttonLogin {
    padding-left: 41%;
    background-color: #069bdd;
    border: none;
    color: white;
  }
  .buttonLogin:hover {
    background-color: #064967;
  }
  @media (max-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    max-width: 90%;
    h2 {
      margin-left: 0;
    }
    .buttonLogin {
      padding-left: 0;
      align-items: center;
      justify-content: center;
    }
    .register {
      padding-left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  width: 600px;
  max-width: 80%;
  max-height: 80%;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  border-radius: 10px;
  padding: 25px;
  z-index: 2;
  gap: 10px;
  .HeaderForm {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 700;
      background: #069bdd;
      background: linear-gradient(to top left, #069bdd 61%, #064967 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2.5rem;
      color: white;
    }
    .react-wavy-transitions__wavy-link {
      color: #828282;
      font-weight: 500;
      font-size: 1rem;
      text-decoration: none;
      transition: 0.5s;
    }
    .react-wavy-transitions__wavy-link:hover {
      color: white;
    }
  }
  .Inpults {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    input {
      background-color: transparent;
      height: 40px;
      border-radius: 10px;
      border: 2px solid #064967;
      font-size: 1rem;
      padding-left: 10px;
      color: white;
    }
    label {
      font-size: 1rem;
      color: #95e0f1;
      margin-left: 5px;
      position: absolute;
      top: -10px;
      left: 10px;
      background-color: #0d1e2b;
      padding: 0px 5px;
    }
    .error {
      position: absolute;
      color: #e60000;
      font-weight: 400;
      font-size: 0.75rem;
      left: 15px;
      bottom: -15px;
    }
    .inputError {
      border: 2px solid #e60000;
    }
  }
  .buttonRegister {
    margin-top: 15px;
    height: 35px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #069bdd;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.8s;
  }
  @media (max-width: 850px) {
    .HeaderForm {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export const FormUpdat = styled.form`
  display: flex;
  width: 390px;
  max-height: 100%;
  max-width: 95%;
  margin: 0 auto;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-family: "Khula", sans-serif;
  position: relative;
  h2 {
    margin-top: 20px;
    color: #084972;
  }
  .closeModal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .Inpults {
    display: flex;
    align-items: center;
    width: 90%;
    height: 70px;
    margin: 0 auto;
    position: relative;
    .error {
      position: absolute;
      color: #e60000;
      font-weight: 400;
      font-size: 0.75rem;
      left: 15px;
      bottom: -15px;
    }
    label {
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding: 20px;
      top: -6px;
      font-size: 0.875rem;
    }

    :valid ~ label,
    :focus ~ label {
      top: -6px;
      font-size: 0.875rem;
      background-color: #ffffff;
      padding: 3px;
      left: 15px;
    }
    input {
      width: 100%;
      height: 60px;
      border: 2px solid #9ed6ef;
      border-radius: 8px;
      font-weight: 400;
      font-size: 1rem;
      padding-left: 20px;
      background-color: #ffffff;
    }
    .inputError {
      border: 2px solid #e60000;
    }
  }
  button{
    width: 90%;
    height: 50px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: #00aeff;
    border: none;
    background-color: transparent;
    border: 2px solid #00aeff;
    border-radius: 8px;
    cursor: pointer;
  }
  .buttonLogin {
    width: 90%;
    height: 50px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    border: none;
    background-color: #00aeff;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 50px;
  }

  @media (min-width: 850px) {
    width: 800px;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
