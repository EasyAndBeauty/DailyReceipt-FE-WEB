import axios from "axios";

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
      `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/auth/kakao/callback?code=${code}`
    );

    if (response.ok) {
      // Todo: 백엔드 연결 후 body확인할 것
      const jwtToken = response.data;

      const accessToken = jwtToken.accessToken;
      const refreshToken = jwtToken.refreshToken;
      return { accessToken, refreshToken };
    }
  } catch (err) {
    // Todo: 에러페이지로 리다이렉트
    console.log(err);
  }
};
