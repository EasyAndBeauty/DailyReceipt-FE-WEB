import axios from "axios";
import { useEffect } from "react";
import { useAuthDispatch, useAuthState } from "../store/authContext";

const client = axios.create({
  baseURL: `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredential: true,
});

// 리퀘스트 전에 실행. header에 인증정보를 부여함
const requestIntercept = (user) => {
  client.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${user.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export const AuthClient = () => {
  const refresh = RefreshToken();
  const user = useAuthState();

  useEffect(() => {
    requestIntercept(user);

    // 리스폰스에서 인증에러가 난 경우 새 액세스 토큰을 받아와서 재시도함
    const responseIntercept = client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        // 403인증 에러(header에 access_token이 없음. 또는 access_token이 무효)
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          // 새로 access_token을 발행함
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          // 다시 실행함
          return client(prevRequest);
        }
        // API요청 실패 시 에러 반환
        return Promise.reject(error);
      }
    );

    return () => {
      // 어느쪽도 아닐 경우 eject
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [user, refresh]);

  return client;
};

// cookie에 보존된 refresh_token을 보내서access_token을 취득함
const RefreshToken = () => {
  const user = useAuthState();
  const dispatch = useAuthDispatch();

  const refresh = async () => {
    requestIntercept(user);
    const response = await axios.post("/re-issuance");

    dispatch({
      type: "UPDATE",
      payload: { isLoggedIn: true, ...response.data },
    });

    return response.data.accessToken;
  };

  return refresh;
};

export default AuthClient;
