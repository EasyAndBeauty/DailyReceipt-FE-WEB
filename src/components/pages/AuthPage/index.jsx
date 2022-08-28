import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "react-loading";
import * as S from "./style";

export function AuthPage() {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    fetch(`http://3.36.239.183:8080/auth/kakao/callback?code=${code}`)
      .then((res) => res.json())
      .then((json) => {
        const { id, email, nickname } = json;
        navigate("/", { state: { id, email, nickname } });
      });
  }, []);

  return (
    <S.Container>
      <h1>카카오 로그인중입니다...</h1>
      <Loading type="spin" color="#fae100" height={100} width={100} />
    </S.Container>
  );
}
