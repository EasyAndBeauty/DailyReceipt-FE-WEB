import { useState } from "react";
import { BackBtn, AlertModal } from "components";
import ReceiptImg from "assets/images/receipt_img.png";
import * as S from "./LoginPage.styles";
import { KAKAO_LOGIN_URL } from "controllers/userController";

/**
 * LoginPage
 *
 * 독립적인 페이지에다가 요소가 많지 않아, 한곳에서 마무리를 했습니다
 * 나중에 kakao 로그인 리다이렉션 액션이 들어올곳 입니다.
 *
 * @returns
 */

export function LoginPage() {
  const [modalOn, setModalOn] = useState(false);
  const onLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
    // console.log("onLogin");
    // setModalOn(!modalOn);
  };

  return (
    <S.Container>
      <S.Background>
        <S.Img src={ReceiptImg} alt="receipt" />
        <div></div>
      </S.Background>
      <S.Header>
        <BackBtn />
      </S.Header>
      <S.H1>
        <div>Daily Receipt</div>
        <div>
          당신의 하루를
          <br />
          영수증에 담아드려요.
        </div>
      </S.H1>
      <S.Btn onClick={onLogin}>
        <div>
          Login with <span>Kakao</span>
        </div>
      </S.Btn>
      {modalOn && <AlertModal onClick={onLogin} />}
    </S.Container>
  );
}
