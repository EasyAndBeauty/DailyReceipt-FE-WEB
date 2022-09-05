import { ReactComponent as BarcodeSvg } from "assets/receiptPage/barcode.svg";
import * as S from "./ReceiptBarcode.styles";

/**
 * ReceiptBarcode
 *
 * 영수증 바코드입니다
 *
 * @returns
 */

export function ReceiptBarcode() {
  return (
    <S.BarcodeContainer>
      <S.Barcode>
        <BarcodeSvg />
      </S.Barcode>
      <S.Address>https://www.daily-receipt.com</S.Address>
    </S.BarcodeContainer>
  );
}
