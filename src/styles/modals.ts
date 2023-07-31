import styled from "styled-components";

export const ModalEditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 999;
  .deleteContact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    max-width: 80%;

    padding: 20px;
    h2 {
      color: #084972;
    }
    background-color: #ffffff;
    border-radius: 15px;
    gap: 10px;
    div {
      display: flex;
      gap: 5px;
      width: 100%;
      button {
        width: 100%;
        height: 50px;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        color: #ffffff;
        border: none;
        background-color: #00aeff;
        border-radius: 8px;
        cursor: pointer;
      }
      .buttonYes{
        background-color: transparent;
        color: red;
        border: 2px solid red;
        transition: 1s;
      }
      .buttonYes:hover{
        background-color: red;
        color: white;
      }
    }
  }
`;
