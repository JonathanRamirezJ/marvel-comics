import { LoaderStyled } from "./Loader.styled";

import MarvelImage from "../../assets/marvel_intro.gif";

const Loader = () => {
  return(
    <LoaderStyled>
      <img src={MarvelImage} alt="image_loader" />
    </LoaderStyled>
  )
};

export default Loader;