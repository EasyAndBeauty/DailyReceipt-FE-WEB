import React, { useEffect } from "react";
import axios from "axios";

export function AuthPage() {
  const code = new URL(window.location.href).searchParams.get("code");

  const getAccessToken = async () => {
    const response = await fetch(
      `http://3.36.239.183:8080/auth/kakao/callback?code=${code}`
    );
    const json = await response.json();
    console.log(json);
    return json.access_token;
  };

  useEffect(() => {
    fetch(`http://3.36.239.183:8080/auth/kakao/callback?code=${code}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  const main = async () => {
    if (code === null || code === "") {
      alert("카카오에서 코드를 받는데 실패했습니다");
      return;
    } else {
      await new Promise((resolve) => {
        getKakaoTokenHandler(resolve, code.toString());
      });
      // await loadUserInfo(accessToken)
    }
  };

  const getKakaoTokenHandler = async (resolve, code) => {
    const url = "/oauth2/authorization/kakao";
    await axios
      .get(url, { params: { code } })
      .then((res) => {
        console.log("res: ", res);
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error.response);
        resolve(null);
      });
  };

  return (
    <>
      <div onClick={() => getAccessToken()}>{code}</div>
      <h1>여긴 제 페이지</h1>
    </>
  );
}
