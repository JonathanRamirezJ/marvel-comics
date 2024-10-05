import { Carousel } from "react-responsive-carousel";

// Own styles
import {
  Button,
  JumbotronContainer,
  JumbotronOverlay,
  LogoContent,
  TextContent,
} from "./Jumbotron.styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Own assets
import MarvelIcon from "../../assets/Marvel.svg";

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      <JumbotronOverlay />
      <LogoContent>
        <img src={MarvelIcon} alt="Marvel_icon" />
      </LogoContent>
      <TextContent>
        <p>Marvel Comics</p>
        <Button
          onClick={() => {
            window.scrollTo({
              top: 700,
              behavior: "smooth",
            });
          }}
        >
          Show list comics
        </Button>
      </TextContent>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        interval={3000}
        autoPlay
      >
        <div>
          <img
            src="https://cdn.marvel.com/content/2x/storm_magneto_mh.jpg"
            height="300px"
          />
        </div>
        <div>
          <img
            src="https://cdn.marvel.com/content/2x/immortal-thor-desktop.jpg"
            height="300px"
          />
        </div>
        <div>
          <img
            src="https://cdn.marvel.com/content/2x/genis-vell_mh.jpg"
            height="300px"
          />
        </div>
        <div>
          <img
            src="https://cdn.marvel.com/content/2x/anti-venom_mh.jpg"
            height="300px"
          />
        </div>
      </Carousel>
    </JumbotronContainer>
  );
};

export default Jumbotron;
