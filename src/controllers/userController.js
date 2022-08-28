import { client } from "./client";

export const getKakaoLogin = async () => {
  try {
    const response = await client.get(process.env.REACT_APP_KAKAO_BASE_URL, {
      params: {
        client_id: process.env.REACT_APP_KAUTH_JS_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_KAUTH_REDIRECT_URI,
        response_type: "code",
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getKakaoToken = async (code) => {
  const response = await client.get(
    `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/auth/kakao/callback?code=${code}`
  );

  return response.data;
};

export const getUserName = async (user_id) => {
  try {
    const response = await client.get(`/v1/user/${user_id}`);

    return response.data;
  } catch (err) {
    console.log("유저 정보 취득에 실패했습니다.");
    console.log(err);
  }
};
