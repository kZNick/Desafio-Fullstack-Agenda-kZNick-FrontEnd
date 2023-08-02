import styled from "styled-components";

export const ContactsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: relative;
  .addContacts{
    position: absolute;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
    color: #064967;
    transition: 1s;
  }
  .addContacts:hover{
    color: black;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;
    width: 100%;
    margin-bottom: 80px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(3.5px);
      -webkit-backdrop-filter: blur(3.5px);
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      cursor: pointer;
      position: relative;
      transition: 0.5s;
      .moreInf {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 5px;
        span {
          font-size: 1rem;
          font-weight: 700;
        }
      }
      .editContacts {
        position: absolute;
        right: 25px;
        bottom: 20px;
        font-size: 1.8rem;
      }
      div {
        width: 100%;
        .headerContact{
          display: flex;
          align-items: center;
          gap: 15px;
        }
      }
    }
  }
  .notContacts{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: #084972;
    img{
      width: 30%;
      z-index: -2;
    }
  }
  @media (max-width: 850px){
    width: 90%;
  }
`;
