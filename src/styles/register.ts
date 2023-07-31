import styled from "styled-components";
import backgraoundImg from "../assets/blob-scene-haikei.svg";
import { slideIn } from "./transitions";

export const RegisterPage = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #dbefff;
  background-image: url(${backgraoundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${slideIn};
  .ImgRegister {
    width: 30%;
    position: absolute;
    bottom: 2%;
    right: 10%;
  }
  @media (max-width: 1000px) {
    .ImgRegister {
      width: 40%;
    }
  }
  @media (max-width: 850px) {
    .ImgRegister {
      width: 50%;
      right: 0;
    }
  }
  @media (max-width: 550px) {
    .ImgRegister {
      width: 80%;
      right: 0;
    }
  }
`;
