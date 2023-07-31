import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&family=Ysabeau+Office:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
  body {
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    font-family: 'Ysabeau Office', sans-serif;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: #73ccf2 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #73ccf2;
    border-radius: 10px;
    border: 5px none #ffffff;
  }
`;
export default GlobalStyle;
