// AuthPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "react-loading";
import { useAuthDispatch } from "store/authContext";
import { getUserToken } from "controllers/userController";
import { TOKEN_KEY } from "helper/constants";
import * as S from "./AuthPage.styles";
import { ReactComponent as KakaoIcon } from "assets/kakao/KakaoTalk_logo.svg";

export function AuthPage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    getUserToken(code)
      .then((res) => {
        setLoading(true);

        const { accessToken, refreshToken } = res;

        window.localStorage.setItem(
          TOKEN_KEY,
          JSON.stringify({ accessToken, refreshToken })
        );

        dispatch({
          type: "LOGIN",
          payload: { accessToken, refreshToken },
        });
      })
      .catch((error) => {
        console.log("로그인 에러", error);
      })
      .finally(() => {
        setLoading(false);
        navigate("/");
      });
  });

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
