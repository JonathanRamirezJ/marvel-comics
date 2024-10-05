import { LoaderStyled, SpanTitle } from "./Loader.styled";

import MarvelImage from "../../assets/marvel_intro.gif";

const Loader = () => {
  return(
    <LoaderStyled>
      <img src={MarvelImage} alt="image_loader" />
      <SpanTitle>Loading...</SpanTitle>
    </LoaderStyled>
  )
};

export default Loader;