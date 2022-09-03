import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";

import styled from "styled-components";

export function ReceiptPaper({ todos, onClick = null }) {
  return (
    <Container id={"receipt"} onClick={onClick}>
      {/* <Texture src={parperTexture} alt="paper texture" />  ReceiptPapercontents의 배경의로 바꾸었습니다. 그리고 img는 정적 이미지로 대체 했습니다*/}
      <div>
        <TrianglePosition y="6px">
          <ReceiptPaperTriangle />
        </TrianglePosition>
        <ReceiptPaperContents todos={todos} />
        <TrianglePosition y="-7px">
          <ReceiptPaperTriangle />
        </TrianglePosition>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bk};
`;

const TrianglePosition = styled.div`
  transform: translateY(${(props) => props.y});
`;

const Texture = styled.img`
  position: absolute;
  width: 100%;
  height: 98%;
  opacity: 0.6;
  mix-blend-mode: multiply;
  z-index: 0;
`;
