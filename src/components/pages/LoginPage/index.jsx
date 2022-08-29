import { BackBtn } from "components";
import KaKaoLogin from "assets/kakao/kakao_login_medium_wide.png";
import ReceiptImg from "assets/images/receipt_img.png";
import * as S from "./style";
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
  const onLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <S.Container>
      <S.Header>
        <BackBtn />
      </S.Header>
      <S.Img src={ReceiptImg} alt="receipt" />
      <S.H1>우리 하루 영수증 써주셍..(텍스트 들어갈곳.. 아님 이미지..?)</S.H1>
      <S.Btn onClick={onLogin}>
        <img src={KaKaoLogin} alt="카카오 로그인" />
      </S.Btn>
    </S.Container>
  );
}
