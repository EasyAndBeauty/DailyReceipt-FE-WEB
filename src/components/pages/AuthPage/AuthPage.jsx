// AuthPage.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthDispatch } from "store/authContext";
import Loading from "react-loading";
import * as S from "./AuthPage.styles";
import { ReactComponent as KakaoIcon } from "assets/kakao/KakaoTalk_logo.svg";
// import { getUserToken } from "controllers/userController";

export function AuthPage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      setLoading(true);
      // Todo: 백엔드 연결 후 동작확인
      // const { accessToken, refreshToken } = await getUserToken(code);
      const { accessToken, refreshToken } = {
        accessToken: "sample accessToken",
        refreshToken: "sample accessToken",
      };

      window.localStorage.setItem(
        "dr-tokens",
        JSON.stringify({ accessToken, refreshToken })
      );

      dispatch({
        type: "LOGIN",
        payload: { isLoggedIn: true, accessToken, refreshToken },
      });
      setLoading(false);
    })();
  }, [code, dispatch]);

  useEffect(() => {
    if (!loading) {
      navigate("/");
    }
  }, [loading, navigate]);

  return (
    <S.Container>
      <S.ImageContainer>
        <KakaoIcon />
      </S.ImageContainer>
      {loading && (
        <Loading type="spin" color="#fae100" height={144} width={144} />
      )}
    </S.Container>
  );
}
