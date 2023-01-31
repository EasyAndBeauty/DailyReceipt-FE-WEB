import axios from "axios";
import { client } from "./client";

/**
 *  카카오 로그인 요청 및 인가코드 발급용 URL
 */
export const KAKAO_LOGIN_URL = `${process.env.REACT_APP_KAKAO_BASE_URL}?client_id=${process.env.REACT_APP_KAUTH_JS_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAUTH_REDIRECT_URI}&response_type=code`;

/**
 * 백엔드에 인가코드 전달 후 JWT를 수신합니다.
 * @param {string} code 카카오톡 인가코드
 * @returns {Promise} accessCode refreshCode
 */
export const getUserToken = async (code) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/auth/kakao/callback?code=${code}`,
    );

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    return { accessToken, refreshToken };
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  return await client.get("/api/v1/user");
};

export const putUser = async (user) => {
  return await client.put("/api/v1/user", { nickname: user });
};
