import Loading from "react-loading";
import { useLogin } from "hooks/useUser";
import { ReactComponent as KakaoIcon } from "assets/kakao/KakaoTalk_logo.svg";
import * as S from "./AuthPage.styles";

export function AuthPage() {
  const code = new URL(window.location.href).searchParams.get("code");
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
