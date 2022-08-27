import { useLocation } from "react-router-dom";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { ReceiptPaper } from "components";

export function ReceiptPage() {
  return (
    <ReceiptContainer>
      <ReceiptPaper id={"receipt"} />
    </ReceiptContainer>
  );

  // html2canvas()
}

const ReceiptContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2d2d2d;
`;
