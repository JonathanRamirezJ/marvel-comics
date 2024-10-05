import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

// Own redux
import { GetListComicsSelector } from "../Redux/GetListComics/GetListComics.slice";

// Own hooks
import { useComics } from "../hooks/useComics";

// Own contexts
import { theme } from "../contexts/theme/theme";

// Own models
import { ComicsData } from "../models/Comics";
import { JustifyContent } from "../models/Column";

// Own constants
import { ImageDefault, ImageNotAvailable } from "../constants/imageDefault";

// Own components
import Loader from "../components/Loader";
import { Column, Container, Row } from "../components/Grid";

// Own styles
import { ContentPreview, Footer } from "./App.styled";

// Own assets
import Jumbotron from "../components/Jumbotron";

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
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Jumbotron/>
            <Container>
              <Row>
                {ComicsData?.map((comic: ComicsData) => {
                  return (
                    <Column
                      span={2}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      xl={2}
                      key={comic.id}
                      justifyContent={JustifyContent.center}
                    >
                      <Row as={ContentPreview}>
                        <Column span={12} xs={6} md={4} lg={12} xl={12}>
                          <img
                            src={`${
                              comic.thumbnail.path === ImageNotAvailable
                                ? ImageDefault
                                : comic.thumbnail.path
                            }.${comic.thumbnail.extension}`}
                            width="200px"
                            height="100px"
                          />
                        </Column>
                        <Column span={12} xs={6} md={4} lg={12} xl={12}>
                          <p className="legend text-center">{comic.title}</p>
                        </Column>
                      </Row>
                    </Column>
                  );
                })}
              </Row>
            </Container>
          </>
        )}
      </>

      <Footer>
        <p className="text-center">
          <a href="http://marvel.com" target="_blank">
            Data provided by Marvel. © 2024 Marvel
          </a>
        </p>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
