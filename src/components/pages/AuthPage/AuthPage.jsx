import Loading from "react-loading";
import { useLogin } from "hooks/useUser";
import { ReactComponent as KakaoIcon } from "assets/kakao/KakaoTalk_logo.svg";
import * as S from "./AuthPage.styles";

export function AuthPage() {
  // 카카오에서 받은 인가코드 취득
  const code = new URL(window.location.href).searchParams.get("code");
  // 로그인 처리
  useLogin(code);

  return (
    <S.Container>
      <S.ImageContainer>
        <KakaoIcon />
      </S.ImageContainer>
      <Loading type="spin" color="#fae100" height={144} width={144} />
    </S.Container>
  );
}
