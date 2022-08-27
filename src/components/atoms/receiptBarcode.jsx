import styled from "styled-components";
import { ReactComponent as BarcodeSvg } from "assets/barcode.svg";

export function ReceiptBarcode() {
  return (
    <BarcodeContainer>
      <Barcode>
        <BarcodeSvg />
      </Barcode>
      <Address>https://www.daily-receipt.com</Address>
    </BarcodeContainer>
  );
}

const BarcodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
  transform: translateY(8px);
`;

const Barcode = styled.div`
  opacity: 84%;
  transform: scale(110%);
`;

const Address = styled.div`
  margin-top: 8px;
`;
