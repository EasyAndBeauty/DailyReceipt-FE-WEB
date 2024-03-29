import axios from "axios";
import { TOKEN_KEY } from "helper/constants";

const clientInstance = axios.create();
clientInstance.defaults.baseURL = `${process.env.REACT_APP_DAILY_RECEIPT_API_BASE_URL}`;

// 리퀘스트 전에 실행. header에 인증정보를 부여함
const requestIntercept = (user) => {
  if (!user) return;
  clientInstance.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${user?.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
};

// cookie에 보존된 refresh_token을 보내서access_token을 취득함
const refreshToken = () => {
  const user = JSON.parse(window.localStorage.getItem(TOKEN_KEY));
  const refresh = async () => {
    requestIntercept(user);
    const response = await client.post("/re-issuance");

    return response.data.accessToken;
  };

  return refresh;
};

clientInstance.interceptors.request.use(
  (config) => {
    const user = window.localStorage.getItem(TOKEN_KEY);
    if (!user) return;
    const { accessToken } = JSON.parse(user);
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 리스폰스에서 인증에러가 난 경우 새 액세스 토큰을 받아와서 재시도
clientInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    // 403인증 에러(header에 access_token이 없음. 또는 access_token이 무효)
    if (error?.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      // 새로 access_token을 발행함
      const newAccessToken = await refreshToken();
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      // 다시 실행함
      return clientInstance(prevRequest);
    }
    // API요청 실패 시 에러 반환
    return Promise.reject(error);
  },
);

export const client = clientInstance;
