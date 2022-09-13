// AuthPage.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useAuthDispatch } from "store/authContext";
import { useLogin, useAuthCallback } from "hooks/useUser";
import Loading from "react-loading";
import * as S from "./AuthPage.styles";
import { ReactComponent as KakaoIcon } from "assets/kakao/KakaoTalk_logo.svg";
import { getUserToken } from "controllers/userController";

export function AuthPage() {
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState({});
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  // useEffect(() => {
  //   (async () => {
  //     setLoading(true); // => 로딩 시작은 memo로 빼자
  //     // Todo: 백엔드 연결 후 동작확인
  //     const response = await getUserToken(code);
  //     // const { accessToken, refreshToken } = {
  //     //   accessToken: "sample accessToken",
  //     //   refreshToken: "sample accessToken",
  //     // };
  //     setTokens({ response });
  //   })();
  // }, [code, dispatch]);

  // useEffect(() => {

  //   // 이 부분이 login 함수
  //   if (tokens) {
  //     const { accessToken, refreshToken } = { ...tokens };

  //     window.localStorage.setItem(
  //       "dr-tokens",
  //       JSON.stringify({ accessToken, refreshToken })
  //     );

  //     dispatch({
  //       type: "LOGIN",
  //       payload: { isLoggedIn: true, accessToken, refreshToken },
  //     });
  //   }
  //   setLoading(false);
  // }, [tokens]);

  // useEffect(() => {

  //   // 로직이 완료 되고 실행될 함수 => hook 빼자
  //   if (!loading) {
  //     navigate("/");
  //   }
  // }, [loading, navigate]);

  useEffect(() => {
    getUserToken(code)
      .then((res) => {
        setLoading(true);
        const { accessToken, refreshToken } = res;
        console.log("토큰값", accessToken, refreshToken);
        window.localStorage.setItem("dr-tokens", { accessToken, refreshToken });
        dispatch({
          type: "LOGIN",
          payload: { isLoggedIn: true, accessToken, refreshToken },
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
