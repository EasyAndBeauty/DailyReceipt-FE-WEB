import { useLocation } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { ReceiptPaper } from "components";
import { ReactComponent as SaveIcon } from "assets/receiptPage/save_icon.svg";
import { ReactComponent as ShareIcon } from "assets/receiptPage/share_icon.svg";
import { ReactComponent as BackIcon } from "assets/receiptPage/back_icon.svg";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function ReceiptPage() {
  const receiptRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    console.log(receiptRef);
    const ratio = window.innerHeight / 1700;
    console.log(0, ratio);
    const receiptSectionHeight = window.innerHeight * ratio;
    const receiptHeight = receiptRef.current.offsetHeight;
    if (receiptHeight > receiptSectionHeight) {
      console.log(1, receiptRef.current.offsetHeight);
      console.log(2, receiptSectionHeight);
      console.log(3, receiptSectionHeight / receiptHeight);

      setScale(receiptSectionHeight / receiptHeight - 0.01);
    }
  }, []);

  return (
    <Container>
      <Texture
        src="https://img.freepik.com/free-vector/crumpled-paper-texture_1048-2259.jpg?w=1480&t=st=1661600618~exp=1661601218~hmac=b19bc6461fe0adb3315567718519d901453733476abbf08b177d4f43384b4f07"
        alt="paper texture"
      />
      <BackIconContainer>
        <BackIcon />
      </BackIconContainer>
      <ReceiptContainer ref={receiptRef} scale={scale}>
        <ReceiptPaper />
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
  background-color: #1a1a1a;
`;

const BackIconContainer = styled.div`
  width: 36px;
  margin-top: 24px;
  margin-left: 8px;
  padding: 8px;
  opacity: 50%;
  cursor: pointer;
`;

const ReceiptContainer = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    transform: scale(${(props) => props.scale});
  }

  //background-color: aqua;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    margin: 4px 24px;
    cursor: pointer;
  }

  svg {
    padding: 4px;
    opacity: 40%;
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
