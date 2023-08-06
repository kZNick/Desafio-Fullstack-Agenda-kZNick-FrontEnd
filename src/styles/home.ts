import { styled } from "styled-components";
import backgraoundImg from "../assets/teste.svg";

export const HopmePage = styled.main`
  font-family: "Ysabeau Office", sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: transparent;
  flex-direction: column;
  gap: 5px;
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  header {
    width: 100%;
    height: 250px;
    min-height: 250px;
    background-image: url(${backgraoundImg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
  }
  h1 {
    color: #064967;
    font-size: 2rem;
  }
  .buttonExit {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    color: #084972;
    transition: 0.5s;
  }
  .editProfile {
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    color: #084972;
    transition: 0.5s;
  }
  .buttonExit:hover {
    color: #9ed6ef;
  }
  .editProfile:hover {
    color: #9ed6ef;
  }
  .avatarDiv {
    transform: translateY(-50px);
  }
  @media (max-width: 850px) {
    header {
      height: 100px;
      min-height: 100px;
    }
    h1 {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
