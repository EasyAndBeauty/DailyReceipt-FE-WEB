import { useLocation } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { ReceiptPaper } from "components";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SaveIcon } from "assets/receiptPage/save_icon.svg";
import { ReactComponent as ShareIcon } from "assets/receiptPage/share_icon.svg";
import { ReactComponent as BackIcon } from "assets/receiptPage/back_icon.svg";
import { useEffect, useRef, useState } from "react";

export function ReceiptPage() {
  const receiptRef = useRef();
  console.log(receiptRef);
  console.log(window.innerHeight);
  const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   if (receiptRef.current.offsetHeight > window.innerHeight * 0.7) {
  //     setScale();
  //   }
  // }, []);

  return (
    <Container>
      <Texture
        src="https://img.freepik.com/free-vector/crumpled-paper-texture_1048-2259.jpg?w=1480&t=st=1661600618~exp=1661601218~hmac=b19bc6461fe0adb3315567718519d901453733476abbf08b177d4f43384b4f07"
        alt="paper texture"
      />
      <BackIconContainer>
        <BackIcon />
      </BackIconContainer>
      <ReceiptContainer scale={1}>
        <ReceiptPaper ref={receiptRef} />
      </ReceiptContainer>
      <IconContainer>
        <div>
          <ShareIcon />
          <span>SHARE</span>
        </div>
        <div>
          <SaveIcon />
          <span>SAVE</span>
        </div>
      </IconContainer>
    </Container>
  );

  // html2canvas()
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //background-color: #5c5c5c;
  background-color: #383838;
`;

const BackIconContainer = styled.div`
  width: 36px;
  margin-top: 24px;
  margin-left: 8px;
  padding: 8px;
  background-color: aqua;
  cursor: pointer;
`;

const ReceiptContainer = styled.div`
  width: 100%;
  height: 72%;

  transform: scale(${(props) => props.scale});
  background-color: aqua;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 24px;
  background-color: red;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4a2e0d;
    padding: 4px;
    margin: 4px 24px;
    cursor: pointer;
  }

  svg {
    opacity: 80%;
  }

  span {
    font-family: "Courier Prime", monospace;
    font-size: 16px;
    color: #fcfcfc;
  }
`;

const Texture = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 80%;
  mix-blend-mode: multiply;
  z-index: 10;
`;
