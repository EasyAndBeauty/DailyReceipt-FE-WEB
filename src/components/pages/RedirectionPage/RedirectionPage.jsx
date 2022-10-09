import { BackBtn } from "components";
import ReceiptImg from "assets/images/receipt_img.png";
import * as S from "./RedirectionPage.styles";
import { useNavigate } from "react-router-dom";

/**
 * RedirectionPage
 *
 * 루트 페이지가 아닌 다른 url로 강제적으로 들어오면 리다이렉션 페이지로 이동합니다.
 *
 * @returns
 */

export function RedirectionPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Background>
        <S.Img src={ReceiptImg} alt="receipt" />
        <div></div>
      </S.Background>
      <S.H1>
        <div>Daily Receipt</div>
        <div>
          잘못된 접근입니다.
          <br />
          메인 페이지로 이동해주세요.
        </div>
      </S.H1>
      <S.Btn onClick={() => navigate("/")}>
        <div>
          <span>Go to the Main Page</span>
        </div>
      </S.Btn>
    </S.Container>
  );
}
