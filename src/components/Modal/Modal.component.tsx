// Own models
import { useEffect } from "react";
import { JustifyContent } from "../../models/Column";
import { ModalProps } from "../../models/ModalProps";

// Own components
import { Column, Container, Row } from "../Grid";

// Own styles
import {
  ModalCloseButon,
  ModalContainer,
  ModalContent,
  ModalImage,
  ModalText,
  ModalTitle,
} from "./Modal.styled";

const Modal = (props: ModalProps) => {
  const { show, title, description, path, closeEvent } = props;

  const handelClose = () => {
    document.body.classList.remove("modal");
    closeEvent();
  };

  useEffect(() => {
    if (show) {
      document.body.classList.add("modal");
    } else {
      document.body.classList.remove("modal");
    }
  }, [show]);

  return (
    <ModalContainer>
      <ModalContent>
        <ModalCloseButon onClick={handelClose}>X</ModalCloseButon>
        <Container>
          <Row>
            <Column span={12}>
              <ModalTitle>{title}</ModalTitle>
            </Column>
          </Row>
          <Row>
            <Column
              span={4}
              xs={12}
              sm={12}
              md={12}
              lg={4}
              xl={4}
              justifyContent={JustifyContent.center}
            >
              <ModalImage>
                <img src={path} alt="image-modal" />
              </ModalImage>
            </Column>
            <Column span={8} xs={12} sm={12} md={12} lg={8} xl={8}>
              <ModalText>
                {description?.length
                  ? description
                  : "This comic don't have description."}
              </ModalText>
            </Column>
          </Row>
        </Container>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
