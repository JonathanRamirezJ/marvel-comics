import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

// Own redux
import { GetListComicsSelector } from "../Redux/GetListComics/GetListComics.slice";
import { GetComicIdSelector } from "../Redux/GetComicId/GetComicId.slice";

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
import Jumbotron from "../components/Jumbotron";
import Modal from "../components/Modal";

// Own styles
import { ContentPreview, Footer } from "./App.styled";
import { Button } from "../components/Jumbotron/Jumbotron.styled";

const App = () => {
  const { getListComicsAll, getComicId } = useComics();
  const ComicsSelector = useSelector(GetListComicsSelector);
  const ComicIDSelector = useSelector(GetComicIdSelector);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFeching, setIsFeching] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const ComicsData = useMemo(() => ComicsSelector?.data, [ComicsSelector]);
  const ComicData = useMemo(
    () => ComicIDSelector?.data || [],
    [ComicIDSelector]
  );

  const ComicListError = useMemo(
    () => ComicsSelector?.error || null,
    [ComicsSelector]
  );

  const ComicIdError = useMemo(
    () => ComicIDSelector?.error || null,
    [ComicIDSelector]
  );

  const LoadMoreComics = () => {
    getListComicsAll(setIsFeching, page + 1);
    setPage(page + 1);
  };

  const handleShowInfo = (comicId: number) => {
    getComicId(setIsFeching, comicId);
    setOpenModal(true);
  };

  const FormatImage = (path:string, extension:string) => {
    if(path === ImageNotAvailable) {
      return `${ImageDefault}.${extension}`;
    }

    return `${path}.${extension}`;
  };

  useEffect(() => {
    getListComicsAll(setIsLoading, page);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Jumbotron />
            <Container>
              <Row>
                {ComicsData?.map((comic: ComicsData, index) => {
                  return (
                    <Column
                      span={2}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      xl={2}
                      key={comic.id + index}
                      justifyContent={JustifyContent.center}
                    >
                      <Row as={ContentPreview}>
                        <Column
                          span={12}
                          xs={6}
                          md={4}
                          lg={12}
                          xl={12}
                          onClick={() => handleShowInfo(comic.id)}
                        >
                          <img
                            src={FormatImage(comic.thumbnail.path, comic.thumbnail.extension)}
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
              {(ComicListError !== null || ComicIdError !== null) ? (
                <h2 className="text-center my-9">
                  Sorry unexpected error has occurred
                </h2>
              ) : (
                <Row>
                  <Column span={12} justifyContent={JustifyContent.center} my={2}>
                    <Button
                      onClick={LoadMoreComics}
                      disabledButton={isFeching}
                      disabled={isFeching}
                    >
                      {isFeching ? "Loading..." : "Show more"}
                    </Button>
                  </Column>
                </Row>
              )}
            </Container>
          </>
        )}
      </>

      {openModal && !isFeching && (
        <Modal
          show={openModal}
          title={ComicData[0]?.title}
          description={ComicData[0]?.description}
          errors={ComicIdError !== null ? true: false}
          path={FormatImage(ComicData[0]?.thumbnail.path, ComicData[0]?.thumbnail.extension)}
          closeEvent={() => setOpenModal(false)}
        />
      )}

      <Footer>
        <p className="text-center">
          <a href="https://marvel.com" target="_blank">
            Data provided by Marvel. © 2024 Marvel
          </a>
        </p>
      </Footer>
    </ThemeProvider>
  );
};

export default App;
