import React from "react";
import NotFoundGif from "../assets/Oops-404.gif";
import { NotFoundDiv } from "../styles/notfound";

export const NotFound = () => {
  return (
    <NotFoundDiv>
      <img src={NotFoundGif} alt="" />
      
    </NotFoundDiv>
  );
};
