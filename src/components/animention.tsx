import { AnimentionStyled, LoadingAnimetions } from "../styles/animetion";
import ball from "../assets/Ball.gif"

export const AnimetionBackgraud = () => {
  return (
    <AnimentionStyled>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </AnimentionStyled>
  );
};

export const Loading = () =>{
  return(
    <LoadingAnimetions>
      <img src={ball} alt="" />
      <h1>Loading...</h1>
    </LoadingAnimetions>
  )
}