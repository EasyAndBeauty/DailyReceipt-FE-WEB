import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";
import styled from "styled-components";

export function ReceiptPaper() {
  return (
    <>
      <Container>
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

const TrianglePosition = styled.div`
  transform: translateY(${(props) => props.y});
`;
