import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";
import styled from "styled-components";

export function ReceiptPaper() {
  return (
    <>
      <Container>
        <Texture
          src="https://img.freepik.com/free-vector/crumpled-paper-texture_1048-2259.jpg?w=1480&t=st=1661600618~exp=1661601218~hmac=b19bc6461fe0adb3315567718519d901453733476abbf08b177d4f43384b4f07"
          alt="paper texture"
        />
        <TrianglePosition y="6px">
          <ReceiptPaperTriangle />
        </TrianglePosition>
        <ReceiptPaperContents />
        <TrianglePosition y="-7px">
          <ReceiptPaperTriangle />
        </TrianglePosition>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Texture = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 70%;
  mix-blend-mode: multiply;
  z-index: 10;
`;

const TrianglePosition = styled.div`
  transform: translateY(${(props) => props.y});
`;
