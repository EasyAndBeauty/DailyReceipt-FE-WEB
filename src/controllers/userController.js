import axios from "axios";
import { client } from "./client";

export const KAKAO_LOGIN_URL = `${process.env.REACT_APP_KAKAO_BASE_URL}?client_id=${process.env.REACT_APP_KAUTH_JS_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAUTH_REDIRECT_URI}&response_type=code`;

// Todo: 카카오 로그인용 axios 설정
export const getKakaoToken = async (code) => {
  const response = await axios.get(
    `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/auth/kakao/callback?code=${code}`
  );
  if (response.ok) {
    // Todo: 백엔드 연결 후 body확인할 것
    const jwtToken = response.data;
    return jwtToken;
  }
};

export const getUserInfo = async (user_id) => {
  try {
    const response = await client.get(`/v1/user/${user_id}`);

    return response.data;
  } catch (err) {
    console.log("유저 정보 취득에 실패했습니다.");
    console.log(err);
  }
};
