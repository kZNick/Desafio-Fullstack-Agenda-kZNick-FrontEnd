// src/transitions.js
import { keyframes, css } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const slideIn = css`
  animation: ${slideInAnimation} 5s ease-in-out;
`;

export const slideOut = css`
  animation: ${slideOutAnimation} 5s ease-in-out;
`;
