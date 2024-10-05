import { useEffect, useMemo, useState } from "react";
import { useComics } from "../hooks/useComics";
import { ThemeProvider } from "styled-components";
import { theme } from "../contexts/theme/theme";
import Loader from "../components/Loader";
import { ContentPreview, Footer, MainContent } from "./App.styled";
import { useSelector } from "react-redux";
import { GetListComicsSelector } from "../Redux/GetListComics/GetListComics.slice";
import { ComicsData } from "../models/Comics";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MarvelIcon from "../assets/Marvel.svg";
import { ImageDefault, ImageNotAvailable } from "../constants/imageDefault";
import { Column, Container, Row } from "../components/Grid";
import { JustifyContent } from "../models/Column";
import { Carousel } from "react-responsive-carousel";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const ComicsSelector = useSelector(GetListComicsSelector);
  const { getListComicsAll } = useComics();
  
  const ComicsData = useMemo(
    () => ComicsSelector?.data?.results,
    [ComicsSelector] 
  );

  useEffect(() => {
    getListComicsAll(setIsLoading);
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        { isLoading  ?(
          <Loader/>
        ): (
          <>
            <Row as={MainContent}>
              <Column span={12} justifyContent={JustifyContent.center}>
                <img src={MarvelIcon} alt="Marvel_icon"/>
              </Column>
              <Column span={12} justifyContent={JustifyContent.center} my={4}>
                <Carousel showThumbs={false}>
                  {ComicsData?.map((comic:ComicsData) => {
                    return(
                      <Column span={4} xs={12} md={6} lg={4} xl={4} key={comic.id} justifyContent={JustifyContent.center}>
                        <ContentPreview>
                          <img src={`${comic.thumbnail.path === ImageNotAvailable ? ImageDefault : comic.thumbnail.path }.${comic.thumbnail.extension}`} width="200px" height="100px"/>
                          <p className="legend">{comic.title}</p>
                        </ContentPreview>
                      </Column>
                    )
                  })}
                </Carousel>
              </Column>
            </Row>
            <Row as={MainContent}>
              {ComicsData?.map((comic:ComicsData) => {
                return(
                  <Column span={4} xs={12} md={6} lg={4} xl={4} key={comic.id} justifyContent={JustifyContent.center}>
                    <ContentPreview>
                      <img src={`${comic.thumbnail.path === ImageNotAvailable ? ImageDefault : comic.thumbnail.path }.${comic.thumbnail.extension}`} width="200px" height="100px"/>
                      <p className="legend">{comic.title}</p>
                    </ContentPreview>
                  </Column>
                )
              })}
            </Row>
          </>
        )}
      </Container>

      <Footer>
        <p className="text-center">
          <a href="http://marvel.com" target="_blank">
            Data provided by Marvel. © 2024 Marvel
          </a>
        </p>
      </Footer>
    </ThemeProvider>
  )
}

export default App;